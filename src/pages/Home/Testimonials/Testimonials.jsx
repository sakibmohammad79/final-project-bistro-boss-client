import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setreviews] = useState([]);
  //console.log(reviews);
  useEffect(() => {
    fetch("https://bistro-boss-server-liart.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);
  return (
    <div className="mb-16">
      <SectionTitle
        heading={"What Our Client Say"}
        subHeading={"testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="my-16 mx-24 text-center space-y-2 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={reviews.rating}
                readOnly
              />

              <p>{review.details}</p>
              <h3 className="text-yellow-500 text-2xl">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
