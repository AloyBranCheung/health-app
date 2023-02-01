import { initTRPC } from "@trpc/server";

// trpc test
export const t = initTRPC.create();
export const router = t.router;
export const procedure = t.procedure;

// routers
import greetingRouter from "./greetingRouter";

export const appRouter = router({
  // TODO: delete route
  greeting: greetingRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
