import jwt from "jsonwebtoken";

export default function createJWT(
  information: Record<string, unknown>,
  expiresIn = 900000
) {
  if (!process.env.JWTKEY) throw new Error("No JWTKEY specified.");
  const token = jwt.sign({ ...information }, process.env.JWTKEY, {
    expiresIn,
  });
  return token;
}
