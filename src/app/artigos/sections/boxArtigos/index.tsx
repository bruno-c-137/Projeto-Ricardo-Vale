"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { boxMaisArtigos } from "../../contentArtigos";
export default function BoxArtigos() {
  return (
    <div className="box-conquista">
      <div className="relative">
        <div className="z-10 relative">
          <div className="hidden md:grid md:grid-cols-4 md:gap-x-5 md:gap-y-10 md:relative">
            {boxMaisArtigos?.map((opt: any, index: any) => {
              return (
                <div
                  key={index}
                  className="h-full bg-white rounded-2xl shadow-lg flex flex-col items-center px-5 py-10 "
                >
                  <div className="pb-4 w-full text-xs font-medium text-[#A0A0A0]">
                    {opt?.publishedDate}
                  </div>
                  <div className="pb-5 flex-1">
                    <p className="text-[#000000] text-2xl">
                      <strong>{opt?.text}</strong>
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#C61212] text-[10px]">
                      <strong>{opt?.author}</strong>
                    </p>
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
              {boxMaisArtigos?.map((opt: any, index: any) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-full bg-white rounded-2xl shadow-lg flex flex-col items-center px-5 py-10 ">
                      <div className="pb-4 w-full text-xs font-medium text-[#A0A0A0]">
                        {opt?.publishedDate}
                      </div>
                      <div className="pb-5 flex-1">
                        <p className="text-[#000000] text-2xl">
                          <strong>{opt?.text}</strong>
                        </p>
                      </div>
                      <div className="w-full">
                        <p className="text-[#C61212] text-[10px]">
                          <strong>{opt?.author}</strong>
                        </p>
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
