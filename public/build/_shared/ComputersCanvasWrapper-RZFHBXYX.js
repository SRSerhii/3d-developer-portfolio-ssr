import {
  Canvas,
  OrbitControls,
  Preload,
  useGLTF
} from "/build/_shared/chunk-OGJSGAUU.js";
import "/build/_shared/chunk-E34UVH4Q.js";
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

// app/library/ComputersCanvasWrapper.jsx
var import_react2 = __toESM(require_react(), 1);

// app/library/canvas/Computers.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/library/canvas/Computers.jsx"' + id);
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
    "app/library/canvas/Computers.jsx"
  );
  import.meta.hot.lastModified = "1758928937297.077";
}
var Computers = ({
  isMobile
}) => {
  _s();
  const computer = useGLTF("/scene-transformed.glb");
  const groupRef = (0, import_react.useRef)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("mesh", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hemisphereLight", { intensity: 0.35, groundColor: "black" }, void 0, false, {
      fileName: "app/library/canvas/Computers.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("group", { ref: groupRef, scale: isMobile ? 0.7 : 0.37, position: isMobile ? [0, -1, -0.5] : [0, -1.25, -0.6], rotation: [-0.01, -0.4, -0.15], children: [
      computer.scene.children.map((child, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("primitive", { object: child }, idx, false, {
        fileName: "app/library/canvas/Computers.jsx",
        lineNumber: 39,
        columnNumber: 54
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("spotLight", { position: [-5, 10, 5], angle: 0.3, penumbra: 1, intensity: 1.5, castShadow: true, "shadow-mapSize": 512 }, void 0, false, {
        fileName: "app/library/canvas/Computers.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("pointLight", { intensity: 2, position: [2, 3, 2] }, void 0, false, {
        fileName: "app/library/canvas/Computers.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/library/canvas/Computers.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/library/canvas/Computers.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s(Computers, "CWICOF5msMe2f2upGV9O3Gx3YBw=", false, function() {
  return [useGLTF];
});
_c = Computers;
var ComputersCanvas = () => {
  _s2();
  const [isMobile, setIsMobile] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Canvas, { frameloop: "demand", style: {
    width: "100%",
    height: "100%"
  }, shadows: true, dpr: [1, 2], camera: {
    position: [15, 3, 5],
    fov: 25,
    near: 0.1,
    far: 5e3
  }, gl: {
    preserveDrawingBuffer: true
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrbitControls, { autoRotate: true, enableZoom: false, maxPolarAngle: Math.PI / 2, minPolarAngle: Math.PI / 2 }, void 0, false, {
      fileName: "app/library/canvas/Computers.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Computers, { isMobile }, void 0, false, {
      fileName: "app/library/canvas/Computers.jsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Preload, { all: true }, void 0, false, {
      fileName: "app/library/canvas/Computers.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/library/canvas/Computers.jsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
};
_s2(ComputersCanvas, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c2 = ComputersCanvas;
var Computers_default = ComputersCanvas;
var _c;
var _c2;
$RefreshReg$(_c, "Computers");
$RefreshReg$(_c2, "ComputersCanvas");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/library/ComputersCanvasWrapper.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/library/ComputersCanvasWrapper.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/library/ComputersCanvasWrapper.jsx"
  );
  import.meta.hot.lastModified = "1758929848847.4124";
}
var ComputersCanvasWrapper = import_react2.default.memo(_c3 = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Computers_default, {}, void 0, false, {
    fileName: "app/library/ComputersCanvasWrapper.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
});
_c22 = ComputersCanvasWrapper;
var ComputersCanvasWrapper_default = ComputersCanvasWrapper;
var _c3;
var _c22;
$RefreshReg$(_c3, "ComputersCanvasWrapper$React.memo");
$RefreshReg$(_c22, "ComputersCanvasWrapper");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ComputersCanvasWrapper_default as default
};
//# sourceMappingURL=/build/_shared/ComputersCanvasWrapper-RZFHBXYX.js.map
