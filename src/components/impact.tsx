import { HugeiconsIcon } from "@hugeicons/react";
import {
  UserGroupIcon,
  Leaf01Icon,
  AiBrain01Icon,
  ShoppingCart01Icon,
  Plant04Icon,
} from "@hugeicons/core-free-icons";
import { Card, CardTitle } from "./ui/card";

const impacts = [
  {
    icon: UserGroupIcon,
    value: "+500",
    title: "Agricultores apoiados",
    description: "Ajudamos produtores a tomar melhores decisões agrícolas.",
  },
  {
    icon: Leaf01Icon,
    value: "-30%",
    title: "Menos perdas agrícolas",
    description: "Detecção antecipada de problemas nas culturas e no solo.",
  },
  {
    icon: AiBrain01Icon,
    value: "IA",
    title: "Análises inteligentes",
    description: "Diagnósticos rápidos através de inteligência artificial.",
  },
  {
    icon: ShoppingCart01Icon,
    value: "+1000",
    title: "Produtos conectados",
    description: "Maior ligação entre agricultores e compradores.",
  },
];

export function Impact() {
  return (
    <>
      {/* Impacto */}
      <section id="impacto" className="px-5 sm:px-8 lg:px-20 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            O impacto da <span className="text-green-500">Visão Verde</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
            Tecnologia inteligente para criar uma agricultura mais sustentável,
            eficiente e conectada.
          </p>
        </div>

        <div
          className="
          grid 
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        "
        >
          {impacts.map((impact) => (
            <Card
              key={impact.title}
              className="
              p-6
              rounded-3xl
              text-center
              border
              bg-white
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >
              <div
                className="
                mx-auto
                flex
                items-center
                justify-center
                w-16
                h-16
                rounded-2xl
                bg-green-50
                "
              >
                <HugeiconsIcon icon={impact.icon} size={35} color="#22c55e" />
              </div>

              <h3
                className="
                mt-5
                text-4xl
                font-bold
                text-green-500
                "
              >
                {impact.value}
              </h3>

              <CardTitle className="mt-3 text-lg">{impact.title}</CardTitle>

              <p
                className="
                mt-3
                text-sm
                text-gray-600
                leading-6
                "
              >
                {impact.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Público alvo */}
      <section
        className="
        px-5
        sm:px-8
        lg:px-20
        py-20
        bg-gray-50
        "
      >
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Para quem é a <span className="text-green-500">Visão Verde</span>
          </h2>

          <p className="mt-5 text-gray-600">
            Uma plataforma criada para todo o ecossistema agrícola.
          </p>
        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          "
        >
          {/* Agricultores */}
          <Card
            className="
            p-8
            sm:p-10
            rounded-3xl
            hover:shadow-xl
            transition
            "
          >
            <div
              className="
              flex
              items-center
              justify-center
              w-20
              h-20
              rounded-2xl
              bg-green-50
              "
            >
              <HugeiconsIcon icon={Plant04Icon} size={55} color="#22c55e" />
            </div>

            <h3
              className="
              text-2xl
              font-bold
              mt-6
              "
            >
              Agricultores
            </h3>

            <ul
              className="
              mt-5
              space-y-3
              text-gray-600
              "
            >
              <li>✔ Diagnóstico de doenças</li>
              <li>✔ Análise do solo</li>
              <li>✔ Identificação de pragas</li>
              <li>✔ Recomendações inteligentes</li>
              <li>✔ Maior produtividade</li>
            </ul>
          </Card>

          {/* Compradores */}
          <Card
            className="
            p-8
            sm:p-10
            rounded-3xl
            hover:shadow-xl
            transition
            "
          >
            <div
              className="
              flex
              items-center
              justify-center
              w-20
              h-20
              rounded-2xl
              bg-green-50
              "
            >
              <HugeiconsIcon
                icon={ShoppingCart01Icon}
                size={55}
                color="#22c55e"
              />
            </div>

            <h3
              className="
              text-2xl
              font-bold
              mt-6
              "
            >
              Compradores
            </h3>

            <ul
              className="
              mt-5
              space-y-3
              text-gray-600
              "
            >
              <li>✔ Produtos confiáveis</li>
              <li>✔ Informações da produção</li>
              <li>✔ Maior transparência</li>
              <li>✔ Compra facilitada</li>
              <li>✔ Ligação direta com produtores</li>
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}
