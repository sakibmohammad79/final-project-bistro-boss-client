import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hook/useAxiosSecure";

const imageHostingToken = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
  const {register,handleSubmit,formState: { errors },} = useForm();

  const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    fetch(imgHostingUrl, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
        console.log(imgResponse);
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name, price, category, recipe} = data;
            const newItem = {name, price: parseFloat(price), category, recipe, image: imgURL}
            console.log(newItem);
            axiosSecure.post('/menu', newItem)
            .then(data => {
                console.log('after posting new menu item', data.data);
            })
        }
    })
  };

  return (
    <div className="w-full px-12">
      <SectionTitle
        heading={"Whats new"}
        subHeading={"Add An Item"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-medium">Recipe Name*</span>
          </label>
          <input
            {...register("name", { required: true, maxLength: 80 })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="w-1/2">
          <label className="label">
            <span className="label-text font-medium">Category*</span>
          </label>
            <select defaultValue= 'Pick One'
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="w-1/2">
            <div className="form-control">
            <label className="label">
            <span className="label-text font-medium">Price*</span>
          </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
          </div>
        </div>
        <textarea
          {...register("recipe", { required: true })}
          className="textarea textarea-bordered w-full"
          placeholder="Recipe Details"
        ></textarea>
        <div>
          <label className="label">
            <span className="label-text font-medium">Item Image*</span>
          </label>
          <input
          {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input className="btn" type="submit" value="Add item" />
      </form>
    </div>
  );
};

export default AddItem;
