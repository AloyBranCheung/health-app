// utils/trpc.ts
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import {
  createTRPCReact,
  inferReactQueryProcedureOptions,
} from "@trpc/react-query";
import type { AppRouter } from "../../../api/trpcRouters/_app";

export const trpc = createTRPCReact<AppRouter>();
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
