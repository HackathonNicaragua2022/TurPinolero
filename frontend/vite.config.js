import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import path from 'path-browserify';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	// resolve: {
	// 	alias: {
	// 		path: 'path-browserify',
	// 	},
	// },
	define: {
		global: {},
	},
	mode: 'development',
	server: {
		port: 3000,
	},
	build: {
		minify: true,
		commonjsOptions: { include: [] },
	},
	optimizeDeps: {
		disabled: false,
	},
});
