import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://github.com/kanbanyte/kanbanyte.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://shiki.style/themes
			theme: 'one-dark-pro',
			// Alternatively, provide multiple themes
			// https://shiki.style/guide/dual-themes
			// themes: {
			// 	light: 'nord',
			// 	dark: 'one-dark-pro',
			// },
			// Add custom languages
			// Note: Shiki has countless langs built-in, including .astro!
			// https://shiki.style/languages
			langs: [],
			// Enable word wrap to prevent horizontal scrolling
			wrap: true,
			// Add custom transformers: https://shiki.style/guide/transformers
			// Find common transformers: https://shiki.style/packages/transformers
			transformers: [],
		},
	},
	// Never match URLs that include a trailing slash.
	trailingSlash: 'never',
	build: {
		// Astro will generate an HTML file named for each page route.
		// format: 'file',
		// Astro will generate HTML files exactly as they appear in your source folder.
		format: 'preserve',
		// Project styles are sent in external stylesheets.
		inlineStylesheets: 'never'
	}
});
