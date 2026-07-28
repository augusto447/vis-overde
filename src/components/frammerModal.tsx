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

export function FrammerModal() {
  const navigate = useNavigate();

  const [image, setImage] = useState<File | null>(null);
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
        type: "farmer",
        image,
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
          Sou Agricultor
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
          <DialogTitle
            className="
            text-lg
            sm:text-xl
            "
          >
            Analisar minha cultura
          </DialogTitle>
        </DialogHeader>

        <div
          className="
          space-y-4
          "
        >
          {/* Imagem */}

          <div>
            <label
              className="
              text-sm
              font-medium
              "
            >
              Imagem da cultura
            </label>

            <label
              htmlFor="image"
              className="
              mt-2
              flex
              flex-col
              items-center
              justify-center
              w-full
              h-36
              sm:h-44
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
                  alt="Preview"
                  className="
                    w-full
                    h-full
                    object-cover
                    "
                />
              ) : (
                <>
                  <HugeiconsIcon
                    icon={ImageUpload01Icon}
                    size={40}
                    color="#22c55e"
                  />

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-gray-700
                      "
                  >
                    Carregar imagem
                  </p>

                  <span
                    className="
                      text-xs
                      text-gray-500
                      "
                  >
                    PNG, JPG ou JPEG
                  </span>
                </>
              )}
            </label>

            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </div>

          {/* Descrição */}

          <div>
            <label
              className="
              text-sm
              font-medium
              "
            >
              Descrição do problema
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: folhas com manchas amarelas"
              className="
              mt-2
              w-full
              h-24
              sm:h-28
              border
              rounded-xl
              p-3
              text-sm
              resize-none
              outline-none
              focus:ring-2
              focus:ring-green-500
              "
            />
          </div>

          {/* Botão */}

          <Button
            onClick={handleAnalyze}
            className="
            w-full
            py-6
            bg-green-500
            hover:bg-green-600
            cursor-pointer
            "
          >
            Analisar cultura
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
