import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../../../assets/images/task1.png";
import img2 from "../../../assets/images/task2.png";
import img3 from "../../../assets/images/task3.png";
import img4 from "../../../assets/images/task4.png";
import img5 from "../../../assets/images/task5.png";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <section>
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
        <SwiperSlide>
          <img className="h-full lg:h-[700px] w-full" src={img1} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img className="h-full lg:h-[700px] w-full" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full lg:h-[700px] w-full" src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full lg:h-[700px] w-full" src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full lg:h-[700px] w-full" src={img5} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
