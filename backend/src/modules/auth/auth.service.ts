import bcrypt from "bcrypt";
import { AuthRepository } from "./auth.repository";
import { randomUUID } from "crypto";

export class AuthService {
    private repository = new AuthRepository();

    async register(email: string, password: string) {
        const existingUser = await this.repository.findByEmail(email);

        if(existingUser) {
            throw new Error("Email already in use");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await this.repository.create({
            id: randomUUID(),
            email,
            password: hashedPassword
        });

        return {
            id:user.id,
            email: user.email
        };
    }
}