import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const functionsResolver = {
  queries: {
    obtenerHora: async () => {
      const result = await prisma.$queryRaw`SELECT * FROM obtener_hora();`;
      return result;
    },

    generarDatosAleatorios: async () => {
        const result:any = await prisma.$queryRaw`SELECT generar_datos_aleatorios();`;
        const randomNumbers = result.map((item:any) => parseInt(item.generar_datos_aleatorios));
        return randomNumbers || [];
      },
      generarTokensAleatorios: async () => {
        const result:any = await prisma.$queryRaw`
          SELECT string_agg(token, ',') AS tokens
          FROM (
            SELECT substr(md5(random()::text), 1, 20) AS token
            FROM generate_series(1, 10000)
          ) AS tokens;
        `;
        
        return result[0].tokens.split(",");
      }
  },
};

export { functionsResolver };
