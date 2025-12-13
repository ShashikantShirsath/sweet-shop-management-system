import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    return res.status(201).json({ id: "temp-id", email: email})
}