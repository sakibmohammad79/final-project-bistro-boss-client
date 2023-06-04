import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleMakeAdmin = (user) => {
    fetch(`https://bistro-boss-server-liart.vercel.app/users/admin/${user._id}`, {
        method: "PATCH"
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name, 'is Admin Now!'}`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  const handleDelete = (user) => {

  }
  return (
    <div className="w-[90%] mx-auto">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h3 className="text-3xl text-center my-4 font-semibold ">Total Users: {users.length}</h3>
      <div className="overflow-x-auto ">
  <table className="table table-zebra w-full">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{ user.role === 'admin' ? 'Admin' :
                    <button onClick={()=>handleMakeAdmin(user)}  className="btn btn-ghost btn-sm text-white bg-orange-500"><FaUserShield/></button>
                    }</td>
                <td>  <button onClick={()=> handleDelete(user)} className="btn btn-ghost btn-sm text-white bg-red-500"><FaTrashAlt/></button></td>
              </tr>)
        }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllUsers;
