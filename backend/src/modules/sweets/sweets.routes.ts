import { Router } from "express";
import { createSweet } from "./sweets.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorization } from "../../middleware/admin.middleware";

const router = Router();

router.get("/", authenticate, (req, res) => {
  res.json([]);
});

router.post("/", authenticate, authorization, createSweet);

export default router;