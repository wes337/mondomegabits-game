import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import environmentPlugin from "vite-plugin-environment";

export default defineConfig({
  base: "",
  plugins: [solidPlugin(), environmentPlugin(["WS_SERVER"])],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
