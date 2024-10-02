import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Renardo   ฅ^•ﻌ•^ฅ',
			// Set English as the default language for this site.
		        defaultLocale: 'root',
		        locales: {
			  // English docs in `src/content/docs/en/`
			  root: {
			    label: 'English',
			    lang: 'en',
			  },
			  // German docs in `src/content/docs/de/`
			  'de': {
			    label: 'Deutsch',
			    lang: 'de',
			  },
			  // French docs in `src/content/docs/fr/`
			  'fr': {
			    label: 'Français',
			    lang: 'fr',
			  },
			  // Spanish docs in `src/content/docs/es/`
			  'es': {
			    label: 'Español',
			    lang: 'es',
			  },
		        },
			customCss: [
				'./src/styles/custom.css',
				'./src/fonts/font-faces.css'
			],
			social: {
				github: 'https://github.com/e-lie/renardo',
			},
			sidebar: [
				{
					label: 'About',
					translations: {
   					'de': 'About',
 				        },
					autogenerate: { directory: 'about' },
					collapsed: true,
				},
				{
					label: 'Install and configure',
					translations: {
   					'de': 'Installiere + Konfiguriere',
 				        },
					autogenerate: { directory: 'install' },
					collapsed: true,
				},
				{
					label: 'Learn',
					// autogenerate: { directory: 'learn' },
					translations: {
   					'de': 'Lerne',
 				        },
					collapsed: true,
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'Renardo',
							collapsed: true,
							autogenerate: { directory: 'learn/renardo' },
						},
						{ 
							label: 'Music Theory',
							translations: {
   							'de': 'Musiktheorie',
 				        		},
							collapsed: true,
							autogenerate: { directory: 'learn/music_theory' },
						},
						{ 
							label: 'By Example',
							translations: {
   							'de': 'Mit Beispielen',
 				        		},
							collapsed: true,
							autogenerate: { directory: 'learn/by_example' },
						},
						{ 
							label: 'SuperCollider',
							collapsed: true,
							autogenerate: { directory: 'learn/supercollider' },
						},
					],
				},
			],
		}),
	],
});