import React, { useState } from "react"
import axios from "axios"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from "../redux/reducers/userSlice";
const VendorLogin = () => {
  const [email, createEmail] = useState("")
  const [password, createPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault()
   
    try {
      const res = await axios.post("http://127.0.0.1:8000/api/token/", {email: email,
      password: password})
      console.log("222222")
      if ( res.data.is_vendor){
        console.log(res.data,"HERE")
        dispatch(setToken(res.data))
        navigate('/vendor_home');
       
      }
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div>
      <div className="grid grid-cols-6 gap-4 ">
        <div className="col-start-2 col-span-4 ">
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white border rounded-md shadow-md lg:max-w-xl">
              <h1 className="text-3xl font-semibold text-center text-black ">
                LOGIN
              </h1>
              <form className="mt-6" onSubmit={onSubmit}>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
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
                  <label className="block text-sm font-semibold text-gray-800">
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
                    type="submit"
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transm bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorLogin
