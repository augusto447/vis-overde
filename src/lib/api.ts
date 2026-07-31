const baseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "");

if (!baseUrl) {
  throw new Error("VITE_API_BASE_URL não foi configurada.");
}

export type AnalysisType = "farmer" | "buyer" | "soil";

export type FarmerAnalysisInput = {
  culture: string;
  description: string;
  image: File;
};

export type BuyerAnalysisInput = {
  product: string;
  quantity: string;
  location: string;
  objective: string;
  image: File;
};

export type SoilAnalysisInput = {
  description?: string;
  image: File;
};

export type AnalysisResponse = {
  success: boolean;
  data?: unknown;
  result?: unknown;
  error?: string;
  analysis?: string;
};

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

async function createAnalysis(
  type: AnalysisType,
  fields: Record<string, string>,
  image: File,
): Promise<AnalysisResponse> {
  const formData = new FormData();

  Object.entries(fields).forEach(([key, value]) => formData.append(key, value));
  formData.append("image", image);

  const response = await fetch(`${baseUrl}/api/analysis/${type}`, {
    method: "POST",
    body: formData,
  });

  const payload = (await response.json().catch(() => ({}))) as AnalysisResponse;

  if (!response.ok) {
    throw new Error(payload.error || "Não foi possível concluir a análise.");
  }

  return payload;
}

export function analyzeFarmer(input: FarmerAnalysisInput) {
  return createAnalysis(
    "farmer",
    { culture: input.culture, description: input.description },
    input.image,
  );
}

export function analyzeBuyer(input: BuyerAnalysisInput) {
  return createAnalysis(
    "buyer",
    {
      product: input.product,
      quantity: input.quantity,
      location: input.location,
      objective: input.objective,
    },
    input.image,
  );
}

export async function continueAnalysisConversation(
  type: AnalysisType,
  context: unknown,
  messages: ChatMessage[],
): Promise<AnalysisResponse> {
  const response = await fetch(`${baseUrl}/api/analysis/${type}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ context, messages }),
  });

  const payload = (await response.json().catch(() => ({}))) as AnalysisResponse;

  if (!response.ok) {
    throw new Error(payload.error || "Não foi possível enviar a mensagem.");
  }

  return payload;
}

export function analyzeSoil(input: SoilAnalysisInput) {
  return createAnalysis(
    "soil",
    { description: input.description || "" },
    input.image,
  );
}