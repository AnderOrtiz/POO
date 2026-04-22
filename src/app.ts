import express from "express"
import router from "./routers/usuarioRouter.ts"

const app = express();

app.use(express.json());

app.use("/usuarios", router);

app.listen(3000, () => {
    console.log("El servidor está corriendo en puerto 3000");
})

app.get("/", (req, res) => {
    res.send("API funcionando 🚀");
});