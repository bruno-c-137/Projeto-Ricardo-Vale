import Image from "next/image";
import ImgRicardo from "@/assets/images/ricardoPGBandeiras.webp";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import SetaRBandeira from "@/assets/images/seta-r-bandeira.svg";
import StarBandeiras1 from "@/assets/images/star-bandeiras-1.svg";
import { boxBandeiras } from "./contentBandeiras";
import SubFooter from "@/components/subFooter";
export default function Bandeiras() {
  return (
    <div className="bandeiras bg-[#F5F5F5]">
      <div className="bg-[#C61212] mb-10 md:mb-20">
        <div className="container lg:px-12">
          <div className="flex items-center justify-between">
            <div className="text-white w-1/2">
              <p className="text-sm sm:text-[1.375rem] -mb-2 sm:-mb-3 tracking-[0.3em] font-medium">
                NOSSAS
              </p>
              <p className="text-[1.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">
                <strong>Bandeiras</strong>
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
                <div className="absolute bottom-[7%] -left-[12%] sm:-left-10">
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
      <div className="mb-16 sm:mb-24">
        <div className="container relative">
          <div className="hidden sm:block absolute lg:-left-20  sm:top-24 md:top-10 pointer-events-none">
            <StarBandeiras1 />
          </div>
          <div className="md:px-20 mb-10 md:mb-16 z-10 relative">
            <p className="font-semibold text-[#404040] text-base">
              Ricardo Vale defende diversas bandeiras fundamentais para a
              sociedade, como a valorização da agricultura familiar, a igualdade
              de gênero, a promoção do esporte amador, a inclusão e
              acessibilidade e a garantia de infraestrutura adequada para toda a
              população do Distrito Federal. Tais bandeiras são importantes para
              garantir o desenvolvimento e a justiça social.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-10  gap-y-10 z-10 relative">
            {boxBandeiras?.map((opt: any, index: any) => {
              return (
                <div key={index} className="bg-white rounded-2xl p-7 shadow-md">
                  <div className="mb-3">{opt?.img}</div>
                  <div className="mb-5">
                    <p className="text-3xl text-[#000] mb-3">
                      <strong>{opt?.title}</strong>
                    </p>
                    <p className="text-[#404040] text-base">{opt?.text}</p>
                  </div>
                  <div>
                    <button className="btn-custom flex items-center rounded-full bg-vermelho-1 px-3 py-2 gap-x-3">
                      <div>
                        <p className="text-white text-xs">
                          <strong>veja</strong>
                        </p>
                      </div>
                      <div>
                        <SetaRBandeira />
                      </div>
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="p-7">
              <p className="text-3xl text-vermelho-1 mb-5">
                <strong>Outras lutas</strong>
              </p>
              <ul>
                <li className="list-disc text-[#404040] text-base mb-2">
                  <strong>Agricultura familiar</strong>
                </li>
                <li className="list-disc text-[#404040] text-base mb-2">
                  <strong>Alimentação de qualidade</strong>
                </li>
                <li className="list-disc text-[#404040] text-base mb-2">
                  <strong>Drenagem de águas pluviais e asfalto novo já</strong>
                </li>
                <li className="list-disc text-[#404040] text-base mb-2">
                  <strong>Revitalização do Ribeirão de Sobradinho</strong>
                </li>
                <li className="list-disc text-[#404040] text-base">
                  <strong>Defesa dos animais domésticos</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SubFooter />
      </div>
    </div>
  );
}
