import Image from "next/image";
import ImgRicardoWhats from "@/assets/images/img-ricardoWhats.webp";
import IconWhats from "@/assets/images/icons/iconWhatsWhite.svg";
import IconArrow from "../../assets/images/icons/iconArrow.svg";
import ImgZap from "@/assets/images/img-zap.png";

export default function SubFooter() {
  return (
    <>
      <div className=" bg-[#E2E2E2]">
        <div className="container lg:px-12">
          <div className="flex items-center justify-center gap-5 lg:gap-7">
            <div className=" hidden sm:block text-[2rem] lg:text-[3.125rem] font-medium">
              <p className=" leading-[24px]">Me chame</p>
              <p>no Whatsapp</p>
            </div>
            <div className="pointer-events-none hidden lg:block">
              <Image src={ImgZap} alt="Icon whatsApp" />
            </div>
            <div className="-mt-10">
              <Image
                src={ImgRicardoWhats}
                width={300}
                height={200}
                className="pointer-events-none max-w-[150px] sm:max-w-[200px] md:max-w-full"
                alt="Ricardo Vale"
              />
            </div>
            <div>
                <button className="btn-custom bg-[#67D449] rounded-[50px] text-sm sm:text-base flex items-center text-[#FFF] py-2 px-2 sm:px-4 gap-1 sm:gap-3">
                    <IconWhats /> 
                    <span>Whats do Ricardo</span>
                    <IconArrow className="hidden sm:block" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
