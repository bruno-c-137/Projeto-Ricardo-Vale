"use client";
import ImgBannerRicardo from "@/assets/images/img-banner_Ricardo.webp";
import ImgBnnerValeLutar from "@/assets/images/img-banner-vale-lutar.webp";
import "./style.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function BannerMain() {
  const triggerRef = useRef<any>(null);
  const triggeredElementRef = useRef<any>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(triggerRef.current, {
      scrollTrigger: {
        trigger: '.gsap-scroll',
        start: "top top",
        pin: '.gsap-scroll',
        markers: false,
        scrub: 1,
        end: "+=500",
      },
      opacity: 0,
    });
  }, []);
  return (
    <div className="banner-main bg-vermelho-1">
      <div className="container relative">
        <div>
          <img
            className="max-h-full w-full absolute top-0 left-1/2 -translate-x-1/2"
            src={ImgBannerRicardo.src}
            alt=""
          />
        </div>
        <div ref={triggerRef} className="relative bg-vermelho-1">
          <img
            src={ImgBnnerValeLutar.src}
            className="mx-auto"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
