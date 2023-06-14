import ImgBannerRicardo from "@/assets/images/img-banner_Ricardo.webp";
import ImgMst from "@/assets/images/img-mst-v2.webp";
import AspL from "@/assets/images/asp-l.webp";
import AspR from "@/assets/images/asp-r.webp";
import ImgValMulheres from "@/assets/images/img-valorizacao-das-mulheres.webp";
import ImgEsporteAmador from "@/assets/images/img-esporte-amador.webp";
import StarValMulheres from "@/assets/images/star-val-mulheres.svg";
import StarSport from "@/assets/images/start-sport.svg";
import SetaButtonR from "@/assets/images/seta-button-r.svg";
import StarDesarmamento from "@/assets/images/star-desarmamento.svg";
import VectorDesarmamento from "@/assets/images/vector-desarmamento.svg";
import IconArma from "@/assets/images/icons/icon-arma.webp";
import IconCifrao from "@/assets/images/icons/icon-cifrao.webp";
import IconFem from "@/assets/images/icons/icon-fem.webp";
import IconBola from "@/assets/images/icons/icon-bola.webp";
import IconTeatro from "@/assets/images/icons/icon-teatro.webp";
import IconCidade from "@/assets/images/icons/icon-cidade.webp";
import BoxConquista from "./sections/boxConquista";
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
      <div>
        <BoxConquista />
      </div>
      <div className="bg-[#E5E5E5]">
        <div className="relative">
          <div className="sm:container">
            <div className="sm:flex justify-between py-14">
              <div className="sm:w-1/2 sm:pr-10 lg:pr-20 mb-10 sm:mb-0 p-4 sm:p-0">
                <p className="text-xl text-vermelho-1 tracking-[0.5rem]">
                  <strong>CONHEÇA NOSSAS</strong>
                </p>
                <p className="text-[#2F2F2F] text-4xl md:text-6xl lg:text-7xl mb-3">
                  <strong>Principais Bandeiras</strong>
                </p>
                <p className="text-[#404040] text-base mb-4">
                  Assumi meu segundo mandato com o compromisso de promover
                  mudanças pelos que mais precisam, por isso, nosso gabinete
                  trabalha por melhorias para você, trabalhador e trabalhadora.
                  Entre nossas lutas também estão:
                </p>
                <ul className="list-inside mb-5 pl-4">
                  <li className="list-disc text-[#404040] text-base">
                    <strong>Promoção do esporte e da cultura;</strong>
                  </li>
                  <li className="list-disc text-[#404040] text-base">
                    <strong>Agricultura familiar;</strong>
                  </li>
                  <li className="list-disc text-[#404040] text-base">
                    <strong>Alimentação de qualidade;</strong>
                  </li>
                  <li className="list-disc text-[#404040] text-base">
                    <strong>Combate ao machismo;</strong>
                  </li>
                  <li className="list-disc text-[#404040] text-base">
                    <strong>Revitalização do Ribeirão de Sobradinho;</strong>
                  </li>
                  <li className="list-disc text-[#404040] text-base">
                    <strong>Revitalização do Ribeirão de Sobradinho;</strong>
                  </li>
                </ul>
                <div>
                  <button className="btn-custom bg-vermelho-1 rounded-3xl h-full px-5 flex items-center gap-x-4 py-1">
                    <div>
                      <p className="text-lg text-white ">
                        <strong>veja mais</strong>
                      </p>
                    </div>
                    <div>
                      <SetaButtonR className="text-white" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="sm:w-1/2 sm:pl-10 lg:pl-20 z-10  bg-[#A7BDA6] sm:bg-inherit p-4 sm:p-0 rounded-t-3xl rounded-b-3xl sm:rounded-t-none sm:rounded-b-none">
                <div>
                  <VectorDesarmamento />
                </div>
                <p className="text-white text-4xl md:text-6xl lg:text-7xl mb-5">
                  <strong>Desarmamento</strong>
                </p>
                <p className="text-[#404040] text-base mb-5">
                  Você sabia que, entre 2017 e 2021, houve um aumento de 600% de
                  registros de armas de fogo do DF? E quem 1 a cada 3 armas do
                  país é irregular? Esses números mostram o descontrole que
                  estamos vivendo em relação à circulação às armas incentivado
                  pelo governo anterior. Agora, o Brasil e a capital federal
                  estão retomando a normalidade democrática e o caminho da
                  civilidade. Um movimento que depende de investimentos em
                  educação e cultura e no enfretamento à glamourização das armas
                  e a violência.
                </p>
                <p className="text-[#404040] text-base mb-5">
                  Por isso, apresentamos o Projeto de Lei - 347/2023 que
                  institui a criação da Política pela Cultura da Paz e pelo
                  Desarmamento da População do Distrito Federal. Saiba mais
                  (página que vai detalhar ponto a ponto da lei, informações de
                  combate à fake News)
                </p>
                <div className="flex  ">
                  <div className="flex gap-x-4 items-center border border-[#B4D3B3] rounded-full px-3 md:px-10 py-3">
                    <div>
                      <img src={IconArma.src} alt="" />
                    </div>
                    <div>
                      <img src={IconCifrao.src} alt="" />
                    </div>
                    <div>
                      <img src={IconFem.src} alt="" />
                    </div>
                    <div>
                      <img src={IconBola.src} alt="" />
                    </div>
                    <div>
                      <img src={IconTeatro.src} alt="" />
                    </div>
                    <div>
                      <img src={IconCidade.src} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:bg-[#A7BDA6] sm:w-1/2 absolute h-full right-0 bottom-[52%] sm:bottom-0 rounded-l-3xl flex items-end sm:block">
            <div className="flex justify-end items-end sm:pr-20 sm:-mt-16">
              <StarDesarmamento />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
