import React from "react"
import { Link } from "react-router-dom"

import VendorLogin from "../components/VendorLogin"
import VendorRegister from "../components/VendorRegister"
const Vendor = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center text-4xl font-bold mb-10">VENDOR</h1>
      <div className="grid lg:grid-cols-4  ">
        <div className="lg:col-span-2  lg:border-4 lg:border-gray-100">
        <VendorLogin />
        </div>
      
        <div className="lg:col-span-2  lg:border-4 lg:border-gray-100">
          <VendorRegister/>
        </div>
      </div>
      
    </div>
  )
}

export default Vendor
