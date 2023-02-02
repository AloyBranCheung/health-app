import { z } from "zod";

export const addVitalSignSchema = z.object({
  userid: z.string(),
  data: z.union([
    z.object({
      bloodPressure: z.object({
        date: z.string(),
        time: z.string(),
        sys: z.string(),
        dia: z.string(),
      }),
    }),
    z.object({
      heartRate: z.object({
        date: z.string(),
        time: z.string(),
        heartRate: z.string(),
      }),
    }),
  ]),
});
