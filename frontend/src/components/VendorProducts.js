import React, { useEffect,useState } from "react"
import useAxios from "../axios/useAxios"
const VendorProducts = () => {
  const api = useAxios()
  const [productData, setProductData] = useState([])
  const data = async () => {
    try {
      const response = await api.get(`/products`, {})
      console.log(response.data)
      setProductData(response.data)
      
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])
  return (
    <div>
      <div className="mx-28 mt-10">
        <h1 className="text-xl font-bold mb-4">PRODUCTS LIST</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  PRODUCT NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  PRICE
                </th>
              </tr>
            </thead>
            <tbody>
              {productData?.map((product,index)=>(
              <tr className=" border-b bg-gray-200 text-black">
                <td className="px-6 py-4">{index+1}</td>
                <td className="px-6 py-4">{product.product_name}</td>
                <td className="px-6 py-4">{product.price}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default VendorProducts
