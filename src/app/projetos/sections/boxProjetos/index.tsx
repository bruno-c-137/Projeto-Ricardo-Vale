"use client";
import VectorAprovado from "@/assets/images/vector-aprovado.svg";
import StarConquista from "@/assets/images/star-conquista.svg";
import IconDownload from "@/assets/images/icons/iconDownload.svg";
import SetaR from "@/assets/images/seta-r.svg";
import ImgOutrasConquistas from "@/assets/images/img-outras-conquistas.webp";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./style.scss";
import { boxConquistas } from "../../contentProjetos";
export default function BoxProjetos() {
  return (
    <div className="box-conquista">
      <div className="relative">
        <div className="container z-10 relative">
          <div className="hidden md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-10 md:relative ">
            {boxConquistas?.map((opt: any, index: any) => {
              return (
                <div
                  key={index}
                  className="h-full bg-white rounded-2xl shadow-lg flex flex-col items-center px-5 py-10 "
                >
                  <div className="pb-4 text-left w-full text-4xl font-medium text-[#C61212]">
                    {opt?.title}
                  </div>
                  <div className="pb-5 flex-1">
                    <p className="font-normal text-[#404040] text-base">
                      {opt?.text}
                    </p>
                  </div>
                  <div className="w-full">
                    <button className="flex items-center gap-4 bg-[#86B084] rounded-[48px] p-2 btn-custom">
                      <div>
                        <p className="text-xs text-white">
                          <strong>Baixe</strong>
                        </p>
                      </div>
                      <div>
                        <IconDownload />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:hidden">
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
              {boxConquistas?.map((opt: any, index: any) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-full bg-white rounded-2xl shadow-lg flex flex-col items-center px-5 py-10 ">
                      <div className="pb-4 text-left w-full text-4xl font-medium text-[#C61212]">
                        {opt?.title}
                      </div>
                      <div className="pb-5 flex-1">
                        <p className="font-normal text-[#404040] text-base">
                          {opt?.text}
                        </p>
                      </div>
                      <div className="w-full">
                        <button className="flex items-center gap-4 bg-[#86B084] rounded-[48px] p-2 btn-custom">
                          <div>
                            <p className="text-xs text-white">
                              <strong>Baixe</strong>
                            </p>
                          </div>
                          <div>
                            <IconDownload />
                          </div>
                        </button>
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
