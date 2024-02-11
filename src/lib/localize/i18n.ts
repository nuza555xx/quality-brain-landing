/* eslint-disable @typescript-eslint/no-explicit-any */
import { derived, writable } from 'svelte/store';
import { LOCALIZES } from './translations';

export const locales = Object.keys(LOCALIZES);
export const locale = writable('en');

function translate(locale: keyof typeof LOCALIZES, key: any, vars: Record<string, string>) {
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	let text = LOCALIZES[locale][key];

	if (!text) throw new Error(`no translation found for ${locale}.${key}`);

	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale) => (key: any, vars?: keyof typeof LOCALIZES) =>
		translate($locale as keyof typeof LOCALIZES, key, vars ?? ({} as any)),
);
