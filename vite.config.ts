import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import AutoImport from "unplugin-auto-import/vite";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    AutoImport({
      dts: true,
      imports: ["react", "react-router"],
      eslintrc: {
        enabled: true,
      },
    }),
  ],
});
