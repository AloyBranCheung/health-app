// TODO: Delete file
import { trpc } from "src/utils/trpc";

export default function useTrpcTest() {
  return trpc.greeting.welcome.useQuery();
}
