import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Renardo   ฅ^•ﻌ•^ฅ',
			customCss: [
				'./src/styles/custom.css',
				'./src/fonts/font-faces.css'
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'About',
					autogenerate: { directory: 'about' },
				},
				{
					label: 'Install and configure',
					autogenerate: { directory: 'install' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Prepare for install', link: '/install/00-prepare-for-install/' },
					// 	{ label: 'Install SuperCollider', link: '/install/01-install-supercollider/' },
					// ],
				},
				{
					label: 'Learn',
					autogenerate: { directory: 'learn' },
				},
			],
		}),
	],
});
