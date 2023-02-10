import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Vendor from './pages/Vendor'
import Buyer from './pages/Buyer'
import BuyerHome from './pages/BuyerHome';
import VendorHome from './pages/VendorHome';
import VendorAddProductPage from './pages/VendorAddProductPage';
import VendorCreateBillPage from './pages/VendorCreateBillPage';
import BuyerOrderDetailPage from './pages/BuyerOrderDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage /> }/>
        <Route path="/vendor" element={<Vendor/>}/>
        <Route path="/buyer" element={<Buyer/> }/>
        <Route path="/buyer_home" element={<BuyerHome/>}/>
        <Route path="/vendor_home" element={<VendorHome/>}/>
        <Route path="/vendor_add_product" element={<VendorAddProductPage/>}/>
        <Route path="/vendor_create_bill" element={<VendorCreateBillPage/>}/>
        <Route path="/buyer_order_details/:id" element={<BuyerOrderDetailPage/>}/>
        
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
