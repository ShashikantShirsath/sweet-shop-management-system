import { AuthService } from "../src/modules/auth/auth.service";

describe("AuthService - login", () => {
  it("should return token for valid credentials", async () => {
    const service = new AuthService();

    await service.register("user@test.com", "password123");
    const token = await service.login("user@test.com", "password123");

    expect(token).toBeDefined();
  });
});
