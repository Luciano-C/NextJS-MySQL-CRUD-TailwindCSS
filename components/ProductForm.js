import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";



export const ProductForm = () => {

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0
    })

    // Se instancia objeto router de next
    const router = useRouter();
    console.log(router.query)


    // De e se toma target y de target se toma name, value => para no escribir e.target.name, e.target.value
    const handleChange = ({ target: { name, value } }) => {
        setProduct({ ...product, [name]: value })
    }

    useEffect(() => {

        const getProduct = async () => {
            const { data } = await axios.get("/api/products/" + router.query.id);
            console.log(data)
            setProduct({ name: data.name, description: data.description, price: data.price })
        }
        if (router.query?.id) {
            getProduct();
        }
    }, [])



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (router.query.id) {
            await axios.put("/api/products/" + router.query.id, product)
        } else {
            const res = await axios.post("/api/products", product)
            console.log(res)
        }
        router.push("/")

    }



    return (
        <div className="w-full max-w-xs">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="shadow border rounded py-2 px-3 text-gray-700"
                    value={product.name}
                />

                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    onChange={handleChange}
                    className="shadow border rounded py-2 px-3 text-gray-700"
                    value={product.price}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    name="description"
                    rows="2"
                    onChange={handleChange}
                    className="shadow border rounded py-2 px-3 text-gray-700"
                    value={product.description}
                >

                </textarea>

                <button
                    className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline font-bold text-white"
                >
                    {router.query.id ? "Update Product" : "Save Product"}
                </button>
            </form>
        </div>
    )
}

