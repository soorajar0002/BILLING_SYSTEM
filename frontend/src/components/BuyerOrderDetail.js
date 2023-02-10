import React, { useEffect, useState } from "react"
import useAxios from "../axios/useAxios"
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom"
const BuyerOrderDetail = () => {
  const { id } = useParams()
  const [items, setItems] = useState([])
  const date = items[0]?items[0].date.slice(0, 10).split("-").reverse().join("-"):null
  const firstname = items[0]?.first_name
  const lastname = items[0]?.last_name
  const total = items[0]?.total

  console.log(id)
  const api = useAxios()
  const data = async () => {
    try {
      const response = await api.post(`/order_items/`, {
        id: id,
      })
      console.log(response.data, "322")

      setItems(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    data()
  }, [])
  return (
    <div>
      
      <div className="mx-36 mt-14">
      <Link to="/buyer_home"><button type="button" class="focus:outline-none text-white bg-black  font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:focus:ring-yellow-900">BACK</button></Link>
        <h1 className="text-center font-bold text-xl mb-4">ORDER DETAILS</h1>
        <div className="flex justify-between mb-2">
        <h1 className="text-left font-semibold text-sm uppercase"> {firstname} {lastname}</h1>
        <h1 className=" font-semibold text-sm ">{date}</h1>
        </div>
     
       
       
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm  text-gray-500 text-center border">
            <thead class="text-xs text-gray-700 uppercase bg-gray-700  dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  NO
                </th>
                <th scope="col" class="px-6 py-3">
                 PRODUCT 
                </th>
                <th scope="col" class="px-6 py-3">
                 QTY
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item,index)=>(
              <tr class="bg-gray-200 border-b ">
              <td class="px-6 py-4">{index+1}</td>
                <td class="px-6 py-4">{item.name}</td>
                <td class="px-6 py-4">{item.quantity}</td>
                <td class="px-6 py-4">{item.price}</td>
                <td class="px-6 py-4">₹ {item.total_price}/-</td>
              </tr>
              ))}
              
            </tbody>
          </table>
          
        </div>
        <div className="mt-1 " >
          
          <h1 className="text-right font-bold p-2 bg-gray-200">GRAND TOTAL : ₹{total}/-</h1>
        </div>
      </div>
     
    </div>
  )
}

export default BuyerOrderDetail
