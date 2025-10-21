import {
  Canvas,
  PointMaterial,
  Points,
  Preload,
  Vector2,
  useFrame
} from "/build/_shared/chunk-OGJSGAUU.js";
import {
  ClientOnly,
  Contact_default,
  Experience_default,
  Hero_2_default,
  Projects_default,
  ServicesSection_default,
  ToolsSection_default
} from "/build/_shared/chunk-5IV6QEQ5.js";
import "/build/_shared/chunk-E34UVH4Q.js";
import {
  useTranslation
} from "/build/_shared/chunk-ZTZ7TB5N.js";
import {
  init_dist2 as init_dist,
  useParams
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
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/library/canvas/Stars.jsx
var import_react = __toESM(require_react(), 1);

// node_modules/maath/dist/objectSpread2-284232a6.esm.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

// node_modules/maath/dist/triangle-b62b9067.esm.js
var mv1 = new Vector2();
var mv2 = new Vector2();

// node_modules/maath/dist/classCallCheck-9098b006.esm.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/maath/dist/index-0332b2ed.esm.js
var Grad = function Grad2(x, y, z) {
  var _this = this;
  _classCallCheck(this, Grad2);
  _defineProperty(this, "dot2", function(x2, y2) {
    return _this.x * x2 + _this.y * y2;
  });
  _defineProperty(this, "dot3", function(x2, y2, z2) {
    return _this.x * x2 + _this.y * y2 + _this.z * z2;
  });
  this.x = x;
  this.y = y;
  this.z = z;
};
var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0), new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1), new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
var perm = new Array(512);
var gradP = new Array(512);
var seed = function seed2(_seed) {
  if (_seed > 0 && _seed < 1) {
    _seed *= 65536;
  }
  _seed = Math.floor(_seed);
  if (_seed < 256) {
    _seed |= _seed << 8;
  }
  for (var i = 0; i < 256; i++) {
    var v;
    if (i & 1) {
      v = p[i] ^ _seed & 255;
    } else {
      v = p[i] ^ _seed >> 8 & 255;
    }
    perm[i] = perm[i + 256] = v;
    gradP[i] = gradP[i + 256] = grad3[v % 12];
  }
};
seed(0);
var F2 = 0.5 * (Math.sqrt(3) - 1);
var G2 = (3 - Math.sqrt(3)) / 6;
var F3 = 1 / 3;
var G3 = 1 / 6;
var TAU = Math.PI * 2;
function normalizeSeed(seed3) {
  if (typeof seed3 === "number") {
    seed3 = Math.abs(seed3);
  } else if (typeof seed3 === "string") {
    var string = seed3;
    seed3 = 0;
    for (var i = 0; i < string.length; i++) {
      seed3 = (seed3 + (i + 1) * (string.charCodeAt(i) % 96)) % 2147483647;
    }
  }
  if (seed3 === 0) {
    seed3 = 311;
  }
  return seed3;
}
function lcgRandom(seed3) {
  var state = normalizeSeed(seed3);
  return function() {
    var result = state * 48271 % 2147483647;
    state = result;
    return result / 2147483647;
  };
}
var Generator = function Generator2(_seed) {
  var _this = this;
  _classCallCheck(this, Generator2);
  _defineProperty(this, "seed", 0);
  _defineProperty(this, "init", function(seed3) {
    _this.seed = seed3;
    _this.value = lcgRandom(seed3);
  });
  _defineProperty(this, "value", lcgRandom(this.seed));
  this.init(_seed);
};
var defaultGen = new Generator(Math.random());
var defaultSphere = {
  radius: 1,
  center: [0, 0, 0]
};
function inSphere(buffer, sphere) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultSphere$sphere2 = _objectSpread2(_objectSpread2({}, defaultSphere), sphere), radius = _defaultSphere$sphere2.radius, center = _defaultSphere$sphere2.center;
  for (var i = 0; i < buffer.length; i += 3) {
    var u = Math.pow(rng.value(), 1 / 3);
    var x = rng.value() * 2 - 1;
    var y = rng.value() * 2 - 1;
    var z = rng.value() * 2 - 1;
    var mag = Math.sqrt(x * x + y * y + z * z);
    x = u * x / mag;
    y = u * y / mag;
    z = u * z / mag;
    buffer[i] = x * radius + center[0];
    buffer[i + 1] = y * radius + center[1];
    buffer[i + 2] = z * radius + center[2];
  }
  return buffer;
}

// app/library/canvas/Stars.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/library/canvas/Stars.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/library/canvas/Stars.jsx"
  );
  import.meta.hot.lastModified = "1758737413173.032";
}
var Stars = (props) => {
  _s();
  const ref = (0, import_react.useRef)();
  const [sphere] = (0, import_react.useState)(() => inSphere(new Float32Array(5e3), {
    radius: 1.2
  }));
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("group", { rotation: [0, 0, Math.PI / 4], children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Points, { ref, positions: sphere, stride: 3, frustumCulled: true, ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PointMaterial, { transparent: true, color: "#f272c8", size: 2e-3, sizeAttenuation: true, depthWrite: false }, void 0, false, {
    fileName: "app/library/canvas/Stars.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/library/canvas/Stars.jsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/library/canvas/Stars.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s(Stars, "gIr6aTgAsiZDIQkZaarQUw/7viY=", false, function() {
  return [useFrame];
});
_c = Stars;
var StarsCanvas = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-auto absolute inset-0 z-[-1]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Canvas, { camera: {
    position: [0, 0, 1]
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stars, {}, void 0, false, {
      fileName: "app/library/canvas/Stars.jsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/library/canvas/Stars.jsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Preload, { all: true }, void 0, false, {
      fileName: "app/library/canvas/Stars.jsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/library/canvas/Stars.jsx",
    lineNumber: 48,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/library/canvas/Stars.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_c2 = StarsCanvas;
var Stars_default = StarsCanvas;
var _c;
var _c2;
$RefreshReg$(_c, "Stars");
$RefreshReg$(_c2, "StarsCanvas");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
init_dist();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
var _s22 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1759265011925.323";
}
var meta = ({
  location
}) => {
  _s2();
  const {
    t,
    i18n
  } = useTranslation("common");
  return [{
    title: t("meta.title")
  }, {
    name: "description",
    content: t("meta.description")
  }, {
    name: "keywords",
    content: t("meta.keywords")
  }, {
    name: "author",
    content: t("meta.author")
  }, {
    tagName: "link",
    rel: "canonical",
    href: t("meta.url")
  }, {
    name: "robots",
    content: "index, follow"
  }, {
    property: "og:type",
    content: t("meta.type")
  }, {
    property: "og:url",
    content: t("meta.url")
  }, {
    property: "title",
    content: t("meta.title")
  }, {
    property: "og:description",
    content: t("meta.description")
  }, {
    property: "og:image",
    content: t("meta.Img")
  }, {
    property: "og:site_name",
    content: t("meta.author")
  }, {
    property: "og:locale",
    content: t("meta.OgLocale")
  }, {
    property: "twitter:card",
    content: "summary_large_image"
  }, {
    property: "twitter:site",
    content: t("meta.url")
  }, {
    property: "twitter:title",
    content: t("meta.title")
  }, {
    property: "twitter:description",
    content: t("meta.description")
  }, {
    property: "twitter:image",
    content: t("meta.Img")
  }, {
    property: "twitter:creator",
    content: t("meta.author")
  }];
};
_s2(meta, "OZwazanA59tbNDUkc8lMSmTHj9Q=", false, function() {
  return [useTranslation];
});
function Index() {
  _s22();
  const {
    lang
  } = useParams();
  const {
    t,
    i18n
  } = useTranslation();
  if (typeof window !== "undefined") {
    const url = window.location.href || "en";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Hero_2_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ServicesSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Experience_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ToolsSection_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Projects_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative z-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Contact_default, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 143,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Stars_default, {}, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s22(Index, "r0LIVANrHbaSV1YakUocq28Bis4=", false, function() {
  return [useParams, useTranslation];
});
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-UKBB2XRL.js.map
