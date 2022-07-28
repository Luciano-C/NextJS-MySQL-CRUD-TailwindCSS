import React from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
//Se utiliza link para redireccionar para mostrar otra forma, también se podría usar el router
import Link from "next/link";

const HomePage = ({ products }) => {
  return (
    <Layout>

      {products.map(product => {
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
      })}
    </Layout>
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