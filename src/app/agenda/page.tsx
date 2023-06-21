import Image from "next/image";
import ImgRicardo from "@/assets/images/ricardoPGAgenda.webp";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import IconStarsSmall from "@/assets/images/icons/iconStarsSmall.svg";
import { boxAgenda } from "./contentAgendas";
import SubFooter from "@/components/subFooter";

export default function Agenda() {
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <div className="bg-[#C61212]">
          <div className="container lg:px-12">
            <div className="flex items-center justify-between">
              <div className="text-white w-1/2">
                <p className="text-sm sm:text-[1.375rem] -mb-2 sm:-mb-3 tracking-[0.3em] font-medium">
                  VEJA
                </p>
                <p className="text-[1.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">
                  <strong>Agenda</strong>
                </p>
              </div>
              <div className="w-1/2 h-full flex justify-end relative">
                <div className="relative sm:pr-20">
                  <Image
                    src={ImgRicardo}
                    className="pointer-events-none"
                    alt="Ricardo Vale"
                  />
                  <div className="absolute top-[35%] right-[16%] sm:right-[30%]">
                    <IconStarsWhiteSmall />
                  </div>
                  <div className="absolute bottom-[7%] left-[1%] sm:left-0">
                    <IconStarsWhiteMedium />
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 hidden sm:block">
                  <IconStarsWhiteBig />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-6 pb-24 sm:pt-20 sm:pb-24 relative">
          <div className="flex justify-center items-center text-[#404040] text-[15px]">
            <div className="sm:w-10/12 lg:w-8/12 text-justify lg:px-8">
              <p>
                Fique por dentro das ações e iniciativas do deputado Ricardo
                Vale em prol do Distrito Federal. Acompanhe a participação do
                parlamentar em eventos, reuniões, audiências públicas e outras
                atividades relacionadas ao seu mandato.
              </p>
            </div>
          </div>
          <div className="lg:px-12 relative">
            <div>
              {boxAgenda?.map((data: any, index: any) => {
                return (
                  <>
                    <div className="flex items-end gap-4 pt-20" key={index}>
                      <p className="text-[#2F2F2F] text-4xl sm:text-[3.125rem] sm:leading-[1]">
                        <strong>{data?.month}</strong>
                      </p>
                      <p className="text-base sm:text-xl text-[#C61212]">
                        <strong>{data?.year}</strong>
                      </p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10 pt-6">
                      {data?.item?.map((opt: any, index: any) => {
                        return (
                          <div
                            key={index}
                            className="border border-[#C61212] bg-white items-center flex justify-between h-full w-full rounded-[15px] relative"
                          >
                            <div className="h-full w-3/12 sm:w-4/12 border-r border-[#C61212] flex items-center">
                              <p className="text-[#C61212] text-2xl sm:text-3xl pl-2">
                                <strong>{opt?.dayMonth}</strong>
                              </p>
                            </div>
                            <div className="w-8/12 md:w-8/12 py-3 sm:pl-5 pr-2">
                              <p className="text-[#2F2F2F] text-[15px]">
                                <strong>{opt?.location}</strong>
                              </p>
                              <p className="text-[#404040] text-[10px] font-medium pt-1">
                                {opt?.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="relative h-full w-full">
          <div className="hidden sm:block absolute -bottom-8 sm:right-[10%]">
            <IconStarsSmall />
          </div>
        </div> */}
      </div>
      <SubFooter />
    </>
  );
}
