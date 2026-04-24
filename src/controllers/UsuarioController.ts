import type { Request, Response } from "express";
import DataBase from "../config/database.ts"
import Usuario from "../models/Usuario.ts"

class UsuarioController {

    public async crear(req: Request, res: Response) {
        const { nombre, email } = req.body;

        const usuario = new Usuario(nombre, email);

        const db = DataBase.getInstance().getConnection();

        await db.query(
            "INSERT INTO usuarios(nombre, email) VALUES (?, ?)",
            [usuario.getNombre(), usuario.getEmail()]
        );

        res.json({ mensaje: "Usuario creado" });
    }

    public async listar(req: Request, res: Response) {
        const db = DataBase.getInstance().getConnection();

        const [rows] = await db.query("SELECT * FROM usuarios");

        res.json(rows);
    }

    public async actualizar(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre, email } = req.body;

        const db = DataBase.getInstance().getConnection();

        const [result]: any = await db.query(
            "UPDATE usuarios SET nombre = ?, email = ? WHERE id = ?",
            [nombre, email, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.json({ mensaje: "Usuario actualizado correctamente" });
    }

    public async eliminar(req: Request, res: Response) {
        const { id } = req.params;
        const db = DataBase.getInstance().getConnection();
        const [result]: any = await db.query(
            "DELETE FROM usuarios WHERE id = ?",
            [id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        res.json({ mensaje: "Usuario eliminado correctamente" });
    }

    public async obtenerPorId(req: Request, res: Response) {
        const { id } = req.params;

        const db = DataBase.getInstance().getConnection();

        const [rows]: any = await db.query(
            "SELECT * FROM usuarios WHERE id = ?",
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });
        }

        res.json(rows[0]);
    }
}

export default new UsuarioController