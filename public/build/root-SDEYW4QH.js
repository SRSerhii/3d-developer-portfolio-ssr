import {
  Links,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-S4NLEH7R.js";
import {
  Footer,
  Navbar_default
} from "/build/_shared/chunk-PYZ3CRA3.js";
import "/build/_shared/chunk-5IV6QEQ5.js";
import "/build/_shared/chunk-E34UVH4Q.js";
import {
  useTranslation
} from "/build/_shared/chunk-ZTZ7TB5N.js";
import {
  Outlet
} from "/build/_shared/chunk-MTXAO3KM.js";
import "/build/_shared/chunk-LZFRHXZW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HALFQDQZ.js";
import {
  require_react
} from "/build/_shared/chunk-D77XCN57.js";
import {
  createHotContext
} from "/build/_shared/chunk-T3CE5YF7.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/root.tsx
var import_node = __toESM(require_node(), 1);

// node_modules/remix-i18next/build/react.js
var React = __toESM(require_react(), 1);
function useChangeLanguage(locale) {
  let { i18n } = useTranslation();
  React.useEffect(() => {
    if (i18n.language !== locale)
      i18n.changeLanguage(locale);
  }, [locale, i18n]);
}

// app/tailwind.css?url
var tailwind_default = "/build/_assets/tailwind-PYNT3YUR.css?url";

// app/root.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
  /*   {
      rel: "preload",
      href: sprite,
      as: "image",
      type: "image/svg+xml",
    }, */
];
var handle = {
  // In the handle export, we can add a i18n key with namespaces our route
  // will need to load. This key can be a single string or an array of strings.
  // TIP: In most cases, you should set this to your defaultNS from your i18n config
  // or if you did not set one, set it to the i18next default namespace "translation"
  i18n: "common"
};
var useClientEnv = () => {
  _s();
  return useLoaderData().clientEnv;
};
_s(useClientEnv, "UGd6Srho9ZIz3WBO/oX8v/JIOKQ=", false, function() {
  return [useLoaderData];
});
function App() {
  _s2();
  const {
    locale,
    clientEnv
  } = useLoaderData();
  const {
    i18n
  } = useTranslation();
  useChangeLanguage(locale);
  (0, import_react3.useEffect)(() => {
    if (typeof window === "undefined")
      return;
    window.env = clientEnv;
  }, [clientEnv]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: locale, dir: i18n.dir(), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_s2(App, "TaRYFGMzHTCueKornbKTDLoKRgc=", false, function() {
  return [useLoaderData, useTranslation, useChangeLanguage];
});
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  handle,
  links
};
//# sourceMappingURL=/build/root-SDEYW4QH.js.map
