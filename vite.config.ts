import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      hooks: "/src/hooks",
      types: "/src/types",
      context: "/src/context",
      pages: "/src/pages",
      data: "/src/data",
    },
  },
  base: "/imc-elearning-task/",
  plugins: [react()],
});
