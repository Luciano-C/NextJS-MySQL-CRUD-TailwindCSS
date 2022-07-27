import React from "react";
import { ProductForm } from "../components/ProductForm";
import axios from "axios";

const HomePage = ({ products }) => {
  console.log(products)
  return (
    <div>
      <ProductForm />

      {products.map(product => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        )
      })}
    </div>
  )
}

//Función especial de NextJS que se ejecuta antes de renderizar
export const getServerSideProps = async (context) => {
  // {data: products} destructura, obtiene solo data y lo renombra a products
  const { data: products } = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      products
    }
  }
}

export default HomePage