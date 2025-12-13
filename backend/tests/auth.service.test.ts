import { AuthService } from "../src/modules/auth/auth.service";

describe("AuthService", () => {
    it("should throw error if email already exists", async () => {
        const service  = new AuthService();

        await service.register("test@example.com", "password123");
        
        await expect(
            service.register("test@example.com", "password123")
        ).rejects.toThrow("Email already in use");
    });
});