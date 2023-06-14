"use client";
// import { ReactComponent as IconFaq } from '../../assets/images/icon-faq.svg';
import LogoFooter from "../../assets/images/logoFooter.svg";
import IconPT from "../../assets/images/icons/iconPT.svg";
import IconFaceBook from "../../assets/images/icons/iconFacebook.svg";
import IconInstagram from "../../assets/images/icons/iconInstagram.svg";
import IconFace from "../../assets/images/icons/iconFace.svg";
import IconTwitter from "../../assets/images/icons/iconTwitter.svg";
import IconYoutube from "../../assets/images/icons/iconYouTube.svg";
import IconArrow from "../../assets/images/icons/iconArrow.svg";
import { useState } from "react";

export default function FooterMain() {
  const [openFaq, setOpenFaq] = useState(0);
  function toogleFaq(e: any) {
    if (openFaq == e) {
      setOpenFaq(0);
    } else {
      setOpenFaq(e);
    }
  }

  return (
    <footer className="bg-[#3A3A3A]">
      <div className="container sm:flex sm:flex-col relative sm:px-4 lg:px-12 pt-6 pb-5">
        <div className="sm:flex-1 sm:flex sm:gap-10 lg:gap-6">
          <div className=" sm:w-4/12 lg:w-5/12">
            <div>
              <LogoFooter />
            </div>
          </div>
          <div className="sm:w-8/12 lg:w-7/12 sm:text-sm lg:text-base sm:flex gap-6 text-[#FFFFFF] pt-1">
            <p>
              <strong>Início</strong>
            </p>
            <p>
              <strong>Sobre</strong>
            </p>
            <div>
              <div className="">
                <p className="hidden sm:block">
                  <strong>Trabalho</strong>
                </p>
                <button
                  className="flex items-center gap-4 sm:hidden"
                  onClick={() => toogleFaq(1)}
                >
                  <p>
                    <strong>Trabalho</strong>
                  </p>
                  <div
                    className={`block sm:hidden duration-300 ease-in ${
                      openFaq === 1 ? "-rotate-90" : "rotate-90"
                    }`}
                  >
                    <IconArrow />
                  </div>
                </button>
              </div>
              <div
                className={`text-xs pt-1 duration-300 ease-in block ${
                  openFaq == 1
                    ? "max-h-[1000px]"
                    : "max-h-[0px] overflow-hidden sm:max-h-full sm:overflow-visible"
                }`}
              >
                <p className="font-normal opacity-70">Bandeiras</p>
                <p className="font-normal opacity-70">Projetos</p>
                <p className="font-normal opacity-70">
                  Apresente sua ideia de projeto
                </p>
              </div>
            </div>
            <div>
              <p className=" hidden sm:block">
                <strong>Midia</strong>
              </p>
              <button
                className="flex items-center gap-4 sm:hidden"
                onClick={() => toogleFaq(2)}
              >
                <p>
                  <strong>Midia</strong>
                </p>
                <div
                  className={`block sm:hidden duration-300 ease-in ${
                    openFaq === 2 ? "-rotate-90" : "rotate-90"
                  }`}
                >
                  <IconArrow />
                </div>
              </button>
              <div
                className={`text-xs pt-1 duration-300 ease-in block ${
                  openFaq == 2
                    ? "max-h-[1000px]"
                    : "max-h-[0px] overflow-hidden sm:max-h-full sm:overflow-visible"
                }`}
              >
                <p className="font-normal opacity-70">Notícias</p>
                <p className="font-normal opacity-70">Artigos</p>
                <p className="font-normal opacity-70">Conteúdos de áudio</p>
                <p className="font-normal opacity-70">Flickr</p>
                <p className="font-normal opacity-70">Material para download</p>
                <p className="font-normal opacity-70">Agenda</p>
                <p className="font-normal opacity-70">Amigos do Ricardo</p>
              </div>
            </div>
            <p>
              <strong>Comunidade</strong>
            </p>
            <p>
              <strong>Contato</strong>
            </p>
          </div>
        </div>
        <div className="sm:flex justify-between pt-5 sm:pt-12">
          <div className="flex items-center gap-7">
            <button className="duration-300 ease-in hover:scale-125">
              <IconPT className="text-white" />
            </button>
            <button className="duration-300 ease-in hover:scale-125">
              <IconInstagram className="text-white" />
            </button>
            <button className="duration-300 ease-in hover:scale-125">
              <IconFaceBook className="text-white" />
            </button>
            <button className="duration-300 ease-in hover:scale-125">
              <IconYoutube className="text-white" />
            </button>
            <button className="duration-300 ease-in hover:scale-125">
              <IconFace className="text-white" />
            </button>
            <button className="duration-300 ease-in hover:scale-125">
              <IconTwitter className="text-white" />
            </button>
          </div>
          <div className="text-[10px] text-[#FFFFFF] pt-3 sm:pt-0">
            <p>Copyright © 2023 Ricardo Vale - Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
