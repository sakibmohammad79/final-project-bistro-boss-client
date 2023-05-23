import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
      heading={'From 11.00am to 10.00pm'}
      subHeading={'Order Online'}>
        
      </SectionTitle>
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <p className="text-center  -mt-24 text-white uppercase text-4xl">
          salads
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <p className="text-center  -mt-24 text-white uppercase text-4xl">
          pizzas
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <p className="text-center -mt-24  text-white uppercase text-4xl">
          soups
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <p className="text-center text-white  -mt-24 uppercase text-4xl">
          desserts
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <p className="text-center  -mt-24 text-white  uppercase text-4xl">
          salads
        </p>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default Category;
