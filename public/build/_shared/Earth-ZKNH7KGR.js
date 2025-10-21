import {
  Canvas,
  OrbitControls,
  Preload,
  useFrame,
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

// app/library/canvas/Earth.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/library/canvas/Earth.jsx"' + id);
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
    "app/library/canvas/Earth.jsx"
  );
  import.meta.hot.lastModified = "1758737413172.517";
}
var Earth = () => {
  _s();
  const earth = useGLTF("/earth_scene-transformed.glb");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("primitive", { object: earth.scene, scale: 1.7, position: [0, 0, 0], rotation: [0, 0, 0] }, void 0, false, {
    fileName: "app/library/canvas/Earth.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s(Earth, "OGKWJzkmGgy+ygu0VRN3opqliMU=", false, function() {
  return [useGLTF];
});
_c = Earth;
var CameraLight = () => {
  _s2();
  const lightRef = (0, import_react.useRef)();
  useFrame(({
    camera
  }) => {
    if (lightRef.current) {
      lightRef.current.position.copy(camera.position);
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("directionalLight", { ref: lightRef, intensity: 20, color: "#ffffff" }, void 0, false, {
    fileName: "app/library/canvas/Earth.jsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
};
_s2(CameraLight, "Rhwz6s7yt2JYXd+0Q5s0JQ02+jk=", false, function() {
  return [useFrame];
});
_c2 = CameraLight;
var EarthCanvas = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Canvas, { shadows: true, frameloop: "demand", dpr: [1, 2], gl: {
    preserveDrawingBuffer: true
  }, camera: {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [-4, 3, 6]
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrbitControls, { autoRotate: true, enableZoom: false, maxPolarAngle: Math.PI / 2, minPolarAngle: Math.PI / 2 }, void 0, false, {
      fileName: "app/library/canvas/Earth.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CameraLight, {}, void 0, false, {
      fileName: "app/library/canvas/Earth.jsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("directionalLight", { position: [5, 10, 10], intensity: 10 }, void 0, false, {
      fileName: "app/library/canvas/Earth.jsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Earth, {}, void 0, false, {
      fileName: "app/library/canvas/Earth.jsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Preload, { all: true }, void 0, false, {
      fileName: "app/library/canvas/Earth.jsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/library/canvas/Earth.jsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_c3 = EarthCanvas;
var Earth_default = EarthCanvas;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Earth");
$RefreshReg$(_c2, "CameraLight");
$RefreshReg$(_c3, "EarthCanvas");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Earth_default as default
};
//# sourceMappingURL=/build/_shared/Earth-ZKNH7KGR.js.map
