import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import Image from "next/image";
import ImgRicardo from "@/assets/images/img-ricardo-noticias.webp";
import Input from "@/components/input/Input";
import SetaSelect from "@/assets/images/seta-select.svg";
import SubFooter from "@/components/subFooter";
export default function Contato() {
  return (
    <div className="contato bg-[#EBEBEB]">
      <div className="bg-[#C61212] mb-10 md:mb-20">
        <div className="container lg:px-12">
          <div className="flex items-center justify-end relative">
            <div className="text-white absolute left-0 w-1/2 md:w-auto">
              <p className="text-sm sm:text-[1.375rem] -mb-2 sm:-mb-3 tracking-[0.3em] font-medium">
                FALE COM A GENTE
              </p>
              <p className="text-[1.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">
                <strong>Contato</strong>
              </p>
            </div>
            <div className="w-1/2 h-full flex justify-end relative">
              <div className="relative sm:pr-20">
                <Image
                  src={ImgRicardo}
                  width={300}
                  height={250}
                  className="pointer-events-none min-w-[100px] min-h-[100px]"
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
      <div className="mb-32">
        <div className="container">
          <div className="md:pl-40 md:pr-20 mb-10 md:mb-20">
            <p className="text-[#404040] text-base">
              Ricardo Vale acredita que a participação popular é fundamental
              para a construção de políticas públicas efetivas e para a promoção
              do bem-estar de toda a sociedade. Todas as mensagens são lidas com
              atenção e serão respondidas o mais breve possível.
            </p>
          </div>
          <div>
            <form>
              <div className="mb-4">
                <Input
                  input={{
                    placeholder: "Nome",
                    name: "Nome",
                    //   value: form?.codigoCorretor,
                    //   onChange: (e: any) =>
                    //     handleFormChange("codigoCorretor", e?.target?.value),
                  }}
                />
              </div>
              <div className="mb-4 flex justify-between gap-x-5">
                <div className="w-1/2">
                  <Input
                    input={{
                      placeholder: "Telefone",
                      name: "Telefone",
                      //   value: form?.codigoCorretor,
                      //   onChange: (e: any) =>
                      //     handleFormChange("codigoCorretor", e?.target?.value),
                    }}
                  />
                </div>
                <div className="w-1/2">
                  <Input
                    input={{
                      placeholder: "E-mail",
                      name: "E-mail",
                      //   value: form?.codigoCorretor,
                      //   onChange: (e: any) =>
                      //     handleFormChange("codigoCorretor", e?.target?.value),
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  className="w-full  border  border-[#9B9B9B] rounded-2xl text-sm text-[#676767] bg-white  py-3 px-4"
                  placeholder="Descrição"
                  cols={10}
                  rows={10}
                  minLength={10}
                ></textarea>
              </div>
              <button className="btn-custom w-full py-3 text-3xl text-white bg-[#86B084] rounded-full">
                <strong>Enviar</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
      <SubFooter />
    </div>
  );
}
