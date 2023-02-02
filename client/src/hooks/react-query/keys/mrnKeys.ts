import { createQueryKeys } from "@lukemorales/query-key-factory";

const mrnKeys = createQueryKeys("mrn", {
  getAllHealthInformation: {
    queryKey: ["getallhealthinformation"],
  },
});

export default mrnKeys;
