import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { ImageUpload01Icon } from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function BuyerModal() {
  const navigate = useNavigate();

  const [image, setImage] = useState<File | null>(null);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      setImage(file);
    }
  }

  function handleAnalyze() {
    navigate("/diagnostico", {
      state: {
        type: "buyer",
        image,
        productName,
        quantity,
        location,
        description,
      },
    });
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="
          w-full
          sm:w-auto
          px-8
          py-6
          bg-white
          text-green-600
          font-semibold
          hover:bg-gray-100
          cursor-pointer
          "
        >
          Sou Comprador
        </Button>
      </DialogTrigger>

      <DialogContent
        className="
        w-[95%]
        sm:max-w-md
        rounded-2xl
        "
      >
        <DialogHeader>
          <DialogTitle>Analisar produto agrícola</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Imagem */}

          <div>
            <label className="text-sm font-medium">Imagem do produto</label>

            <label
              htmlFor="product-image"
              className="
              mt-2
              flex
              items-center
              justify-center
              h-32
              sm:h-36
              border-2
              border-dashed
              border-gray-300
              rounded-xl
              cursor-pointer
              overflow-hidden
              hover:border-green-500
              hover:bg-green-50
              transition
              "
            >
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Produto"
                  className="
                    w-full
                    h-full
                    object-cover
                    "
                />
              ) : (
                <div className="text-center">
                  <HugeiconsIcon
                    icon={ImageUpload01Icon}
                    size={35}
                    color="#22c55e"
                  />

                  <p className="text-sm text-gray-600">Carregar imagem</p>
                </div>
              )}
            </label>

            <input
              id="product-image"
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </div>

          {/* Produto */}

          <div>
            <label className="text-sm font-medium">Produto desejado</label>

            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Ex: Café Arábica"
              className="
              mt-1
              w-full
              h-10
              border
              rounded-lg
              px-3
              text-sm
              outline-none
              focus:ring-2
              focus:ring-green-500
              "
            />
          </div>

          {/* Quantidade + Local */}

          <div
            className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-3
            "
          >
            <div>
              <label className="text-sm font-medium">Quantidade</label>

              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="50kg"
                className="
                mt-1
                w-full
                h-10
                border
                rounded-lg
                px-3
                text-sm
                "
              />
            </div>

            <div>
              <label className="text-sm font-medium">Localização</label>

              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Luanda"
                className="
                mt-1
                w-full
                h-10
                border
                rounded-lg
                px-3
                text-sm
                "
              />
            </div>
          </div>

          {/* Descrição */}

          <div>
            <label className="text-sm font-medium">
              O que deseja analisar?
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Quero comprar café de boa qualidade"
              className="
              mt-1
              w-full
              h-20
              border
              rounded-lg
              p-3
              text-sm
              resize-none
              "
            />
          </div>

          <Button
            onClick={handleAnalyze}
            className="
            w-full
            py-5
            bg-green-500
            hover:bg-green-600
            cursor-pointer
            "
          >
            Analisar produto
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
