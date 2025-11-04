import bcrypt from "bcryptjs";
const saltRounds = 10;

export async function hashPassword(plainPassword: string) {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error);
    throw error;
  }
}
export async function comparePassword(
  plainPassword: string,
  hashedPassword: string
) {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error("Error comparing password:", error);
    throw error;
  }
}
