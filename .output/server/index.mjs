globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-08T10:25:53.156Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/index-DAfyKeDo.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1d88-JV49B5bz0cwftpVlM4XpHLAjyRY\"",
		"mtime": "2026-07-08T10:54:10.231Z",
		"size": 7560,
		"path": "../public/assets/index-DAfyKeDo.css"
	},
	"/assets/instrument-serif-latin-400-normal-BVbkICAY.woff": {
		"type": "font/woff",
		"etag": "\"47a0-gcJEnb/LGDx7nrn1aTtY+BOLQ1g\"",
		"mtime": "2026-07-08T10:54:10.233Z",
		"size": 18336,
		"path": "../public/assets/instrument-serif-latin-400-normal-BVbkICAY.woff"
	},
	"/assets/instrument-serif-latin-400-normal-DnYpCC2O.woff2": {
		"type": "font/woff2",
		"etag": "\"5228-N930ZbvMJSd2o33PKBeaPKWQNjs\"",
		"mtime": "2026-07-08T10:54:10.234Z",
		"size": 21032,
		"path": "../public/assets/instrument-serif-latin-400-normal-DnYpCC2O.woff2"
	},
	"/assets/instrument-serif-latin-ext-400-normal-C2je3j2s.woff2": {
		"type": "font/woff2",
		"etag": "\"2d54-Xxeo3XdJ6FXAXKOtGGF7XZRcIkc\"",
		"mtime": "2026-07-08T10:54:10.235Z",
		"size": 11604,
		"path": "../public/assets/instrument-serif-latin-ext-400-normal-C2je3j2s.woff2"
	},
	"/assets/index-DRJvEqiA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"544b3-a++6zSs1r+AQ5z3UgTiIluihJTE\"",
		"mtime": "2026-07-08T10:54:10.229Z",
		"size": 345267,
		"path": "../public/assets/index-DRJvEqiA.js"
	},
	"/assets/instrument-serif-latin-ext-400-normal-CFCUzsTy.woff": {
		"type": "font/woff",
		"etag": "\"2684-nZJW+YO/vzj1q9uH0WKXTf424gc\"",
		"mtime": "2026-07-08T10:54:10.237Z",
		"size": 9860,
		"path": "../public/assets/instrument-serif-latin-ext-400-normal-CFCUzsTy.woff"
	},
	"/assets/inter-cyrillic-400-normal-HOLc17fK.woff": {
		"type": "font/woff",
		"etag": "\"2634-ivoNz55T3CYjsRGYVvI78V6Hg84\"",
		"mtime": "2026-07-08T10:54:10.237Z",
		"size": 9780,
		"path": "../public/assets/inter-cyrillic-400-normal-HOLc17fK.woff"
	},
	"/assets/inter-cyrillic-400-normal-obahsSVq.woff2": {
		"type": "font/woff2",
		"etag": "\"1e20-2UATdNvSyhAwBTFW7JWXRnJeZyk\"",
		"mtime": "2026-07-08T10:54:10.240Z",
		"size": 7712,
		"path": "../public/assets/inter-cyrillic-400-normal-obahsSVq.woff2"
	},
	"/assets/inter-cyrillic-500-normal-BasfLYem.woff2": {
		"type": "font/woff2",
		"etag": "\"1edc-4p+L4DlZmQVqry+RH9lMmJQ+P0U\"",
		"mtime": "2026-07-08T10:54:10.243Z",
		"size": 7900,
		"path": "../public/assets/inter-cyrillic-500-normal-BasfLYem.woff2"
	},
	"/assets/inter-cyrillic-500-normal-CxZf_p3X.woff": {
		"type": "font/woff",
		"etag": "\"26d4-lAKYDJFVYDMKcLY/oR+ZyfOsllA\"",
		"mtime": "2026-07-08T10:54:10.245Z",
		"size": 9940,
		"path": "../public/assets/inter-cyrillic-500-normal-CxZf_p3X.woff"
	},
	"/assets/inter-cyrillic-600-normal-4D_pXhcN.woff": {
		"type": "font/woff",
		"etag": "\"26d0-I2CCKTFIJy7UNImTmVTFMc8WGWM\"",
		"mtime": "2026-07-08T10:54:10.245Z",
		"size": 9936,
		"path": "../public/assets/inter-cyrillic-600-normal-4D_pXhcN.woff"
	},
	"/assets/inter-cyrillic-600-normal-CWCymEST.woff2": {
		"type": "font/woff2",
		"etag": "\"1f24-tca4CMW+seK3RqmUMU0o0VZmyqg\"",
		"mtime": "2026-07-08T10:54:10.247Z",
		"size": 7972,
		"path": "../public/assets/inter-cyrillic-600-normal-CWCymEST.woff2"
	},
	"/assets/inter-cyrillic-ext-400-normal-BQZuk6qB.woff2": {
		"type": "font/woff2",
		"etag": "\"27f8-vx2gCiZcZIS7BSyHWqEe1Lm5p8Y\"",
		"mtime": "2026-07-08T10:54:10.247Z",
		"size": 10232,
		"path": "../public/assets/inter-cyrillic-ext-400-normal-BQZuk6qB.woff2"
	},
	"/assets/inter-cyrillic-ext-400-normal-DQukG94-.woff": {
		"type": "font/woff",
		"etag": "\"3418-0efK3fiFhInlHHjq0SFm+GVey2Y\"",
		"mtime": "2026-07-08T10:54:10.249Z",
		"size": 13336,
		"path": "../public/assets/inter-cyrillic-ext-400-normal-DQukG94-.woff"
	},
	"/assets/inter-cyrillic-ext-500-normal-B0yAr1jD.woff2": {
		"type": "font/woff2",
		"etag": "\"28c0-a4jJ9g181ZteaPVR7IOs0hVwtQg\"",
		"mtime": "2026-07-08T10:54:10.251Z",
		"size": 10432,
		"path": "../public/assets/inter-cyrillic-ext-500-normal-B0yAr1jD.woff2"
	},
	"/assets/inter-cyrillic-ext-500-normal-BmqWE9Dz.woff": {
		"type": "font/woff",
		"etag": "\"348c-1TbeWRwD3bVotPqIc3c/7sVxfo0\"",
		"mtime": "2026-07-08T10:54:10.253Z",
		"size": 13452,
		"path": "../public/assets/inter-cyrillic-ext-500-normal-BmqWE9Dz.woff"
	},
	"/assets/inter-cyrillic-ext-600-normal-Bcila6Z-.woff": {
		"type": "font/woff",
		"etag": "\"3498-zNJjP5Amk16bEdqbbZNObDtX308\"",
		"mtime": "2026-07-08T10:54:10.253Z",
		"size": 13464,
		"path": "../public/assets/inter-cyrillic-ext-600-normal-Bcila6Z-.woff"
	},
	"/assets/inter-cyrillic-ext-600-normal-Dfes3d0z.woff2": {
		"type": "font/woff2",
		"etag": "\"28f4-KdWYNIoSwUf7MLulzakpM8nepFc\"",
		"mtime": "2026-07-08T10:54:10.255Z",
		"size": 10484,
		"path": "../public/assets/inter-cyrillic-ext-600-normal-Dfes3d0z.woff2"
	},
	"/assets/inter-greek-400-normal-B4URO6DV.woff2": {
		"type": "font/woff2",
		"etag": "\"1e60-ha06h5lB7nxuWvNKf61Dcnc1d1I\"",
		"mtime": "2026-07-08T10:54:10.256Z",
		"size": 7776,
		"path": "../public/assets/inter-greek-400-normal-B4URO6DV.woff2"
	},
	"/assets/inter-greek-400-normal-q2sYcFCs.woff": {
		"type": "font/woff",
		"etag": "\"26c4-bdX1N3nNMZxQdZJFiVUIvfgvPUk\"",
		"mtime": "2026-07-08T10:54:10.258Z",
		"size": 9924,
		"path": "../public/assets/inter-greek-400-normal-q2sYcFCs.woff"
	},
	"/assets/inter-greek-500-normal-BIZE56-Y.woff2": {
		"type": "font/woff2",
		"etag": "\"1ef0-rzB1Hth7JnUPaEXqA8yr0SpwMxk\"",
		"mtime": "2026-07-08T10:54:10.259Z",
		"size": 7920,
		"path": "../public/assets/inter-greek-500-normal-BIZE56-Y.woff2"
	},
	"/assets/inter-greek-500-normal-Xzm54t5V.woff": {
		"type": "font/woff",
		"etag": "\"26fc-aBzOXUzctfu1t0AWou6edVMARPA\"",
		"mtime": "2026-07-08T10:54:10.259Z",
		"size": 9980,
		"path": "../public/assets/inter-greek-500-normal-Xzm54t5V.woff"
	},
	"/assets/inter-greek-600-normal-BZpKdvQh.woff": {
		"type": "font/woff",
		"etag": "\"2730-u0VEy1HjIfUMvAeVgiAlRXW3Gg0\"",
		"mtime": "2026-07-08T10:54:10.261Z",
		"size": 10032,
		"path": "../public/assets/inter-greek-600-normal-BZpKdvQh.woff"
	},
	"/assets/inter-greek-600-normal-plRanbMR.woff2": {
		"type": "font/woff2",
		"etag": "\"1f08-dL8q9T10oywr5Ie+w0fBRkD/K6s\"",
		"mtime": "2026-07-08T10:54:10.263Z",
		"size": 7944,
		"path": "../public/assets/inter-greek-600-normal-plRanbMR.woff2"
	},
	"/assets/inter-greek-ext-400-normal-DGGRlc-M.woff2": {
		"type": "font/woff2",
		"etag": "\"1490-FueWPOzdNQpScjKjfRcVv5Yv1HM\"",
		"mtime": "2026-07-08T10:54:10.265Z",
		"size": 5264,
		"path": "../public/assets/inter-greek-ext-400-normal-DGGRlc-M.woff2"
	},
	"/assets/inter-greek-ext-400-normal-KugGGMne.woff": {
		"type": "font/woff",
		"etag": "\"1b98-M0BooO/fFnrQlgRJzUMnDMWQ/Qo\"",
		"mtime": "2026-07-08T10:54:10.265Z",
		"size": 7064,
		"path": "../public/assets/inter-greek-ext-400-normal-KugGGMne.woff"
	},
	"/assets/inter-greek-ext-500-normal-2j5mBUwD.woff": {
		"type": "font/woff",
		"etag": "\"1c18-qcQk7wkL8ZD2jgfjekhd8K3qWn0\"",
		"mtime": "2026-07-08T10:54:10.267Z",
		"size": 7192,
		"path": "../public/assets/inter-greek-ext-500-normal-2j5mBUwD.woff"
	},
	"/assets/inter-greek-ext-500-normal-C4iEst2y.woff2": {
		"type": "font/woff2",
		"etag": "\"1534-eUg1Jo5WjHY2xgQTOkilC7LKn3I\"",
		"mtime": "2026-07-08T10:54:10.269Z",
		"size": 5428,
		"path": "../public/assets/inter-greek-ext-500-normal-C4iEst2y.woff2"
	},
	"/assets/inter-greek-ext-600-normal-B8X0CLgF.woff": {
		"type": "font/woff",
		"etag": "\"1c2c-ceWCifetUVyF5uPKYdA318gl/j8\"",
		"mtime": "2026-07-08T10:54:10.269Z",
		"size": 7212,
		"path": "../public/assets/inter-greek-ext-600-normal-B8X0CLgF.woff"
	},
	"/assets/inter-greek-ext-600-normal-DRtmH8MT.woff2": {
		"type": "font/woff2",
		"etag": "\"1538-GoE9+rMXdldLs0MUbnyI6GfidCU\"",
		"mtime": "2026-07-08T10:54:10.272Z",
		"size": 5432,
		"path": "../public/assets/inter-greek-ext-600-normal-DRtmH8MT.woff2"
	},
	"/assets/inter-latin-400-normal-C38fXH4l.woff2": {
		"type": "font/woff2",
		"etag": "\"5c70-aPZFxrb/EuJcVLE9TtEZ5jHcuyY\"",
		"mtime": "2026-07-08T10:54:10.273Z",
		"size": 23664,
		"path": "../public/assets/inter-latin-400-normal-C38fXH4l.woff2"
	},
	"/assets/inter-latin-400-normal-CyCys3Eg.woff": {
		"type": "font/woff",
		"etag": "\"77e8-SbvLwKxssThdk7eEO6Aafq1EDIA\"",
		"mtime": "2026-07-08T10:54:10.275Z",
		"size": 30696,
		"path": "../public/assets/inter-latin-400-normal-CyCys3Eg.woff"
	},
	"/assets/inter-latin-500-normal-BL9OpVg8.woff": {
		"type": "font/woff",
		"etag": "\"7a34-RiJoWDij89wbmUrQ9vApTdR9iMs\"",
		"mtime": "2026-07-08T10:54:10.280Z",
		"size": 31284,
		"path": "../public/assets/inter-latin-500-normal-BL9OpVg8.woff"
	},
	"/assets/inter-latin-500-normal-Cerq10X2.woff2": {
		"type": "font/woff2",
		"etag": "\"5ed0-a2bHQb+Lw84kivBLIFGmSKODkdY\"",
		"mtime": "2026-07-08T10:54:10.282Z",
		"size": 24272,
		"path": "../public/assets/inter-latin-500-normal-Cerq10X2.woff2"
	},
	"/assets/inter-latin-600-normal-CiBQ2DWP.woff": {
		"type": "font/woff",
		"etag": "\"7a1c-7yTNkhBBRpiqSdmpUeo8hP6GAv8\"",
		"mtime": "2026-07-08T10:54:10.284Z",
		"size": 31260,
		"path": "../public/assets/inter-latin-600-normal-CiBQ2DWP.woff"
	},
	"/assets/inter-latin-600-normal-LgqL8muc.woff2": {
		"type": "font/woff2",
		"etag": "\"5f84-4NYfbcUR1koHKy9NyU4VXs8btvY\"",
		"mtime": "2026-07-08T10:54:10.286Z",
		"size": 24452,
		"path": "../public/assets/inter-latin-600-normal-LgqL8muc.woff2"
	},
	"/assets/inter-latin-ext-400-normal-77YHD8bZ.woff": {
		"type": "font/woff",
		"etag": "\"b9c8-Bhja6T6VCwLwb1wadgBSy3MfJBM\"",
		"mtime": "2026-07-08T10:54:10.288Z",
		"size": 47560,
		"path": "../public/assets/inter-latin-ext-400-normal-77YHD8bZ.woff"
	},
	"/assets/inter-latin-ext-400-normal-C1nco2VV.woff2": {
		"type": "font/woff2",
		"etag": "\"88b8-G/H4NxekwCldh2+r75P8W7SzF98\"",
		"mtime": "2026-07-08T10:54:10.288Z",
		"size": 35e3,
		"path": "../public/assets/inter-latin-ext-400-normal-C1nco2VV.woff2"
	},
	"/assets/inter-latin-ext-500-normal-BxGbmqWO.woff": {
		"type": "font/woff",
		"etag": "\"bd6c-QCyyMz9w4NbwgJiEMxZozI/r+Ds\"",
		"mtime": "2026-07-08T10:54:10.293Z",
		"size": 48492,
		"path": "../public/assets/inter-latin-ext-500-normal-BxGbmqWO.woff"
	},
	"/assets/inter-latin-ext-500-normal-CV4jyFjo.woff2": {
		"type": "font/woff2",
		"etag": "\"8cb8-ncqRX/i2leXjDT1PI3s6qVpmf6g\"",
		"mtime": "2026-07-08T10:54:10.297Z",
		"size": 36024,
		"path": "../public/assets/inter-latin-ext-500-normal-CV4jyFjo.woff2"
	},
	"/assets/inter-latin-ext-600-normal-CIVaiw4L.woff": {
		"type": "font/woff",
		"etag": "\"be1c-8cD1HFH6FU9hlLytWwPGGUY70n4\"",
		"mtime": "2026-07-08T10:54:10.299Z",
		"size": 48668,
		"path": "../public/assets/inter-latin-ext-600-normal-CIVaiw4L.woff"
	},
	"/assets/inter-latin-ext-600-normal-D2bJ5OIk.woff2": {
		"type": "font/woff2",
		"etag": "\"8da4-7QGAEIYrxx26VfuVX2p4gRkHOKo\"",
		"mtime": "2026-07-08T10:54:10.299Z",
		"size": 36260,
		"path": "../public/assets/inter-latin-ext-600-normal-D2bJ5OIk.woff2"
	},
	"/assets/inter-vietnamese-400-normal-Bbgyi5SW.woff": {
		"type": "font/woff",
		"etag": "\"1964-Uz2qf+4P37GRYrj2tnfiNdz3cwc\"",
		"mtime": "2026-07-08T10:54:10.301Z",
		"size": 6500,
		"path": "../public/assets/inter-vietnamese-400-normal-Bbgyi5SW.woff"
	},
	"/assets/inter-vietnamese-400-normal-DMkecbls.woff2": {
		"type": "font/woff2",
		"etag": "\"136c-x5LSIOvtcMpNpAaXtHsgRr9Y068\"",
		"mtime": "2026-07-08T10:54:10.303Z",
		"size": 4972,
		"path": "../public/assets/inter-vietnamese-400-normal-DMkecbls.woff2"
	},
	"/assets/inter-vietnamese-500-normal-DOriooB6.woff2": {
		"type": "font/woff2",
		"etag": "\"13f8-CUM23jWJKM6nB7lsyh1fHy5MoZ4\"",
		"mtime": "2026-07-08T10:54:10.306Z",
		"size": 5112,
		"path": "../public/assets/inter-vietnamese-500-normal-DOriooB6.woff2"
	},
	"/assets/inter-vietnamese-500-normal-mJboJaSs.woff": {
		"type": "font/woff",
		"etag": "\"19c4-GIi0pWixVrurGnEPzcWNPRmQHPA\"",
		"mtime": "2026-07-08T10:54:10.308Z",
		"size": 6596,
		"path": "../public/assets/inter-vietnamese-500-normal-mJboJaSs.woff"
	},
	"/assets/inter-vietnamese-600-normal-BuLX-rYi.woff": {
		"type": "font/woff",
		"etag": "\"19f0-dZ/EhN2gqjVMAOO8T5PiEnOw62w\"",
		"mtime": "2026-07-08T10:54:10.312Z",
		"size": 6640,
		"path": "../public/assets/inter-vietnamese-600-normal-BuLX-rYi.woff"
	},
	"/assets/inter-vietnamese-600-normal-Cc8MFFhd.woff2": {
		"type": "font/woff2",
		"etag": "\"13ec-+Z5aj32FhioUUaW+56MD6v89VjU\"",
		"mtime": "2026-07-08T10:54:10.316Z",
		"size": 5100,
		"path": "../public/assets/inter-vietnamese-600-normal-Cc8MFFhd.woff2"
	},
	"/assets/routes-BmmhlR8I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"119bb8-pwqRXsFq4QTYv+t4wE9QJ7dpDME\"",
		"mtime": "2026-07-08T10:54:10.231Z",
		"size": 1153976,
		"path": "../public/assets/routes-BmmhlR8I.js"
	},
	"/assets/styles-D5UoVmvW.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13e42-OxA4U7FOiSvEi+uff1XpSgYKk0s\"",
		"mtime": "2026-07-08T10:54:10.318Z",
		"size": 81474,
		"path": "../public/assets/styles-D5UoVmvW.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_MiJU1T = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_MiJU1T
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
