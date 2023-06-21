import Image from "next/image";
import ImgRicardoWhats from "@/assets/images/img-ricardoWhats.webp";
import IconWhats from "@/assets/images/icons/iconWhatsWhite.svg";
import IconArrow from "../../assets/images/icons/iconArrow.svg";
import ImgZap from "@/assets/images/img-zap.webp";
import StarSubFooter from "@/assets/images/star-sub-footer.webp";

export default function SubFooter() {
  return (
    <>
      <div className=" bg-[#E2E2E2]">
        <div className="container lg:px-12">
          <div className="flex  justify-center gap-5 lg:gap-7">
            <div className=" hidden sm:flex sm:flex-col justify-center text-[2rem] lg:text-[3.125rem] font-medium  ">
              <p className=" leading-[24px]">Me chame</p>
              <p>no Whatsapp</p>
            </div>
            <div className="pointer-events-none hidden lg:flex lg:items-center">
              <Image src={ImgZap} alt="Icon whatsApp" />
            </div>
            <div className="-mt-10">
              <Image
                src={ImgRicardoWhats}
                width={300}
                height={200}
                className="pointer-events-none max-w-[150px] sm:max-w-[200px] md:max-w-full h-auto w-auto"
                alt="Ricardo Vale"
              />
            </div>
            <div className="flex flex-col justify-center items-end relative">
              <div className="absolute -top-5 sm:-top-10 w-1/3 md:w-auto">
                <img src={StarSubFooter.src} alt="" />
              </div>
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
