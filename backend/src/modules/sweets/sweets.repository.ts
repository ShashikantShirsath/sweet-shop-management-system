import { prisma } from "../../config/prisma";
import { CreateSweetInput } from "./sweets.types";

export class SweetsRepository {
  async create(data: CreateSweetInput) {
    return prisma.sweet.create({ data });
  }

  async findAll() {
    return prisma.sweet.findMany();
  }
}
