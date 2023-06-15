"use client";
import StarAmigos from "@/assets/images/star-amigos.svg";
import { boxAmigos } from "../../contentHome";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./style.scss";
export default function BoxAmigos() {
  return (
    <div className="box-amigos">
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centerInsufficientSlides={true}
        //   centeredSlidesBounds={true}
          breakpoints={{
            // when window width is >= 640px
            768: {
              spaceBetween: 40,
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3.3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            type: "progressbar",
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper-card"
        >
          {boxAmigos?.map((opt: any, index: any) => {
            return (
              <SwiperSlide key={index}>
                <div className=" bg-[#F0F0F0] rounded-2xl shadow-lg pl-7 pr-3 py-3">
                  <div className="flex items-center justify-end relative mb-20">
                    <div className="absolute left-0 border-4 border-[#B4D3B3] rounded-full">
                      <img src={opt?.img.src} alt="" />
                    </div>
                    <div>
                      <StarAmigos />
                    </div>
                  </div>
                  <div className="pr-4 pb-4">
                    <p className="text-xl text-vermelho-1">
                      <strong>{opt?.nome}</strong>
                    </p>
                    <p className="text-base text-[#2F2F2F] mb-5">
                      <strong>{opt?.cargo}</strong>
                    </p>
                    <p className="text-base text-[#2F2F2F]">{opt?.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
