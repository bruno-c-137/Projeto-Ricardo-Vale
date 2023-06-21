import Image from "next/image";
import SubFooter from "@/components/subFooter";
import ImgRicardo from "@/assets/images/ricardoPGBandeiras.webp";
import IconStarsSmall from "@/assets/images/icons/iconStarsSmall.svg";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import IconDownload from "@/assets/images/icons/iconDownload.svg";

export default function Download() {
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <div className="bg-[#C61212]">
          <div className="container lg:px-12">
            <div className="flex items-center justify-between">
              <div className="text-white w-1/2">
                <p className="text-sm sm:text-[1.375rem] -mb-2 sm:-mb-3 tracking-[0.3em] font-medium">
                  MATERIAL PARA
                </p>
                <p className="text-[1.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">
                  <strong>Download</strong>
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
        <div className="container pt-6 pb-24 sm:pt-24 sm:pb-24 relative">
          <div className="flex justify-center items-center text-[#404040]">
            <div className="sm:w-10/12 lg:w-8/12">
              <div className="text-[15px]">
                <p>
                  Ricardo Vale acredita que a informação deve ser amplamente
                  disseminada e compartilhada com todos os cidadãos. Por isso,
                  todo o material produzido durante o seu mandato – como
                  projetos de lei, discursos e publicações – está disponível
                  para download gratuito. Baixe agora, compartilhe nas suas
                  redes sociais e ajude a construir uma sociedade mais
                  consciente e participativa!
                </p>
              </div>
            </div>
          </div>
          <div className="lg:px-12 py-12">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-y-5 sm:gap-y-7 md:gap-y-0  gap-x-5">
              <button className="btn-custom bg-white px-4 py-4 rounded-2xl flex justify-between items-center gap-5">
                <span className=" text-xl">
                  <strong>Identidade Visual</strong>
                </span>
                <IconDownload className="text-[#C61212]" />
              </button>
              <button className="btn-custom bg-white px-4 py-4 rounded-2xl flex justify-between items-center gap-5">
                <span className=" text-xl">
                  <strong>Fotos tratadas</strong>
                </span>
                <IconDownload className="text-[#C61212]" />
              </button>
              <button className="btn-custom bg-white px-4 py-4 rounded-2xl flex justify-between items-center gap-5">
                <span className=" text-xl">
                  <strong>Folder Projetos</strong>
                </span>
                <IconDownload className="text-[#C61212]" />
              </button>
              <button className="btn-custom bg-white px-4 py-4 rounded-2xl flex justify-between items-center gap-5">
                <span className=" text-xl">
                  <strong>Adesivos</strong>
                </span>
                <IconDownload className="text-[#C61212]" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
}
