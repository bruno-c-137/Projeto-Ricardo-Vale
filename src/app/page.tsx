"use client";
import ImgBannerRicardo from "@/assets/images/img-banner_Ricardo.webp";
import ImgMst from "@/assets/images/img-mst-v2.webp";
import AspL from "@/assets/images/asp-l.webp";
import AspR from "@/assets/images/asp-r.webp";
import ImgValMulheres from "@/assets/images/img-valorizacao-das-mulheres.webp";
import ImgEsporteAmador from "@/assets/images/img-esporte-amador.webp";
import ImgOutrasConquistas from "@/assets/images/img-outras-conquistas.webp";
import StarValMulheres from "@/assets/images/star-val-mulheres.svg";
import StarSport from "@/assets/images/start-sport.svg";
import VectorAprovado from "@/assets/images/vector-aprovado.svg";
import StarConquista from "@/assets/images/star-conquista.svg";
import SetaR from "@/assets/images/seta-r.svg";
import { boxConquistas } from "./contentHome";
import "./style.scss";
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home() {
  return (
    <div className="home">
      <div className="bg-vermelho-1 flex justify-center">
        <img src={ImgBannerRicardo.src} alt="" />
      </div>
      <div>
        <div className="bg-[#EBEBEB] pb-14 pt-10  min-[1600px]:pt-20">
          <div className="container">
            <div className="flex items-end justify-center  mb-12 min-[1600px]:mb-40">
              <div className="-mr-7 hidden sm:block sm:w-[8rem] min-[1600px]:w-auto">
                <img src={AspL.src} className="w-full" alt="" />
              </div>
              <div className="sm:w-4/5 md:w-3/5 min-[1600px]:w-1/2 z-10 -mb-5">
                <p className="text-vermelho-1 text-lg sm:text-xl text-center">
                  <strong>
                    Acredito que a política é, sobretudo, o instrumento de
                    defesa dos interesses dos trabalhadores e dos que mais
                    precisam para a construção de uma sociedade justa.
                  </strong>
                </p>
              </div>
              <div className="-ml-7 -mb-12 min-[1600px]:-mb-20 hidden sm:block  sm:w-[8rem] min-[1600px]:w-auto">
                <img src={AspR.src} className="w-full" alt="" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-full py-5 px-7 shadow-lg flex gap-7">
                <div>
                  <p className="text-[#474747] text-xs">
                    <strong>Conheça mais sobre minha</strong>
                  </p>
                  <p className="text-[#474747] text-xs">
                    <strong>luta pelo Distrito Federal.</strong>
                  </p>
                </div>
                <div>
                  <button className="btn-custom border border-vermelho-1 rounded-3xl h-full px-4 flex items-center">
                    <p className="text-sm text-vermelho-1 ">
                      <strong>saiba mais</strong>
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={ImgMst.src} className="w-full" alt="" />
        </div>
      </div>
      <div>
        <div className="md:flex md:justify-end md:py-20 lg:py-40 relative">
          <div className="container">
            <div className="md:w-1/2 sm:pr-10 lg:pr-20 flex  py-10 md:py-0 relative">
              <div className="lg:-ml-20 absolute sm:static top-5 -left-16">
                <StarValMulheres />
              </div>
              <div className="z-10">
                <p className="text-xl text-vermelho-1 tracking-[0.5rem] text-end mb-2">
                  <strong>É Lei</strong>
                </p>
                <p className="text-[#2F2F2F] text-3xl sm:text-5xl text-end mb-5">
                  <strong>Valorização das mulheres</strong>
                </p>
                <p className="font-medium text-[#404040] text-base text-end mb-7">
                  Sou o autor da Lei nº 5.80/17, que prevê o combate ao machismo
                  nas escolas da rede pública de ensino do DF, por meio de ações
                  de valorização das mulheres.
                </p>
                <div className="flex justify-end">
                  <button className="btn-custom bg-vermelho-1 rounded-3xl py-3  px-7 flex items-center">
                    <p className="text-sm text-white ">
                      <strong>saiba mais</strong>
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:absolute md:top-0 md:h-full">
            <img
              src={ImgValMulheres.src}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row  md:py-20 lg:py-40 relative">
          <div className="md:w-1/2 md:absolute md:top-0 md:h-full order-1 md:order-none">
            <img
              src={ImgEsporteAmador.src}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="container md:flex md:justify-end">
            <div className="md:w-1/2 sm:pl-10  lg:pl-20  flex items-end  py-10 md:py-0 relative">
              <div className="z-10">
                <p className="text-xl text-vermelho-1 tracking-[0.5rem] mb-2">
                  <strong>É Lei</strong>
                </p>
                <p className="text-[#2F2F2F] text-3xl sm:text-5xl mb-5">
                  <strong>Esporte Amador</strong>
                </p>
                <p className="font-medium text-[#404040] text-base mb-7">
                  Tenho uma luta em prol da valorização de práticas de saúde
                  física e mental para a população. Em meu mandato anterior,
                  criei a Lei nº 5.649/16, que prevê a inclusão no orçamento de
                  medidas para fomento do esporte amador no DF, conhecida como
                  lei “Boleiros”.
                </p>
                <div>
                  <button className="btn-custom bg-vermelho-1 rounded-3xl py-3  px-7 flex items-center">
                    <p className="text-sm text-white ">
                      <strong>saiba mais</strong>
                    </p>
                  </button>
                </div>
              </div>
              <div className=" pb-20 lg:-mr-10 lg:pl-10">
                <StarSport />
              </div>
            </div>
          </div>
        </div>
      </div>
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
