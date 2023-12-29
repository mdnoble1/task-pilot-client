/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../../../assets/images/task2.png";
import img2 from "../../../assets/images/task1.png";
import img3 from "../../../assets/images/task3.png";
import img4 from "../../../assets/images/task4.png";
import img5 from "../../../assets/images/task5.png";
import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { FaRegPaperPlane } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="lg:mt-1">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            className="h-full lg:h-[700px] w-full opacity-70 lg:rounded-md"
            src={img1}
            alt=""
          />
          <div className="absolute bottom-[30px] lg:bottom-1/4 w-full text-center">
            <NavLink to="/dashboard">
              <button className="btn btn-sm md:btn-md lg:btn-lg bg-[#129efc] hover:bg-blue-700 border-0 font-semibold md:text-2xl text-white uppercase drop-shadow-2xl opacity-100">
                Let's Explore{" "}
                <FaRegPaperPlane className="text-lg md:text-2xl"></FaRegPaperPlane>
              </button>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-full lg:h-[700px] w-full opacity-70 lg:rounded-md"
            src={img2}
            alt=""
          />
          <div className="absolute bottom-[30px] lg:bottom-1/4 w-full text-center">
            <NavLink to="/dashboard">
              <button className="btn btn-sm md:btn-md lg:btn-lg bg-[#129efc] hover:bg-blue-700 border-0 font-semibold md:text-2xl text-white uppercase drop-shadow-2xl">
                Let's Explore{" "}
                <FaRegPaperPlane className="text-lg md:text-2xl"></FaRegPaperPlane>
              </button>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-full lg:h-[700px] w-full opacity-70 lg:rounded-md"
            src={img3}
            alt=""
          />
          <div className="absolute bottom-[30px] lg:bottom-1/4 w-full text-center">
            <NavLink to="/dashboard">
              <button className="btn btn-sm md:btn-md lg:btn-lg bg-[#129efc] hover:bg-blue-700 border-0 font-semibold md:text-2xl text-white uppercase drop-shadow-2xl">
                Let's Explore{" "}
                <FaRegPaperPlane className="text-lg md:text-2xl"></FaRegPaperPlane>
              </button>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-full lg:h-[700px] w-full opacity-70 lg:rounded-md"
            src={img4}
            alt=""
          />
          <div className="absolute bottom-[30px] lg:bottom-1/4 w-full text-center">
            <NavLink to="/dashboard">
              <button className="btn btn-sm md:btn-md lg:btn-lg bg-[#129efc] hover:bg-blue-700 border-0 font-semibold md:text-2xl text-white uppercase drop-shadow-2xl">
                Let's Explore{" "}
                <FaRegPaperPlane className="text-lg md:text-2xl"></FaRegPaperPlane>
              </button>
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-full lg:h-[700px] w-full opacity-70 lg:rounded-md"
            src={img5}
            alt=""
          />
          <div className="absolute bottom-[30px] lg:bottom-1/4 w-full text-center">
            <NavLink to="/dashboard">
              <button className="btn btn-sm md:btn-md lg:btn-lg bg-[#129efc] hover:bg-blue-700 border-0 font-semibold md:text-2xl text-white uppercase drop-shadow-2xl">
                Let's Explore{" "}
                <FaRegPaperPlane className="text-lg md:text-2xl"></FaRegPaperPlane>
              </button>
            </NavLink>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
