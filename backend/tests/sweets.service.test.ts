import { SweetsService  } from "../src/modules/sweets/sweets.service";

describe("SweetsService", () => {
  it("should create a sweet", async () => {
    const service = new SweetsService();

    const sweet = await service.create({
      name: "Barfi",
      category: "Indian",
      price: 20,
      quantity: 50
    });

    expect(sweet.id).toBeDefined();
    expect(sweet.name).toBe("Barfi");
  });
});