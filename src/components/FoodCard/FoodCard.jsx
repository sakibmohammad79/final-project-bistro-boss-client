import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hook/useCart";

const FoodCard = ({item}) => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  const [, refetch] = useCart();
  const location = useLocation();
    const {name, image, price, recipe, _id} = item;

    const handleAddToCart = item => {
      console.log(item);
      if(user && user?.email){
        const cartItem = {orderItemId: _id, name, price, image, email: user.email}
        fetch('http://localhost:5000/carts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Data Is Inserted!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else {
        Swal.fire({
          title: 'Please login to add to cart?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}});
          }
        })
      }
    }
  return (
    <div className="card w-92 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className="absolute right-0 mr-12 mt-12 px-2 font-bold rounded text-white bg-slate-900">{'$'+price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="font-semibold">{recipe}</p>
        <div className="card-actions">
        <button onClick={()=> handleAddToCart(item)} className="btn bg-slate-100 border-orange-500 text-orange-500 btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
