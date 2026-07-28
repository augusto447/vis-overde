import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send } from "lucide-react";

const farmerResponse = [
  "🔍 Estou a analisar a imagem da cultura...",
  "🌱 Cultura identificada: Café Arábica",
  "⚠️ Problema encontrado: possível ferrugem-do-cafeeiro",
  "📊 Confiança da análise: 94%",
  "💡 Recomendação: remover folhas afetadas e aplicar tratamento adequado.",
];

export function DiagnosticChat() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    type,
    image,
    description,
    productName,
    quantity,
    location: buyerLocation,
  } = location.state || {};

  const buyerResponse = [
    "🔍 Estou a analisar o produto enviado...",
    `🌱 Produto identificado: ${productName || "Produto agrícola"}`,
    "✅ Qualidade visual analisada com sucesso.",
    "📊 Estado do produto: Boa qualidade",
    `📦 Quantidade solicitada: ${quantity || "Não informado"}`,
    `📍 Local de entrega: ${buyerLocation || "Não informado"}`,
    "💡 Recomendação: produto adequado para compra.",
  ];

  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const response = type === "buyer" ? buyerResponse : farmerResponse;

    setMessages([
      {
        sender: "user",
        text:
          description ||
          (type === "buyer"
            ? `Quero comprar ${productName}`
            : "Enviei uma imagem da minha cultura."),
      },
    ]);

    let index = 0;

    const interval = setInterval(() => {
      if (index < response.length) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "ai",
            text: response[index],
          },
        ]);

        index++;
      } else {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  function sendMessage() {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
      {
        sender: "ai",
        text: "🤖 Estou a analisar a sua pergunta...",
      },
    ]);

    setMessage("");
  }

  return (
    <main className="h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <header
        className="
        bg-green-500
        text-white
        px-4
        sm:px-6
        py-4
        flex
        items-center
        gap-3
        shadow
        "
      >
        <button
          onClick={() => navigate("/")}
          className="
          cursor-pointer
          hover:scale-110
          transition
          "
        >
          <ArrowLeft size={22} />
        </button>

        <h1
          className="
          text-lg
          sm:text-xl
          font-bold
          "
        >
          Visão Verde AI 🌱
        </h1>
      </header>

      {/* CHAT */}
      <section
        className="
        flex-1
        overflow-y-auto
        px-4
        sm:px-8
        py-5
        space-y-4
        "
      >
        {/* IMAGEM */}
        {image && (
          <div>
            <img
              src={URL.createObjectURL(image)}
              alt="Produto"
              className="
              w-40
              sm:w-52
              rounded-2xl
              shadow
              "
            />
          </div>
        )}

        {/* MENSAGENS */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`
            w-fit
            max-w-[85%]
            sm:max-w-xl
            p-3
            sm:p-4
            rounded-2xl
            shadow-sm
            text-sm
            sm:text-base

            ${
              msg.sender === "ai"
                ? "bg-white text-gray-800"
                : "bg-green-500 text-white ml-auto"
            }
            `}
          >
            {msg.text}
          </div>
        ))}
      </section>

      {/* INPUT */}
      <footer
        className="
        border-t
        bg-white
        p-3
        sm:p-4
        "
      >
        <div
          className="
          flex
          gap-2
          max-w-5xl
          mx-auto
          "
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Digite a sua dúvida..."
            className="
            flex-1
            min-w-0
            border
            rounded-xl
            px-3
            sm:px-4
            py-3
            text-sm
            outline-none
            focus:ring-2
            focus:ring-green-500
            "
          />

          <Button
            onClick={sendMessage}
            className="
            bg-green-500
            hover:bg-green-600
            cursor-pointer
            rounded-xl
            px-3
            sm:px-5
            "
          >
            <Send size={18} />
          </Button>
        </div>
      </footer>
    </main>
  );
}
