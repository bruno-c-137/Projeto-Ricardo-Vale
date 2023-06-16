"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";

export default function BoxNoticias({dataNoticias}:any) {  
  return (
    <div className="box-conquista">
      <div className="relative">
        <div className="z-10 relative">
          <div className="hidden md:grid md:grid-cols-4 md:gap-x-5 md:gap-y-12 md:relative ">
            {dataNoticias?.map((opt: any, index: any) => {
              return (
                <div
                  key={index}
                  className="h-full bg-white rounded-2xl shadow-lg flex flex-col items-center gap-y-5 duration-200 ease-in hover:scale-x-110 hover:scale-y-105 cursor-pointer"
                >
                  <div className="w-full">
                    <Image src={opt?.img} className="w-full" alt="" />
                  </div>
                  <div className="px-3">
                    <div className="pb-4 w-full text-2xl font-medium text-[#000000]">
                      {opt?.title}
                    </div>
                    <div className=" text-[#BEBEBE] text-[10px] pb-4">
                      {opt?.publishedDateTime}
                    </div>
                    <div className="pb-5 flex-1">
                      <p className="font-normal text-[#2F2F2F] text-base">
                        {opt?.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:hidden swiper-custom">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 640px
                768: {
                  spaceBetween: 40,
                  slidesPerView: 2,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper-card"
            >
              {dataNoticias?.map((opt: any, index: any) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-full bg-white rounded-2xl shadow-lg flex flex-col items-center">
                      <div className="w-full">
                        <Image src={opt?.img} className="w-full" alt="" />
                      </div>
                      <div className="px-3">
                        <div className="pb-4 w-full text-2xl font-medium text-[#000000]">
                          {opt?.title}
                        </div>
                        <div className=" text-[#BEBEBE] text-[10px] pb-4">
                          {opt?.publishedDateTime}
                        </div>
                        <div className="pb-5 flex-1">
                          <p className="font-normal text-[#2F2F2F] text-base">
                            {opt?.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
