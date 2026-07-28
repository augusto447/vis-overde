import { HugeiconsIcon } from "@hugeicons/react";
import { Card } from "./ui/card";
import AboutImage from "@/assets/aboutImage.png";
import {
  AiBrain01Icon,
  ChartIncreaseIcon,
  Plant04Icon,
} from "@hugeicons/core-free-icons";

const features = [
  {
    icon: Plant04Icon,
    title: "Análise do solo e culturas",
    description:
      "Monitorizamos a qualidade do solo e a saúde das plantas para identificar problemas antes que afetem a produção.",
  },
  {
    icon: AiBrain01Icon,
    title: "Diagnóstico com Inteligência Artificial",
    description:
      "A IA analisa imagens e dados agrícolas para identificar doenças, pragas e deficiências com maior precisão.",
  },
  {
    icon: ChartIncreaseIcon,
    title: "Produção mais eficiente",
    description:
      "Receba recomendações inteligentes para reduzir perdas, aumentar produtividade e melhorar resultados.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      className="
      py-16
      sm:py-20
      lg:py-24
      px-5
      sm:px-8
      lg:px-20
      "
    >
      {/* Header */}
      <div
        className="
        text-center
        mb-12
        lg:mb-16
        "
      >
        <span
          className="
          text-green-500
          font-semibold
          text-sm
          sm:text-base
          "
        >
          🌱 Agricultura inteligente
        </span>

        <h2
          className="
          mt-3
          text-3xl
          sm:text-4xl
          font-bold
          "
        >
          Sobre a <span className="text-green-500">Visão Verde</span>
        </h2>

        <p
          className="
          mt-5
          max-w-3xl
          mx-auto
          text-gray-600
          leading-7
          text-sm
          sm:text-base
          "
        >
          Uma plataforma inteligente que combina agricultura e inteligência
          artificial para analisar solo, culturas e produtos agrícolas, ajudando
          agricultores e compradores a tomar decisões mais rápidas e
          inteligentes.
        </p>
      </div>

      {/* Conteúdo */}
      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10
        lg:gap-14
        items-center
        "
      >
        {/* Imagem */}
        <div
          className="
          overflow-hidden
          rounded-3xl
          h-[320px]
          sm:h-[420px]
          lg:h-[560px]
          bg-gray-100
          "
        >
          <img
            src={AboutImage}
            alt="Agricultura inteligente"
            className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
            "
          />
        </div>

        {/* Texto */}
        <div>
          <h3
            className="
            text-2xl
            sm:text-3xl
            font-bold
            leading-tight
            "
          >
            Do solo ao consumidor final
          </h3>

          <p
            className="
            mt-5
            text-gray-600
            leading-7
            text-sm
            sm:text-base
            "
          >
            A Visão Verde utiliza inteligência artificial para transformar dados
            agrícolas em informações úteis. A plataforma ajuda agricultores a
            compreenderem melhor o solo e as culturas, enquanto oferece maior
            transparência aos compradores sobre os produtos agrícolas.
          </p>

          {/* Cards */}
          <div
            className="
            mt-8
            grid
            gap-5
            "
          >
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="
                  p-4
                  sm:p-5
                  rounded-2xl
                  border
                  bg-white
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-green-300
                  hover:shadow-xl
                  "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-4
                    "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-xl
                      bg-green-50
                      shrink-0
                      "
                  >
                    <HugeiconsIcon
                      icon={feature.icon}
                      size={30}
                      color="#22c55e"
                    />
                  </div>

                  {/* Texto */}
                  <div>
                    <h4
                      className="
                        font-bold
                        text-base
                        sm:text-lg
                        "
                    >
                      {feature.title}
                    </h4>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-gray-600
                        leading-6
                        "
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
