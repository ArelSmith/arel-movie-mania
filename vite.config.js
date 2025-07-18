import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import environment from "vite-plugin-environment";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), environment("all")],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
