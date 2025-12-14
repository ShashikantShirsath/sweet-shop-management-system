import request from 'supertest';
import app from '../src/app';

describe("POST /api/auth/login", () => {
    it("should return 401 for invalid credentials", async () => {
        const response = await request(app)
        .post("/api/auth/login")
        .send({email: "invalid@test.com", password: "wrongpassword"});

        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Invalid credentials");
    });
});