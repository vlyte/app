// @ts-nocheck

import path from "path";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	kit: {
		alias: {
		  $lib: path.resolve("./src/lib"),
		},
	  },
	plugins: [sveltekit()]
});
