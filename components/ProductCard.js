import React from 'react';
import Link from "next/link";

export const ProductCard = ({ product }) => {
    return (
        <Link key={product.id} href={`/products/${product.id}`}>
            <a>
                <div className="border border-gray-200 shadow-md p-6">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </div>
            </a>
        </Link>
    )
}
