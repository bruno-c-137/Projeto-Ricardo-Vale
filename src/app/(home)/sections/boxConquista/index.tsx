"use client";
import VectorAprovado from "@/assets/images/vector-aprovado.svg";
import StarConquista from "@/assets/images/star-conquista.svg";
import SetaR from "@/assets/images/seta-r.svg";
import ImgOutrasConquistas from "@/assets/images/img-outras-conquistas.webp";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./style.scss";
import { boxConquistas } from "../../contentHome";
export default function BoxConquista() {
  return (
    <div className="box-conquista">
      <div className="pb-20 bg-[#E5E5E5]">
        <div className="relative pb-20 md:pb-32">
          <div className="container z-10 relative ">
            <div className="py-14">
              <p className="text-white text-3xl md:text-5xl">
                <strong>Outras</strong>
              </p>
              <p className="text-white text-3xl md:text-5xl">
                <strong>conquistas</strong>
              </p>
            </div>
            <div className="hidden md:grid md:grid-cols-4 md:gap-x-5  md:gap-y-10 md:relative ">
              {boxConquistas?.map((opt: any, index: any) => {
                return (
                  <div
                    key={index}
                    className="h-full bg-white rounded-2xl shadow-lg flex flex-col items-center px-5 py-10 "
                  >
                    <div className="pb-4">{opt?.img}</div>
                    <div className="pb-5 flex-1">
                      <p className="font-medium text-[#2F2F2F] text-base text-center">
                        {opt?.text}
                      </p>
                    </div>
                    <div>
                      <button className="flex items-center gap-4 bg-[#4CAF50] rounded-full p-2 btn-custom">
                        <div>
                          <VectorAprovado />
                        </div>
                        <div>
                          <p className="text-sm text-white tracking-[0.5rem]">
                            <strong>APROVADA!</strong>
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="absolute bottom-10 -left-40">
                <StarConquista />
              </div>
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
                        <div className="pb-4">{opt?.img}</div>
                        <div className="pb-5 flex-1">
                          <p className="font-medium text-[#2F2F2F] text-base text-center">
                            {opt?.text}
                          </p>
                        </div>
                        <div>
                          <button className="flex items-center gap-4 bg-[#4CAF50] rounded-full p-2 btn-custom">
                            <div>
                              <VectorAprovado />
                            </div>
                            <div>
                              <p className="text-sm text-white tracking-[0.5rem]">
                                <strong>APROVADA!</strong>
                              </p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <div className="absolute bottom-10 -left-40">
                  <StarConquista />
                </div>
              </Swiper>
            </div>
          </div>
          <div className="absolute top-0 h-[68%] w-full">
            <img
              src={ImgOutrasConquistas.src}
              className="w-full h-full object-cover object-top"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="flex justify-center">
            <button className="text-[#2F2F2F] btn-custom text-lg md:text-xl flex items-center rounded-full border border-vermelho-1 py-3 px-7 gap-x-7">
              <div>
                <strong>Veja todas as conquistas do nosso trabalho</strong>
              </div>
              <div>
                <SetaR />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
