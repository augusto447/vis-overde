import {
  AiBrain01Icon,
  ChartIncreaseIcon,
  ImageUpload01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const steps = [
  {
    icon: ImageUpload01Icon,
    title: "Envie uma imagem",
    description:
      "Capture uma imagem da sua cultura para iniciar a análise inteligente.",
  },
  {
    icon: AiBrain01Icon,
    title: "Análise com IA",
    description:
      "A inteligência artificial identifica doenças, pragas e problemas nas culturas.",
  },
  {
    icon: ChartIncreaseIcon,
    title: "Receba recomendações",
    description:
      "Obtenha sugestões personalizadas para melhorar a produtividade.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-5 sm:px-10 lg:px-20">
      <div className="text-center mb-12 lg:mb-16">
        <h2
          className="
          text-3xl 
          sm:text-4xl 
          font-bold
        "
        >
          Como funciona a <span className="text-green-500">Visão Verde</span>
        </h2>

        <p
          className="
          mt-5
          text-gray-600
          max-w-2xl
          mx-auto
          text-sm
          sm:text-base
          leading-7
        "
        >
          Um processo simples que transforma imagens em decisões inteligentes
          para agricultores e compradores.
        </p>
      </div>

      <div
        className="
        grid 
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        lg:gap-8
      "
      >
        {steps.map((step) => (
          <Card
            key={step.title}
            className="
              rounded-3xl
              border
              bg-white
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              cursor-pointer
              h-full
            "
          >
            <CardHeader
              className="
                flex
                flex-col
                items-center
                text-center
                p-6
                sm:p-8
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  rounded-2xl
                  bg-green-50
                  mb-5
                "
              >
                <HugeiconsIcon
                  icon={step.icon}
                  size={35}
                  className="sm:w-10 sm:h-10"
                  color="#22c55e"
                />
              </div>

              <CardTitle
                className="
                  text-lg
                  sm:text-xl
                "
              >
                {step.title}
              </CardTitle>

              <CardDescription
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  leading-6
                "
              >
                {step.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
