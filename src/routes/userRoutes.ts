import { Router } from "express";

import {
  criarUsuario,
  listarUsuarios,
  buscarUsuario,
  atualizarUsuario,
  excluirUsuario,
} from "../controllers/userController";

import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  criarUsuario
);

router.get(
  "/",
  authMiddleware,
  adminMiddleware,
  listarUsuarios
);

router.get(
  "/:id",
  authMiddleware,
  adminMiddleware,
  buscarUsuario
);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  atualizarUsuario
);

router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  excluirUsuario
);

export default router;