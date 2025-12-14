import { Request, Response } from "express";
import { SweetsService } from "./sweets.service";

const sweetsService = new SweetsService();

export const createSweet = async (req: Request, res: Response) => {
    const sweet = await sweetsService.create(req.body);
    return res.status(201).json(sweet);
}