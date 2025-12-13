import request from "supertest";
import app from "../src/app";

describe("POST /api/auth/register", () => {
    it("should return 400 if email or password is missing", async () => {
        const response = await request(app)
            .post("/api/auth/register")
            .send({});

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Email and password are required");
    });
})