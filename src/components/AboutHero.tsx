"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DotKnot } from "./DotKnot";

gsap.registerPlugin(useGSAP);

export default function AboutHero() {
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement>(null);

  const title = "Inovador. Criador. Disruptivo.";
  const splitTitle = useMemo(
    () =>
      title.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="word inline-block">{w}&nbsp;</span>
        </span>
      )),
    [title]
  );

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title .word",
        { y: 110, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-button",
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1,0.5)" },
          "-=0.4"
        );
    },
    { scope: container }
  );

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#about-section");
    if (nextSection) {
      const top = nextSection.getBoundingClientRect().top + window.scrollY - 90; // 👈 sobe 80px
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={container}
      className="relative w-full h-[92vh] md:h-screen overflow-hidden"
    >
      {/* Fundo 3D */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            {/* Ajuste os parâmetros pra chegar exatamente no formato que você curtir */}
            <DotKnot
              radius={2}
              tube={0.55}
              segments={1500}
              size={0.038}
              speed={0.18}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-black/20 via-black/20 to-black/80 pointer-events-none" />

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="hero-title font-extrabold leading-[0.9] text-5xl md:text-7xl lg:text-9xl tracking-tight">
          {splitTitle}
        </h1>
        <button
          className="hero-button mt-10 px-6 py-3 rounded-full bg-white text-black font-semibold flex items-center gap-2"
          onClick={scrollToNextSection} // troque para o id real (ex.: /#portfolio)
        >
          Me conheça <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
