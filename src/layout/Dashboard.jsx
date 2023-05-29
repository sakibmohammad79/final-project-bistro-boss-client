import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import useCart from '../hook/useCart';


const Dashboard = () => {
  const [cart] = useCart();
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-[#D1A054]">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80">
      
      <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
      <li><NavLink to='/dashboard/conservation'><FaCalendarAlt></FaCalendarAlt>Conservations</NavLink></li>
      <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
      <li><NavLink to='/dashboard/mycart'>
      <div className="indicator">
            <span className="indicator-item badge badge-secondary">+{cart?.length}</span>
            <button className="btn btn-sm"><FaShoppingCart></FaShoppingCart></button>
        </div>My Cart</NavLink>
        </li>
      <div className="divider">OR</div>
      <li><NavLink to='/'><FaHome/>Home</NavLink></li>
      <li><NavLink to="/menu">Menu</NavLink></li>
      <li><NavLink to="/order/salad">Food Order</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;