import { pool } from "../../../config/db";

export default async function handler(req, res) {

    switch (req.method) {
        case "GET":
            return await getProduct(req, res);
        case "DELETE":
            return await deleteProduct(req, res);
        case "PUT":
            return await updateProduct(req, res);
        default:
            break

    }
}



const getProduct = async (req, res) => {
    const { id } = req.query;
    const [result] = await pool.query("SELECT * FROM product WHERE id = ?", [id]);
    // Result es un arreglo, con 1 objeto. Por lo que se devolverá al cliente result[0]
    console.log(result);
    return res.status(200).json(result[0]);
}

const deleteProduct = async (req, res) => {
    const { id } = req.query;
    const result = await pool.query("DELETE FROM product WHERE id = ?", [id]);
    // Respuesta 204 no retorna un objecto, por lo que acepta un json vacío.
    return res.status(204).json();
}

const updateProduct = async (req, res) => {
    const { id } = req.query;
    const result = await pool.query("UPDATE product SET ? WHERE id = ?", [req.body, id]);
    return res.status(204).json();
}




