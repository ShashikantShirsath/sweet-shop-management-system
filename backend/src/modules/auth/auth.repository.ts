import { prisma } from "../../config/prisma";

export class AuthRepository {

    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: { email }
        });
    }

    async create(data: {id: string; email: string; password: string}) {
        return prisma.user.create({
            data
        });
    }
}