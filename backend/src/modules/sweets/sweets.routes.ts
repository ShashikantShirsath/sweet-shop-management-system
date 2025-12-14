import { Router } from "express";
import { createSweet, purchaseSweet, listSweets, updateSweet, deleteSweet } from "./sweets.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorization } from "../../middleware/admin.middleware";

const router = Router();

router.get("/", authenticate, listSweets);
router.post("/", authenticate, authorization, createSweet);
router.post("/:id/purchase", authenticate, purchaseSweet);
router.put("/:id", authenticate, authorization, updateSweet);
router.delete("/:id", authenticate, authorization, deleteSweet);

export default router;