

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2WwfH7CO.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.ZLPrqq-8.js"];
export const stylesheets = ["_app/immutable/assets/0.izgdDfGs.css"];
export const fonts = [];
