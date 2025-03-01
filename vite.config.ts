import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const resolvePath = (p: string) => path.resolve(__dirname, p);

export default defineConfig({
    plugins: [svgr(), react()],
    base: "/",
    resolve: {
        alias: {
            "@shared": resolvePath("./src/shared"),
            "@app": resolvePath("./src/app"),
            "@features": resolvePath("./src/features"),
            "@widgets": resolvePath("./src/widgets"),
            "@entities": resolvePath("./src/entities"),
            "@pages": resolvePath("./src/pages")
        }
    }
});
