import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className="w-full max-h-[300px] object-cover"
              width={300}
              height={200}
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
