import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const apiBase = env.VITE_API_BASE;

	return {
		plugins: [react(), tailwindcss()],
		resolve: {
			alias: {
				"@components": path.resolve(__dirname, "./src/components"),
				"@contexts": path.resolve(__dirname, "./src/contexts"),
			},
		},
		server: apiBase
			? {
					proxy: {
						"/api": {
							target: apiBase,
							changeOrigin: true,
							rewrite: (p) => p.replace(/^\/api/, ""),
						},
					},
				}
			: undefined,
	};
});
