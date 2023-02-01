import { initTRPC } from "@trpc/server";

// trpc test
export const t = initTRPC.create();
export const router = t.router;
export const procedure = t.procedure;

// routers
import mrnRouter from "./mrnRouter";

export const appRouter = router({
  mrn: mrnRouter,
});

export type AppRouter = typeof appRouter;

export default appRouter;
