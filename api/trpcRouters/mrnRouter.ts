// trpc
import { router, procedure } from "./_app";
// query function
import { getAllHealthInformationByUserId } from "./query-functions/mrn";
// mutation function
import { addVitalSign } from "./mutation-functions/mrn";
// validators
import { z } from "zod";
import { addVitalSignSchema } from "../validators/mrn";

const mrnRouter = router({
  addVitalSign: procedure
    .input(addVitalSignSchema)
    .mutation(({ input }) => addVitalSign(input)),
  getHealthInformation: procedure
    .input(z.string())
    .query(({ input }) => getAllHealthInformationByUserId(input)),
});

export default mrnRouter;
