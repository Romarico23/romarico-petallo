import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://romarico23.github.io/romarico-petallo",
  plugins: [react()],
});
