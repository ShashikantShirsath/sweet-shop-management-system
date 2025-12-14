import request from "supertest";
import app from "../src/app";
import { prisma } from "../src/config/prisma";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "shashikantshirsath2439434";

describe("POST /api/sweets", () => {
    beforeEach(async () => {
        await prisma.sweet.deleteMany();
    })

    it("should allow admin to create a sweet", async () => {
        const adminToken = jwt.sign({
            userId: "admin-id",
            role: "ADMIN",
        }, JWT_SECRET);

        const response = await request(app)
            .post("/api/sweets")
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                name: "Ladoo",
                category: "Indian",
                price: 10,
                quantity: 100
            });

        expect(response.status).toBe(201);
        expect(response.body.name).toBe("Ladoo");
    });
});