import React from "react";
import { Helmet } from "react-helmet";
import useCart from "../../../hook/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | MyCart</title>
      </Helmet>
      <div>
        <h2 className="text-3xl font-bold uppercase">Total Item: {cart.length}</h2>
        <h2 className="text-3xl font-bold uppercase">Total Price: ${totalPrice}</h2>
        <button className="btn btn-sm btn-warning">Pay</button>
      </div>
    </div>
  );
};

export default MyCart;
