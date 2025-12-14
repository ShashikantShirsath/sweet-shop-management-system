import { SweetsRepository } from "./sweets.repository";
import { CreateSweetInput, SweetFilters } from "./sweets.types";

export class SweetsService {
    private repository = new SweetsRepository();

    async create(data: CreateSweetInput) {
        return this.repository.create(data);
    }

    async purchase(sweetId: string, quantity: number) {
        const sweet = await this.repository.findById(sweetId);

        if (!sweet) {
            throw new Error("Sweet not found");
        }
        if (sweet.quantity < quantity) {
            throw new Error("Insufficient stock");
        }

        const updatedQuantity = sweet.quantity - quantity;
        return this.repository.updateQuantity(sweetId, updatedQuantity);
    }

    async list(filters: SweetFilters) {
        return this.repository.findAll(filters);
    }
}
