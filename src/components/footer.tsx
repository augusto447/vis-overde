import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="
      bg-gray-900
      text-white
      px-5
      sm:px-10
      lg:px-20
      py-14
      "
    >
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-10
        "
      >
        {/* Logo e descrição */}
        <div>
          <div className="flex items-center gap-3">
            <img
              className="
              w-14
              h-12
              object-contain
              "
              src={logo}
              alt="Visão Verde"
            />

            <h2
              className="
              text-xl
              sm:text-2xl
              font-bold
              "
            >
              VISÃO <span className="text-green-500">VERDE</span>
            </h2>
          </div>

          <p
            className="
            mt-5
            text-gray-400
            leading-7
            text-sm
            "
          >
            Inteligência artificial ao serviço de uma agricultura mais
            inteligente, sustentável e conectada.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3
            className="
            font-bold
            text-lg
            mb-5
            "
          >
            Navegação
          </h3>

          <div
            className="
            flex
            flex-col
            gap-3
            text-gray-400
            "
          >
            <a href="#inicio" className="hover:text-green-500 transition">
              Início
            </a>

            <a href="#sobre" className="hover:text-green-500 transition">
              Sobre
            </a>

            <a href="#beneficio" className="hover:text-green-500 transition">
              Benefícios
            </a>

            <a href="#impacto" className="hover:text-green-500 transition">
              Impacto
            </a>
          </div>
        </div>

        {/* Soluções */}
        <div>
          <h3
            className="
            font-bold
            text-lg
            mb-5
            "
          >
            Soluções
          </h3>

          <div
            className="
            flex
            flex-col
            gap-3
            text-gray-400
            "
          >
            <span className="hover:text-green-500 transition cursor-pointer">
              Análise com IA
            </span>

            <span className="hover:text-green-500 transition cursor-pointer">
              Monitorização do solo
            </span>

            <span className="hover:text-green-500 transition cursor-pointer">
              Diagnóstico de culturas
            </span>

            <span className="hover:text-green-500 transition cursor-pointer">
              Ligação com compradores
            </span>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h3
            className="
            font-bold
            text-lg
            mb-5
            "
          >
            Contacto
          </h3>

          <div
            className="
            text-gray-400
            space-y-3
            text-sm
            "
          >
            <p>📍 Luanda, Angola</p>

            <p>✉ contacto@visaoverde.com</p>

            <p>☎ +244 900 000 000</p>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div
        className="
        border-t
        border-gray-700
        mt-12
        pt-6
        text-center
        text-gray-500
        text-sm
        "
      >
        © 2026 Visão Verde. Todos os direitos reservados.
      </div>
    </footer>
  );
}
