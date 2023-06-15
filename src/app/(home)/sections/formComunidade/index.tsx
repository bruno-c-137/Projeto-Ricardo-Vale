import Input from "@/components/input/Input";
import SetaSelect from "@/assets/images/seta-select.svg";
export default function FormComunidade() {
  return (
    <div className="form-comunidade">
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
                placeholder: "Data nasc. ",
                name: "Data nasc. ",
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
                placeholder: "E-mail",
                name: "E-mail",
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
              className=" w-full appearance-none border border-[#9B9B9B] rounded-full text-sm text-[#676767] bg-white outline-none py-2 px-4"
            >
              <option disabled value="">
                Bandeira
              </option>
              <option value="netflix">Bandeira</option>
              <option value="hbo-max">Bandeira</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <Input
            input={{
              placeholder: "Cidade",
              name: "Cidade",
              //   value: form?.codigoCorretor,
              //   onChange: (e: any) =>
              //     handleFormChange("codigoCorretor", e?.target?.value),
            }}
          />
        </div>
        <button className="btn-custom w-full py-3 text-3xl text-white bg-[#86B084] rounded-full">
          <strong>Quero fazer parte!</strong>
        </button>
      </form>
    </div>
  );
}
