import React from "react";
import { Helmet } from "react-helmet";
import useCart from "../../../hook/useCart";
import { FaBeer, FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";


const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  

  const handleDelete = (item) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE'
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.deletedCount>0){
            refetch();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
  }
  return (
    <div className="py-16">
      <Helmet>
        <title>Bistro Boss | MyCart</title>
      </Helmet>
      <div className="flex h-[60px] justify-evenly items-center ">
        <h2 className="text-3xl font-bold uppercase">
          Total Item: {cart.length}{" "}
        </h2>
        <h2 className="text-3xl font-bold uppercase">
          Total Price: ${totalPrice}
        </h2>
        <button className="btn btn-sm btn-warning">Pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Food Image</th>
              <th>Food Item</th>
              <th>Price</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => 
               <tr key={item._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td className="text-end">
                  {item.price}
                </td>
                <td>
                  <button onClick={()=> handleDelete(item)} className="btn btn-ghost btn-sm text-white bg-red-500"><FaTrashAlt/></button>
                </td>
              </tr> )
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
