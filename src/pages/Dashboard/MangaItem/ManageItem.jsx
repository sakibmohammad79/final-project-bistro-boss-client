import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import UseMenu from '../../../hook/UseMenu';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const [menu, , refetch] = UseMenu();
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
            
            axiosSecure.delete(`/menu/${item._id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.deletedCount > 0){
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
        <div className='w-full px-12'>
            <SectionTitle heading={'Hurry UP'} subHeading={'Manage Item'}></SectionTitle>
            <div class="overflow-x-auto">
  <table class="table">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <th>#</th>
        <th>Item</th>
        <th>Category</th>
        <th>Price</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        menu.map((item, index) => <tr key={item._id}>
            <th>
              {index + 1}
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {item.name}
            </td>
            <td>{item.category}</td>
            <td className='text-right'>${item.price}</td>
            <td>
              <button class="btn btn-ghost btn-xs">details</button>
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

export default ManageItem;