// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2aumc":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ccbec8ff342c4ab4";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3qW8w":[function(require,module,exports) {
var _homeCss = require("../css/home.css");
var _fontawesome = require("../utils/fontawesome");
const app = document.querySelector("#app");
const appHTML = `        
<div class="content">
<h1>PHASE CLIENT</h1>
<p>Minecraft 1.8.9 PvP Client, <br>with FPS boost and a lot of features!</p>
<div>
    <button type="button" onclick="window.open('https://www.dropbox.com/s/hhc9k5vbmq9194a/phaselauncher-v1-0-0.exe?dl=1')"><i class="fa-brands fa-windows"></i> Download Latest</button>
</div>
</div>`;
app.insertAdjacentHTML("beforeend", appHTML);

},{"../css/home.css":"c15tr","../utils/fontawesome":"1ftBq"}],"c15tr":[function() {},{}],"1ftBq":[function(require,module,exports) {
var global = arguments[3];
window.FontAwesomeKitConfig = {
    asyncLoading: {
        enabled: false
    },
    autoA11y: {
        enabled: true
    },
    baseUrl: "https://ka-f.fontawesome.com",
    baseUrlKit: "https://kit.fontawesome.com",
    detectConflictsUntil: null,
    iconUploads: {},
    id: 101957994,
    license: "pro",
    method: "css",
    minify: {
        enabled: true
    },
    token: "1b793eedb9",
    v4FontFaceShim: {
        enabled: true
    },
    v4shim: {
        enabled: true
    },
    v5FontFaceShim: {
        enabled: true
    },
    version: "6.1.1"
};
!function(t) {
    "function" == typeof define && define.amd ? define("kit-loader", t) : t();
}(function() {
    "use strict";
    function t1(e) {
        return (t1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        })(e);
    }
    function e1(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    function n1(t, e2) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e2 && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }
    function o1(t) {
        for(var o = 1; o < arguments.length; o++){
            var r = null != arguments[o] ? arguments[o] : {};
            o % 2 ? n1(Object(r), !0).forEach(function(n) {
                e1(t, n, r[n]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n1(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
            });
        }
        return t;
    }
    function r1(t2, e3) {
        return function(t) {
            if (Array.isArray(t)) return t;
        }(t2) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var n = [], o = !0, r = !1, i = void 0;
            try {
                for(var c, a = t[Symbol.iterator](); !(o = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); o = !0);
            } catch (t3) {
                r = !0, i = t3;
            } finally{
                try {
                    o || null == a.return || a.return();
                } finally{
                    if (r) throw i;
                }
            }
            return n;
        }(t2, e3) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return i1(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(t);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i1(t, e);
        }(t2, e3) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function i1(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for(var n = 0, o = new Array(e); n < e; n++)o[n] = t[n];
        return o;
    }
    function c1(t, e) {
        var n = e && e.addOn || "", o = e && e.baseFilename || t.license + n, r = e && e.minify ? ".min" : "", i = e && e.fileSuffix || t.method, c = e && e.subdir || t.method;
        return t.baseUrl + "/releases/" + ("latest" === t.version ? "latest" : "v".concat(t.version)) + "/" + c + "/" + o + r + "." + i;
    }
    function a1(t) {
        return t.baseUrlKit + "/" + t.token + "/" + t.id + "/kit-upload.css";
    }
    function u(t, e4) {
        var n2 = e4 || [
            "fa"
        ], o2 = "." + Array.prototype.join.call(n2, ",."), r2 = t.querySelectorAll(o2);
        Array.prototype.forEach.call(r2, function(e) {
            var n = e.getAttribute("title");
            e.setAttribute("aria-hidden", "true");
            var o = !e.nextElementSibling || !e.nextElementSibling.classList.contains("sr-only");
            if (n && o) {
                var r = t.createElement("span");
                r.innerHTML = n, r.classList.add("sr-only"), e.parentNode.insertBefore(r, e.nextSibling);
            }
        });
    }
    var f1, s1 = function() {}, d1 = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit, l = "undefined" == typeof setImmediate ? setTimeout : setImmediate, h = [];
    function m() {
        for(var t = 0; t < h.length; t++)h[t][0](h[t][1]);
        h = [], f1 = !1;
    }
    function p(t, e) {
        h.push([
            t,
            e
        ]), f1 || (f1 = !0, l(m, 0));
    }
    function v(t) {
        var e = t.owner, n = e._state, o = e._data, r = t[n], i = t.then;
        if ("function" == typeof r) {
            n = "fulfilled";
            try {
                o = r(o);
            } catch (t) {
                w(i, t);
            }
        }
        y(i, o) || ("fulfilled" === n && b(i, o), "rejected" === n && w(i, o));
    }
    function y(e, n) {
        var o;
        try {
            if (e === n) throw new TypeError("A promises callback cannot return that same promise.");
            if (n && ("function" == typeof n || "object" === t1(n))) {
                var r = n.then;
                if ("function" == typeof r) return r.call(n, function(t) {
                    o || (o = !0, n === t ? g(e, t) : b(e, t));
                }, function(t) {
                    o || (o = !0, w(e, t));
                }), !0;
            }
        } catch (t) {
            return o || w(e, t), !0;
        }
        return !1;
    }
    function b(t, e) {
        t !== e && y(t, e) || g(t, e);
    }
    function g(t, e) {
        "pending" === t._state && (t._state = "settled", t._data = e, p(S, t));
    }
    function w(t, e) {
        "pending" === t._state && (t._state = "settled", t._data = e, p(O, t));
    }
    function A(t) {
        t._then = t._then.forEach(v);
    }
    function S(t) {
        t._state = "fulfilled", A(t);
    }
    function O(t) {
        t._state = "rejected", A(t), !t._handled && d1 && global.process.emit("unhandledRejection", t._data, t);
    }
    function j(t) {
        global.process.emit("rejectionHandled", t);
    }
    function E(t4) {
        if ("function" != typeof t4) throw new TypeError("Promise resolver " + t4 + " is not a function");
        if (this instanceof E == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        this._then = [], function(t5, e) {
            function n(t) {
                w(e, t);
            }
            try {
                t5(function(t) {
                    b(e, t);
                }, n);
            } catch (t) {
                n(t);
            }
        }(t4, this);
    }
    E.prototype = {
        constructor: E,
        _state: "pending",
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function(t, e) {
            var n = {
                owner: this,
                then: new this.constructor(s1),
                fulfilled: t,
                rejected: e
            };
            return !e && !t || this._handled || (this._handled = !0, "rejected" === this._state && d1 && p(j, this)), "fulfilled" === this._state || "rejected" === this._state ? p(v, n) : this._then.push(n), n.then;
        },
        catch: function(t) {
            return this.then(null, t);
        }
    }, E.all = function(t6) {
        if (!Array.isArray(t6)) throw new TypeError("You must pass an array to Promise.all().");
        return new E(function(e, n3) {
            var o = [], r = 0;
            function i(t) {
                return r++, function(n) {
                    o[t] = n, --r || e(o);
                };
            }
            for(var c, a = 0; a < t6.length; a++)(c = t6[a]) && "function" == typeof c.then ? c.then(i(a), n3) : o[a] = c;
            r || e(o);
        });
    }, E.race = function(t) {
        if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.race().");
        return new E(function(e, n) {
            for(var o, r = 0; r < t.length; r++)(o = t[r]) && "function" == typeof o.then ? o.then(e, n) : e(o);
        });
    }, E.resolve = function(e) {
        return e && "object" === t1(e) && e.constructor === E ? e : new E(function(t) {
            t(e);
        });
    }, E.reject = function(t) {
        return new E(function(e, n) {
            n(t);
        });
    };
    var _ = "function" == typeof Promise ? Promise : E;
    function F(t7, e5) {
        var n = e5.fetch, o = e5.XMLHttpRequest, r3 = e5.token, i = t7;
        return "URLSearchParams" in window ? (i = new URL(t7)).searchParams.set("token", r3) : i = i + "?token=" + encodeURIComponent(r3), i = i.toString(), new _(function(t8, e6) {
            if ("function" == typeof n) n(i, {
                mode: "cors",
                cache: "default"
            }).then(function(t) {
                if (t.ok) return t.text();
                throw new Error("");
            }).then(function(e) {
                t8(e);
            }).catch(e6);
            else if ("function" == typeof o) {
                var r = new o();
                r.addEventListener("loadend", function() {
                    this.responseText ? t8(this.responseText) : e6(new Error(""));
                });
                [
                    "abort",
                    "error",
                    "timeout"
                ].map(function(t) {
                    r.addEventListener(t, function() {
                        e6(new Error(""));
                    });
                }), r.open("GET", i), r.send();
            } else e6(new Error(""));
        });
    }
    function P(t9, e7, n4) {
        var o3 = t9;
        return [
            [
                /(url\("?)\.\.\/\.\.\/\.\./g,
                function(t, n) {
                    return "".concat(n).concat(e7);
                }, 
            ],
            [
                /(url\("?)\.\.\/webfonts/g,
                function(t, o) {
                    return "".concat(o).concat(e7, "/releases/v").concat(n4, "/webfonts");
                }, 
            ],
            [
                /(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,
                function(t, n) {
                    return "".concat(n).concat(e7);
                }, 
            ], 
        ].forEach(function(t) {
            var e = r1(t, 2), n = e[0], i = e[1];
            o3 = o3.replace(n, i);
        }), o3;
    }
    function C(t10, e8) {
        var n5 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}, r4 = e8.document || r4, i2 = u.bind(u, r4, [
            "fa",
            "fab",
            "fas",
            "far",
            "fal",
            "fad",
            "fak"
        ]), f = Object.keys(t10.iconUploads || {}).length > 0;
        t10.autoA11y.enabled && n5(i2);
        var s = [
            {
                id: "fa-main",
                addOn: void 0
            }
        ];
        t10.v4shim && t10.v4shim.enabled && s.push({
            id: "fa-v4-shims",
            addOn: "-v4-shims"
        }), t10.v5FontFaceShim && t10.v5FontFaceShim.enabled && s.push({
            id: "fa-v5-font-face",
            addOn: "-v5-font-face"
        }), t10.v4FontFaceShim && t10.v4FontFaceShim.enabled && s.push({
            id: "fa-v4-font-face",
            addOn: "-v4-font-face"
        }), f && s.push({
            id: "fa-kit-upload",
            customCss: !0
        });
        var d = s.map(function(n) {
            return new _(function(r, i3) {
                F(n.customCss ? a1(t10) : c1(t10, {
                    addOn: n.addOn,
                    minify: t10.minify.enabled
                }), e8).then(function(i) {
                    r(U(i, o1(o1({}, e8), {}, {
                        baseUrl: t10.baseUrl,
                        version: t10.version,
                        id: n.id,
                        contentFilter: function(t, e) {
                            return P(t, e.baseUrl, e.version);
                        }
                    })));
                }).catch(i3);
            });
        });
        return _.all(d);
    }
    function U(t11, e) {
        var n = e.contentFilter || function(t, e) {
            return t;
        }, o = document.createElement("style"), r = document.createTextNode(n(t11, e));
        return o.appendChild(r), o.media = "all", e.id && o.setAttribute("id", e.id), e && e.detectingConflicts && e.detectionIgnoreAttr && o.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), o;
    }
    function k(t12, e9) {
        e9.autoA11y = t12.autoA11y.enabled, "pro" === t12.license && (e9.autoFetchSvg = !0, e9.fetchSvgFrom = t12.baseUrl + "/releases/" + ("latest" === t12.version ? "latest" : "v".concat(t12.version)) + "/svgs", e9.fetchUploadedSvgFrom = t12.uploadsUrl);
        var n6 = [];
        return t12.v4shim.enabled && n6.push(new _(function(n, r) {
            F(c1(t12, {
                addOn: "-v4-shims",
                minify: t12.minify.enabled
            }), e9).then(function(t) {
                n(I(t, o1(o1({}, e9), {}, {
                    id: "fa-v4-shims"
                })));
            }).catch(r);
        })), n6.push(new _(function(n7, r5) {
            F(c1(t12, {
                minify: t12.minify.enabled
            }), e9).then(function(t13) {
                var r = I(t13, o1(o1({}, e9), {}, {
                    id: "fa-main"
                }));
                n7(function(t, e) {
                    var n = e && void 0 !== e.autoFetchSvg ? e.autoFetchSvg : void 0, o = e && void 0 !== e.autoA11y ? e.autoA11y : void 0;
                    void 0 !== o && t.setAttribute("data-auto-a11y", o ? "true" : "false");
                    n && (t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")), t.setAttribute("data-fetch-svg-from", e.fetchSvgFrom), t.setAttribute("data-fetch-uploaded-svg-from", e.fetchUploadedSvgFrom));
                    return t;
                }(r, e9));
            }).catch(r5);
        })), _.all(n6);
    }
    function I(t, e) {
        var n = document.createElement("SCRIPT"), o = document.createTextNode(t);
        return n.appendChild(o), n.referrerPolicy = "strict-origin", e.id && n.setAttribute("id", e.id), e && e.detectingConflicts && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n;
    }
    function L(t) {
        var e, n = [], o = document, r = o.documentElement.doScroll, i = (r ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
        i || o.addEventListener("DOMContentLoaded", e = function() {
            for(o.removeEventListener("DOMContentLoaded", e), i = 1; e = n.shift();)e();
        }), i ? setTimeout(t, 0) : n.push(t);
    }
    function T(t) {
        "undefined" != typeof MutationObserver && new MutationObserver(t).observe(document, {
            childList: !0,
            subtree: !0
        });
    }
    try {
        if (window.FontAwesomeKitConfig) {
            var x = window.FontAwesomeKitConfig, M = {
                detectingConflicts: x.detectConflictsUntil && new Date() <= new Date(x.detectConflictsUntil),
                detectionIgnoreAttr: "data-fa-detection-ignore",
                fetch: window.fetch,
                token: x.token,
                XMLHttpRequest: window.XMLHttpRequest,
                document: document
            }, D = document.currentScript, N = D ? D.parentElement : document.head;
            (function() {
                var t14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "js" === t14.method ? k(t14, e) : "css" === t14.method ? C(t14, e, function(t) {
                    L(t), T(t);
                }) : void 0;
            })(x, M).then(function(t15) {
                t15.map(function(t) {
                    try {
                        N.insertBefore(t, D ? D.nextSibling : null);
                    } catch (e) {
                        N.appendChild(t);
                    }
                }), M.detectingConflicts && D && L(function() {
                    D.setAttributeNode(document.createAttribute(M.detectionIgnoreAttr));
                    var t16 = function(t, e) {
                        var n = document.createElement("script");
                        return e && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n.src = c1(t, {
                            baseFilename: "conflict-detection",
                            fileSuffix: "js",
                            subdir: "js",
                            minify: t.minify.enabled
                        }), n;
                    }(x, M);
                    document.body.appendChild(t16);
                });
            }).catch(function(t) {
                console.error("".concat("Font Awesome Kit:", " ").concat(t));
            });
        }
    } catch (t) {
        console.error("".concat("Font Awesome Kit:", " ").concat(t));
    }
});

},{}]},["2aumc","3qW8w"], "3qW8w", "parcelRequire6949")

//# sourceMappingURL=index.342c4ab4.js.map
