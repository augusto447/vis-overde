import MainImage from "@/assets/MainImage.png";
import { Button } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { ScanCard } from "./ScannerCard";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div
        className="
          absolute
          left-6
          md:left-12
          xl:left-20
         lg: top-1/3
          -translate-y-1/2
          text-white
          max-w-xl
          z-10
        "
      >
        {/* Titulo principal */}
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-3xl
            md:text-4xl
            xl:text-5xl
            font-bold
            leading-tight
          "
        >
          A INTELIGÊNCIA ARTIFICIAL
        </motion.h1>

        {/* Titulo verde */}
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            text-3xl
            md:text-4xl
            xl:text-5xl
            font-bold
            text-green-500
            leading-tight
          "
        >
          AO SERVIÇO DA AGRICULTURA
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
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
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            gap-4
          "
        >
          <a href="#cta">
            <Button
              className="
                w-full
                sm:w-auto
                px-8
                xl:px-16
                py-6
                xl:py-8
                bg-green-500
                text-white
                hover:bg-green-600
                hover:scale-105
                transition-all
                cursor-pointer
              "
            >
              EXPERIMENTAR AGORA
              <HugeiconsIcon size={20} icon={ArrowRight02Icon} />
            </Button>
          </a>

          <a href="#sobre">
            <Button
              className="
                w-full
                sm:w-auto
                px-8
                xl:px-16
                py-6
                xl:py-8
                bg-transparent
                border
                border-white
                text-white
                hover:bg-white/10
                hover:scale-105
                transition-all
                cursor-pointer
              "
            >
              SABER MAIS
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scanner animado */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="
          absolute
          hidden
          lg:block
          right-4
          xl:right-20
          top-1/3
          -translate-y-1/2
          z-10
          scale-75
          xl:scale-90
          2xl:scale-100
        "
      >
        <ScanCard />
      </motion.div>
    </section>
  );
}
