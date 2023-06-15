"use client";
import { boxNoticias } from "../../contentHome";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
export default function BoxNoticias() {
  return (
    <div className="box-noticias">
      <div className="container">
        <div className="swiper-custom">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 640px
              768: {
                spaceBetween: 40,
                slidesPerView: 2,
              },
              1020: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper-card"
          >
            {boxNoticias?.map((opt: any, index: any) => {
              return (
                <SwiperSlide key={index}>
                  <div className="bg-white  rounded-2xl shadow-lg h-full">
                    <div className=" w-full">
                      <img src={opt?.img.src} className="w-full" alt="" />
                    </div>
                    <div className="p-4">
                      <p className="text-xl text-[#000] mb-2">
                        <strong>{opt?.title}</strong>
                      </p>
                      <p className="text-[#BEBEBE] text-xs mb-2">{opt?.data}</p>
                      <p className="text-[#2F2F2F] text-base">{opt?.text}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
