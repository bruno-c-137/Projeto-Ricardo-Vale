"use client";

import { useState, useEffect } from "react";
import LogoHeader from "@/assets/images/logoHeader.svg";
import IconPT from "@/assets/images/icons/iconPT.svg";
import IconFaceBook from "@/assets/images/icons/iconFacebook.svg";
import IconInstagram from "@/assets/images/icons/iconInstagram.svg";
import IconFace from "@/assets/images/icons/iconFace.svg";
import IconTwitter from "@/assets/images/icons/iconTwitter.svg";
import IconYoutube from "@/assets/images/icons/iconYouTube.svg";
import IconArrow from "@/assets/images/icons/iconArrow.svg";
import IconWhatsApp from "@/assets/images/icons/iconWhatsApp.svg";
import IconHands from "@/assets/images/icons/iconHands.svg";
import IconAa from "@/assets/images/icons/iconAa.svg";
import IconArrowHeader from "@/assets/images/icons/iconArrowHeader.svg";

import "./style.scss";
export default function HeaderMain() {
  const [openBot, setOpenBot] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (openBot == false) {
      document
        .querySelector("html")
        ?.classList.remove("overflow-y-hidden", "md:overflow-y-auto");
    }
  }, [openBot]);

  function showBot() {
    setOpenBot(!openBot);
    document
      .querySelector("html")
      ?.classList.add("overflow-y-hidden", "md:overflow-y-auto");
  }

  function toogleFaq(e: any) {
    if (openFaq == e) {
      setOpenFaq(0);
    } else {
      setOpenFaq(e);
      setIsActive(0);
    }
  }


  function renderBorder() {
    return (
      <span className="absolute top-full left-1/2 -translate-x-1/2 inline-block w-full h-1 bg-[#C61212]"></span>
    );
  }

  const NavMenuMb = () => {
    return (
      <div
        className={`md:hidden top-0 transition-all rounded absolute px-12 sm:px-52 overflow-y-hidden z-30 bg-[#C61212] max-h-screen h-screen ${
          !!openBot
            ? "w-screen h-screen opacity-1"
            : "opacity-0 h-0 w-0 right-0 max-w-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center h-full justify-center">
          <div className="flex flex-col items-center">
            <div className="text-white underline-custon text-lg">
              <p className="mb-7">
                <strong>Início</strong>
              </p>
              <p className="mb-7">
                <strong>Sobre</strong>
              </p>
              <div className="mb-7">
                <button
                  className="flex items-center gap-4"
                  onClick={() => toogleFaq(1)}
                >
                  <p>
                    <strong>Trabalho</strong>
                  </p>
                  <div
                    className={`block duration-300 ease-in ${
                      openFaq === 1 ? "-rotate-90" : "rotate-90"
                    }`}
                  >
                    <IconArrow className="text-[#FFF]" />
                  </div>
                </button>
                <div
                  className={`text-xs pt-1 duration-300 ease-in block ${
                    openFaq == 1
                      ? "max-h-[1000px]"
                      : "max-h-[0px] overflow-hidden"
                  }`}
                >
                  <p className="font-normal opacity-70">Conquistas</p>
                  <p className="font-normal opacity-70">Bandeiras</p>
                  <p className="font-normal opacity-70">Sua Lei</p>
                  <p className="font-normal opacity-70">Projetos</p>
                </div>
              </div>
              <div className=" mb-7">
                <button
                  className="flex items-center gap-4"
                  onClick={() => toogleFaq(2)}
                >
                  <p>
                    <strong>Midia</strong>
                  </p>
                  <div
                    className={`block duration-300 ease-in ${
                      openFaq === 2 ? "-rotate-90" : "rotate-90"
                    }`}
                  >
                    <IconArrow className="text-[#FFF]" />
                  </div>
                </button>
                <div
                  className={`text-xs pt-1 duration-300 ease-in block ${
                    openFaq == 2
                      ? "max-h-[1000px]"
                      : "max-h-[0px] overflow-hidden"
                  }`}
                >
                  <p className="font-normal opacity-70">Sala de Imprensa</p>
                  <p className="font-normal opacity-70">Downloads</p>
                  <p className="font-normal opacity-70">Agenda</p>
                  <p className="font-normal opacity-70">Amigos do Ricardo</p>
                </div>
              </div>
              <p className="mb-7">
                <strong>Comunidade</strong>
              </p>
              <p className="mb-7">
                <strong>Contato</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="header-main bg-[#FFFFFF] h-full w-full">
      <div className=" w-full h-full">{NavMenuMb()}</div>
      <div className="bg-[#FFFFFF] z-50 relative">
        <div className="flex z-50 relative items-center bg-[#FFFFFF] justify-between sm:justify-center py-4 sm:gap-10 md:gap-6 lg:gap-10 container">
          <div>
            <LogoHeader />
          </div>
          <div className="gap-4 hidden md:flex">
            <div className="relative">
              <button onClick={() => {setIsActive(1); setOpenFaq(0)}} className="">
                Início
              </button>
              {isActive == 1 && renderBorder()}
            </div>
            <div className="relative">
              <button onClick={() => {setIsActive(2); setOpenFaq(0)}}>Sobre</button>
              {isActive == 2 && renderBorder()}
            </div>
            <div className={`relative w-full`}>
              <button
                className=" flex items-center gap-1"
                onClick={() => toogleFaq(1)}
              >
                <span>Trabalho</span>
                <IconArrowHeader
                  className={`block transition-all ${
                    openFaq === 1 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 bg-[#F4F4F4] transition-all rounded-lg px-3 ${
                  openFaq == 1
                    ? "max-h-[1000px] py-2"
                    : "max-h-[0px] overflow-hidden py-0"
                }`}
              >
                <p>Conquistas</p>
                <p>Bandeiras</p>
                <p>Sua Lei</p>
                <p>Projetos</p>
              </div>
            </div>
            <div className={`relative w-full`}>
              <button
                className="flex items-center gap-1 w-full"
                onClick={() => toogleFaq(2)}
              >
                <span>Midia</span>
                <IconArrowHeader
                  className={`block transition-all ${
                    openFaq === 2 ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 bg-[#F4F4F4] transition-all rounded-lg px-3 ${
                  openFaq == 2
                    ? "max-h-[1000px] py-2 min-w-[165px]"
                    : "max-h-[0px] overflow-hidden py-0"
                }`}
              >
                <p>Sala de Imprensa</p>
                <p>Downloads</p>
                <p>Agenda</p>
                <p>Amigos do Ricardo</p>
              </div>
            </div>
            <div className="relative">
              <button onClick={() => {setIsActive(3); setOpenFaq(0)}}>Comunidade</button>
              {isActive == 3 && renderBorder()}
            </div>
            <div className="relative">
              <button onClick={() => {setIsActive(4); setOpenFaq(0)}}>Contato</button>
              {isActive == 4 && renderBorder()}
            </div>
          </div>
          <div className="hidden sm:flex items-center sm:gap-4 md:gap-2 lg:gap-4">
            <button className=" duration-300 ease-in hover:scale-125">
              <IconPT className="text-[#C61212]" />
            </button>
            <button className=" duration-300 ease-in hover:scale-125">
              <IconInstagram className="text-[#C61212]" />
            </button>
            <button className=" duration-300 ease-in hover:scale-125">
              <IconFaceBook className="text-[#C61212]" />
            </button>
            <button className=" duration-300 ease-in hover:scale-125">
              <IconYoutube className="text-[#C61212]" />
            </button>
            <button className=" duration-300 ease-in hover:scale-125">
              <IconFace className="text-[#C61212]" />
            </button>
            <button className=" duration-300 ease-in hover:scale-125">
              <IconTwitter className="text-[#C61212]" />
            </button>
            <button className=" border border-[#C61212] px-2 text-[12px] rounded-[36px] text-[#C61212]">
              Link.tree
            </button>
            <div className=" h-8 w-[1px] border border-[#C61212]"></div>
            <button className=" duration-300 ease-in hover:scale-125">
              <IconHands className="text-[#C61212]" />
            </button>
            <button className=" duration-300 ease-in hover:scale-125">
              <IconAa />
            </button>
          </div>
          <div className="hidden sm:flex">
            <IconWhatsApp />
          </div>
          <div className={`md:hidden ${!!openBot && "ativado"}`}>
            <div className="">
              <button
                data-bb-acao="header"
                data-bb-rotulo="menu-mobile"
                onClick={showBot}
                className={`z-30 py-4 rounded`}
              >
                <span className="hamburguer"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
