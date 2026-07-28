import MainImage from "@/assets/MainImage.png";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { ScanCard } from "./ScannerCard";

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <img
        className="
          w-full
          h-[650px]
          md:h-[800px]
          object-cover
        "
        src={MainImage}
        alt="Agricultura inteligente"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo */}
      <div
        className="
        absolute
        left-6
        md:left-20
        top-1/2
        -translate-y-1/2
        text-white
        max-w-xl
        "
      >
        <h1
          className="
          text-3xl
          md:text-5xl
          font-bold
          leading-tight
          "
        >
          A INTELIGÊNCIA ARTIFICIAL
        </h1>

        <h1
          className="
          text-3xl
          md:text-5xl
          font-bold
          text-green-500
          leading-tight
          "
        >
          AO SERVIÇO DA AGRICULTURA
        </h1>

        <p
          className="
          mt-5
          md:mt-6
          text-base
          md:text-lg
          leading-7
          "
        >
          A Visão Verde utiliza inteligência artificial para identificar
          doenças, pragas e deficiências nas culturas, oferecendo diagnósticos
          precisos e recomendações eficazes.
        </p>

        <div
          className="
          mt-8
          flex
          flex-col
          sm:flex-row
          gap-4
          "
        >
          <Link to="#cta">
            <Button
              className="
              w-full
              sm:w-auto
              px-8
              md:px-20
              py-6
              md:py-8
              bg-green-500
              text-white
              hover:bg-green-600
              hover:scale-105
              transition-all
              "
            >
              EXPERIMENTAR AGORA
              <HugeiconsIcon size={20} icon={ArrowRight02Icon} />
            </Button>
          </Link>

          <Link to="#sobre">
            <Button
              className="
              w-full
              sm:w-auto
              px-8
              md:px-20
              py-6
              md:py-8
              bg-transparent
              border
              border-white
              text-white
              hover:bg-white/10
              transition-all
              "
            >
              SABER MAIS
            </Button>
          </Link>
        </div>
      </div>

      {/* Scanner desktop */}
      <div
        className="
        absolute
        right-48
        top-[45%]
        hidden
        lg:block
        -translate-y-1/2
        "
      >
        <ScanCard />
      </div>
    </section>
  );
}
