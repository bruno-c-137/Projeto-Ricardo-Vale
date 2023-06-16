import Image from "next/image";
import ImgRicardo from "@/assets/images/ricardoPGSobre.webp";
import IconStarsWhiteSmall from "@/assets/images/icons/iconStarWhiteSmall.svg.svg";
import IconStarsWhiteMedium from "@/assets/images/icons/iconStarWhiteMedium.svg";
import IconStarsWhiteBig from "@/assets/images/icons/iconStarWhiteBig.svg";
import IconStarsSmall from "@/assets/images/icons/iconStarsSmall.svg";
import Avatar from "@/assets/images/avatarArtigo.png";
import BoxArtigos from "./sections/boxArtigos";
import SubFooter from "@/components/subFooter";

export default function Artigos() {
  return (
    <>
      <div className="bg-[#F5F5F5]">
        <div className="bg-[#C61212]">
          <div className="container lg:px-12">
            <div className="flex items-center justify-between">
              <div className="text-white w-1/2">
                <p className="text-sm sm:text-[1.375rem] -mb-2 sm:-mb-3 tracking-[0.3em] font-medium">
                  VEJA
                </p>
                <p className="text-[1.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem]">
                  <strong>Artigo</strong>
                </p>
              </div>
              <div className="w-1/2 h-full flex justify-end relative">
                <div className="relative sm:pr-20">
                  <Image
                    src={ImgRicardo}
                    width={350}
                    height={300}
                    className="pointer-events-none min-w-[100px] min-h-[100px]"
                    alt="Ricardo Vale"
                  />
                  <div className="absolute top-[35%] right-[16%] sm:right-[30%]">
                    <IconStarsWhiteSmall />
                  </div>
                  <div className="absolute bottom-[7%] left-[1%] sm:left-0">
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
          <div className="flex justify-center items-center text-[#404040] relative">
            <div className="sm:w-10/12 lg:w-8/12">
              <div className="lg:px-10">
                <div className="flex items-center gap-6">
                  <Image
                    src={Avatar}
                    className="pointer-events-none min-w-[100px] min-h-[100px] rounded-full"
                    alt="Avatar Foto"
                  />
                  <div>
                    <p className="text-[#C61212] text-xs">
                      <strong>Escrito por</strong>
                    </p>
                    <p className="text-[#2F2F2F] font-semibold text-2xl sm:text-[1.875rem]">
                      João da Silva
                    </p>
                  </div>
                </div>
                <div className="pt-12">
                  <p className="text-[#404040] text-xs font-medium">
                    10/01/2023
                  </p>
                  <div className="pt-5">
                    <p className="text-[#2F2F2F] text-4xl sm:text-[3.125rem] sm:leading-[3.5rem]">
                      <strong>
                        Lorem Ipsum is simply dummy text of the printing
                      </strong>
                    </p>
                    <div className="pt-5 text-base font-normal text-[#404040] text-justify">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer vulputate iaculis felis, in luctus augue luctus
                        nec. Etiam convallis fermentum mattis. Nullam quis nisi
                        mauris. In viverra lectus sed nulla pharetra porta. Sed
                        eu mollis nisi. Mauris ex lectus, congue at risus nec,
                        interdum egestas velit. Sed pharetra, mi sit amet
                        malesuada elementum, sem purus molestie est, nec
                        bibendum odio lorem vitae erat. Nam dui augue, dignissim
                        nec felis sed, ultrices euismod lectus. Etiam vel ipsum
                        vitae metus bibendum hendrerit. Sed laoreet nisi at erat
                        placerat scelerisque sit amet sit amet dui. Pellentesque
                        congue tincidunt varius. Mauris eget velit mollis,
                        luctus tortor vel, lacinia tellus. Ut porttitor, arcu
                        rutrum scelerisque laoreet, tortor tortor vehicula
                        risus, a tempus felis augue a nisl.
                      </p>
                      <p>
                        Phasellus molestie laoreet interdum. Proin facilisis
                        convallis mauris, nec condimentum urna hendrerit id.
                        Morbi ut orci eget nisl accumsan elementum eget in mi.
                        Maecenas finibus ullamcorper eros sit amet interdum.
                        Integer vitae ipsum sapien. Nulla eu leo vehicula,
                        cursus elit sit amet, imperdiet nunc. Morbi pharetra
                        blandit odio, porta dictum est congue a. Phasellus
                        ultricies ornare velit, ut porttitor augue rhoncus in.
                        Maecenas ac tortor eget lacus aliquam lacinia. Nam
                        luctus mi eget augue elementum, nec faucibus ipsum
                        hendrerit.
                      </p>
                      <p>
                        Quisque viverra dapibus diam, a facilisis ex ultrices
                        sed. Aliquam interdum diam id tristique facilisis.
                        Phasellus arcu felis, sodales id dignissim ac, varius eu
                        neque. Quisque eu fermentum nisi. Quisque dapibus vel
                        elit non venenatis. Pellentesque arcu lorem, molestie
                        aliquet justo sed, finibus semper tortor. Sed iaculis
                        pulvinar ante, ac lobortis dolor imperdiet quis.
                        Praesent eu scelerisque orci. Nam dapibus, erat et
                        elementum lobortis, est diam suscipit velit, sit amet
                        ullamcorper ex augue cursus nisi. Nunc non egestas
                        lacus.
                      </p>
                      <p>
                        Quisque non est faucibus, gravida leo sed, luctus
                        tortor. Aenean quis nunc vitae dui mattis consequat a
                        vitae ante. Aenean in orci et sapien dictum aliquet.
                        Praesent vulputate accumsan ex, et facilisis eros
                        vulputate non. Aenean vel feugiat augue. Quisque
                        euismod, eros eu mollis lacinia, justo felis sodales
                        lorem, in tristique tellus ante eget nunc. Vivamus quis
                        justo ultricies, pretium libero in, egestas augue. Fusce
                        velit odio, tincidunt mattis fermentum in, sodales
                        interdum sapien. Integer eleifend lorem nec sodales
                        consectetur. Nullam imperdiet arcu sit amet lorem
                        rhoncus, vel vulputate tellus mattis. Proin augue massa,
                        imperdiet ut posuere quis, maximus viverra magna.
                        Pellentesque at lorem nibh. Sed in scelerisque massa.
                        Pellentesque aliquet velit sed elit auctor, nec
                        consectetur risus consequat. Ut blandit urna vel lacus
                        dictum dictum. Sed tincidunt eros at libero placerat
                        gravida.
                      </p>
                      <p>
                        Nullam felis magna, convallis luctus elit vel, mollis
                        maximus nunc. Fusce eu nulla in libero tincidunt
                        ullamcorper molestie auctor neque. Sed lobortis sit amet
                        lacus a lacinia. Suspendisse potenti. Duis fringilla
                        nibh eu sapien efficitur, quis tincidunt metus finibus.
                        Maecenas laoreet tellus nec laoreet rutrum. Etiam
                        vestibulum lacus vel nunc dictum molestie. In hac
                        habitasse platea dictumst. Mauris pharetra nulla quis
                        turpis porttitor lobortis vel eget justo. Aenean odio
                        lorem, aliquam vel pellentesque eu, tempus a sem.
                      </p>
                      <p>
                        Maecenas efficitur arcu sed dui pellentesque, ut blandit
                        diam sagittis. Ut lacus nulla, pretium a diam nec,
                        lacinia tristique lacus. Fusce porta elit sit amet nunc
                        placerat scelerisque. In commodo arcu ac nulla tincidunt
                        porta. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Mauris vulputate imperdiet augue, vel
                        sodales dui euismod nec. Fusce vehicula gravida
                        facilisis. Nam sit amet sagittis nibh. Nam eleifend ex
                        vitae nisi molestie, non cursus sem efficitur. Maecenas
                        velit magna, luctus ut nibh eu, vehicula auctor erat.
                        Suspendisse fringilla ex quis ligula malesuada
                        imperdiet. Duis sollicitudin varius ipsum, eget sagittis
                        leo sagittis quis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-12 relative">
            <div className="py-10">
              <div className="w-full h-[2px] bg-[#D9D9D9] "></div>
            </div>
            <div>
              <p className="text-[#2F2F2F] text-4xl sm:text-[3.125rem]">
                <strong>Mais artigos</strong>
              </p>
            </div>
            <div className="pt-10">
              <BoxArtigos />
            </div>
            <div className="hidden sm:block absolute sm:-bottom-[30%] sm:right-[10%]">
              <IconStarsSmall />
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
}
