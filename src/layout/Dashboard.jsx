import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useCart from '../hook/useCart';


const Dashboard = () => {
  const [cart] = useCart();
  //TODO: data load from the server to have dynamic admin based on data.
  const isAdmin = true;
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
      
      {
        isAdmin ? 
        <div className='font-bold'>
        <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
      <li><NavLink to='/dashboard/conservation'><FaUtensils></FaUtensils>Add Item</NavLink></li>
      <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Manage Items</NavLink></li>
      <li><NavLink to='/dashboard/history'><FaBook></FaBook>Manage Bookings</NavLink></li>
      <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>All User</NavLink></li>
      
        </div> :
        <div className='font-bold'>
        <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
      <li><NavLink to='/dashboard/conservation'><FaCalendarAlt></FaCalendarAlt>Conservations</NavLink></li>
      <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
      <li><NavLink to='/dashboard/mycart'>
      <div className="indicator">
            <span className="indicator-item badge badge-secondary">+{cart?.length}</span>
            <button className="btn btn-sm"><FaShoppingCart></FaShoppingCart></button>
        </div>My Cart</NavLink>
        </li>
        </div>
      }
      
      <div className="divider">OR</div>
      <li className='font-bold'><NavLink to='/'><FaHome/>Home</NavLink></li>
      <li className='font-bold'><NavLink to="/menu">Menu</NavLink></li>
      <li className='font-bold'><NavLink to="/order/salad">Food Order</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;