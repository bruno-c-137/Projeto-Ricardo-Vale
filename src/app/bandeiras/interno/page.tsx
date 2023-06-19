import Image from "next/image";
import ImgRicardo from "@/assets/images/img-ricardo-header-2.webp";
import BannerBandeiraInterno from "@/assets/images/banner-bandeira-interna.webp";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import SubFooter from "@/components/subFooter";
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
      <div className="mb-28">
        <div className="container">
          <div className="mb-16">
            <Image src={BannerBandeiraInterno} className="w-full" alt="" />
          </div>
          <div className="mb-20">
            <p className="text-[#404040] text-base  sm:px-20 md:px-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vulputate iaculis felis, in luctus augue luctus nec. Etiam
              convallis fermentum mattis. Nullam quis nisi mauris. In viverra
              lectus sed nulla pharetra porta. Sed eu mollis nisi. Mauris ex
              lectus, congue at risus nec, interdum egestas velit. Sed pharetra,
              mi sit amet malesuada elementum, sem purus molestie est, nec
              bibendum odio lorem vitae erat. Nam dui augue, dignissim nec felis
              sed, ultrices euismod lectus. Etiam vel ipsum vitae metus bibendum
              hendrerit. Sed laoreet nisi at erat placerat scelerisque sit amet
              sit amet dui. Pellentesque congue tincidunt varius. Mauris eget
              velit mollis, luctus tortor vel, lacinia tellus. Ut porttitor,
              arcu rutrum scelerisque laoreet, tortor tortor vehicula risus, a
              tempus felis augue a nisl
            </p>
          </div>
          <div className="bg-[#EAEAEA] rounded-2xl p-7 sm:px-10 md:p-20 shadow-lg">
            <p className="text-vermelho-1 text-3xl sm:text-4xl mb-10">
              <strong>Lorem ipsum dolor</strong>
            </p>
            <p className="text-[#404040] text-base mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vulputate iaculis felis, in luctus augue luctus nec. Etiam
              convallis fermentum mattis.
            </p>
            <div className="sm:flex justify-between">
              <div className="mb-5 sm:mb-0">
                <ul>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                </ul>
              </div>
              <div className="mb-5 sm:mb-0">
                <ul>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base mb-2 list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                  <li className="list-disc text-[#404040] text-base list-inside">
                    Lorem ipsum dolor sit amet,
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SubFooter />
      </div>
    </div>
  );
}
