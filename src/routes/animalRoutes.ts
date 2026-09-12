import { Router } from "express";

import {
  criarAnimal,
  listarAnimais,
  buscarAnimal,
  atualizarAnimal,
  excluirAnimal,
} from "../controllers/animalController";

import { authMiddleware } from "../middlewares/authMiddleware";
import { adminMiddleware } from "../middlewares/adminMiddleware";

import upload from "../middlewares/uploadMiddleware";

const router = Router();



router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.array("fotos", 2),
  criarAnimal
);


router.get(
  "/",
  authMiddleware,
  listarAnimais
);



router.get(
  "/:id",
  authMiddleware,
  buscarAnimal
);


router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  upload.array("fotos", 2),
  atualizarAnimal
);



router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  excluirAnimal
);

export default router;