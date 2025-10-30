import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";
import { routes } from "./remix/config";

export default defineConfig({
  plugins: [
    remixDevTools(),
    remix({ routes }),
    tsconfigPaths(),
  ],
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    include: ["maath/random"],
  },
  ssr: {
    noExternal: ["maath"],
  },
  server: {
    open: true,
    port: 3000,
  },

});
