import { useEffect, useState } from "react";

const readoutLines = [
  { text: "> pronto para analisar", highlight: false },
  { text: "envie uma imagem da sua cultura", highlight: false },
  { text: "a IA identificará os sinais visíveis", highlight: true },
];

export function ScanCard() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      if (i === 0) setVisibleLines(0);

      if (i < readoutLines.length) {
        i++;
        setVisibleLines(i);
        timeout = setTimeout(tick, 800);
      } else {
        timeout = setTimeout(() => {
          i = 0;
          tick();
        }, 1800);
      }
    }

    tick();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="
        w-full
        max-w-[380px]
        xl:max-w-[500px]
        rounded-2xl
        border
        border-white/10
        bg-[#111611]
        p-5
        xl:p-4
        shadow-[8px_8px_0_rgba(0,0,0,0.35)]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          pb-3
          font-mono
          text-sm
          xl:text-base
          uppercase
          tracking-wide
          text-white/50
        "
      >
        <span>diagnóstico.iv</span>

        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />
          <span>ao vivo</span>
        </span>
      </div>

      {/* Scanner */}
      <div
        className="
          relative
          mt-5
          h-52
          xl:h-70
          overflow-hidden
          rounded-xl
          border
          border-white/10
        "
      >
        <svg
          viewBox="0 0 320 200"
          preserveAspectRatio="none"
          className="block h-full w-full bg-[#2A3620]"
        >
          <path
            d="M40 170 C40 90 100 30 200 25 C270 22 300 60 290 90 C260 90 150 100 100 150 C80 168 55 172 40 170 Z"
            fill="#5C7A46"
          />

          <path
            d="M50 165 C60 100 120 50 200 35"
            stroke="#3B5230"
            strokeWidth="2.5"
            fill="none"
          />

          <circle cx="150" cy="90" r="7" fill="#B5652E" opacity="0.85" />
          <circle cx="175" cy="110" r="5" fill="#B5652E" opacity="0.7" />
          <circle cx="130" cy="120" r="4" fill="#C68A2E" opacity="0.8" />
          <circle cx="195" cy="75" r="4.5" fill="#B5652E" opacity="0.75" />
        </svg>

        <div
          className="
            absolute
            inset-x-0
            h-12
            animate-[scan_3.2s_ease-in-out_infinite]
            bg-gradient-to-b
            from-transparent
            via-green-500/40
            to-transparent
          "
        />
      </div>

      {/* Resultado */}
      <div
        className="
          mt-5
          min-h-[120px]
          xl:min-h-[160px]
          rounded-xl
          bg-black/90
          p-4
          xl:p-5
          font-mono
          text-sm
          xl:text-base
          leading-[1.8]
          text-white/90
        "
      >
        {readoutLines.slice(0, visibleLines).map((line) => (
          <div key={line.text} className={line.highlight ? "text-amber-400" : ""}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
