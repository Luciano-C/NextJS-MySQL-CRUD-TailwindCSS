import axios from "axios";
import React from "react";
import { Layout } from "../../components/Layout"
import { useRouter } from "next/router";


const ProductView = ({ product }) => {

    const router = useRouter();

    const handleDelete = async (id) => {
        console.log(id);
        // No es necesario escribir toda la dirección acá porque estamos en el front end
        await axios.delete("/api/products/" + id);
        router.push("/")
    }
    
    
    return (
        <Layout>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>

            <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-2" onClick={() => handleDelete(product.id)}>
                Delete
            </button>
        </Layout>

    )
}


export const getServerSideProps = async (context) => {

    const { data: product } = await axios.get("http://localhost:3000/api/products/" + context.query.id)

    return {
        props: {
            product
        }
    }
}









export default ProductView