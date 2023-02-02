import { mergeQueryKeys } from "@lukemorales/query-key-factory";
//
import profilePicKeys from "../keys/profilePicKeys";
import mrnKeys from "./mrnKeys";

const queryKeys = mergeQueryKeys(profilePicKeys, mrnKeys);

export default queryKeys;
