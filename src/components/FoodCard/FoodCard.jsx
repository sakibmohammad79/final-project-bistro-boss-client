import React from "react";

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
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
        <button className="btn bg-slate-100 border-orange-500 text-orange-500 btn-outline border-0 border-b-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
