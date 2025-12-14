import request from 'supertest';
import app from '../src/app';

describe("GET Middleware", () => {
    it("should return 401 if token is missing", async () => {
        const response = await request(app).get("/api/sweets");

        expect(response.status).toBe(401);
        expect(response.body.message).toBe("Unauthorized");
    });
});