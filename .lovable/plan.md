Fix the Vercel build error caused by `src/server/reservations.functions.ts` being blocked from the client bundle by import protection.

Steps:
1. Move `src/server/reservations.functions.ts` to `src/lib/reservations.functions.ts` (no code changes needed).
2. Update the import in `src/routes/reservations.tsx` from `@/server/reservations.functions` to `@/lib/reservations.functions`.
3. Delete the now-empty `src/server/` folder.

This resolves the `[import-protection] Import denied in client environment` error because `src/server/` is blocked from client bundles, while `src/lib/` is client-safe. The `createServerFn` handler body remains server-only via the Vite plugin splitter.