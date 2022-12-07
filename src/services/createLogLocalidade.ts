import { PrismaClient } from "@prisma/client";
import { removeAcento } from "../func/removeAcento";
const prisma = new PrismaClient();

export const createLogLocalidade = async (data: any) => {
  await prisma.tCEP_LOG_LOCALIDADE.create({
    data: {
      LOC_NU: data[0],
      UFE_SG: data[1],
      LOC_NO: removeAcento(data[2]),
      CEP: data[3],
      LOC_IN_SIT: data[4],
      LOC_IN_TIPO_LOC: data[5],
      LOC_NU_SUB: data[6],
      LOC_NO_ABREV: removeAcento(data[7]),
      MUN_NU: data[8],
    },
  });
};
