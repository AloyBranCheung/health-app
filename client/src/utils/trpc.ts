// utils/trpc.ts
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../api/trpcRouters/_app'

export const trpc = createTRPCReact<AppRouter>();