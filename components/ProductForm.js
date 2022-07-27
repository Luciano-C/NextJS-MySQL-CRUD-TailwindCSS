import React from "react";
import axios from "axios";

export const ProductForm = () => {
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await axios.post("/api/products", {
            name: "product 1",
            description: "some product",
            price: 10000
        })
        console.log(res)

    }
    
    return (
        <div className="bg-gray-300">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name"/>

                <label htmlFor="price">Price:</label>
                <input type="text" name="price" id="price"/>

                <label htmlFor="description">Description:</label>
                <textarea name="description" rows="2"></textarea>

                <button>Save Product</button>
            </form>
        </div>
    )
}

