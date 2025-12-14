import { Request, Response } from "express";
import { SweetsService } from "./sweets.service";

const sweetsService = new SweetsService();

export const createSweet = async (req: Request, res: Response) => {
    const sweet = await sweetsService.create(req.body);
    return res.status(201).json(sweet);
}

export const purchaseSweet = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { quantity } = req.body;

    const sweet = await sweetsService.purchase(id, quantity);
    return res.status(200).json(sweet);
};

export const listSweets = async (req: Request, res: Response) => {
  const search =
    typeof req.query.search === "string" ? req.query.search : undefined;

  const category =
    typeof req.query.category === "string" ? req.query.category : undefined;

  const sweets = await sweetsService.list({ search, category });

  return res.status(200).json(sweets);
};
