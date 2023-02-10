import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const VendorRegister = () => {
const [first_name, createFirstName] = useState('')
const [email, createEmail] = useState('')
const [last_name, createLastName] = useState('')
const [phone_number, createPhoneNumber] = useState('')
const [password, createPassword] = useState('')
const navigate = useNavigate();
const onSubmit = async (e) => {
  e.preventDefault()
  const post = { 
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone_number: phone_number,
    password: password,
    is_buyer: false
   }
  try {
    const res = await axios.post('http://127.0.0.1:8000/api/register/', post)
    console.log(res.status)
    if (res.status==201){
      createFirstName("")
      createLastName("")
      createEmail("")
      createPassword("")
      createPhoneNumber("")
      alert('Registed Successfully')
      
    }
  } 
  
  catch (e) {
    alert(e)
  }
}
  return (
    <div>
      <div>
       
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4 ">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
              <div className="w-full p-6 m-auto bg-white border rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-black ">
                  CREATE ACCOUNT
                </h1>
                <form className="mt-6" onSubmit={onSubmit}>
                  <div className="mb-2">
                    <label
                     
                      className="block text-sm font-semibold text-gray-800"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        createFirstName(event.target.value)
                      }}
                      value={first_name}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                    
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        createLastName(event.target.value)
                      }}
                      value={last_name}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                     
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        createEmail(event.target.value)
                      }}
                      value={email}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                    
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        createPhoneNumber(event.target.value)
                      }}
                      value={phone_number}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                     
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(event) => {
                        createPassword(event.target.value)
                      }}
                      value={password}
                    />
                  </div>

                  <div className="mt-6">
                    <button 
                    type='submit'
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                      Register
                    </button>
                  </div>
                </form>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorRegister