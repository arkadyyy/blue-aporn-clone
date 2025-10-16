import { type Response, type Request, type NextFunction } from "express";

export function getAllUsers(req: Request, res: Response, next: NextFunction) {
  res.send("jaja");
}
