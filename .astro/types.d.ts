declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"about/renardo.md": {
	id: "about/renardo.md";
  slug: "about/renardo";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/about/renardo.md": {
	id: "de/about/renardo.md";
  slug: "de/about/renardo";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/index.mdx": {
	id: "de/index.mdx";
  slug: "de";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"de/install/00-prepare-for-install.md": {
	id: "de/install/00-prepare-for-install.md";
  slug: "de/install/00-prepare-for-install";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/install/01-install-supercollider.md": {
	id: "de/install/01-install-supercollider.md";
  slug: "de/install/01-install-supercollider";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/install/02-install-renardo-lib.md": {
	id: "de/install/02-install-renardo-lib.md";
  slug: "de/install/02-install-renardo-lib";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/install/03-renardo-init.md": {
	id: "de/install/03-renardo-init.md";
  slug: "de/install/03-renardo-init";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/install/04-start-livecoding.md": {
	id: "de/install/04-start-livecoding.md";
  slug: "de/install/04-start-livecoding";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/install/05-configure-editors.md": {
	id: "de/install/05-configure-editors.md";
  slug: "de/install/05-configure-editors";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/install/06-troubleshooting.md": {
	id: "de/install/06-troubleshooting.md";
  slug: "de/install/06-troubleshooting";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/install/reaper-expe.md": {
	id: "de/install/reaper-expe.md";
  slug: "de/install/reaper-expe";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/by_example/00-patterns.md": {
	id: "de/learn/by_example/00-patterns.md";
  slug: "de/learn/by_example/00-patterns";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/by_example/01-chord-progression.md": {
	id: "de/learn/by_example/01-chord-progression.md";
  slug: "de/learn/by_example/01-chord-progression";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/by_example/02-synth-attributes.md": {
	id: "de/learn/by_example/02-synth-attributes.md";
  slug: "de/learn/by_example/02-synth-attributes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/by_example/03-sample-attributes.md": {
	id: "de/learn/by_example/03-sample-attributes.md";
  slug: "de/learn/by_example/03-sample-attributes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/by_example/04-scales.md": {
	id: "de/learn/by_example/04-scales.md";
  slug: "de/learn/by_example/04-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/by_example/05-beats.md": {
	id: "de/learn/by_example/05-beats.md";
  slug: "de/learn/by_example/05-beats";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/by_example/06-transitions.md": {
	id: "de/learn/by_example/06-transitions.md";
  slug: "de/learn/by_example/06-transitions";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/music_theory/00-arrangement.md": {
	id: "de/learn/music_theory/00-arrangement.md";
  slug: "de/learn/music_theory/00-arrangement";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/music_theory/01-chords.md": {
	id: "de/learn/music_theory/01-chords.md";
  slug: "de/learn/music_theory/01-chords";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/music_theory/02-melody.md": {
	id: "de/learn/music_theory/02-melody.md";
  slug: "de/learn/music_theory/02-melody";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/music_theory/03-scales.md": {
	id: "de/learn/music_theory/03-scales.md";
  slug: "de/learn/music_theory/03-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/music_theory/04-rhythm.md": {
	id: "de/learn/music_theory/04-rhythm.md";
  slug: "de/learn/music_theory/04-rhythm";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/00-preparation.md": {
	id: "de/learn/renardo/00-preparation.md";
  slug: "de/learn/renardo/00-preparation";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/01-introduction.md": {
	id: "de/learn/renardo/01-introduction.md";
  slug: "de/learn/renardo/01-introduction";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/02-littlepython.md": {
	id: "de/learn/renardo/02-littlepython.md";
  slug: "de/learn/renardo/02-littlepython";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/03-synthplayer.md": {
	id: "de/learn/renardo/03-synthplayer.md";
  slug: "de/learn/renardo/03-synthplayer";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/04-sample-player.md": {
	id: "de/learn/renardo/04-sample-player.md";
  slug: "de/learn/renardo/04-sample-player";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/05-loop-player-object.md": {
	id: "de/learn/renardo/05-loop-player-object.md";
  slug: "de/learn/renardo/05-loop-player-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/06-clock.md": {
	id: "de/learn/renardo/06-clock.md";
  slug: "de/learn/renardo/06-clock";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/07-patterns.md": {
	id: "de/learn/renardo/07-patterns.md";
  slug: "de/learn/renardo/07-patterns";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/08-timevars.md": {
	id: "de/learn/renardo/08-timevars.md";
  slug: "de/learn/renardo/08-timevars";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/09-scales.md": {
	id: "de/learn/renardo/09-scales.md";
  slug: "de/learn/renardo/09-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/renardo/10-groups.md": {
	id: "de/learn/renardo/10-groups.md";
  slug: "de/learn/renardo/10-groups";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/supercollider/01-create-synthdefs.md": {
	id: "de/learn/supercollider/01-create-synthdefs.md";
  slug: "de/learn/supercollider/01-create-synthdefs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"de/learn/supercollider/02-create-fxs.md": {
	id: "de/learn/supercollider/02-create-fxs.md";
  slug: "de/learn/supercollider/02-create-fxs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/about/renardo.md": {
	id: "es/about/renardo.md";
  slug: "es/about/renardo";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/index.mdx": {
	id: "es/index.mdx";
  slug: "es";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"es/install/00-prepare-for-install.md": {
	id: "es/install/00-prepare-for-install.md";
  slug: "es/install/00-prepare-for-install";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/install/01-install-supercollider.md": {
	id: "es/install/01-install-supercollider.md";
  slug: "es/install/01-install-supercollider";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/install/02-install-renardo-lib.md": {
	id: "es/install/02-install-renardo-lib.md";
  slug: "es/install/02-install-renardo-lib";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/install/03-renardo-init.md": {
	id: "es/install/03-renardo-init.md";
  slug: "es/install/03-renardo-init";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/install/04-start-livecoding.md": {
	id: "es/install/04-start-livecoding.md";
  slug: "es/install/04-start-livecoding";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/install/05-configure-editors.md": {
	id: "es/install/05-configure-editors.md";
  slug: "es/install/05-configure-editors";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/install/06-troubleshooting.md": {
	id: "es/install/06-troubleshooting.md";
  slug: "es/install/06-troubleshooting";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/install/reaper-expe.md": {
	id: "es/install/reaper-expe.md";
  slug: "es/install/reaper-expe";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/by_example/00-patterns.md": {
	id: "es/learn/by_example/00-patterns.md";
  slug: "es/learn/by_example/00-patterns";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/by_example/01-chord-progression.md": {
	id: "es/learn/by_example/01-chord-progression.md";
  slug: "es/learn/by_example/01-chord-progression";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/by_example/02-synth-attributes.md": {
	id: "es/learn/by_example/02-synth-attributes.md";
  slug: "es/learn/by_example/02-synth-attributes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/by_example/03-sample-attributes.md": {
	id: "es/learn/by_example/03-sample-attributes.md";
  slug: "es/learn/by_example/03-sample-attributes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/by_example/04-scales.md": {
	id: "es/learn/by_example/04-scales.md";
  slug: "es/learn/by_example/04-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/by_example/05-beats.md": {
	id: "es/learn/by_example/05-beats.md";
  slug: "es/learn/by_example/05-beats";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/by_example/06-transitions.md": {
	id: "es/learn/by_example/06-transitions.md";
  slug: "es/learn/by_example/06-transitions";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/music_theory/00-arrangement.md": {
	id: "es/learn/music_theory/00-arrangement.md";
  slug: "es/learn/music_theory/00-arrangement";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/music_theory/01-chords.md": {
	id: "es/learn/music_theory/01-chords.md";
  slug: "es/learn/music_theory/01-chords";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/music_theory/02-melody.md": {
	id: "es/learn/music_theory/02-melody.md";
  slug: "es/learn/music_theory/02-melody";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/music_theory/03-scales.md": {
	id: "es/learn/music_theory/03-scales.md";
  slug: "es/learn/music_theory/03-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/music_theory/04-rhythm.md": {
	id: "es/learn/music_theory/04-rhythm.md";
  slug: "es/learn/music_theory/04-rhythm";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/00-preparation.md": {
	id: "es/learn/renardo/00-preparation.md";
  slug: "es/learn/renardo/00-preparation";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/01-introduction.md": {
	id: "es/learn/renardo/01-introduction.md";
  slug: "es/learn/renardo/01-introduction";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/02-littlepython.md": {
	id: "es/learn/renardo/02-littlepython.md";
  slug: "es/learn/renardo/02-littlepython";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/03-synthplayer.md": {
	id: "es/learn/renardo/03-synthplayer.md";
  slug: "es/learn/renardo/03-synthplayer";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/04-sample-player.md": {
	id: "es/learn/renardo/04-sample-player.md";
  slug: "es/learn/renardo/04-sample-player";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/05-loop-player-object.md": {
	id: "es/learn/renardo/05-loop-player-object.md";
  slug: "es/learn/renardo/05-loop-player-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/06-clock.md": {
	id: "es/learn/renardo/06-clock.md";
  slug: "es/learn/renardo/06-clock";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/07-patterns.md": {
	id: "es/learn/renardo/07-patterns.md";
  slug: "es/learn/renardo/07-patterns";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/08-timevars.md": {
	id: "es/learn/renardo/08-timevars.md";
  slug: "es/learn/renardo/08-timevars";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/09-scales.md": {
	id: "es/learn/renardo/09-scales.md";
  slug: "es/learn/renardo/09-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/renardo/10-groups.md": {
	id: "es/learn/renardo/10-groups.md";
  slug: "es/learn/renardo/10-groups";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/supercollider/01-create-synthdefs.md": {
	id: "es/learn/supercollider/01-create-synthdefs.md";
  slug: "es/learn/supercollider/01-create-synthdefs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"es/learn/supercollider/02-create-fxs.md": {
	id: "es/learn/supercollider/02-create-fxs.md";
  slug: "es/learn/supercollider/02-create-fxs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"install/00-prepare-for-install.md": {
	id: "install/00-prepare-for-install.md";
  slug: "install/00-prepare-for-install";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"install/01-install-supercollider.md": {
	id: "install/01-install-supercollider.md";
  slug: "install/01-install-supercollider";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"install/02-install-renardo-lib.md": {
	id: "install/02-install-renardo-lib.md";
  slug: "install/02-install-renardo-lib";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"install/03-renardo-init.md": {
	id: "install/03-renardo-init.md";
  slug: "install/03-renardo-init";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"install/04-start-livecoding.md": {
	id: "install/04-start-livecoding.md";
  slug: "install/04-start-livecoding";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"install/05-configure-editors.md": {
	id: "install/05-configure-editors.md";
  slug: "install/05-configure-editors";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"install/06-troubleshooting.md": {
	id: "install/06-troubleshooting.md";
  slug: "install/06-troubleshooting";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"install/reaper-expe.md": {
	id: "install/reaper-expe.md";
  slug: "install/reaper-expe";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/about/renardo.md": {
	id: "it/about/renardo.md";
  slug: "it/about/renardo";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/index.mdx": {
	id: "it/index.mdx";
  slug: "it";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"it/install/00-prepare-for-install.md": {
	id: "it/install/00-prepare-for-install.md";
  slug: "it/install/00-prepare-for-install";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/install/01-install-supercollider.md": {
	id: "it/install/01-install-supercollider.md";
  slug: "it/install/01-install-supercollider";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/install/02-install-renardo-lib.md": {
	id: "it/install/02-install-renardo-lib.md";
  slug: "it/install/02-install-renardo-lib";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/install/03-renardo-init.md": {
	id: "it/install/03-renardo-init.md";
  slug: "it/install/03-renardo-init";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/install/04-start-livecoding.md": {
	id: "it/install/04-start-livecoding.md";
  slug: "it/install/04-start-livecoding";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/install/05-configure-editors.md": {
	id: "it/install/05-configure-editors.md";
  slug: "it/install/05-configure-editors";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/install/06-troubleshooting.md": {
	id: "it/install/06-troubleshooting.md";
  slug: "it/install/06-troubleshooting";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/by_example/00-patterns.md": {
	id: "it/learn/by_example/00-patterns.md";
  slug: "it/learn/by_example/00-patterns";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/by_example/01-chord-progression.md": {
	id: "it/learn/by_example/01-chord-progression.md";
  slug: "it/learn/by_example/01-chord-progression";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/by_example/02-synth-attributes.md": {
	id: "it/learn/by_example/02-synth-attributes.md";
  slug: "it/learn/by_example/02-synth-attributes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/by_example/03-sample-attributes.md": {
	id: "it/learn/by_example/03-sample-attributes.md";
  slug: "it/learn/by_example/03-sample-attributes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/by_example/04-scales.md": {
	id: "it/learn/by_example/04-scales.md";
  slug: "it/learn/by_example/04-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/by_example/05-beats.md": {
	id: "it/learn/by_example/05-beats.md";
  slug: "it/learn/by_example/05-beats";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/by_example/06-transitions.md": {
	id: "it/learn/by_example/06-transitions.md";
  slug: "it/learn/by_example/06-transitions";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/music_theory/00-arrangement.md": {
	id: "it/learn/music_theory/00-arrangement.md";
  slug: "it/learn/music_theory/00-arrangement";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/music_theory/01-chords.md": {
	id: "it/learn/music_theory/01-chords.md";
  slug: "it/learn/music_theory/01-chords";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/music_theory/02-melody.md": {
	id: "it/learn/music_theory/02-melody.md";
  slug: "it/learn/music_theory/02-melody";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/music_theory/03-scales.md": {
	id: "it/learn/music_theory/03-scales.md";
  slug: "it/learn/music_theory/03-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/music_theory/04-rhythm.md": {
	id: "it/learn/music_theory/04-rhythm.md";
  slug: "it/learn/music_theory/04-rhythm";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/00-preparation.md": {
	id: "it/learn/renardo/00-preparation.md";
  slug: "it/learn/renardo/00-preparation";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/01-introduction.md": {
	id: "it/learn/renardo/01-introduction.md";
  slug: "it/learn/renardo/01-introduction";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/02-littlepython.md": {
	id: "it/learn/renardo/02-littlepython.md";
  slug: "it/learn/renardo/02-littlepython";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/03-synthplayer.md": {
	id: "it/learn/renardo/03-synthplayer.md";
  slug: "it/learn/renardo/03-synthplayer";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/05-loop-player-object.md": {
	id: "it/learn/renardo/05-loop-player-object.md";
  slug: "it/learn/renardo/05-loop-player-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/06-clock.md": {
	id: "it/learn/renardo/06-clock.md";
  slug: "it/learn/renardo/06-clock";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/07-patterns.md": {
	id: "it/learn/renardo/07-patterns.md";
  slug: "it/learn/renardo/07-patterns";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/08-timevars.md": {
	id: "it/learn/renardo/08-timevars.md";
  slug: "it/learn/renardo/08-timevars";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/09-scales.md": {
	id: "it/learn/renardo/09-scales.md";
  slug: "it/learn/renardo/09-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/renardo/10-groups.md": {
	id: "it/learn/renardo/10-groups.md";
  slug: "it/learn/renardo/10-groups";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/supercollider/01-create-synthdefs.md": {
	id: "it/learn/supercollider/01-create-synthdefs.md";
  slug: "it/learn/supercollider/01-create-synthdefs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"it/learn/supercollider/02-create-fxs.md": {
	id: "it/learn/supercollider/02-create-fxs.md";
  slug: "it/learn/supercollider/02-create-fxs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/by_example/00-patterns.md": {
	id: "learn/by_example/00-patterns.md";
  slug: "learn/by_example/00-patterns";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/by_example/01-chord-progression.md": {
	id: "learn/by_example/01-chord-progression.md";
  slug: "learn/by_example/01-chord-progression";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/by_example/02-synth-attributes.md": {
	id: "learn/by_example/02-synth-attributes.md";
  slug: "learn/by_example/02-synth-attributes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/by_example/03-sample-attributes.md": {
	id: "learn/by_example/03-sample-attributes.md";
  slug: "learn/by_example/03-sample-attributes";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/by_example/04-scales.md": {
	id: "learn/by_example/04-scales.md";
  slug: "learn/by_example/04-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/by_example/05-beats.md": {
	id: "learn/by_example/05-beats.md";
  slug: "learn/by_example/05-beats";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/by_example/06-transitions.md": {
	id: "learn/by_example/06-transitions.md";
  slug: "learn/by_example/06-transitions";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/music_theory/00-arrangement.md": {
	id: "learn/music_theory/00-arrangement.md";
  slug: "learn/music_theory/00-arrangement";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/music_theory/01-chords.md": {
	id: "learn/music_theory/01-chords.md";
  slug: "learn/music_theory/01-chords";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/music_theory/02-melody.md": {
	id: "learn/music_theory/02-melody.md";
  slug: "learn/music_theory/02-melody";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/music_theory/03-scales.md": {
	id: "learn/music_theory/03-scales.md";
  slug: "learn/music_theory/03-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/music_theory/04-rhythm.md": {
	id: "learn/music_theory/04-rhythm.md";
  slug: "learn/music_theory/04-rhythm";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/00-preparation.md": {
	id: "learn/renardo/00-preparation.md";
  slug: "learn/renardo/00-preparation";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/01-introduction.md": {
	id: "learn/renardo/01-introduction.md";
  slug: "learn/renardo/01-introduction";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/02-littlepython.md": {
	id: "learn/renardo/02-littlepython.md";
  slug: "learn/renardo/02-littlepython";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/03-synthplayer.md": {
	id: "learn/renardo/03-synthplayer.md";
  slug: "learn/renardo/03-synthplayer";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/04-sample-player.md": {
	id: "learn/renardo/04-sample-player.md";
  slug: "learn/renardo/04-sample-player";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/05-loop-player-object.md": {
	id: "learn/renardo/05-loop-player-object.md";
  slug: "learn/renardo/05-loop-player-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/06-clock.md": {
	id: "learn/renardo/06-clock.md";
  slug: "learn/renardo/06-clock";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/07-patterns.md": {
	id: "learn/renardo/07-patterns.md";
  slug: "learn/renardo/07-patterns";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/08-timevars.md": {
	id: "learn/renardo/08-timevars.md";
  slug: "learn/renardo/08-timevars";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/09-scales.md": {
	id: "learn/renardo/09-scales.md";
  slug: "learn/renardo/09-scales";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/renardo/10-groups.md": {
	id: "learn/renardo/10-groups.md";
  slug: "learn/renardo/10-groups";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/supercollider/01-create-synthdefs.md": {
	id: "learn/supercollider/01-create-synthdefs.md";
  slug: "learn/supercollider/01-create-synthdefs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"learn/supercollider/02-create-fxs.md": {
	id: "learn/supercollider/02-create-fxs.md";
  slug: "learn/supercollider/02-create-fxs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
