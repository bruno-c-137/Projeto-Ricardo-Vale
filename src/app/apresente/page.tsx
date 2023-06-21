import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import Image from "next/image";
import ImgRicardo from "@/assets/images/ricardopgapresente.webp";
import Input from "@/components/input/Input";
import SetaSelect from "@/assets/images/seta-select.svg";
import SubFooter from "@/components/subFooter";
export default function Apresente() {
  return (
    <div className="apresente bg-[#EBEBEB]">
      <div className="bg-[#C61212] mb-10 md:mb-20">
        <div className="container lg:px-12">
          <div className="flex items-center justify-end relative">
            <div className="text-white absolute left-0 w-1/2 md:w-auto">
              <p className="text-sm sm:text-[1.375rem] -mb-2 sm:-mb-3 tracking-[0.3em] font-medium">
                APRESENTE SUA
              </p>
              <p className="text-[1.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">
                <strong>Ideia de projeto</strong>
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
      <div className="mb-20">
        <div className="container">
          <div className="md:pl-40 md:pr-20 mb-10 md:mb-20">
            <p className="text-[#404040] text-base">
              Ricardo Vale é um representante comprometido com a população do
              Distrito Federal e está sempre aberto a ouvir as demandas e ideias
              dos cidadãos. Se você tem alguma sugestão de projeto de lei que
              possa contribuir para melhorar a qualidade de vida dos
              brasilienses, compartilhe conosco e faça a sua voz ser ouvida.
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

              <div className="mb-4 flex justify-between gap-x-5">
                <div className="w-1/2">
                  <Input
                    input={{
                      placeholder: "Anexo",
                      name: "Anexo",
                      //   value: form?.codigoCorretor,
                      //   onChange: (e: any) =>
                      //     handleFormChange("codigoCorretor", e?.target?.value),
                    }}
                  />
                </div>
                <div className="w-1/2 relative">
                  <div className="absolute h-full right-0 flex  items-center pr-4 pointer-events-none">
                    <SetaSelect />
                  </div>
                  <select
                    required
                    className=" w-full appearance-none border border-[#9B9B9B] rounded-full text-sm text-[#676767] bg-white outline-none py-3 px-4"
                  >
                    <option disabled value="">
                      Instituição
                    </option>
                    <option value="netflix">Bandeira</option>
                    <option value="hbo-max">Bandeira</option>
                  </select>
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
