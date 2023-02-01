import { z } from "zod";
import { router, procedure } from "./_app";
// mutation function
import { addVitalSign } from "../trpc-functions/mutations/mrn";
// validators
import { addVitalSignSchema } from "../validators/mrn";

const mrnRouter = router({
  addVitalSign: procedure
    .input(addVitalSignSchema)
    .mutation(({ input }) => addVitalSign(input)),
});

export default mrnRouter;
