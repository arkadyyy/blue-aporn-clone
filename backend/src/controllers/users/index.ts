import { type Response, type Request, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import { hashPassword, comparePassword } from "../../utils/encryption.js";
import { query, redisClient } from "../../db/connection.js";
import { SignupData } from "../../schemas/users.js";
import env from "../../config/env.js";

export async function googleSignUp(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const code = req.query.code as string;

  try {
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    });
    const tokenData = await tokenRes.json();

    if (!tokenRes.ok) {
      console.error("Error exchanging code:", tokenData);
      return res.status(400).json({ error: "Failed to exchange code" });
    }
    const userRes = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      }
    );
    const user = await userRes.json();
    console.log("Google user:", user);
    const { email, name, picture } = user;
    const splitedName = name.split(" ");
    const userSelector = async (email: string) =>
      await query(`SELECT * FROM users WHERE email = $1`, [email]);
    // check if user already exsists, if he does, just get the data we already got and redirect

    const { rows: exsistingUser } = await userSelector(email);
    if (exsistingUser.length !== 0) res.json({ exsistingUser });

    // make user in db
    await query(
      `INSERT INTO users (first_name,last_name,email,profile_pic) VALUES ($1,$2,$3,$4)`,
      [splitedName[0], splitedName[1], email, picture]
    );
    const { rows } = await query(
      `SELECT first_name,last_name,email,profile_pic,phone_number,meta FROM users WHERE email = $1`,
      [email]
    );
    // create jwt token
    const token = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: "7d" });
    // attach jwt token to httponly cookie

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days,
      sameSite: "lax",
    });

    res.redirect(process.env.FRONTEND_URL);
  } catch (error) {
    console.error("OAuth error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function signUp(req: Request, res: Response, next: NextFunction) {
  const { email, firstName, lastName, password, phoneNumber } = req.body;
  console.log("req.body : ", req.body);
  //2. check if phone exsists in db
  const { rows } = await query(`SELECT * FROM USERS WHERE phone_number = $1;`, [
    phoneNumber,
  ]);
  console.log("2");
  console.log("rows :", rows);
  if (rows.length !== 0) res.status(409).json({ msg: "User already exsists" });
  console.log("3");
  //1. take the password and hash it
  const hashedPassword = await hashPassword(password);
  //3. create otp
  const otp = Math.floor(100000 + Math.random() * 900000);
  console.log("OTP COPY FOR VERIFY STEP : ", otp);
  const hashedOtp = await hashPassword(String(otp));

  //5. store in memory (redis) userdata with hashed password and hashed otp
  // --> the next steps will be under different route
  const storedData = {
    email,
    firstName,
    lastName,
    phoneNumber,
    password: hashedPassword,
    otp: hashedOtp,
  };
  console.log("storedData : ", storedData);
  // generate id key for redis, then send this key to client
  const uuid = crypto.randomUUID();
  console.log("uuid : ", uuid);
  await redisClient.setEx(uuid, 300, JSON.stringify(storedData));
  //4. send it to phone - twilio
  console.log("555");
  res.json({ uuid });
}
type StoredData = SignupData & { otp: string };

export async function verifyOtp(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { otp, uuid } = req.body;

    // Get from Redis
    const raw = await redisClient.get(uuid);
    if (!raw) return res.status(400).json({ msg: "Invalid or expired UUID" });

    // Parse + type it
    const storedData: StoredData = JSON.parse(raw);

    // Validate OTP
    const isMatch = comparePassword(otp, storedData.otp);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid OTP" });
    }

    // Store user in DB
    await query(
      `INSERT INTO users (first_name, last_name, email, phone_number, password)
       VALUES ($1, $2, $3, $4, $5);`,
      [
        storedData.firstName,
        storedData.lastName,
        storedData.email,
        storedData.phoneNumber,
        storedData.password,
      ]
    );

    // You can delete Redis data if no longer needed
    await redisClient.del(uuid);

    res.status(201).json({ msg: "User created" });
  } catch (err) {
    next(err);
  }
}

export async function emailLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;
  // check if user exsists
  const { rows } = await query(`SELECT * FROM users WHERE email = $1`, [email]);
  if (rows.length === 0)
    res.status(400).json({ msg: `User with email ${email} not found` });
  const [user] = rows;
  // check if password is correct
  const passwordCheck = comparePassword(password, user.password);
  if (!passwordCheck) res.status(400).json({ msg: "Incorrect credentials" });
  // make jwt and atatch it to httponly cookie

  // return user data ro client
  res.status(200).json(user);
}
