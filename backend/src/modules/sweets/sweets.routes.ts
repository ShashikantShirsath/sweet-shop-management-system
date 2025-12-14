import { Router } from "express";
import { createSweet, purchaseSweet, listSweets } from "./sweets.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorization } from "../../middleware/admin.middleware";

const router = Router();

router.get("/", authenticate, listSweets);
router.post("/", authenticate, authorization, createSweet);
router.post("/:id/purchase", authenticate, purchaseSweet);

export default router;