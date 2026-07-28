import { useState } from "react";
import { Button } from "./ui/button";
import logo from "@/assets/logo01.jpeg";
import { Menu, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 md:px-20 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            className="w-14 h-12 md:w-20 md:h-16"
            src={logo}
            alt="Visão Verde"
          />

          <div>
            <h1 className=" md:text-2xl font-bold">
              VISÃO <span className="text-green-500">VERDE</span>
            </h1>

            <p className="text-xs md:text-sm text-gray-500">
              Inteligência que faz agricultura crescer
            </p>
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex gap-8 items-center">
          <a href="#inicio" className="hover:text-green-500">
            Inicio
          </a>

          <a href="#sobre" className="hover:text-green-500">
            Sobre
          </a>

          <a href="#beneficio" className="hover:text-green-500">
            Benefícios
          </a>

          <a href="#impacto" className="hover:text-green-500">
            Impacto
          </a>

          <a href="#contacto" className="hover:text-green-500">
            Contacto
          </a>

          <a href="#cta">
            <Button
              className="
              bg-green-500
              text-white
              px-6
              py-5
              hover:bg-green-600
              transition-all
              hover:scale-105
              cursor-pointer
              "
            >
              Experimentar
            </Button>
          </a>
        </nav>

        {/* Botão Mobile */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav
          className="
          lg:hidden
          mt-6
          flex
          flex-col
          gap-5
          bg-white
          p-6
          rounded-xl
          shadow-lg
          "
        >
          <a href="#inicio">Inicio</a>

          <a href="#sobre">Sobre</a>

          <a href="#beneficio">Benefícios</a>

          <a href="#impacto">Impacto</a>

          <a href="#contacto">Contacto</a>

          <a href="#cta">
            <Button className="bg-green-500 w-full">Experimentar</Button>
          </a>
        </nav>
      )}
    </header>
  );
}
