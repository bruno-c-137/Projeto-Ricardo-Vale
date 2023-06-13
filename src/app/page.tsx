import ImgBannerRicardo from "@/assets/images/img-banner_Ricardo.webp";
import ImgMst from "@/assets/images/img-mst-v2.webp";
import AspL from "@/assets/images/asp-l.webp";
import AspR from "@/assets/images/asp-r.webp";
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
                <p className="text-vermelho-1 text-xl text-center">
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
    </div>
  );
}
