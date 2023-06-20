"use client";
import ImgBannerRicardo from "@/assets/images/img-banner_Ricardo.webp";
import ImgTeste from "@/assets/images/banner-bandeira-interna.webp";
import ImgBnnerValeLutar from "@/assets/images/img-banner-vale-lutar.webp";
import "./style.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function BannerMain() {
  const triggerRef = useRef(null);
  const triggeredElementRef = useRef(null);
  const triggerRef2 = useRef(null);
  const triggeredElementRef2 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(triggeredElementRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        pin: true,
        markers: true,
        scrub: true,
        end: 100,
      },
      opacity: 0,
    });
    gsap.from(triggeredElementRef2.current, {
      scrollTrigger: {
        // trigger: triggerRef2.current,
        start: "top top",
        pin: true,
        markers: true,
        scrub: true,
        end: 100,
      },
      opacity: 0,
    });
  }, []);
  return (
    <div className="banner-main ">
      <div className="relative">
        <div ref={triggerRef} className="bg-vermelho-1">
          <div className="container relative">
            <img
              ref={triggeredElementRef}
              src={ImgBnnerValeLutar.src}
              className="sm:h-[40rem] w-full"
              alt=""
            />
            <div className="absolute top-0">
              <img
                ref={triggeredElementRef2}
                className="sm:h-[40rem] w-full"
                src={ImgBannerRicardo.src}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <div ref={triggerRef2} className="absolute top-0  w-full">
          <div className="container"></div>
        </div> */}
      </div>
    </div>
  );
}
