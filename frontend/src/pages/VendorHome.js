import React from 'react'
import { Link } from 'react-router-dom';
import VendorProducts from '../components/VendorProducts'

const VendorHome = () => {
  return (
    <div>
      <div className='mt-20 flex justify-between mx-24'>
      <Link to="/vendor_add_product"><button type="button" class="focus:outline-none text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">ADD PRODUCT</button></Link>
      <Link to="/vendor_create_bill"><button type="button" class="focus:outline-none text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">NEW BILL</button></Link>
      </div>
      <VendorProducts/>
    </div>
  )
}

export default VendorHome