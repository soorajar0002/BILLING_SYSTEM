import React from 'react'
import { Link } from 'react-router-dom';
import BuyerLogin from '../components/BuyerLogin';
import BuyerRegister from '../components/BuyerRegister';
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
  is_buyer:"",
}
const Buyer = () => {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center text-4xl font-bold mb-10">BUYER</h1>
    <div className="grid lg:grid-cols-4  ">
      <div className="lg:col-span-2   lg:border-4 lg:border-gray-100">
      <BuyerLogin/>
      </div>
    
      <div className="lg:col-span-2   lg:border-4 lg:border-gray-100">
        <BuyerRegister/>
      </div>
    </div>
    
  </div>
  )
}

export default Buyer