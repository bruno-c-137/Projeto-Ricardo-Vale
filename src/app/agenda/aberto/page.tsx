import Image from "next/image";
import ImgRicardo from "@/assets/images/ricardoPGProjetos.webp";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import IconStarsSmall from "@/assets/images/icons/iconStarsSmall.svg";
import { pageAberto } from "../contentAgendas";
import SubFooter from "@/components/subFooter";

export default function Aberto() {
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
                    
                    className="pointer-events-none "
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
                O deputado Ricardo Vale é uma figura conhecida e querida por
                muitas pessoas que compartilham de seus ideais e crenças. Seus
                amigos e apoiadores enxergam nele um representante legítimo de
                seus interesses e necessidades, um líder carismático e
                comprometido com a defesa de suas bandeiras, que trabalha
                arduamente para tornar o país um lugar melhor e mais justo para
                todos.
              </p>
              {pageAberto?.map((item: any, index: any) => {
                return (
                  <div key={index} className="pt-10 flex gap-x-3 items-center">
                    {item?.icon}
                    <p>{item?.textLink}</p>
                  </div>
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
