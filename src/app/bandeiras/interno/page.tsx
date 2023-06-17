import Image from "next/image";
import ImgRicardo from "@/assets/images/img-ricardo-header-2.webp";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
export default function Interno() {
  return (
    <div className="interno">
      <div className="bg-[#C61212] mb-10 md:mb-20">
        <div className="container lg:px-12">
          <div className="flex items-center justify-end relative">
            <div className="text-white absolute left-0">
              <p className="text-sm sm:text-[1.375rem] -mb-2 sm:-mb-3 tracking-[0.3em] font-medium">
                BANDEIRA
              </p>
              <p className="text-[1.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">
                <strong>Agricultura Familiar</strong>
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
    </div>
  );
}
