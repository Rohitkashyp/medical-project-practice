import { useState } from "react";
import { useLocation,Navigate, useNavigate } from "react-router-dom";


function Orderplace() {

const location = useLocation()
const navigate = useNavigate()


const [order, setOrder] = useState({ name: "", email: "", product: location.state?.productName || "", address: "" });


const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
 };

   const handleOrder = async (e) => {
    e.preventDefault();
  
  try {
    const response = await fetch("http://localhost:3000/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      if(response.ok){
        alert("order placed successfully")
        navigate("/")
      }else{
        alert("something went worng!")
      }
  } catch (error) {
    console.log(error)
    alert("plz order try again")
  }
  };

  return (
   <div>
 <form className="mt-10 text-center" onSubmit={handleOrder}>
<h3 className="text-xl font-bold mb-4">Place Your Order</h3>
<input
  type="text"
  name="name"
  placeholder="Your Name"
  className="border p-2 mb-4 w-1/2"
  onChange={handleChange}
  required
/>
<input
  type="email"
  name="email"
  placeholder="Your Email"
  className="border p-2 mb-4 w-1/2"
  onChange={handleChange}
  required
/>
<input
  type="text"
  name="product"
  className="border p-2 mb-4 w-1/2"
  readOnly
  value={order.product}
/>
<textarea
  name="address"
  placeholder="Your Address"
  className="border p-2 mb-4 w-1/2"
  onChange={handleChange}
  required
/>
<button type="submit" className="bg-green-500 px-4 py-2 text-white rounded">
  Submit Order
</button>
</form> 
   </div>
  )
}

export default Orderplace
