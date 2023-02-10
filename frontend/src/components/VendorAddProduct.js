import React, { useEffect,useState } from "react"
import useAxios from "../axios/useAxios"
const VendorAddProduct = () => {
  const api = useAxios()
  const [product_name, createProductName] = useState("")
  const [price, createPrice] = useState("")
  console.log(product_name,price)
  const data = async () => {
    try {
      const response = await api.post(`/products/`, {
        product_name:product_name,
        price:price,
      })
      console.log(response.data)
      
      
    } catch (err) {
      console.log(err)
    }
  }
 
  return (
    <div>
      <div class="grid grid-cols-6 gap-4 mt-36 ">
        <div class="col-start-3 col-span-2 bg-gray-100 p-4">
          <h1 className="text-center text-xl font-bold">ADD PRODUCT</h1>
          <form className="mt-6" onSubmit={data}>
        <div className="mb-2">
                  <label
                  
                    className="block text-sm font-semibold text-gray-800"
                  >
                   Product
                  </label>
                  <input
                    type="text"
                    name="product_name"
                    onChange={(event) => {
                      createProductName(event.target.value)
                    }}
                    value={product_name}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mb-2">
                  <label
                  
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    onChange={(event) => {
                      createPrice(event.target.value)
                    }}
                    value={price}
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    ADD
                  </button>
                </div>
                </form>
                
        </div>
      </div>
    </div>
  )
}

export default VendorAddProduct
