// @ts-nocheck

import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
	kit: {
		alias: {
			$lib: path.resolve('./src/lib')
		}
	},
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	]
});
