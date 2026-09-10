import { Router } from "express";
import {
  criarAdmin,
  criarAdotante,
} from "../controllers/userController";

import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

const router = Router();

router.post(
  "/admin",
  authMiddleware,
  adminMiddleware,
  criarAdmin
);

router.post(
  "/adotante",
  authMiddleware,
  adminMiddleware,
  criarAdotante
);

export default router;