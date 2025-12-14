import { SweetsRepository } from "./sweets.repository";
import { CreateSweetInput } from "./sweets.types";

export class SweetsService {
  private repository = new SweetsRepository();

  async create(data: CreateSweetInput) {
    return this.repository.create(data);
  }
}
