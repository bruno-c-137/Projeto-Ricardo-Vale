import Image from "next/image";
import SubFooter from "@/components/subFooter";
import ImgRicardo from "@/assets/images/img-ricardo-projetos.webp";
import ImgQuilombo from "@/assets/images/img-quilombo.webp";
import IconStarsMedium from "@/assets/images/icons/iconStarMedium.svg";
import IconStarsSmall from "@/assets/images/icons/iconStarsSmall.svg";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import BoxProjetos from "./sections/boxProjetos";

export default function Projetos() {
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
                  <strong>Projetos</strong>
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
        <div className="container pt-6 pb-24 sm:pt-24 sm:pb-24 relative">
          <div className="flex justify-center items-center text-[#404040]">
            <div className="lg:ml-20 absolute -top-20 sm:top-20 -left-12 sm:left-0">
              <div className="absolute top-80 sm:top-56 left-5 sm:-left-5 lg:-left-20">
                <IconStarsSmall />
              </div>
            </div>
            <div className="absolute bottom-0 sm:bottom-0 -right-7 sm:right-20">
              <div>
                <IconStarsSmall />
              </div>
            </div>
            <div className="sm:w-10/12 lg:w-8/12">
              <div className="sm:px-16 lg:px-20 text-[15px]">
                <p>
                  Ricardo Vale é um deputado comprometido em encontrar soluções
                  inovadoras para os desafios enfrentados pela população do
                  Distrito Federal. Seus projetos de lei refletem essa
                  preocupação, abordando temas como educação, saúde, meio
                  ambiente, direitos humanos e desenvolvimento econômico.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-16 sm:pt-12 lg:px-14">
            <BoxProjetos />
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
}
