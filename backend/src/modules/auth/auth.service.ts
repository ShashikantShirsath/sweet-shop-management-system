import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRepository } from "./auth.repository";
import { randomUUID } from "crypto";

const JWT_SECRET = process.env.JWT_SECRET || "shashikantshirsath2439434";

export class AuthService {
    private repository = new AuthRepository();

    async register(email: string, password: string) {
        const existingUser = await this.repository.findByEmail(email);

        if (existingUser) {
            throw new Error("Email already in use");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.repository.create({
            id: randomUUID(),
            email,
            password: hashedPassword
        });

        return {
            id: user.id,
            email: user.email
        };
    }

    async login(email: string, password: string) {
        const user = await this.repository.findByEmail(email);

        if (!user) {
            throw new Error("Invalid credentials");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        return jwt.sign(
            { userId: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        );
    }
}