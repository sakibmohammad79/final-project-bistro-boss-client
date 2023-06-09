import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hook/useCart";
import useAdmin from "../../../hook/useAdmin";

const Navbar = () => {
  const [isAdmin] = useAdmin();
  const { user, logOutUser } = useContext(AuthContext);
  const [cart] = useCart();
  //console.log(cart.length);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/order/salad">Food Order</Link></li>
      <li><Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link></li>
      <li><Link to="/dashboard/mycart">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">+{cart?.length}</span>
            <button className="btn btn-sm"><FaShoppingCart></FaShoppingCart></button>
          </div>
        </Link></li>
      {user ? (
        <button onClick={handleLogOut} className="btn btn-ghost">
          SignOut
        </button>
      ) : (
        <li><Link to="/login">Login</Link></li>
      )}
    </>
  );
  return (
    <div className="navbar max-w-6xl text-white font-bold fixed z-10 bg-black bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <span className="text-white">{user?.displayName}</span>
        <a className="btn text-white border-none bg-orange-500">Get started</a>
      </div>
    </div>
  );
};

export default Navbar;
