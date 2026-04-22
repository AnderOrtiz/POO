import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController.ts";

const router = Router();

router.post("/", UsuarioController.crear);
router.post("/", UsuarioController.listar);

export default router;