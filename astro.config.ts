import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import spectre from './package/src';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
const config = defineConfig({
	site: 'https://nathanash.id.au',
	output: 'static',
	adapter: cloudflare(),
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: 'Nathan Ash',
			openGraph: {
				home: {
					title: 'Nathan Ash',
					description: 'Technical Services Manager & Systems Engineer based in Melbourne.',
				},
				blog: {
					title: 'Blog',
					description: 'Technical posts, homelab adventures, and learnings.',
				},
				projects: {
					title: 'Projects',
				},
			},
		}),
	],
});

export default config;
