import { SweetsService } from "../src/modules/sweets/sweets.service";

describe("Purchase Flow", () => {
  it("should reduce sweet quantity after purchase", async () => {
    const service = new SweetsService();

    const sweet = await service.create({
      name: "Ladoo",
      category: "Indian",
      price: 10,
      quantity: 20
    });

    const updatedSweet = await service.purchase(sweet.id, 5);

    expect(updatedSweet.quantity).toBe(15);
  });

  it("should throw error if quantity is insufficient", async () => {
    const service = new SweetsService();

    const sweet = await service.create({
      name: "Jalebi",
      category: "Indian",
      price: 15,
      quantity: 3
    });

    await expect(
      service.purchase(sweet.id, 10)
    ).rejects.toThrow("Insufficient stock");
  });
});
