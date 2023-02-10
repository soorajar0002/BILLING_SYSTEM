import React, { useEffect, useState } from "react"
import useAxios from "../axios/useAxios"
import { Link } from 'react-router-dom';
const BuyerBillTable = () => {
  const [orders, setOrders] = useState([])
  const api = useAxios()
  console.log(orders)
  const data = async () => {
    try {
      const response = await api.get(`/order_details/`, {})
      console.log(response.data, "322")
      setOrders(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])
  return (
    <div>
      <div className="mx-28 mt-36">
      <Link to="/"><button type="button" className="focus:outline-none  text-white bg-black  font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:focus:ring-yellow-900">LOGOUT</button></Link>
        <h1 className="text-xl font-bold mb-4">BILLS HISTORY</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  ORDER ID
                </th>
                <th scope="col" className="px-6 py-3">
                  VENDER
                </th>
                <th scope="col" className="px-6 py-3">
                  DATE
                </th>
                <th scope="col" className="px-6 py-3">
                  ORDER TOTAL
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr className=" border-b bg-gray-300 text-black text-center">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">
                    {order.vendor_first} {order.vendor_last}
                  </td>
                  <td className="px-6 py-4">
                    {order.created_at
                      .slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
                  </td>
                  <td className="px-6 py-4">
                  ₹ {order.order_total} 
                  </td>
                 <Link to={`/buyer_order_details/${order.id}`}> <td className="px-6 py-4 font-bold">
                    
                      VIEW
                    
                  </td></Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BuyerBillTable
