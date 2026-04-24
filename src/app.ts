import express from "express"
import router from "./routers/usuarioRouter.ts"
import UsuarioController from "./controllers/UsuarioController.ts";

const app = express();

app.use(express.json());

app.use("/usuarios", router);

app.listen(3000, () => {
    console.log("El servidor está corriendo en puerto 3000");
})

router.post("/", UsuarioController.crear);
router.get("/", UsuarioController.listar);
router.get("/:id", UsuarioController.obtenerPorId);
router.put("/:id", UsuarioController.actualizar);
router.delete("/:id", UsuarioController.eliminar);

export default router;