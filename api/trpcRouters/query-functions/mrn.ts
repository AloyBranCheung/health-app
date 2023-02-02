import User from "../../models/User";
import MRN from "../../models/MRN";

export const getAllHealthInformationByUserId = async (userid: string) => {
  try {
    const userDocument = await User.findById(userid);
    const mrn = userDocument?.MRN;
    const healthInformation = await MRN.findById(mrn);
    return healthInformation;
  } catch (error) {
    return error;
  }
};
