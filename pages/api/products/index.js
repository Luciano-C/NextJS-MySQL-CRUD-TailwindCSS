import { pool } from "../../../config/db"


export default async function handler(req, res) {

    switch (req.method) {
        case "GET": 
            return await getProducts(req, res)
            
        case "POST":
            return await saveProduct(req, res)
    }


}

const getProducts = async(req, res) => {
    const [result] = await pool.query("SELECT * FROM product");
    console.log(result);
    return res.status(200).json(result);
}




const saveProduct = async(req, res) => {
    console.log("creating a product")
    console.log(req.body)

    const { name, description, price } = req.body;

    // [result] en vez de result, porque el resultado de la consulta es un arreglo. De esta manera se tiene acceso al objeto directamente.
    const [result] = await pool.query("INSERT INTO product SET ?", {
        name,
        description,
        price
    });

    return res.status(200).json({ name, price, description, id: result.insertId })
}




/* Es lo mismo que:
          pool.query("INSERT INTO product SET ?", {
              name: name,
              description: description,
              price: price
          }) */