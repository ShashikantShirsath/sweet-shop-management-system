import { prisma } from "../../config/prisma";

export class SweetsRepository {
    async create(data: {
        name: string;
        category: string;
        price: number;
        quantity: number;
    }) {
        return prisma.sweet.create({ data });
    }

    async findById(id: string) {
        return prisma.sweet.findUnique({
            where: { id }
        });
    }

    async updateQuantity(id: string, newQuantity: number) {
        return prisma.sweet.update({
            where: { id },
            data: { quantity: newQuantity }
        });
    }

    async findAll() {
        return prisma.sweet.findMany();
    }
}
