import React, { useEffect, useState } from "react"
import useAxios from "../axios/useAxios"
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
const VendorCreateBill = () => {
  const api = useAxios()
  const [product_name, setProductName] = useState("")
  const [buyer_name, setBuyerName] = useState("")
  console.log(buyer_name)
  const [quantity, setQuantity] = useState("")
  const [users, setUsers] = useState([])
  const [cart, setCart] = useState([])
  const [grand_total, setGrandTotal] = useState("")
  console.log(grand_total, "222222")
  console.log(cart, "CART")
  const products = useSelector((state) => state.token.products.products)
  const navigate = useNavigate();
  const Calculate = async()=>{
    let total = 0
    cart.map((item) => {
      total += item.quantity * item.prod[0].price
      
    })
    console.log(total,"cartsss",)
    setGrandTotal(total)
  }
  const onSubmit = async (e) => {
    e.preventDefault()
    
    const prod = products.filter(
      (product) => product.product_name === product_name
    )
    const cartItems = {
      prod,
      quantity: quantity,
    }
    setCart([...cart, cartItems])
  
  
   
  }
  const addBill = async () => {
    try {
      const response = await api.post(`/vendor_billing_system/`,
        {
          cart:cart,
          grand_total:grand_total,
          buyer_name:buyer_name,
          
        }
      )
     
      if (response.status==201){
        navigate('/vendor_home');
      }
      
    } catch (err) {
      console.log(err)
    }
  }
  const data = async () => {
    try {
      const response = await api.get(`/vendor_billing_system/`, {})
      console.log(response.data, "322")
      setUsers(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
    Calculate()
  }, [])
  return (
    <div>
      <h1 className="text-center text-xl font-bold mt-6">BILLING SYSTEM</h1>
      <div className="flex justify-between">
        <div className="relative w-full lg:max-w-sm ml-28 mt-10">
          <select className=" p-1 text-gray-700 bg-white border font-semibold rounded-md shadow-sm outline-none appearance-none uppercase"
           onChange={(event) => {
            setBuyerName(event.target.value)
          }}
          value={buyer_name}>
            <option>SELECT THE BUYER</option>
            {users?.map((user) => (
              <option>{user.username}</option>
            ))}
          </select>
        </div>
        <div></div>
      </div>
      <div className="mx-28 mt-4 ">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm  text-gray-500 text-center">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  NO
                </th>
                <th scope="col" className="px-6 py-3">
                  PRODUCT
                </th>
                <th scope="col" className="px-6 py-3">
                  QTY
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cart_item, index) => (
                <tr className=" border-b bg-gray-100 text-black">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    {cart_item.prod[0].product_name}
                  </td>
                  <td className="px-6 py-4">{cart_item.quantity}</td>
                  <td className="px-6 py-4">{cart_item.prod[0].price}</td>
                  <td className="px-6 py-4">
                    {cart_item.quantity * cart_item.prod[0].price} /-
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {grand_total ? (
            <h1 className="text-sm font-bold text-right mt-2">
              GRAND TOTAL : ₹ {grand_total} /-
            </h1>
          ) : (
            ""
          )}
        </div>
        <h1 className="mt-6 text-center font-bold ">ADD PRODUCT</h1>
        <form className="mt-6" onSubmit={onSubmit}>
          <div className="flex justify-evenly rounded bg-gray-100">
            <div className="relative  lg:max-w-sm  mt-10">
              <select
                className=" text-sm p-1 text-gray-700 bg-gray-50 border font-semibold rounded-md shadow-sm outline-none appearance-none uppercase"
                onChange={(event) => {
                  setProductName(event.target.value)
                }}
                value={product_name}
              >
                <option>SELECT PRODUCT</option>
                {products?.map((product) => (
                  <option>{product.product_name}</option>
                ))}
              </select>
            </div>
            <div className="mt-8">
              <label
                for="small-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <input
                type="text"
                id="small-input"
                className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs pl-2"
                placeholder="ENTER THE QTY"
                onChange={(event) => {
                  setQuantity(event.target.value)
                }}
                value={quantity}
              />
            </div>
            <button
              type="submit"
              onClick={ Calculate}
              className="focus:outline-none text-white bg-black font-medium  text-sm my-10 p-1 px-4 rounded"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-10">
        <button
          type="button"
          onClick={addBill}
          className="focus:outline-none text-white bg-black  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  "
        >
          CREATE
        </button>
      </div>
    </div>
  )
}

export default VendorCreateBill
