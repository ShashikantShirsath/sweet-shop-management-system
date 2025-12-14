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

export const listSweets = async (_req: Request, res: Response) => {
    const sweets = await sweetsService.list();
    return res.status(200).json(sweets);
};