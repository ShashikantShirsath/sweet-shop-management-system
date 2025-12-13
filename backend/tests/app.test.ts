import request from 'supertest';
import app from '../src/app';

describe("App bootstrap", () => {
    it("should start with 404 for unknown routes, ", async () => {
        const response = await request(app).get("/unknown");
        expect(response.status).toBe(404);
    });
});