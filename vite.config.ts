/*
 * @Author: WGF
 * @Date: 2023-12-26 10:26:36
 * @LastEditors: WGF
 * @LastEditTime: 2023-12-26 11:04:04
 * @Description: 
 * @FilePath: /react-lowcode-simple/vite.config.ts
 */
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open:true,
    proxy: {
      // "/api": "http://template.josephxia.com",
      "/api":"http://template.codebus.tech",
      "/static": "http://template.codebus.tech",
    },
  },
  plugins: [tsconfigPaths(), react()],

  css: {
    modules: {
      hashPrefix: "prefix",
    },

    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
