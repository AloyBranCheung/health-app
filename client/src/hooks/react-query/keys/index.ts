import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import profilePicKeys from "../keys/profilePicKeys";

const queryKeys = mergeQueryKeys(profilePicKeys);

export default queryKeys;
