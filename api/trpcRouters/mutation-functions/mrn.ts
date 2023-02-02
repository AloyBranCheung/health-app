// mongoose
import MRN from "../../models/MRN";
import User from "../../models/User";
// types/validators
import { z } from "zod";
import { addVitalSignSchema } from "../../validators/mrn";

// POST
export const addVitalSign = async (
  inputData: z.infer<typeof addVitalSignSchema>
) => {
  const { userid, data } = inputData;
  try {
    const userDocument = await User.findById(userid);
    const mrn = userDocument?.MRN;
    const updateMRNDocument = await MRN.findByIdAndUpdate(
      mrn,
      { $push: data },
      { new: true, runValidators: true }
    );
    return updateMRNDocument;
  } catch (error) {
    return error;
  }
};
