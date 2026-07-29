import { SectionReveal } from "./sectionReveals";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "João Manuel",
    role: "Agricultor",
    message:
      "A Visão Verde ajudou-me a identificar doenças nas minhas culturas antes que causassem grandes perdas.",
  },
  {
    name: "Maria António",
    role: "Produtora agrícola",
    message:
      "Agora consigo tomar melhores decisões sobre o solo e a produção através das recomendações da IA.",
  },
  {
    name: "Carlos Pedro",
    role: "Comprador",
    message:
      "A plataforma trouxe mais confiança porque consigo conhecer melhor a origem dos produtos.",
  },
];

export function Testimonials() {
  return (
    <SectionReveal
      id="testemunhos"
      className="
      px-5
      sm:px-8
      lg:px-20
      py-8
      bg-gray-50
      "
    >
      <div className="text-center mb-14">
        <h2
          className="
          text-3xl
          sm:text-4xl
          font-bold
          "
        >
          O que dizem sobre a{" "}
          <span className="text-green-500">Visão Verde</span>
        </h2>

        <p
          className="
          mt-5
          max-w-2xl
          mx-auto
          text-gray-600
          text-sm
          sm:text-base
          "
        >
          Agricultores e compradores conectados por uma agricultura mais
          inteligente.
        </p>
      </div>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        "
      >
        {testimonials.map((item) => (
          <Card
            key={item.name}
            className="
            rounded-3xl
            border
            bg-white
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl
            "
          >
            <CardHeader
              className="
              p-6
              sm:p-8
              text-center
              items-center
              "
            >
              {/* Avatar */}
              <div
                className="
                w-16
                h-16
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                text-green-600
                text-2xl
                font-bold
                "
              >
                {item.name.charAt(0)}
              </div>

              {/* Estrelas */}
              <div
                className="
                mt-4
                text-yellow-400
                text-lg
                "
              >
                ★★★★★
              </div>

              <CardTitle
                className="
                mt-4
                text-xl
                "
              >
                {item.name}
              </CardTitle>

              <span
                className="
                mt-1
                text-green-500
                font-medium
                "
              >
                {item.role}
              </span>

              <CardDescription
                className="
                mt-5
                leading-7
                text-sm
                sm:text-base
                "
              >
                "{item.message}"
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionReveal>
  );
}
