import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Cta() {
  return (
    <section
      id="cta"
      className="
      px-5
      sm:px-8
      lg:px-20
      py-6
      "
    >
      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        bg-green-500
        px-6
        sm:px-10
        lg:px-16
        py-14
        sm:py-16
        text-center
        text-white
        "
      >
        {/* efeito decorativo */}
        <div
          className="
          absolute
          top-0
          right-0
          w-40
          h-40
          bg-white/10
          rounded-full
          blur-2xl
          "
        />

        <div className="relative z-10">
          <h2
            className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            max-w-4xl
            mx-auto
            leading-tight
            "
          >
            Transforme a sua agricultura com inteligência artificial
          </h2>

          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-green-50
            text-sm
            sm:text-lg
            leading-7
            "
          >
            Junte-se à Visão Verde e descubra como a tecnologia pode ajudar
            agricultores a produzir melhor e compradores a encontrar produtos
            agrícolas confiáveis.
          </p>

          <div
            className="
            mt-8
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
            "
          >
            <Link to="" className="w-full sm:w-auto">
              <Button
                className="
                w-full
                sm:w-auto
                px-10
                py-6
                bg-white
                text-green-600
                font-semibold
                hover:bg-gray-100
                transition-all
                duration-300
                cursor-pointer
                hover:scale-105
                hover:shadow-lg
                "
              >
                Sou Agricultor
              </Button>
            </Link>

            <Link to="" className="w-full sm:w-auto">
              <Button
                className="
                w-full
                sm:w-auto
                px-10
                py-6
                bg-transparent
                border
                border-white
                text-white
                font-semibold
                hover:bg-white/10
                transition-all
                duration-300
                cursor-pointer
                hover:scale-105
                "
              >
                Sou Comprador
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
