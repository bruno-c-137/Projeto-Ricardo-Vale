import Image from "next/image";
import SubFooter from "@/components/subFooter";
import ImgRicardo from "@/assets/images/ricardoPGSobre.webp";
import ImgQuilombo from "@/assets/images/img-quilombo.webp";
import IconStarsMedium from "@/assets/images/icons/iconStarMedium.svg";
import IconStarsSmall from "@/assets/images/icons/iconStarsSmall.svg";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";

import "./style.scss";
export default function Sobre() {
  return (
    <>
      <div className="bg-[#C61212]">
        <div className="container lg:px-12">
          <div className="flex items-center justify-between">
            <div className="text-white w-1/2">
              <p className="text-sm sm:text-[1.375rem] -mb-2 sm:-mb-3 tracking-[0.3em] font-medium">
                SOBRE
              </p>
              <p className="text-[1.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">
                <strong>Ricardo Vale</strong>
              </p>
            </div>
            <div className="w-1/2 h-full flex justify-end relative">
              <div className="relative sm:pr-20">
                <Image
                  src={ImgRicardo}
                  width={300}
                  height={200}
                  className="pointer-events-none min-w-[100px] min-h-[100px]"
                  alt="Ricardo Vale"
                />
                <div className="absolute bottom-5 sm:bottom-10 left-[25%] sm:left-1/4">
                  <IconStarsWhiteSmall />
                </div>
                <div className="absolute top-0 sm:top-[45%] -left-5">
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
      <div className="container pt-24 pb-24 sm:pt-12 sm:pb-12 relative">
        <div className="flex justify-center items-center text-[#404040] relative">
          <div className="lg:ml-20 absolute -top-20 sm:top-20 -left-12 sm:left-0">
            <div className="hidden sm:block">
              <IconStarsMedium />
            </div>
            <div className="block sm:hidden">
              <IconStarsSmall />
            </div>
          </div>
          <div className="absolute -bottom-16 sm:bottom-20 -right-7 sm:right-0">
            <div>
              <IconStarsSmall />
            </div>
          </div>
          <div className="sm:w-10/12 lg:w-8/12">
            <div className="sm:px-16 lg:px-20">
              <p>
                Ricardo Vale é deputado distrital, pelo Partido dos
                Trabalhadores do DF. Eleito em 2022 e com mandato até 2026, é
                nascido e criado em Sobradinho e, desde a juventude, milita
                politicamente por melhorias para a cidade e para os
                trabalhadores. Filho de um casal de cearenses que veio para
                trabalhar na construção da capital federal, é casado e pai de
                três filhos.
              </p>
              <p className="pt-6">
                Morador de Sobradinho, ele é formado em desenho técnico e
                graduado em administração e marketing. Ricardo Vale luta por um
                Distrito Federal mais justo e inclusivo, e o gabinete 13
                trabalha para que as cidades ofereçam qualidade de vida e
                dignidade para a população.
              </p>
            </div>
            <div className="pt-10">
              <Image src={ImgQuilombo} className="" alt="Image Quilombo" />
            </div>
            <div className="pt-10 sm:px-16 lg:px-20">
              <h1 className="text-3xl font-medium">Histórico</h1>
              <div className="pt-12">
                <p>
                  Em 2014, assumiu seu primeiro mandato representativo onde
                  trabalhou ativamente por causas sociais e na defesa dos
                  direitos humanos. A preocupação com a valorização cultural e
                  com as atividades esportivas marcou a atuação do parlamentar.
                </p>
                <p className="pt-6">
                  Durante seu mandato, Ricardo Vale destinou emendas para áreas
                  sociais, beneficiando, principalmente, a população da
                  periferia do DF. Além disso, foi o autor de importantes
                  regramentos, como a Lei que declarou o rock brasiliense como
                  patrimônio imaterial do DF; e a chamada Lei dos Boleiros, que
                  pretende transformar o fomento governamental do esporte amador
                  em política de Estado.
                </p>
                <p className="pt-6">
                  Ricardo Vale também foi um dos pioneiros a legislar em favor
                  das minorias. No mandato anterior defendeu os direitos das
                  pessoas LGBTQIAP+. Em 2017, criou a lei que prevê a Campanha
                  Permanente de Combate ao Machismo e Valorização das Mulheres
                  na rede pública de ensino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
}
