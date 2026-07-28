import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiBrain01Icon,
  ChartIncreaseIcon,
  Leaf01Icon,
  ShoppingCart01Icon,
} from "@hugeicons/core-free-icons";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const benefits = [
  {
    icon: AiBrain01Icon,
    title: "Decisões agrícolas inteligentes",
    description:
      "A inteligência artificial analisa dados do solo e das culturas para ajudar agricultores a tomar melhores decisões.",
  },
  {
    icon: Leaf01Icon,
    title: "Redução de perdas",
    description:
      "Identifique doenças, pragas e problemas agrícolas antes que prejudiquem a produção.",
  },
  {
    icon: ChartIncreaseIcon,
    title: "Maior produtividade",
    description:
      "Melhore os resultados da produção através de recomendações personalizadas e eficientes.",
  },
  {
    icon: ShoppingCart01Icon,
    title: "Mais confiança para compradores",
    description:
      "Compradores encontram produtos agrícolas com mais informações sobre qualidade e origem.",
  },
];

export function Benefits() {
  return (
    <section id="beneficio" className="px-6 md:px-20 py-8">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Benefícios da <span className="text-green-500">Visão Verde</span>
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-gray-600">
          Tecnologia inteligente para transformar a forma como agricultores
          produzem e compradores escolhem.
        </p>
      </div>

      <div
        className="
        grid 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-8
      "
      >
        {benefits.map((benefit) => (
          <Card
            key={benefit.title}
            className="
              min-h-[320px]
              rounded-3xl
              border
              bg-white
              transition-all
              duration-300
              hover:-translate-y-3
              hover:shadow-2xl
              hover:border-green-200
            "
          >
            <CardHeader
              className="
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-8
              "
            >
              <div
                className="
                  w-20
                  h-20
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-green-50
                  mb-6
                "
              >
                <HugeiconsIcon icon={benefit.icon} size={40} color="#22c55e" />
              </div>

              <CardTitle
                className="
                  text-xl
                  font-bold
                "
              >
                {benefit.title}
              </CardTitle>

              <CardDescription
                className="
                  mt-4
                  leading-7
                  text-gray-600
                "
              >
                {benefit.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
