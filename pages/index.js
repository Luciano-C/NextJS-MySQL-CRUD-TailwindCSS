import React from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
//Se utiliza link para redireccionar para mostrar otra forma, también se podría usar el router
import { ProductCard } from "../components/ProductCard";

const HomePage = ({ products }) => {

  const renderProducts = () => {
    
    if (products.length === 0) {
      return <h1 className="text-center text-2xl font-bold">No products</h1>
    }
    return products.map(product => {
      return (
        <ProductCard key={product.id} product={product} />
      )
    })
  }


  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {renderProducts()}
      </div>

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