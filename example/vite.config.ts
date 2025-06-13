import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-watermark-overlay/", // 저장소명으로 변경
  plugins: [react()],
});
