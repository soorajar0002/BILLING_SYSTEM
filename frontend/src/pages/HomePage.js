import React from "react"

import { Link } from 'react-router-dom';
const HomePage = () => {
 
  return (
    <div className="text-center ">
      
      <h1 className="text-center text-4xl font-bold mt-28 mr-2">SELECT THE USER</h1>
      <div className="flex justify-center mt-6">
        <Link to="/buyer">
         <button
          type="button"
          
          className="focus:outline-none  bg-yellow-400   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          BUYER
        </button></Link>
       <Link to="/vendor">
       <button
          type="button"
         
          className="focus:outline-none  bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          VENDOR
        </button></Link>
      
      </div>
      
    </div>
  )
}

export default HomePage
