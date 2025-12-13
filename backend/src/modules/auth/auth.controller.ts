import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        if(!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const user = await authService.register(email, password);
        return res.status(201).json(user);
    } catch (error:any) {
        return res.status(400).json({ message: error.message});
    }
}