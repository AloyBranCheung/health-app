import axios from "axios";
import { useMutation } from "@tanstack/react-query";
// data validation
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
// toast error
import toastError from "src/utils/toastError";

// ! DO NOT USE
const validationSchema = z.object({
  bloodPressure: z
    .object({
      date: z.string(),
      time: z.string(),
      sys: z.string().optional(),
      dia: z.string().optional(),
    })
    .optional(),
  heartRate: z
    .object({
      date: z.string(),
      time: z.string(),
      heartRate: z.string().optional(),
    })
    .optional(),
});

const updateUserInformationPOST = async (
  userid: string,
  data: z.infer<typeof validationSchema>
) => {
  try {
    validationSchema.parse(data);
    await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/mrn/healthinformation/${userid}`,
      data
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const validationError = fromZodError(error);
      console.error(validationError);
      toastError(validationError.message);
    }
    console.error(error);
    return error;
  }
};

export default function useUpdateVitals() {
  return useMutation({
    mutationFn: ({
      userid,
      data,
    }: {
      userid: string;
      data: z.infer<typeof validationSchema>;
    }) => updateUserInformationPOST(userid, data),
  });
}
