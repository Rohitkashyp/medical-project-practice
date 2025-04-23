
import React, { useState,useEffect } from "react";
import {useNavigate,Link} from "react-router-dom"
import axios from "axios";

const Product = () => {
 
  const [products,setProducts] = useState([])
  const [isloading,setIsloading] = useState(true)

  const navigate = useNavigate()

  const fetchproducts = async() => {
    const res = await axios.get("https://medical-project-practice.onrender.com/products")
    setIsloading(false)
    setProducts(res.data)
  }

  useEffect(()=>{
    fetchproducts()
  },[])




  



  return (
    <>
    {
      isloading ? (
       <div className="flex justify-center items-center max-w-[1200px] mx-auto mt-6">
        <p className="text-2xl">Loading....</p>
       </div>
      ) : (
        <section id="products" className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p>{product.description}</p>
              <p className="font-bold">{product.price}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() =>{navigate('/order-place',{state:{productName:product.name}})}}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
  
       
      </section>
      )
    }
    </>
  );
};

export default Product;







// setOrder({ ...order, product: product.name })

