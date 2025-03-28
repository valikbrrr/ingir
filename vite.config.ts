import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const resolvePath = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
  plugins: [
    svgr({
      // Настройки для SVG (если нужно)
      svgrOptions: {
        icon: true,
      },
    }),
    react(),
  ],
  base: "/",
  resolve: {
    alias: {
      "@shared": resolvePath("./src/shared"),
      "@app": resolvePath("./src/app"),
      "@features": resolvePath("./src/features"),
      "@widgets": resolvePath("./src/widgets"),
      "@entities": resolvePath("./src/entities"),
      "@pages": resolvePath("./src/pages"),
    },
  },
  build: {
    assetsInlineLimit: 4096, // Файлы меньше 4kb будут инлайниться
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Формат имен файлов
      },
    },
  },
  assetsInclude: ["**/*.svg", "**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.gif"],
});
