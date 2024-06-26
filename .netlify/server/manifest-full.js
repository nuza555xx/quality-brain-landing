export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.r6ADvKNH.js","app":"_app/immutable/entry/app.6sPnaSQ7.js","imports":["_app/immutable/entry/start.r6ADvKNH.js","_app/immutable/chunks/entry.YQEPppV5.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.6sPnaSQ7.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.ZLPrqq-8.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
