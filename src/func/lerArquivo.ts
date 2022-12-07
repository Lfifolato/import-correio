import { createLogLocalidade } from "./../services/createLogLocalidade";
import fs from "fs";

export const lerArquivo = async (file: string) => {
  const data = fs.readFileSync(file, "ascii");

  const linha = data.split(/\r?\n/);

  if (file == "data/LOG_LOCALIDADE.TXT") {
    linha.forEach(async (item: any) => {
      const linhaItem = item.toString().split("@");
      await createLogLocalidade(linhaItem);
    });
  }
};
