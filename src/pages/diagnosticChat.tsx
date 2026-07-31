import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  analyzeBuyer,
  analyzeFarmer,
  continueAnalysisConversation,
  type ChatMessage,
} from "@/lib/api";

type DiagnosticState = {
  type: "farmer" | "buyer";
  image: File;
  culture?: string;
  description?: string;
  productName?: string;
  quantity?: string;
  location?: string;
  objective?: string;
};

function cleanMarkdown(text: string): string {
  return text
    .replace(/```(?:markdown|md|text)?\s*/gi, "")
    .replace(/```/g, "")
    .replace(/^\s{0,3}#{1,6}\s*/gm, "")
    .replace(/\*\*(.*?)\*\*/gs, "$1")
    .replace(/__(.*?)__/gs, "$1")
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, "$1")
    .replace(/(?<!_)_([^_\n]+)_(?!_)/g, "$1")
    .replace(/^\s*[-*+]\s+/gm, "• ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function formatResult(result: unknown): string {
  if (typeof result === "string") return cleanMarkdown(result);
  if (!result || typeof result !== "object") return "A API não retornou detalhes da análise.";

  return cleanMarkdown(Object.entries(result as Record<string, unknown>)
    .map(([key, value]) => {
      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
      const text = typeof value === "string" ? value : JSON.stringify(value, null, 2);
      return `${label}: ${text}`;
    })
    .join("\n"));
}

export function DiagnosticChat() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as DiagnosticState | null;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!state?.image || !state.type) {
      navigate("/", { replace: true });
      return;
    }

    const currentState = state;
    let active = true;

    async function runAnalysis() {
      try {
        const response = currentState.type === "farmer"
          ? await analyzeFarmer({
              culture: currentState.culture || "",
              description: currentState.description || "",
              image: currentState.image,
            })
          : await analyzeBuyer({
              product: currentState.productName || "",
              quantity: currentState.quantity || "",
              location: currentState.location || "",
              objective: currentState.objective || "",
              image: currentState.image,
            });

        if (!active) return;

        const analysisResult = response.result ?? response.data;
        const initialUserMessage = currentState.type === "farmer"
          ? `${currentState.culture}: ${currentState.description}`
          : `${currentState.productName}, ${currentState.quantity}, entrega em ${currentState.location}. ${currentState.objective}`;

        setResult(analysisResult);
        setMessages([
          { role: "user", content: initialUserMessage },
          { role: "assistant", content: formatResult(analysisResult) },
        ]);
      } catch (analysisError) {
        if (active) {
          setError(analysisError instanceof Error ? analysisError.message : "Erro ao realizar a análise.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    void runAnalysis();

    return () => {
      active = false;
    };
  }, [navigate, state]);

  if (!state?.image) return null;

  const currentState = state;

  async function sendMessage() {
    const content = message.trim();
    if (!content || sending || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setMessage("");
    setError("");
    setSending(true);

    try {
      const response = await continueAnalysisConversation(currentState.type, result, nextMessages);
      const answer = formatResult(response.result ?? response.data);
      setMessages((currentMessages) => [...currentMessages, { role: "assistant", content: answer }]);
    } catch (chatError) {
      setError(chatError instanceof Error ? chatError.message : "Erro ao enviar a mensagem.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-green-500 text-white px-4 sm:px-6 py-4 flex items-center gap-3 shadow">
        <button onClick={() => navigate("/")} aria-label="Voltar para o início" className="cursor-pointer hover:scale-110 transition">
          <ArrowLeft size={22} />
        </button>
        <h1 className="text-lg sm:text-xl font-bold">Conversa com a IA</h1>
      </header>

      <section className="flex-1 overflow-y-auto px-4 sm:px-8 py-5 space-y-4 max-w-5xl w-full mx-auto">
        <img src={URL.createObjectURL(state.image)} alt="Imagem enviada para análise" className="w-40 sm:w-52 rounded-2xl shadow" />

        {loading && (
          <div className="w-fit p-4 rounded-2xl shadow-sm bg-white text-gray-600 flex items-center gap-2">
            <LoaderCircle className="animate-spin" size={18} />
            A analisar a imagem...
          </div>
        )}

        {messages.map((chatMessage) => (
          <div
            key={`${chatMessage.role}-${chatMessage.content}`}
            className={`w-fit max-w-[85%] sm:max-w-2xl p-3 sm:p-4 rounded-2xl shadow-sm text-sm sm:text-base whitespace-pre-wrap ${
              chatMessage.role === "assistant"
                ? "bg-white text-gray-800"
                : "bg-green-500 text-white ml-auto"
            }`}
          >
            {chatMessage.content}
          </div>
        ))}

        {error && <p className="text-red-600 bg-white rounded-xl p-3">{error}</p>}
      </section>

      <footer className="border-t bg-white p-3 sm:p-4">
        <div className="flex gap-2 max-w-5xl mx-auto">
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void sendMessage();
              }
            }}
            disabled={loading || sending}
            placeholder="Digite sua dúvida sobre a análise..."
            className="flex-1 min-w-0 border rounded-xl px-3 sm:px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
          />
          <Button
            onClick={() => void sendMessage()}
            disabled={loading || sending || !message.trim()}
            aria-label="Enviar mensagem"
            className="bg-green-500 hover:bg-green-600 cursor-pointer rounded-xl px-3 sm:px-5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {sending ? <LoaderCircle className="animate-spin" size={18} /> : <Send size={18} />}
          </Button>
        </div>
      </footer>
    </main>
  );
}
