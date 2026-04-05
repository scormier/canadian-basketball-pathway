// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Canadian Basketball Pathway',
			description: 'An honest, comprehensive guide for Canadian families navigating youth basketball development and recruiting.',
			social: [],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Overview',
					items: [
						{ label: 'The Canadian Basketball Pathway', slug: 'overview' },
					],
				},
				{
					label: 'Sneaker Circuits',
					items: [
						{ label: 'Sneaker Circuits Explained', slug: 'circuits/sneaker-circuits' },
						{ label: 'Evaluating Programs & Teams', slug: 'circuits/evaluating-programs' },
						{ label: 'Eligibility Rules', slug: 'circuits/eligibility-rules' },
						{ label: 'Recruiting Reality', slug: 'circuits/recruiting-reality' },
					],
				},
				{
					label: 'Schools & Programs',
					items: [
						{ label: 'Prep Schools', slug: 'schools/prep-schools' },
						{ label: 'NCAA Eligibility for Canadians', slug: 'schools/ncaa-eligibility' },
						{ label: 'Reclassification', slug: 'schools/reclassification' },
					],
				},
				{
					label: 'Post-Secondary Options',
					items: [
						{ label: 'USports', slug: 'post-secondary/usports' },
						{ label: 'Alternative Pathways to D1', slug: 'post-secondary/alternative-pathways' },
					],
				},
				{
					label: 'Making Decisions',
					items: [
						{ label: 'Parent Decision Framework', slug: 'decisions/parent-framework' },
						{ label: 'Red Flags & Misinformation', slug: 'decisions/red-flags' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Glossary', slug: 'reference/glossary' },
					],
				},
			],
		}),
	],
});
