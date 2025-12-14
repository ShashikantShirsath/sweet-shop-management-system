import { prisma } from "../src/config/prisma";

beforeEach(async () => {
  await prisma.user.deleteMany();
  await prisma.sweet.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});
