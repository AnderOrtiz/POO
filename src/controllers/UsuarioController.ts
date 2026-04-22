import type { Request, Response } from "express";
import DataBase from "../config/database.ts"
import Usuario from "../models/Usuario.ts"

class UsuarioController {
    public async crear(req: Request, res: Response) {

        const { nombre, email } = req.body;
        const usuario = new Usuario(nombre, email)

        const db = DataBase.getInstance().getConnection();

        await db.query(
            "INSERT INTO usuarios(nombre,email) VALUES (?,?)",
            [usuario.getNombre, usuario.getEmail]
        );

        res.json({ mensaje: "Usuario creado" });
    }

    public async listar(req: Request, res: Response) {
        const db = DataBase.getInstance().getConnection();

        const [rows] = await db.query("SELECT * FROM usuarios");

        res.json(rows)
    }

}

export default new UsuarioController