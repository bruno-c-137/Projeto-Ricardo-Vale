import Image from "next/image";
import SubFooter from "@/components/subFooter";
import ImgRicardo from "@/assets/images/img-ricardo-projetos.webp";
import IconStarsSmall from "@/assets/images/icons/iconStarsSmall.svg";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import BoxNoticias from "./sections/boxNoticias";
import { boxNoticias } from "./contentNoticias";

export default function Noticias() {
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
                  <strong>Notícias</strong>
                </p>
              </div>
              <div className="w-1/2 h-full flex justify-end relative">
                <div className="relative sm:pr-20">
                  <Image
                    src={ImgRicardo}
                    width={350}
                    height={300}
                    className="pointer-events-none min-w-[100px] min-h-[100px]"
                    alt="Ricardo Vale"
                  />
                  <div className="absolute top-[30%] right-[16%] sm:right-[40%]">
                    <IconStarsWhiteSmall />
                  </div>
                  <div className="absolute bottom-[7%] left-[1%] sm:left-[10%]">
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
        <div className="pt-6 pb-24 sm:pb-24 relative container lg:px-12">
          <div className="pt-16 sm:pt-12">
            <BoxNoticias dataNoticias={boxNoticias} />
          </div>
          <div className="hidden sm:block absolute sm:-bottom-[5%] md:-bottom-[2%] right-[10%]">
            <IconStarsSmall />
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
}
