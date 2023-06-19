import Image from "next/image";
import SubFooter from "@/components/subFooter";
import ImgRicardo from "@/assets/images/img-ricardo-noticias.webp";
import IconStarsSmall from "@/assets/images/icons/iconStarsSmall.svg";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import ImgNoticias from "@/assets/images/img-noticias.webp";
import BoxNoticias from "../sections/boxNoticias";
import IconFaceBook from "@/assets/images/icons/iconFacebook_2.svg";
import IconTwitter from "@/assets/images/icons/iconTwitter_2.svg";
import IconWhatsApp from "@/assets/images/icons/iconWhatsWhite_2.svg";
import IconLinkedin from "@/assets/images/icons/iconLinkedin.svg";
import IconTelegram from "@/assets/images/icons/iconTelegram.svg";
import { boxUltimasNoticias } from "../contentNoticias";

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
                  <div className="absolute top-[30%] right-[16%] sm:right-[30%]">
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
        <div className="container pt-24 pb-24 sm:pt-12 relative">
          <div className="flex justify-center items-center text-[#404040] relative">
            <div className="sm:w-10/12 lg:w-8/12">
              <div className="lg:px-10">
                <div className=" flex justify-between items-center">
                  <p className=" text-[#404040] text-xs font-medium">
                    27/04/2023 14h44
                  </p>
                  <div className=" flex items-center gap-x-4">
                    <button className="duration-300 ease-in hover:scale-125">
                      <IconFaceBook className="text-[#006EE9]" />
                    </button>
                    <button className="duration-300 ease-in hover:scale-125">
                      <IconTwitter className="text-[#0B92E9]" />
                    </button>
                    <button className="duration-300 ease-in hover:scale-125">
                      <IconWhatsApp className="text-[#32A742]" />
                    </button>
                    <button className="duration-300 ease-in hover:scale-125">
                      <IconTelegram />
                    </button>
                    <button className="duration-300 ease-in hover:scale-125">
                      <IconLinkedin />
                    </button>
                  </div>
                </div>
                <div className="">
                  <p className="text-[#000000] font-medium text-[1.8rem] sm:text-[3.125rem] sm:leading-[57.5px] pt-4">
                    Audiência pública reúne frentistas e empresariado em debate
                    sobre condições de trabalho e recomposição salarial
                  </p>
                  <p className="text-[#C61212] text-xl pt-2">
                    <strong>A iniciativa foi do deputado Ricardo Vale</strong>
                  </p>
                </div>
                <div className="pt-5">
                  <Image
                    src={ImgNoticias}
                    className="pointer-events-none w-full"
                    alt="Noticias"
                  />
                  <p className="text-[#404040] font-medium text-xs">
                    Foto: Rinaldo Morelli/CLDF
                  </p>
                </div>
                <div className="text-justify text-base font-medium text-[#404040] pt-10">
                  <p>
                    A audiência pública da Câmara Legislativa sobre as condições
                    de trabalho e recomposição salarial dos frentistas do DF, na
                    manhã desta quinta-feira (27), reuniu no auditório da Casa
                    representantes dos frentistas e do empresariado do setor de
                    combustíveis. "Um dos objetivos do encontro é mediar ambas
                    as partes em período de negociação salarial", contextualizou
                    o autor da iniciativa, deputado Ricardo Vale (PT).
                  </p>
                  <p>
                    Ao narrar sua própria experiência como trabalhador, o
                    distrital avaliou que os trabalhadores rendem mais quando
                    são respeitados em seus ambientes de serviço, têm boas
                    condições de trabalho e são bem remunerados. Para o advogado
                    da Federação Nacional dos Frentistas (Fenepospetro-DF) e do
                    Sindicato dos Empregados em Postos de Serviços de
                    Combustíveis e Derivados de Petróleo do DF (Sinpospetro-DF),
                    Hélio Gherardi, as negociações têm que levar em consideração
                    as questões dos dois lados. Ao anunciar que os frentistas de
                    São Paulo assinaram a convenção coletiva nesta semana, ele
                    informou que o setor patronal oferece apenas o reajuste
                    salarial com base no percentual da inflação, como ocorre
                    desde a década de 1970, e a manutenção do valor atual do
                    tíquete. Outra reinvindicação do setor patronal, segundo o
                    advogado, é enxugar a pauta coletiva, retirando as cláusulas
                    que já constam na CLT. “O ideal é não haver impasse e não
                    levar a questão para os tribunais, mas sim chegar a um
                    denominador comum”, observou. Recomposição de perdas
                  </p>
                  <p>
                    “Quando não se chega a um consenso, busca-se o diálogo”,
                    considerou o presidente da Força Sindical do Distrito
                    Federal, João Moises de Moraes. Na impossibilidade do “ganho
                    real”, Moraes sugeriu ao setor patronal outras formas de
                    benefício, como cesta básica ou benefício familiar. Ele
                    pleiteou a valorização dos trabalhadores, que decorre em
                    ganho para todos. “O empresário tem que entender que nós
                    estamos na linha de frente, como o nome diz, frentista”,
                    enfatizou o diretor do Sindicato dos Empregados em Postos de
                    Serviços de Combustíveis e Derivados de Petróleo do DF
                    (Sinpospetro-DF), Willian Ferreira, ao reivindicar “o
                    direito a um salário e um tíquete justos”. Ele pleiteou a
                    recomposição de perdas de 5% acima da inflação e tíquete no
                    valor de R$ 23, entre outros fatores, como o auxílio-saúde.
                    Revendedores
                  </p>
                </div>
                <div className="pt-16 flex items-center justify-end gap-x-4">
                  <button className="duration-300 ease-in hover:scale-125">
                    <IconFaceBook className="text-[#006EE9]" />
                  </button>
                  <button className="duration-300 ease-in hover:scale-125">
                    <IconTwitter className="text-[#0B92E9]" />
                  </button>
                  <button className="duration-300 ease-in hover:scale-125">
                    <IconWhatsApp className="text-[#32A742]" />
                  </button>
                  <button className="duration-300 ease-in hover:scale-125">
                    <IconTelegram />
                  </button>
                  <button className="duration-300 ease-in hover:scale-125">
                    <IconLinkedin />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-12 relative">
            <div className="py-10">
              <div className="w-full h-[2px] bg-[#D9D9D9]"></div>
            </div>
            <div>
              <p className="text-[#2F2F2F] text-4xl sm:text-[3.125rem]">
                <strong>Últimas Notícias</strong>
              </p>
            </div>
            <div className="pt-10 sm:pb-10">
              <BoxNoticias dataNoticias={boxUltimasNoticias} />
            </div>
            <div className="hidden sm:block absolute sm:-bottom-[17%] sm:right-[10%]">
              <IconStarsSmall />
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
}
