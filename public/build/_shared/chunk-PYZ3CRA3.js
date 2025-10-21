import {
  FaTelegramPlane,
  GenIcon
} from "/build/_shared/chunk-5IV6QEQ5.js";
import {
  useTranslation
} from "/build/_shared/chunk-ZTZ7TB5N.js";
import {
  Link,
  init_dist2 as init_dist,
  useLocation,
  useNavigate,
  useParams
} from "/build/_shared/chunk-MTXAO3KM.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-HALFQDQZ.js";
import {
  require_react
} from "/build/_shared/chunk-D77XCN57.js";
import {
  createHotContext
} from "/build/_shared/chunk-T3CE5YF7.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/library/Navbar.jsx
var import_react2 = __toESM(require_react(), 1);
init_dist();

// app/assets/Serhii_Shevchenko_Logo_transparent.webp
var Serhii_Shevchenko_Logo_transparent_default = "/build/_assets/Serhii_Shevchenko_Logo_transparent-P642WWMG.webp";

// app/assets/menu.svg
var menu_default = "/build/_assets/menu-YTG2YPV3.svg";

// app/assets/close.svg
var close_default = "/build/_assets/close-ZF36KV6S.svg";

// app/assets/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/assets/index.js"
  );
  import.meta.hot.lastModified = "1758825818744.491";
}

// app/library/LanguageSwitcher/LanguageSwitcher.jsx
init_dist();
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/library/LanguageSwitcher/LanguageSwitcher.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/library/LanguageSwitcher/LanguageSwitcher.jsx"
  );
  import.meta.hot.lastModified = "1759263490876.1106";
}
var LanguageSwitcher = () => {
  _s();
  const {
    i18n: i18n2
  } = useTranslation();
  const navigate = useNavigate();
  let location;
  if (typeof window !== "undefined") {
    location = window.location || "en";
  }
  (0, import_react.useEffect)(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = i18n2.language;
    }
  }, [i18n2.language]);
  const handleLanguageChange = (lang) => {
    i18n2.changeLanguage(lang);
    const currentPathWithoutLang = location.pathname.replace(/^\/(en|uk)/, "");
    navigate(`/${lang}${currentPathWithoutLang}${location.hash}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: `font-bold ${i18n2.language === "en" ? "text-white" : "text-secondary"}`, onClick: () => handleLanguageChange("en"), children: "\u{1F1FA}\u{1F1F8} EN" }, void 0, false, {
      fileName: "app/library/LanguageSwitcher/LanguageSwitcher.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-px h-5 bg-gray-500" }, void 0, false, {
      fileName: "app/library/LanguageSwitcher/LanguageSwitcher.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: `font-bold ${i18n2.language === "uk" ? "text-white" : "text-secondary"}`, onClick: () => handleLanguageChange("uk"), children: "\u{1F1FA}\u{1F1E6} UK" }, void 0, false, {
      fileName: "app/library/LanguageSwitcher/LanguageSwitcher.jsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/library/LanguageSwitcher/LanguageSwitcher.jsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
};
_s(LanguageSwitcher, "suSDP8Q1Q4oqbs4LJ4ddiDbR7F4=", false, function() {
  return [useTranslation, useNavigate];
});
_c = LanguageSwitcher;
var _c;
$RefreshReg$(_c, "LanguageSwitcher");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/library/Navbar.jsx
init_dist();
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/library/Navbar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/library/Navbar.jsx"
  );
  import.meta.hot.lastModified = "1758746175152.771";
}
var Navbar = () => {
  _s2();
  const [active, setActive] = (0, import_react2.useState)("");
  const [toggle, setToggle] = (0, import_react2.useState)(false);
  const [scrolled, setScrolled] = (0, import_react2.useState)(false);
  const {
    t,
    i18n: i18n2
  } = useTranslation();
  const navigate = useNavigate();
  const handleNavClick = (id) => {
    const currentLang = i18n2.language;
    const targetPathWithHash = `/${currentLang}/#${id}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      window.history.pushState(null, "", targetPathWithHash);
    } else {
      navigate(targetPathWithHash);
    }
  };
  (0, import_react2.useEffect)(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    id: "home",
    title: t("navbar.home")
  }, {
    id: "services",
    title: t("navbar.services")
  }, {
    id: "experience",
    title: t("navbar.experience")
  }, {
    id: "tools",
    title: t("navbar.tools")
  }, {
    id: "projects",
    title: t("navbar.projects")
  }, {
    id: "contact",
    title: t("navbar.contact")
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: `sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full flex justify-between items-center max-w-7xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pointer-events-none fixed top-[-200px] left-[-150px] w-[400px] h-[550px] bg-green-400 rounded-full opacity-50 blur-3xl z-[-1]" }, void 0, false, {
      fileName: "app/library/Navbar.jsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/${i18n2.language}`, className: "flex items-center gap-2", onClick: () => {
      setActive("");
      window.scrollTo(0, 0);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: Serhii_Shevchenko_Logo_transparent_default, alt: "logo", className: "w-9 h-9 object-contain" }, void 0, false, {
        fileName: "app/library/Navbar.jsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-white text-[18px] font-bold cursor-pointer flex ", children: [
        t("meta.author"),
        " \xA0"
      ] }, void 0, true, {
        fileName: "app/library/Navbar.jsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/library/Navbar.jsx",
      lineNumber: 85,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-none hidden lg:flex flex-row gap-10", children: navLinks.map((nav) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/${i18n2.language}/#${nav.id}`, className: `${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`, onClick: (e) => {
      e.preventDefault();
      setActive(nav.title);
      handleNavClick(nav.id);
    }, children: nav.title }, void 0, false, {
      fileName: "app/library/Navbar.jsx",
      lineNumber: 98,
      columnNumber: 15
    }, this) }, nav.id, false, {
      fileName: "app/library/Navbar.jsx",
      lineNumber: 97,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "app/library/Navbar.jsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LanguageSwitcher, {}, void 0, false, {
      fileName: "app/library/Navbar.jsx",
      lineNumber: 109,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/library/Navbar.jsx",
      lineNumber: 108,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:hidden flex flex-1 justify-end items-center pt-2 mr-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: toggle ? close_default : menu_default, alt: "menu", className: "w-[36px] h-[36px] object-contain", onClick: () => setToggle(!toggle) }, void 0, false, {
        fileName: "app/library/Navbar.jsx",
        lineNumber: 114,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-none flex justify-end items-start flex-1 flex-col gap-4", children: [
        navLinks.map((nav) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: `/${i18n2.language}/#${nav.id}`, className: `font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`, onClick: (e) => {
          e.preventDefault();
          setToggle(false);
          setActive(nav.title);
          handleNavClick(nav.id);
        }, children: nav.title }, void 0, false, {
          fileName: "app/library/Navbar.jsx",
          lineNumber: 118,
          columnNumber: 19
        }, this) }, nav.id, false, {
          fileName: "app/library/Navbar.jsx",
          lineNumber: 117,
          columnNumber: 36
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LanguageSwitcher, {}, void 0, false, {
          fileName: "app/library/Navbar.jsx",
          lineNumber: 127,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/library/Navbar.jsx",
          lineNumber: 127,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/library/Navbar.jsx",
        lineNumber: 116,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/library/Navbar.jsx",
        lineNumber: 115,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/library/Navbar.jsx",
      lineNumber: 113,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/library/Navbar.jsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/library/Navbar.jsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
};
_s2(Navbar, "jWcTQUWoHz8Bfw572dkT1O/ah0M=", false, function() {
  return [useTranslation, useNavigate];
});
_c2 = Navbar;
var Navbar_default = Navbar;
var _c2;
$RefreshReg$(_c2, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/library/Footer.jsx
init_dist();

// node_modules/react-icons/md/index.mjs
function MdOutlineMailOutline(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0V0z" }, "child": [] }, { "tag": "path", "attr": { "d": "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" }, "child": [] }] })(props);
}

// app/library/Footer.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/library/Footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/library/Footer.jsx"
  );
  import.meta.hot.lastModified = "1758737413248.555";
}
function Footer() {
  _s3();
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const {
    t,
    i18n: i18n2
  } = useTranslation();
  const switchLanguage = (lang2) => {
    i18n2.changeLanguage(lang2);
  };
  const lang = i18n2.language.startsWith("uk") ? "uk" : "en";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "bg-green-900 text-white py-8 mt-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-lg font-semibold mb-3", children: t("footer.contacts") }, void 0, false, {
          fileName: "app/library/Footer.jsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: `mailto:${import.meta.env.VITE_MY_WORK_EMAIL}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MdOutlineMailOutline, { className: "h-12 w-12 hover:text-green-300" }, void 0, false, {
            fileName: "app/library/Footer.jsx",
            lineNumber: 44,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/library/Footer.jsx",
            lineNumber: 43,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: import.meta.env.VITE_MY_TELEGRAM, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaTelegramPlane, { className: "h-12 w-12 text-blue-400 hover:text-blue-500" }, void 0, false, {
            fileName: "app/library/Footer.jsx",
            lineNumber: 47,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/library/Footer.jsx",
            lineNumber: 46,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/library/Footer.jsx",
          lineNumber: 42,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/library/Footer.jsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-lg font-semibold mb-3", children: t("footer.legal") }, void 0, false, {
          fileName: "app/library/Footer.jsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-2 text-green-100 text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/${lang}/terms-of-service`, className: "hover:text-green-300", children: t("footer.terms") }, void 0, false, {
            fileName: "app/library/Footer.jsx",
            lineNumber: 55,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/library/Footer.jsx",
            lineNumber: 55,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/${lang}/privacy-policy`, className: "hover:text-green-300", children: t("footer.privacy") }, void 0, false, {
            fileName: "app/library/Footer.jsx",
            lineNumber: 56,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/library/Footer.jsx",
            lineNumber: 56,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/library/Footer.jsx",
          lineNumber: 54,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/library/Footer.jsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/library/Footer.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-t border-green-800 mt-8 pt-4 text-center text-green-200 text-sm", children: [
      "\xA9 ",
      year,
      " ",
      t("footer.rights")
    ] }, void 0, true, {
      fileName: "app/library/Footer.jsx",
      lineNumber: 62,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/library/Footer.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s3(Footer, "OZwazanA59tbNDUkc8lMSmTHj9Q=", false, function() {
  return [useTranslation];
});
_c3 = Footer;
var _c3;
$RefreshReg$(_c3, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/pages/TermsOfService.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/TermsOfService.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/TermsOfService.jsx"
  );
  import.meta.hot.lastModified = "1758752636192.282";
}
function TermsOfService() {
  _s4();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: ` inset-0 top-[150px] max-w-7xl mt-20`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-[#2a7a2a] text-center text-4xl", children: "Terms of Service" }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "AGREEMENT TO TERMS",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 32,
      columnNumber: 15
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("small", { children: "Last updated: 08.12.2022" }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 38,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\u201Cyou\u201D) and SerhiiShevchenko.com (\u201CCompany\u201D, \u201Cwe\u201D, \u201Cus\u201D or \u201Cour\u201D), concerning your access to and use of Our Products, Services, Website as well as any other media channel, linked, or otherwise connected thereto (collectively, the \u201CSite\u201D)." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 41,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 49,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 55,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Supplemental Terms of Service or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 55,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We will alert you about any changes by updating the \u201CLast updated\u201D date of these Terms of Service, and you waive any right to receive specific notice of each such change. However, we may alert you about some important changes of these Terms of Service via email or other method of communication." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 61,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "It is your responsibility to periodically review these Terms of Service to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Service by your continued use of the Site after the date such revised Terms of Service are posted." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 67,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 74,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to register for the Site. Any registration by, use of or access to any of our Products, Services or other Content by anyone under age 18 is unauthorized, unlicensed and in violation of these Terms of Service. By accessing or using our Products, Services or other Content, you represent and warrant that you are at least 18 years old." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 74,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "These Terms of Service require the use of arbitration on an individual basis to resolve disputes, rather than jury trials, and limit the remedies available to you in the event of a dispute. You fully understand and agree that by enrolling in, purchasing and/or using any of our Products, Services and other materials that you are waiving certain legal rights and you are voluntarily agreeing to do so." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 82,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 90,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "INTELLECTUAL PROPERTY RIGHTS",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 91,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 90,
      columnNumber: 15
    }, this),
    "Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, graphics and any other content on the Site (collectively, the \u201CContent\u201D) and the trademarks, service marks, and logos contained therein (the \u201CMarks\u201D) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 103,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 104,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "The Content and the Marks are provided on the Site \u201CAS IS\u201D for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 104,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 113,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 113,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 120,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "USER REPRESENTATIONS",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 123,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 121,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 120,
      columnNumber: 15
    }, this),
    "By using the Site, you represent and warrant that:",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 127,
      columnNumber: 9
    }, this),
    "(1) all registration information you submit will be true, accurate, current, and complete;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 130,
      columnNumber: 9
    }, this),
    "(2) you will maintain the accuracy of such information and promptly update such registration information as necessary;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 133,
      columnNumber: 9
    }, this),
    "(3) you have the legal capacity and you agree to comply with these Terms of Service;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 136,
      columnNumber: 9
    }, this),
    "(4) you are not under the age of 18;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 138,
      columnNumber: 9
    }, this),
    "(5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 141,
      columnNumber: 9
    }, this),
    "(6) you will not use the Site for any illegal or unauthorized purpose;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    "(7) your use of the Site will not violate any applicable law or regulation.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 145,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 146,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof)." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 146,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 152,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "USER REGISTRATION",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 155,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 153,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 152,
      columnNumber: 15
    }, this),
    "You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. You are not permitted to share your username and/or password with anyone. If we learn you have shared your username and/or password with another person, we reserve the right to immediately terminate your access to the Site, the Content or any other related communication. It is your responsibility to protect your own password from disclosure to others. We cannot and will not be liable for any loss or damage arising from your failure to protect your password or account information. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 169,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 170,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You agree to notify us immediately of any unauthorized use of your password or account or any other breach of security, and to ensure that you exit from your account at the end of each session. By using the Site and/or the Content, you agree to enter true and accurate information as part of the registration, purchase process and otherwise. If you enter a false information, we have the right to immediately deactivate your account. We will use our best efforts to keep your password(s) private and will not otherwise share your password(s) without your consent, except as necessary when the law requires it or in the good faith belief that such action is necessary, particularly when disclosure is necessary to identify, contact or bring legal action against someone who may be causing injury to others or interfering with our rights or property." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 170,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 184,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "PROHIBITED ACTIVITIES",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 187,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 185,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 184,
      columnNumber: 15
    }, this),
    "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 194,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 195,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "As a user of the Site, you agree not to:" }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 195,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ol", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Engage in improper and/or unauthorized use of the Site and the Content. Improper and unauthorized use includes but is not limited to modifying, copying, reproducing, republishing, uploading, posting, transmitting, translating, selling, creating derivative works, exploiting, or distributing in any manner or medium (including by email or other electronic means) any Content or any other information accessed or purchased through our Products, Services, or any other communications provided by us for your own personal use, business/commercial use or in any way that earns you money." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 205,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Duplicate, share, trade, sell, or otherwise distribute any part of the Site or the Content to any other person, for their personal use, business/commercial use or in any way that earns them money, whether it was known to you or not at the time that you shared the information that their intention was to use the Content for their own personal use or business/commercial use. This means you cannot share or sell any part of the Site and/or the Content to someone else so they can copy and/or use them for their own personal use, business/commercial use or in any way that earns them money. You are the only one granted a limited license to use the Site and/or the Content." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 216,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Violate in any other way our intellectual property rights, including copyright and trademark rights." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 228,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 232,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 238,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Make improper use of our support services or submit false reports of abuse or misconduct." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 242,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 246,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 251,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Sell or otherwise transfer your profile." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 255,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Use any information obtained from the Site in order to harass, abuse, or harm another person." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 256,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 260,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 265,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 269,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 273,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Copy or adapt the Site\u2019s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 276,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party\u2019s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site and/or harm the Site and the Company in any other way." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 279,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Use the Site in a manner inconsistent with any applicable laws or regulations or in a manner that has not been authorized by us through our prior written consent." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 288,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 196,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 294,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "You understand and agree that engaging in the prohibited use or the improper and/or unauthorized use of the Site and the Content as set forth in these Terms of Service is considered theft and stealing and we retain the right to prosecute theft to the full extent of the law.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 299,
        columnNumber: 11
      }, this),
      "You agree and understand that prohibited use, improper and/or unauthorized use may give rise to a civil claim for damages and/or be a criminal offense."
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 294,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 303,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "Any request for written permission to use the Content, in whole or in part, or any other intellectual property or property belonging to us (\u201CContent\u201D), should be made BEFORE you wish to use it by completing the \u201CContact Us\u201D form on the Site, or by sending an e-mail to ",
      import.meta.env.VITE_MY_WORK_EMAIL
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 303,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 309,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      "We very clearly state that you may not use the Site and/or the Content, in whole or in part, in any way that is contrary to these Terms of Service unless we have given you specific written permission to do so. If you are granted permission by us, you agree to use the specific Content that we allow and ONLY in the ways for which we have given you our written permission.",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 316,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 316,
        columnNumber: 17
      }, this),
      "If you choose to use the content in ways that we do not specifically give you written permission, you agree now that you will be treated as if you had copied, duplicated and/or stolen such Content from us, and you consent to immediately stop using such Content and to take whatever actions as we may request and by the methods and in the time frame that we prescribe to protect our intellectual property and ownership rights of the Site and the Content."
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 309,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 325,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "USER GENERATED CONTRIBUTIONS",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 328,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 326,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 325,
      columnNumber: 15
    }, this),
    "The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, \u201CContributions\u201D).",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 338,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 339,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:" }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 339,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ol", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 349,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Service." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 356,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Service." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 362,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions are not false, inaccurate, or misleading." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 369,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 370,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions are not obscene, filthy, violent, harassing, slanderous, or otherwise objectionable (as determined by us)." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 375,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 379,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 383,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions do not violate any applicable law, regulation, or rule." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 387,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions do not violate the privacy or publicity rights of any third party." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 390,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 394,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions do not violate any federal or state law concerning child pornography, or otherwise intended to protect the health or well-being of minors;" }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 399,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 404,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: "Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Service, or any applicable law or regulation." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 409,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 345,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 415,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Any use of the Site in violation of the foregoing violates these Terms of Service and may result in, among other things, termination or suspension of your rights to use the Site." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 415,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 420,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "CONTRIBUTION LICENSE",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 423,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 421,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 420,
      columnNumber: 15
    }, this),
    "By posting your Contributions to any part of the Site or making Contributions accessible to the Site by linking your account from the Site to any of your social networking accounts, you automatically grant, and you represent and warrant that you have the right to grant, to us, and anyone authorized by us, \xA0an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 440,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 441,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 441,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 449,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 449,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 456,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.\xA0" }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 456,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 461,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Site; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 461,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 468,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "SUBMISSIONS",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 471,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 469,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 468,
      columnNumber: 15
    }, this),
    "You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (\u201CSubmissions\u201D) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 481,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 482,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 482,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 489,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "THIRD-PARTY WEBSITES AND CONTENT",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 492,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 490,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 489,
      columnNumber: 15
    }, this),
    "The Site may contain (or you may be sent via the Site) links to other websites (\u201CThird-Party Websites\u201D) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (\u201CThird-Party Content\u201D).",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 500,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 501,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 501,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 510,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Service no longer govern." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 510,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 518,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 518,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 527,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 527,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 535,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "SITE MANAGEMENT",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 538,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 536,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 535,
      columnNumber: 15
    }, this),
    "We reserve the right, but not the obligation, to:",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 542,
      columnNumber: 9
    }, this),
    "(1) monitor the Site for violations of these Terms of Service;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 544,
      columnNumber: 9
    }, this),
    "(2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service, including without limitation, reporting such user to law enforcement authorities;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 548,
      columnNumber: 9
    }, this),
    "(3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 552,
      columnNumber: 9
    }, this),
    "(4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems;",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 556,
      columnNumber: 9
    }, this),
    "(5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 559,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 560,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "PRIVACY POLICY",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 563,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 561,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 560,
      columnNumber: 15
    }, this),
    "We care about data privacy and security. Please review our full Privacy Policy posted on the Site. By using the Site, you agree to be bound by our Privacy Policy.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 569,
      columnNumber: 9
    }, this),
    "To use the Site and/or the Content, we may seek personal data or information including your name, email address, phone number, street address, billing information, birthday, preferences, interests, assignments, or other personally-identifiable information (\u201CConfidential Information\u201D), or you may offer or provide a comment, photo, image, video or any other submission to us when using or participating on the Site and/or the Content (\u201COther Information\u201D). By providing such Confidential Information or Other Information to us, you grant us permission to use and store such information in accordance with our Privacy Policy. We, in turn, will use our best efforts to keep your Confidential Information safe, secure and confidential in accordance with these Terms of Service and our full Privacy Policy which may be found on the Site.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 582,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 583,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "However, due to the nature of the Internet, we cannot completely ensure or warrant the security of your Confidential Information or any other data or information transmitted to us or through our services; therefore, submitting Confidential Information, data or other information is done at your own risk.\xA0 We have reasonable security measures in place to prevent the loss, misuse, and alteration of the information that is obtained from you, but we make no assurances about our ability to prevent any such loss, misuse, to you or to any third party arising out of any such loss, misuse, or alteration." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 583,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 594,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "If you believe that any of your Confidential Information is incorrect or incomplete, please contact us as soon as possible. We will promptly correct any Confidential Information found to be incorrect." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 594,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 599,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "How we use your Confidential Information." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 600,
        columnNumber: 11
      }, this),
      " We request and require various personal data and/or Confidential Information to understand your needs and provide you with better services. In addition, we may use such data and Confidential Information for the following reasons: (1) for internal record keeping, (2) to improve the Site and/or the Content, (3) to periodically send promotions about new Products, Services or other special offers from which you may unsubscribe at any time, (4) for aggregate, non-identifiable data for research purposes, (5) to customize the respective Products or Services you purchase or use according to your interests and/or (6) for support or communication related to your requests."
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 599,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 611,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: "Storage." }, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 612,
        columnNumber: 11
      }, this),
      "\xA0 All data and Confidential Information is stored through a data management system. This data and Confidential Information can only be accessed by those who help manage that information in order to deliver email or otherwise contact those who would like to receive our correspondence.\xA0 You agree and acknowledge that we, including but not limited to our team, staff and affiliates, and those who manage the data management system may have access to your Confidential Information."
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 611,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 621,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "TERM AND TERMINATION",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 624,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 622,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 621,
      columnNumber: 15
    }, this),
    "These Terms of Service shall remain in full force and effect while you use the Site and in the future, even after termination by you or us. You have the right to terminate your use of or participation in our Products or Services at any time by sending an e-mail to ",
    import.meta.env.VITE_MY_WORK_EMAIL,
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 631,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 632,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND/OR ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 632,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 643,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 643,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 649,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 649,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 654,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "MODIFICATIONS AND INTERRUPTIONS ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 656,
        columnNumber: 45
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 655,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 654,
      columnNumber: 15
    }, this),
    "We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 664,
      columnNumber: 9
    }, this),
    "We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 667,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 668,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 668,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 674,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 674,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 681,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Nothing in these Terms of Service will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 681,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 686,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "GOVERNING LAW ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 688,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 687,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 686,
      columnNumber: 15
    }, this),
    "These Terms of Service and your use of the Site are governed by the laws of the country of Ukraine, regardless of the conflict of laws principles.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 693,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 694,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "DISPUTE RESOLUTION",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 697,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 695,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 694,
      columnNumber: 15
    }, this),
    "It is hoped that should we ever have any differences, we could be able to work them out amiably through e-mail correspondence. However, should we be unable to seek resolution within a reasonable time, you agree now that the only method of legal dispute resolution that will be used is binding arbitration before a single arbitrator, selected jointly, in accordance with the Ukrainian Arbitration Association Rules. Prior to seeking arbitration, you must send an e-mail to us at ",
    import.meta.env.VITE_MY_WORK_EMAIL,
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 707,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 708,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "and include all of your reasons for dissatisfaction with your Product, Service. You understand and agree now that the only remedy that can be awarded to you through arbitration is full refund of your Payment made to date. No other actions or financial awards of consequential damages, or any other type of damages, may be granted to you. We both agree now that the decision of the arbitrator is final and binding, and may be entered as a judgment into any court having the appropriate jurisdiction." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 708,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 717,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You also agree that should arbitration take place, it will be held in Kyiv, Ukraine, and the prevailing party shall be entitled to all reasonable attorneys\u2019 fees and all costs necessary to enforce the decision of the arbitrator." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 717,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 723,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "In the event of a dispute between us, you agree to not engage in any conduct or communications, including on social media, designed to disparage us, our Company, or any of our Products and/or Services. Where requested by law or arbitration, of course, you are not prohibited from sharing your thoughts and opinions as a part of the legal process." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 723,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 730,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "If any terms of these Terms of Service are construed to be invalid or unenforceable for any reason, it shall not affect the validity or enforceability of any other term which shall be given full force and effect." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 730,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 735,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "ERRORS AND OMISSIONS",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 738,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 736,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 735,
      columnNumber: 15
    }, this),
    "We make no warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information on the Site including any of the Content. Every effort has been made to present you with the most accurate, up-to-date information, but because the nature of scientific research is constantly evolving, we cannot be held responsible or accountable for the accuracy of the Content. You acknowledge that such information may contain inaccuracies or errors and we are not liable for any such inaccuracies or errors to the fullest extent permitted by law.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 749,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 750,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "DISCLAIMER",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 753,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 751,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 750,
      columnNumber: 15
    }, this),
    "THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE\u2019S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 779,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 780,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "THE CONTENT IS FOR INFORMATIONAL AND EDUCATIONAL PURPOSES ONLY AND IS NOT TO BE PERCEIVED AS OR RELIED UPON IN ANY WAY AS MEDICAL ADVICE, HEALTH ADVICE, PSYCHOLOGICAL, LEGAL AND/OR FINANCIAL ADVICE. WE ARE NOT PROVIDING HEALTH CARE, MEDICAL OR NUTRITION SERVICES OR ATTEMPTING TO DIAGNOSE, TREAT, PREVENT AND/OR CURE IN ANY MANNER WHATSOEVER ANY MENTAL, EMOTIONAL, PHYSICAL ISSUE, DISEASE OR CONDITION. TO THE FULLEST EXTENT PERMITTED BY LAW, WE EXPRESSLY EXCLUDE ANY LIABILITY FOR ANY DIRECT, INDIRECT OR CONSEQUENTIAL LOSS OR DAMAGE INCURRED BY YOU OR OTHERS IN CONNECTION WITH THE SITE AND/OR THE CONTENT INCLUDING WITHOUT LIMITATION ANY LIABILITY FOR ANY ACCIDENTS, INJURIES, HARM, LOSS, DAMAGE, LOST PROFITS, PHYSICAL, MENTAL, EMOTIONAL, SPIRITUAL INJURY, HARM, LOSS OF INCOME, BUSINESS AND ANY OTHER LOSS OR DAMAGE OF ANY KIND, HOWEVER AND WHETHER CAUSED BY NEGLIGENCE, BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 780,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 795,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 795,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 800,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "WE TRY TO ENSURE THE AVAILABILITY AND UNINTERRUPTED ACCESS TO THE SITE AND THE CONTENT. HOWEVER, WE CANNOT GUARANTEE THAT YOUR ACCESS WILL NOT BE SUSPENDED OR RESTRICTED FROM TIME TO TIME, INCLUDING TO ALLOW FOR MAINTENANCE OR UPDATES, ALTHOUGH, WE WILL TRY TO LIMIT THE FREQUENCY AND DURATION OF SUSPENCION OR RESTRICTION. TO THE FULLEST EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE TO YOU FOR ANY DAMAGES OR REFUNDS, SHOULD THE SITE AND/OR THE CONTENT, IN WHOLE OR IN PART, BECOME UNAVAILABLE OR ACCESS TO THEM BECOMES SLOW DUE TO ANY REASON INCLUDING BUT NOT LIMITED TO UPGRADES, INTERNET TRAFFIC VOLUME, SERVERS\u2019 OVERLOADS, GENERAL NETWORK FAILURES, OR ANY OTHER CAUSE." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 800,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 812,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "LIMITATIONS OF LIABILITY",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 815,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 813,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 812,
      columnNumber: 15
    }, this),
    "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, AFFILIATES OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO ANY HARM, DISEASE, LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR ANY OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 824,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 825,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "INDEMNIFICATION",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 828,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 826,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 825,
      columnNumber: 15
    }, this),
    "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys\u2019 fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Site; (3) breach of these Terms of Service; (4) any breach of your representations and warranties set forth in these Terms of Service; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Site with whom you connected via the Site.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 841,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 842,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 842,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 850,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "USER DATA",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 853,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 851,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 850,
      columnNumber: 15
    }, this),
    "We will maintain certain data that you transmit to the Site for the purpose of managing the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 861,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 862,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 862,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 867,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 870,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 868,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 867,
      columnNumber: 15
    }, this),
    "Visiting the Site, sending us emails, purchasing our Products, Services, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 879,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 880,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 880,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 885,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 885,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 892,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "All information obtained during your purchase or transaction for our Products and/or Services and all of the information that you give as part of the transaction, such as your name, address, method of payment, credit card number, and billing information, may be collected by both us and our payment processing company. Per our Privacy Policy, please make sure that you review the privacy policy of our payment processor." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 892,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 900,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "At the moment we use www.wayforpay.com as our main payment processor platform. That means that if you are making a purchase using credit card credentials other than ukrainian then your bank may block the payment as suspicious because the currency is UAH and not USD. So, you will have to contact your bank\u2019s support and ask them to proceed with the payment. Some additional international currency exchange rates may apply." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 900,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 908,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You agree to only purchase goods or services for yourself or for another person for whom you are legally permitted to do so or for whom you have obtained the express consent to provide their name, address, method of payment, credit card number, and billing information." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 908,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 914,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You agree to be financially responsible for all purchases made by you or someone acting on your behalf. You agree to use our Products, Services for legitimate, non-commercial purposes only and not for speculative, false, fraudulent, or illegal purposes." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 914,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 920,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "If you make a purchase from one of our affiliates, or any other individual or company through a link provided on or through our Products or Services (\u201CMerchant\u201D), all information obtained during your purchase or transaction and all of the information that you give as part of the transaction, such as your credit card number and contact information, may be collected by the merchant and their payment processing company as well. Your participation, correspondence or business dealings with any affiliate, individual or company on or through our Products or Services, and all purchase terms, conditions, representations or warranties associated with payment, refunds, and/or delivery related to your purchase, are solely between you and the Merchant. You agree that we shall not be responsible or liable for any loss, damage, refunds, or other matters of any sort that incurred as the result of such dealings with a Merchant." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 920,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 935,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Payment processing companies and Merchants may have privacy and data collection practices that are different from ours. We have no responsibility or liability for these independent policies of the payment processing companies and Merchants. In addition, when you make certain purchases through our Products or Services you may be subject to the additional Terms of Service of a payment processing company, Merchant or us that specifically apply to your purchase. For more information regarding a Merchant and its Terms of Service that may apply, visit that merchant\u2019s Website and click on its information links or contact the Merchant directly." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 935,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 946,
      columnNumber: 9
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "You release us, our affiliates, our payment processing company, and Merchants from any damages that you incur, and agree not to assert any claims against us or them, arising from your purchase through or use of our Website or its Content." }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 946,
      columnNumber: 16
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 952,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "REFUND POLICY",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 955,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 953,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 952,
      columnNumber: 15
    }, this),
    "Your satisfaction with our Products, Services is important to us and we truly believe that our products can help you improve your life. So, to make this decision easier for you, unless otherwise provided by law or in the specific parts of the Site, we offer a 30 days money back guarantee for any of our Content, Products, Services, no questions asked.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 963,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 964,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: [
      "CONTACT US",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/TermsOfService.jsx",
        lineNumber: 967,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 965,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 964,
      columnNumber: 15
    }, this),
    "If you have any questions about the Site and/or the Content, you may send an e-mail to ",
    import.meta.env.VITE_MY_WORK_EMAIL,
    " and we will do our best to reply to your question or concern promptly.",
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/pages/TermsOfService.jsx",
      lineNumber: 973,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/TermsOfService.jsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/pages/TermsOfService.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s4(TermsOfService, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c4 = TermsOfService;
var _c4;
$RefreshReg$(_c4, "TermsOfService");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/pages/uk/TermsOfService_ua.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/uk/TermsOfService_ua.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/uk/TermsOfService_ua.jsx"
  );
  import.meta.hot.lastModified = "1758752636196.535";
}
function TermsOfServiceUa() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: ` inset-0 top-[150px] max-w-7xl mt-20`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-[#2a7a2a] text-center text-4xl", children: "\u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 29,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: [
      "\u0417\u0413\u041E\u0414\u0410 \u0417 \u0423\u041C\u041E\u0412\u0410\u041C\u0418 \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 32,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 30,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 29,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 35,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("small", { children: "\u041E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F: 12.08.2022." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 35,
      columnNumber: 20
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0426\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443 \u0454 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u043E \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0443\u044E\u0447\u043E\u044E \u0443\u0433\u043E\u0434\u043E\u044E, \u0443\u043A\u043B\u0430\u0434\u0435\u043D\u043E\u044E \u043C\u0456\u0436 \u0412\u0430\u043C\u0438 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E \u0447\u0438 \u0432\u0456\u0434 \u0456\u043C\u0435\u043D\u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 (\xAB\u0412\u0438\xBB) \u0442\u0430 SerhiiShevchenko.com (\xAB\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F\xBB, \xAB\u041C\u0438\xBB, \xAB\u041D\u0430\u0441\xBB, \xAB\u041D\u0430\u043C\u0438\xBB \u0430\u0431\u043E \xAB\u041D\u0430\u0448\xBB), \u0449\u043E\u0434\u043E \u0412\u0430\u0448\u0438\u0445 \u0434\u043E\u0441\u0442\u0443\u043F\u0456\u0432 \u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432, \u043F\u043E\u0441\u043B\u0443\u0433, \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0456\u043D\u0448\u043E\u0433\u043E \u043C\u0435\u0434\u0456\u0430-\u043A\u0430\u043D\u0430\u043B\u0443, \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u043E\u0433\u043E \u0437 \u043D\u0430\u043C\u0438 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u043E\u0433\u043E \u0437 \u041D\u0430\u043C\u0438 (\u0440\u0430\u0437\u043E\u043C \xAB\u0421\u0430\u0439\u0442\xBB)." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 36,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 44,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F, \u0449\u043E, \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u044E\u0447\u0438 \u0421\u0430\u0439\u0442, \u0412\u0438 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043B\u0438, \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u0438 \u0442\u0430 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0432\u0441\u0456\u0445 \u0446\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443 \u0442\u0430 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433. \u042F\u043A\u0449\u043E \u0412\u0438 \u043D\u0435 \u0437\u0433\u043E\u0434\u043D\u0456 \u0437 \u0443\u0441\u0456\u043C\u0430 \u0446\u0438\u043C\u0438 \u0423\u043C\u043E\u0432\u0430\u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u0412\u0430\u043C \u043F\u0440\u044F\u043C\u043E \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442, \u0456 \u0412\u0438 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u043D\u0435\u0433\u0430\u0439\u043D\u043E \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0439\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 44,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 51,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438, \u044F\u043A\u0456 \u0447\u0430\u0441 \u0432\u0456\u0434 \u0447\u0430\u0441\u0443 \u043C\u043E\u0436\u0443\u0442\u044C \u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u0421\u0430\u0439\u0442\u0456, \u043F\u0440\u044F\u043C\u043E \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0432 \u0446\u0435\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0448\u043B\u044F\u0445\u043E\u043C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F. \u041C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0440\u043E\u0437\u0441\u0443\u0434 \u0432\u043D\u043E\u0441\u0438\u0442\u0438 \u0437\u043C\u0456\u043D\u0438 \u0430\u0431\u043E \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0457 \u0432 \u0446\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441 \u0456 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u043F\u0440\u0438\u0447\u0438\u043D\u0438." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 57,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u043C\u043E \u0412\u0430\u0441 \u043F\u0440\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0437\u043C\u0456\u043D\u0438, \u043E\u043D\u043E\u0432\u0438\u0432\u0448\u0438 \u0434\u0430\u0442\u0443 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0433\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0446\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u0456 \u0412\u0438 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u044F\u0454\u0442\u0435\u0441\u044C \u0432\u0456\u0434 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0435 \u0441\u043F\u043E\u0432\u0456\u0449\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u043A\u043E\u0436\u043D\u0443 \u0442\u0430\u043A\u0443 \u0437\u043C\u0456\u043D\u0443. \u041E\u0434\u043D\u0430\u043A \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0438 \u0412\u0430\u0441 \u043F\u0440\u043E \u0434\u0435\u044F\u043A\u0456 \u0432\u0430\u0436\u043B\u0438\u0432\u0456 \u0437\u043C\u0456\u043D\u0438 \u0446\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0437\u0432\u2019\u044F\u0437\u043A\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 57,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 64,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u0446\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u0449\u043E\u0431 \u0431\u0443\u0442\u0438 \u0432 \u043A\u0443\u0440\u0441\u0456 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u044C. \u041D\u0430 \u0412\u0430\u0441 \u043F\u043E\u0448\u0438\u0440\u044E\u0432\u0430\u0442\u0438\u043C\u0443\u0442\u044C\u0441\u044F \u0437\u043C\u0456\u043D\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438\u0445 \u0423\u043C\u043E\u0432\u0430\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u0456 \u0432\u0432\u0430\u0436\u0430\u0442\u0438\u043C\u0435\u0442\u044C\u0441\u044F, \u0449\u043E \u0412\u0438 \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u043B\u0435\u043D\u0456 \u0437 \u043D\u0438\u043C\u0438 \u0442\u0430 \u043F\u0440\u0438\u0439\u043C\u0430\u0454\u0442\u0435 \u0457\u0445, \u044F\u043A\u0449\u043E \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0432\u0430\u0442\u0438\u043C\u0435\u0442\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0421\u0430\u0439\u0442\u043E\u043C \u043F\u0456\u0441\u043B\u044F \u0434\u0430\u0442\u0438 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457 \u0442\u0430\u043A\u0438\u0445 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 64,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 71,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0421\u0430\u0439\u0442 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432, \u044F\u043A\u0438\u043C \u0432\u0438\u043F\u043E\u0432\u043D\u0438\u043B\u043E\u0441\u044F 18 \u0440\u043E\u043A\u0456\u0432. \u041E\u0441\u043E\u0431\u0438 \u0432\u0456\u043A\u043E\u043C \u0434\u043E 18 \u0440\u043E\u043A\u0456\u0432 \u043D\u0435 \u043C\u0430\u044E\u0442\u044C \u043F\u0440\u0430\u0432\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u0421\u0430\u0439\u0442\u0456. \u0411\u0443\u0434\u044C-\u044F\u043A\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0437 \u043D\u0430\u0448\u0438\u0445 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432, \u041F\u043E\u0441\u043B\u0443\u0433 \u0447\u0438 \u0456\u043D\u0448\u043E\u0433\u043E \u0412\u043C\u0456\u0441\u0442\u0443 \u043E\u0441\u043E\u0431\u0430\u043C\u0438 \u0432\u0456\u043A\u043E\u043C \u0434\u043E 18 \u0440\u043E\u043A\u0456\u0432 \u0454 \u043D\u0435\u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043E\u044E, \u043D\u0435\u043B\u0456\u0446\u0435\u043D\u0437\u043E\u0432\u0430\u043D\u043E\u044E \u0442\u0430 \u043F\u043E\u0440\u0443\u0448\u0443\u0454 \u0446\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433. \u041E\u0442\u0440\u0438\u043C\u0443\u044E\u0447\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u043D\u0430\u0448\u0456 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0447\u0438 \u0456\u043D\u0448\u0438\u0439 \u0412\u043C\u0456\u0441\u0442, \u0412\u0438 \u0437\u0430\u044F\u0432\u043B\u044F\u0454\u0442\u0435 \u0442\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0454\u0442\u0435, \u0449\u043E \u0412\u0430\u043C \u0432\u0438\u043F\u043E\u0432\u043D\u0438\u043B\u043E\u0441\u044F 18 \u0440\u043E\u043A\u0456\u0432." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 71,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 80,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0426\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0432\u0438\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0440\u0431\u0456\u0442\u0440\u0430\u0436\u0443 \u043D\u0430 \u0456\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0456\u0439 \u043E\u0441\u043D\u043E\u0432\u0456 \u0434\u043B\u044F \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0441\u0443\u043F\u0435\u0440\u0435\u0447\u043E\u043A, \u0430 \u043D\u0435 \u0441\u0443\u0434\u0456\u0432 \u043F\u0440\u0438\u0441\u044F\u0436\u043D\u0438\u0445, \u0456 \u043E\u0431\u043C\u0435\u0436\u0443\u044E\u0442\u044C \u0437\u0430\u0441\u043E\u0431\u0438 \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u0445\u0438\u0441\u0442\u0443, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0412\u0430\u043C \u0443 \u0440\u0430\u0437\u0456 \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0441\u0443\u043F\u0435\u0440\u0435\u0447\u043E\u043A. \u0412\u0438 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0440\u043E\u0437\u0443\u043C\u0456\u0454\u0442\u0435 \u0442\u0430 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437 \u0442\u0438\u043C, \u0449\u043E, \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u044E\u0447\u0438\u0441\u044C, \u043A\u0443\u043F\u0443\u044E\u0447\u0438 \u0442\u0430/\u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0456\u0437 \u043D\u0430\u0448\u0438\u0445 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432, \u041F\u043E\u0441\u043B\u0443\u0433 \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432, \u0412\u0438 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u044F\u0454\u0442\u0435\u0441\u044F \u0432\u0456\u0434 \u043F\u0435\u0432\u043D\u0438\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0438\u0445 \u043F\u0440\u0430\u0432 \u0456 \u0434\u043E\u0431\u0440\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0446\u0435 \u0437\u0440\u043E\u0431\u0438\u0442\u0438." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 80,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 89,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u041F\u0420\u0410\u0412\u041E \u0406\u041D\u0422\u0415\u041B\u0415\u041A\u0422\u0423\u0410\u041B\u042C\u041D\u041E\u0407 \u0412\u041B\u0410\u0421\u041D\u041E\u0421\u0422\u0406" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 90,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 89,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u042F\u043A\u0449\u043E \u043D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E \u0456\u043D\u0448\u0435, \u0421\u0430\u0439\u0442 \u0454 \u043D\u0430\u0448\u043E\u044E \u0432\u043B\u0430\u0441\u043D\u0456\u0441\u0442\u044E \u0442\u0430 \u0432\u0435\u0441\u044C \u0432\u0438\u0445\u0456\u0434\u043D\u0438\u0439 \u043A\u043E\u0434, \u0431\u0430\u0437\u0438 \u0434\u0430\u043D\u0438\u0445, \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0435 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F, \u0434\u0438\u0437\u0430\u0439\u043D \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u0430\u0443\u0434\u0456\u043E, \u0432\u0456\u0434\u0435\u043E, \u0442\u0435\u043A\u0441\u0442, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457, \u0433\u0440\u0430\u0444\u0456\u043A\u0430 \u0442\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0456\u043D\u0448\u0438\u0439 \u0432\u043C\u0456\u0441\u0442 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456 (\u0440\u0430\u0437\u043E\u043C \xAB\u0412\u043C\u0456\u0441\u0442\xBB) \u0456 \u0442\u043E\u0440\u0433\u043E\u0432\u0456 \u043C\u0430\u0440\u043A\u0438, \u0437\u043D\u0430\u043A\u0438 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0438, \u0449\u043E \u043C\u0456\u0441\u0442\u044F\u0442\u044C\u0441\u044F \u0432 \u043D\u0438\u0445 (\xAB\u0417\u043D\u0430\u043A\u0438\xBB), \u043D\u0430\u043B\u0435\u0436\u0430\u0442\u044C \u0430\u0431\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u044E\u0442\u044C\u0441\u044F \u043D\u0430\u043C\u0438 \u0430\u0431\u043E \u043D\u0430\u0434\u0430\u043D\u0456 \u043D\u0430\u043C \u0437\u0430 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u0454\u044E, \u0456 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456 \u0437\u0430\u043A\u043E\u043D\u0430\u043C\u0438 \u043F\u0440\u043E \u0430\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0435 \u043F\u0440\u0430\u0432\u043E \u0442\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u0435\u043B\u044C\u043D\u0456 \u043C\u0430\u0440\u043A\u0438 \u0442\u0430 \u0440\u0456\u0437\u043D\u0438\u043C\u0438 \u0456\u043D\u0448\u0438\u043C\u0438 \u043F\u0440\u0430\u0432\u0430\u043C\u0438 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0457 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 92,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 101,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u043C\u0456\u0441\u0442 \u0456 \u0417\u043D\u0430\u043A\u0438 \u043D\u0430\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u0421\u0430\u0439\u0442\u0456 \xAB\u042F\u041A \u0404\xBB \u043B\u0438\u0448\u0435 \u0434\u043B\u044F \u0412\u0430\u0448\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0442\u0430 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F. \u0417\u0430 \u0432\u0438\u043D\u044F\u0442\u043A\u043E\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432, \u043F\u0440\u044F\u043C\u043E \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u0438\u0445 \u0446\u0438\u043C\u0438 \u0423\u043C\u043E\u0432\u0430\u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433, \u0436\u043E\u0434\u043D\u0443 \u0447\u0430\u0441\u0442\u0438\u043D\u0443 \u0421\u0430\u0439\u0442\u0443, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0412\u043C\u0456\u0441\u0442 \u0430\u0431\u043E \u0417\u043D\u0430\u043A\u0438 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438, \u0432\u0456\u0434\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438, \u0430\u0433\u0440\u0435\u0433\u0443\u0432\u0430\u0442\u0438, \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438, \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438, \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u043E \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438, \u043A\u043E\u0434\u0443\u0432\u0430\u0442\u0438, \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0442\u0438, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438, \u043F\u043E\u0448\u0438\u0440\u044E\u0432\u0430\u0442\u0438, \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u0438, \u043B\u0456\u0446\u0435\u043D\u0437\u0443\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u044E \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u044E \u043C\u0435\u0442\u043E\u044E \u0431\u0435\u0437 \u043D\u0430\u0448\u043E\u0433\u043E \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u043E\u0433\u043E \u0434\u043E\u0437\u0432\u043E\u043B\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 101,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 111,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0417\u0430 \u0443\u043C\u043E\u0432\u0438, \u0449\u043E \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442, \u0412\u0430\u043C \u043D\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u0430 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044F \u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F \u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043D\u0430 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u0434\u0440\u0443\u043A \u043A\u043E\u043F\u0456\u0457 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0412\u043C\u0456\u0441\u0442\u0443, \u0434\u043E \u044F\u043A\u043E\u0457 \u0412\u0438 \u043D\u0430\u043B\u0435\u0436\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u0434\u043E\u0441\u0442\u0443\u043F, \u0432\u0438\u043A\u043B\u044E\u0447\u043D\u043E \u0434\u043B\u044F \u0432\u0430\u0448\u0438\u0445 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0445, \u043D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0445 \u0446\u0456\u043B\u0435\u0439. \u041C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u0432\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u0421\u0430\u0439\u0442, \u0412\u043C\u0456\u0441\u0442 \u0456 \u0417\u043D\u0430\u043A\u0438, \u044F\u043A\u0456 \u043D\u0435 \u043D\u0430\u0434\u0430\u043D\u0456 \u0412\u0430\u043C \u043F\u0440\u044F\u043C\u043E." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 111,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 118,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u0406\u0421\u0422\u042C \u041A\u041E\u0420\u0418\u0421\u0422\u0423\u0412\u0410\u0427\u0406\u0412" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 119,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 118,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u0421\u0430\u0439\u0442, \u0412\u0438 \u0437\u0430\u044F\u0432\u043B\u044F\u0454\u0442\u0435 \u0442\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0454\u0442\u0435, \u0449\u043E:" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 121,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(1) \u0443\u0441\u044F \u043D\u0430\u0434\u0430\u043D\u0430 \u0412\u0430\u043C\u0438 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0431\u0443\u0434\u0435 \u043F\u0440\u0430\u0432\u0434\u0438\u0432\u043E\u044E, \u0442\u043E\u0447\u043D\u043E\u044E, \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u044E \u0442\u0430 \u043F\u043E\u0432\u043D\u043E\u044E;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 122,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(2) \u0412\u0438 \u0431\u0443\u0434\u0435\u0442\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u0442\u043E\u0447\u043D\u0456\u0441\u0442\u044C \u0442\u0430\u043A\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438 \u0442\u0430\u043A\u0443 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0439\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u044F\u043A\u0449\u043E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 126,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(3) \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E\u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044C \u0456 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0446\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 130,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(4) \u0412\u0430\u043C \u0432\u0438\u043F\u043E\u0432\u043D\u0438\u043B\u043E\u0441\u044F 18 \u0440\u043E\u043A\u0456\u0432;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 134,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(5) \u0412\u0438 \u043D\u0435 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u043C\u0435\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0421\u0430\u0439\u0442\u0443 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u043E\u0432\u0430\u043D\u0438\u0445 \u0447\u0438 \u043D\u0435\u043B\u044E\u0434\u0441\u044C\u043A\u0438\u0445 \u0437\u0430\u0441\u043E\u0431\u0456\u0432, \u0431\u0443\u0434\u044C \u0442\u043E \u0447\u0435\u0440\u0435\u0437 \u0431\u043E\u0442\u0430, \u0441\u043A\u0440\u0438\u043F\u0442 \u0447\u0438 \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 135,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(6) \u0412\u0438 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u043C\u0435\u0442\u0435 \u0421\u0430\u0439\u0442 \u0434\u043B\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u0438\u0445 \u0430\u0431\u043E \u043D\u0435\u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u0438\u0445 \u0446\u0456\u043B\u0435\u0439;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 139,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(7) \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0412\u0430\u043C\u0438 \u0421\u0430\u0439\u0442\u0443 \u043D\u0435 \u043F\u043E\u0440\u0443\u0448\u0443\u0432\u0430\u0442\u0438\u043C\u0435 \u0436\u043E\u0434\u043D\u0438\u0445 \u0447\u0438\u043D\u043D\u0438\u0445 \u0437\u0430\u043A\u043E\u043D\u0456\u0432 \u0447\u0438 \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0438\u0445 \u0430\u043A\u0442\u0456\u0432." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 143,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 147,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u042F\u043A\u0449\u043E \u0412\u0438 \u043D\u0430\u0434\u0430\u0454\u0442\u0435 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u044F\u043A\u0430 \u0454 \u043D\u0435\u043F\u0440\u0430\u0432\u0434\u0438\u0432\u043E\u044E, \u043D\u0435\u0442\u043E\u0447\u043D\u043E\u044E, \u043D\u0435\u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u044E \u0430\u0431\u043E \u043D\u0435\u043F\u043E\u0432\u043D\u043E\u044E, \u043C\u0438 \u043C\u0430\u0454\u043C\u043E \u043F\u0440\u0430\u0432\u043E \u043F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u0438\u0442\u0438 \u0430\u0431\u043E \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0434\u0456\u044E \u0412\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 \u0442\u0430 \u0432\u0456\u0434\u043C\u043E\u0432\u0438\u0442\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u043F\u043E\u0442\u043E\u0447\u043D\u043E\u043C\u0443 \u0447\u0438 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456 \u0421\u0430\u0439\u0442\u0443 (\u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0439\u043E\u0433\u043E \u0447\u0430\u0441\u0442\u0438\u043D\u0438)." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 147,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 153,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0420\u0415\u0404\u0421\u0422\u0420\u0410\u0426\u0406\u042F \u041A\u041E\u0420\u0418\u0421\u0422\u0423\u0412\u0410\u0427\u0410" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 154,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 153,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0430\u043C \u043C\u043E\u0436\u0435 \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0438\u0441\u044F \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u0421\u0430\u0439\u0442\u0456. \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C \u0441\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F \u0442\u0430 \u043D\u0435\u0441\u0435\u0442\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0412\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 \u0442\u0430 \u043F\u0430\u0440\u043E\u043B\u044F. \u0412\u0438 \u043D\u0435 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u0430 \u043D\u0456\u043A\u043E\u043C\u0443 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u044F\u0442\u0438 \u0441\u0432\u043E\u0454 \u0456\u043C\u2019\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0442\u0430/\u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C. \u042F\u043A\u0449\u043E \u043C\u0438 \u0434\u0456\u0437\u043D\u0430\u0454\u043C\u043E\u0441\u044F, \u0449\u043E \u0412\u0438 \u043D\u0430\u0434\u0430\u043B\u0438 \u0441\u0432\u043E\u0454 \u0456\u043C\u2019\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0442\u0430/\u0430\u0431\u043E \u043F\u0430\u0440\u043E\u043B\u044C \u0456\u043D\u0448\u0456\u0439 \u043E\u0441\u043E\u0431\u0456, \u043C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u043D\u0435\u0433\u0430\u0439\u043D\u043E \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0412\u0430\u0448 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0421\u0430\u0439\u0442\u0443, \u041A\u043E\u043D\u0442\u0435\u043D\u0442\u0443 \u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0456\u043D\u0448\u043E\u0433\u043E \u043D\u0430\u0448\u043E\u0433\u043E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0443 \u0447\u0438 \u0421\u0435\u0440\u0432\u0456\u0441\u0443, \u044F\u043A\u0438\u0439 \u0412\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043B\u0438. \u0412\u0438 \u043D\u0435\u0441\u0435\u0442\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0430 \u0437\u0430\u0445\u0438\u0441\u0442 \u0441\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F \u0432\u0456\u0434 \u0440\u043E\u0437\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F \u0456\u043D\u0448\u0438\u043C. \u041C\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u043C\u043E \u0456 \u043D\u0435 \u0431\u0443\u0434\u0435\u043C\u043E \u043D\u0435\u0441\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0432\u0442\u0440\u0430\u0442\u0438 \u0430\u0431\u043E \u0437\u0431\u0438\u0442\u043A\u0438, \u0441\u043F\u0440\u0438\u0447\u0438\u043D\u0435\u043D\u0456 \u0412\u0430\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 \u0442\u0435, \u0449\u043E \u0412\u0438 \u043D\u0435 \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u043B\u0438 \u0441\u0432\u0456\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u0430\u0431\u043E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443. \u041C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438, \u0432\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438 \u0430\u0431\u043E \u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0432\u0438\u0431\u0440\u0430\u043D\u0435 \u0412\u0430\u043C\u0438 \u0456\u043C\u2019\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430, \u044F\u043A\u0449\u043E \u043C\u0438 \u043D\u0430 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0440\u043E\u0437\u0441\u0443\u0434 \u0432\u0438\u0437\u043D\u0430\u0447\u0438\u043C\u043E, \u0449\u043E \u0442\u0430\u043A\u0435 \u0456\u043C\u2019\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0454 \u043D\u0435\u043F\u0440\u0438\u0439\u043D\u044F\u0442\u043D\u0438\u043C, \u043D\u0435\u043F\u0440\u0438\u0441\u0442\u043E\u0439\u043D\u0438\u043C \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043D\u0435\u043F\u0440\u0438\u0439\u043D\u044F\u0442\u043D\u0438\u043C." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 156,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 171,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u043D\u0435\u0433\u0430\u0439\u043D\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u044F\u0442\u0438 \u043D\u0430\u0441 \u043F\u0440\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0412\u0430\u0448\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F \u0447\u0438 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 \u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0456\u043D\u0448\u0435 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F \u0431\u0435\u0437\u043F\u0435\u043A\u0438, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0432\u0430\u0442\u0438, \u0449\u043E \u0412\u0438 \u0432\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u0437\u0456 \u0441\u0432\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 \u0432 \u043A\u0456\u043D\u0446\u0456 \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0441\u0435\u0430\u043D\u0441\u0443. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u0421\u0430\u0439\u0442 \u0456/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442, \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0432\u0432\u043E\u0434\u0438\u0442\u0438 \u043F\u0440\u0430\u0432\u0434\u0438\u0432\u0443 \u0442\u0430 \u0442\u043E\u0447\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457, \u043F\u0440\u043E\u0446\u0435\u0441\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0442\u043E\u0449\u043E. \u042F\u043A\u0449\u043E \u0412\u0438 \u0432\u0432\u0435\u0434\u0435\u0442\u0435 \u043D\u0435\u043F\u0440\u0430\u0432\u0434\u0438\u0432\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u043C\u0438 \u043C\u0430\u0454\u043C\u043E \u043F\u0440\u0430\u0432\u043E \u043D\u0435\u0433\u0430\u0439\u043D\u043E \u0434\u0435\u0430\u043A\u0442\u0438\u0432\u0443\u0432\u0430\u0442\u0438 \u0412\u0430\u0448 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441. \u041C\u0438 \u0434\u043E\u043A\u043B\u0430\u0434\u0430\u0442\u0438\u043C\u0435\u043C\u043E \u0432\u0441\u0456\u0445 \u0437\u0443\u0441\u0438\u043B\u044C, \u0449\u043E\u0431 \u0412\u0430\u0448\u0456 \u043F\u0430\u0440\u043E\u043B\u0456 \u0437\u0430\u043B\u0438\u0448\u0430\u043B\u0438\u0441\u044F \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0438\u043C\u0438, \u0456 \u043D\u0435 \u0431\u0443\u0434\u0435\u043C\u043E \u0440\u043E\u0437\u0433\u043E\u043B\u043E\u0448\u0443\u0432\u0430\u0442\u0438 \u0412\u0430\u0448\u0456 \u043F\u0430\u0440\u043E\u043B\u0456 \u0431\u0435\u0437 \u0412\u0430\u0448\u043E\u0457 \u0437\u0433\u043E\u0434\u0438, \u0437\u0430 \u0432\u0438\u043D\u044F\u0442\u043A\u043E\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432, \u043A\u043E\u043B\u0438 \u0446\u044C\u043E\u0433\u043E \u0432\u0438\u043C\u0430\u0433\u0430\u0454 \u0437\u0430\u043A\u043E\u043D \u0430\u0431\u043E \u044F\u043A\u0449\u043E \u0432 \u041D\u0430\u0441 \u0431\u0443\u0434\u0435 \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044F \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\u0432\u0430\u0436\u0430\u0442\u0438, \u0449\u043E \u0442\u0430\u043A\u0430 \u0434\u0456\u044F \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0430, \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E \u043A\u043E\u043B\u0438 \u0440\u043E\u0437\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u043D\u044F \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0435, \u0449\u043E\u0431 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C, \u0437\u0432\u2019\u044F\u0437\u0430\u0442\u0438\u0441\u044F \u0437 \u043D\u0438\u043C \u0430\u0431\u043E \u043F\u043E\u0434\u0430\u0442\u0438 \u0441\u0443\u0434\u043E\u0432\u0438\u0439 \u043F\u043E\u0437\u043E\u0432 \u043F\u0440\u043E\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C, \u0445\u0442\u043E \u043C\u043E\u0436\u0435 \u0437\u0430\u0432\u0434\u0430\u0432\u0430\u0442\u0438 \u0448\u043A\u043E\u0434\u0438 \u0456\u043D\u0448\u0438\u043C \u0430\u0431\u043E \u0432\u0442\u0440\u0443\u0447\u0430\u0442\u0438\u0441\u044F \u0432 \u043D\u0430\u0448\u0456 \u043F\u0440\u0430\u0432\u0430 \u0447\u0438 \u0432\u043B\u0430\u0441\u043D\u0456\u0441\u0442\u044C." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 171,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 186,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0417\u0410\u0411\u041E\u0420\u041E\u041D\u0415\u041D\u0410 \u0414\u0406\u042F\u041B\u042C\u041D\u0406\u0421\u0422\u042C" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 187,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 186,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442 \u0434\u043B\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0446\u0456\u043B\u0435\u0439, \u043A\u0440\u0456\u043C \u0442\u0438\u0445, \u0434\u043B\u044F \u044F\u043A\u0438\u0445 \u043C\u0438 \u043D\u0430\u0434\u0430\u0454\u043C\u043E \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0421\u0430\u0439\u0442\u0443. \u0421\u0430\u0439\u0442 \u043D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0445 \u0446\u0456\u043B\u044F\u0445, \u0437\u0430 \u0432\u0438\u043D\u044F\u0442\u043A\u043E\u043C \u0442\u0438\u0445, \u044F\u043A\u0456 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u043E \u0441\u0445\u0432\u0430\u043B\u0435\u043D\u0456 \u0430\u0431\u043E \u0441\u0445\u0432\u0430\u043B\u0435\u043D\u0456 \u043D\u0430\u043C\u0438." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 189,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 195,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u042F\u043A \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0421\u0430\u0439\u0442\u0443 \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u041D\u0415 \u0440\u043E\u0431\u0438\u0442\u0438 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0445 \u0440\u0435\u0447\u0435\u0439:" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 195,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ol", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u0434\u0430\u043D\u0456 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u0439 \u0432\u043C\u0456\u0441\u0442 \u0456\u0437 \u0421\u0430\u0439\u0442\u0443 \u0434\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043A\u043E\u043C\u043F\u0456\u043B\u044F\u0446\u0456\u0457, \u043F\u0440\u044F\u043C\u043E \u0447\u0438 \u043E\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043A\u043E\u0432\u0430\u043D\u043E, \u043A\u043E\u043B\u0435\u043A\u0446\u0456\u0457, \u043A\u043E\u043C\u043F\u0456\u043B\u044F\u0446\u0456\u0457, \u0431\u0430\u0437\u0438 \u0434\u0430\u043D\u0438\u0445 \u0447\u0438 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0443 \u0431\u0435\u0437 \u043D\u0430\u0448\u043E\u0433\u043E \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u043E\u0433\u043E \u0434\u043E\u0437\u0432\u043E\u043B\u0443." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 200,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0411\u0440\u0430\u0442\u0438 \u0443\u0447\u0430\u0441\u0442\u044C \u0443 \u043D\u0435\u043D\u0430\u043B\u0435\u0436\u043D\u043E\u043C\u0443 \u0442\u0430/\u0430\u0431\u043E \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u043E\u043C\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456 \u0421\u0430\u0439\u0442\u0443 \u0442\u0430/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442\u0443. \u041D\u0435\u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0442\u0430 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0432\u043A\u043B\u044E\u0447\u0430\u0454, \u0430\u043B\u0435 \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0454\u044E, \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F\u043C, \u0432\u0456\u0434\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F\u043C, \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u0438\u043C \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F\u043C, \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F\u043C, \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0454\u044E, \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u044E, \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u043E\u043C, \u043F\u0440\u043E\u0434\u0430\u0436\u0435\u043C, \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F\u043C \u043F\u043E\u0445\u0456\u0434\u043D\u0438\u0445 \u0440\u043E\u0431\u0456\u0442, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0430\u0431\u043E \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F\u043C \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u0430\u0431\u043E \u0437\u0430\u0441\u043E\u0431\u043E\u043C (\u0432 \u0442\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0456 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E \u0447\u0438 \u0456\u043D\u0448\u0438\u043C\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u043C\u0438 \u0437\u0430\u0441\u043E\u0431\u0430\u043C\u0438) \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0412\u043C\u0456\u0441\u0442\u0443 \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0456\u043D\u0448\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u044F\u043A\u043E\u0457 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u0438\u0439 \u0430\u0431\u043E \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448\u0456 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u041F\u043E\u0441\u043B\u0443\u0433\u0438, \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0456\u043D\u0448\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F, \u043D\u0430\u0434\u0430\u043D\u0435 \u043D\u0430\u043C\u0438 \u0434\u043B\u044F \u0412\u0430\u0448\u043E\u0433\u043E \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F, \u0437 \u043C\u0435\u0442\u043E\u044E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0432 \u0431\u0456\u0437\u043D\u0435\u0441\u0456/\u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0457 \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u044F\u043A\u0438\u0439 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u0412\u0430\u043C \u043F\u0440\u0438\u0431\u0443\u0442\u043E\u043A." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 205,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438, \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0443\u0432\u0430\u0442\u0438, \u043E\u0431\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438, \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u0447\u0438 \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043F\u043E\u0448\u0438\u0440\u044E\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0447\u0430\u0441\u0442\u0438\u043D\u0443 \u0421\u0430\u0439\u0442\u0443 \u0447\u0438 \u0412\u043C\u0456\u0441\u0442\u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u0456\u043D\u0448\u0456\u0439 \u043E\u0441\u043E\u0431\u0456 \u0434\u043B\u044F \u0457\u0445\u043D\u044C\u043E\u0433\u043E \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u0434\u0456\u043B\u043E\u0432\u043E\u0433\u043E/\u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u044F\u043A\u0438\u0439 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u0457\u043C \u043F\u0440\u0438\u0431\u0443\u0442\u043E\u043A, \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u0442\u043E\u0433\u043E, \u0431\u0443\u043B\u043E \u0446\u0435 \u0412\u0430\u043C \u0432\u0456\u0434\u043E\u043C\u043E \u0447\u0438 \u043D\u0456 \u043D\u0430 \u0442\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442, \u043A\u043E\u043B\u0438 \u0412\u0438 \u043F\u043E\u0434\u0456\u043B\u0438\u043B\u0438\u0441\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0454\u044E, \u0457\u0445\u043D\u0456\u0439 \u043D\u0430\u043C\u0456\u0440 \u043F\u043E\u043B\u044F\u0433\u0430\u0432 \u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456 \u0412\u043C\u0456\u0441\u0442\u0443 \u0434\u043B\u044F \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0432 \u0431\u0456\u0437\u043D\u0435\u0441\u0456/\u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0457. \u0426\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0454, \u0449\u043E \u0412\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0430\u0431\u043E \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0447\u0430\u0441\u0442\u0438\u043D\u0443 \u0421\u0430\u0439\u0442\u0443 \u0442\u0430/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442\u0443 \u043A\u043E\u043C\u0443\u0441\u044C \u0456\u043D\u0448\u043E\u043C\u0443, \u0449\u043E\u0431 \u0432\u043E\u043D\u0438 \u043C\u043E\u0433\u043B\u0438 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0442\u0430/\u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0457\u0445 \u0434\u043B\u044F \u0432\u043B\u0430\u0441\u043D\u043E\u0433\u043E \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u0434\u0456\u043B\u043E\u0432\u043E\u0433\u043E/\u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u044F\u043A\u0438\u0439 \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u0457\u043C \u043F\u0440\u0438\u0431\u0443\u0442\u043E\u043A. \u0412\u0438 \u0454\u0434\u0438\u043D\u0438\u0439, \u043A\u043E\u043C\u0443 \u043D\u0430\u0434\u0430\u043D\u043E \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u0443 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044E \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443 \u0442\u0430/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442\u0443." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 218,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u041F\u043E\u0440\u0443\u0448\u0443\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0456\u043D\u0448\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C \u043D\u0430\u0448\u0456 \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0443 \u0432\u043B\u0430\u0441\u043D\u0456\u0441\u0442\u044C, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0456 \u043F\u0440\u0430\u0432\u0430 \u0442\u0430 \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u043D\u0456 \u0437\u043D\u0430\u043A\u0438." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 232,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u041E\u0431\u0445\u043E\u0434\u0438\u0442\u0438, \u0432\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u0438 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0432\u0442\u0440\u0443\u0447\u0430\u0442\u0438\u0441\u044F \u0432 \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u0437 \u0431\u0435\u0437\u043F\u0435\u043A\u043E\u044E \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u0421\u0430\u0439\u0442\u0443, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0444\u0443\u043D\u043A\u0446\u0456\u0457, \u044F\u043A\u0456 \u0437\u0430\u043F\u043E\u0431\u0456\u0433\u0430\u044E\u0442\u044C \u0430\u0431\u043E \u043E\u0431\u043C\u0435\u0436\u0443\u044E\u0442\u044C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0412\u043C\u0456\u0441\u0442\u0443 \u0430\u0431\u043E \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u044E\u044E\u0442\u044C \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443 \u0442\u0430/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442\u0443, \u0449\u043E \u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u043D\u0430 \u043D\u044C\u043E\u043C\u0443." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 236,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u041E\u0431\u043C\u0430\u043D\u044E\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u0432\u0432\u043E\u0434\u0438\u0442\u0438 \u043D\u0430\u0441 \u0442\u0430/\u0430\u0431\u043E \u0456\u043D\u0448\u0438\u0445 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0432 \u043E\u043C\u0430\u043D\u0443, \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0441\u043F\u0440\u043E\u0431 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443, \u0442\u0430\u043A\u0443 \u044F\u043A \u043F\u0430\u0440\u043E\u043B\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 242,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u043D\u0430\u0448\u0456 \u0441\u043B\u0443\u0436\u0431\u0438 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u043D\u0435\u043D\u0430\u043B\u0435\u0436\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0430\u0431\u043E \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0442\u0438 \u043D\u0435\u043F\u0440\u0430\u0432\u0434\u0438\u0432\u0456 \u0437\u0432\u0456\u0442\u0438 \u043F\u0440\u043E \u0437\u043B\u043E\u0432\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u0447\u0438 \u043D\u0435\u043F\u0440\u0430\u0432\u043E\u043C\u0456\u0440\u043D\u0443 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0443." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 247,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0411\u0443\u0434\u044C-\u044F\u043A\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u043E\u0432\u0430\u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0438, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0441\u043A\u0440\u0438\u043F\u0442\u0456\u0432 \u0434\u043B\u044F \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456\u0432 \u0447\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0430\u043D\u0430\u043B\u0456\u0437\u0443 \u0434\u0430\u043D\u0438\u0445, \u0440\u043E\u0431\u043E\u0442\u0456\u0432 \u0447\u0438 \u043F\u043E\u0434\u0456\u0431\u043D\u0438\u0445 \u0456\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0456\u0432 \u0437\u0431\u043E\u0440\u0443 \u0442\u0430 \u0432\u0438\u043B\u0443\u0447\u0435\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 251,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0442\u0440\u0443\u0447\u0430\u0442\u0438\u0441\u044F, \u043F\u043E\u0440\u0443\u0448\u0443\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043D\u0430\u0434\u043C\u0456\u0440\u043D\u0435 \u043D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u043D\u0430 \u0421\u0430\u0439\u0442 \u0430\u0431\u043E \u043C\u0435\u0440\u0435\u0436\u0456 \u0447\u0438 \u0441\u043B\u0443\u0436\u0431\u0438, \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0434\u043E \u0421\u0430\u0439\u0442\u0443." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 257,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u041F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 \u043F\u0440\u043E\u0444\u0456\u043B\u044C." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 261,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u0443 \u0437 \u0421\u0430\u0439\u0442\u0443, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0441\u043B\u0456\u0434\u0443\u0432\u0430\u0442\u0438, \u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u0430\u0431\u043E \u0437\u0430\u0432\u0434\u0430\u0442\u0438 \u0448\u043A\u043E\u0434\u0438 \u0456\u043D\u0448\u0456\u0439 \u043E\u0441\u043E\u0431\u0456." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 262,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442 \u044F\u043A \u0447\u0430\u0441\u0442\u0438\u043D\u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0441\u043F\u0440\u043E\u0431 \u043A\u043E\u043D\u043A\u0443\u0440\u0443\u0432\u0430\u0442\u0438 \u0437 \u043D\u0430\u043C\u0438 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442 \u0442\u0430/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442 \u0434\u043B\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u043F\u0440\u0438\u0431\u0443\u0442\u043A\u043E\u0432\u043E\u0457 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0447\u0438 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u0430." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 266,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0420\u043E\u0437\u0448\u0438\u0444\u0440\u043E\u0432\u0443\u0432\u0430\u0442\u0438, \u0434\u0435\u043A\u043E\u043C\u043F\u0456\u043B\u044E\u0432\u0430\u0442\u0438, \u0440\u043E\u0437\u0431\u0438\u0440\u0430\u0442\u0438 \u0430\u0431\u043E \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u0442\u0438 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0438\u0439 \u0456\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u0438\u0439 \u0430\u043D\u0430\u043B\u0456\u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u043E\u0433\u043E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F, \u0449\u043E \u0432\u0445\u043E\u0434\u0438\u0442\u044C \u0434\u043E \u0441\u043A\u043B\u0430\u0434\u0443 \u0421\u0430\u0439\u0442\u0443 \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0454 \u0439\u043E\u0433\u043E \u0447\u0430\u0441\u0442\u0438\u043D\u043E\u044E." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 271,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u041D\u0430\u043C\u0430\u0433\u0430\u0442\u0438\u0441\u044F \u043E\u0431\u0456\u0439\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0437\u0430\u0445\u043E\u0434\u0438 \u0421\u0430\u0439\u0442\u0443, \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0431\u0456\u0433\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043D\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u0421\u0430\u0439\u0442\u0443 \u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0439\u043E\u0433\u043E \u0447\u0430\u0441\u0442\u0438\u043D\u0438." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 276,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u041F\u0435\u0440\u0435\u0441\u043B\u0456\u0434\u0443\u0432\u0430\u0442\u0438, \u0434\u0440\u0430\u0442\u0443\u0432\u0430\u0442\u0438, \u0437\u0430\u043B\u044F\u043A\u0443\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u043F\u043E\u0433\u0440\u043E\u0436\u0443\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u0437 \u043D\u0430\u0448\u0438\u0445 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432 \u0430\u0431\u043E \u0430\u0433\u0435\u043D\u0442\u0456\u0432, \u044F\u043A\u0456 \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F\u043C \u0412\u0430\u043C \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0421\u0430\u0439\u0442\u0443." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 280,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u0430\u0434\u0430\u043F\u0442\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0435 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u044E\u0447\u0438\u0441\u044C, Flash, PHP, HTML, JavaScript \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u0439 \u043A\u043E\u0434." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 285,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438 (\u0430\u0431\u043E \u043D\u0430\u043C\u0430\u0433\u0430\u0442\u0438\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0430\u0431\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u0438) \u0432\u0456\u0440\u0443\u0441\u0438, \u0442\u0440\u043E\u044F\u043D\u0438 \u0447\u0438 \u0456\u043D\u0448\u0438\u0439 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B, \u0443 \u0442\u043E\u043C\u0443 \u0447\u0438\u0441\u043B\u0456 \u043D\u0430\u0434\u043C\u0456\u0440\u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0432\u0435\u043B\u0438\u043A\u0438\u0445 \u043B\u0456\u0442\u0435\u0440 \u0456 \u0441\u043F\u0430\u043C (\u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0440\u0432\u043D\u0435 \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u043D\u044F \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0432\u0430\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0443), \u0449\u043E \u0437\u0430\u0432\u0430\u0436\u0430\u0454 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0456 \u0431\u0435\u0437\u043F\u0435\u0440\u0435\u0440\u0432\u043D\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u043D\u0430\u0441\u043E\u043B\u043E\u0434\u0436\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0421\u0430\u0439\u0442\u043E\u043C \u0430\u0431\u043E \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0443\u0454, \u043F\u043E\u0433\u0456\u0440\u0448\u0443\u0454, \u043F\u043E\u0440\u0443\u0448\u0443\u0454, \u0437\u043C\u0456\u043D\u044E\u0454 \u0430\u0431\u043E \u0432\u0442\u0440\u0443\u0447\u0430\u0454\u0442\u044C\u0441\u044F \u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0456, \u0444\u0443\u043D\u043A\u0446\u0456\u0457, \u0440\u043E\u0431\u043E\u0442\u0443 \u0447\u0438 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443 \u0442\u0430/\u0430\u0431\u043E \u0437\u0430\u0432\u0434\u0430\u0454 \u0448\u043A\u043E\u0434\u0438 \u0421\u0430\u0439\u0442\u0443 \u0442\u0430 \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0456\u043D\u0448\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 289,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442 \u0443 \u0441\u043F\u043E\u0441\u0456\u0431, \u044F\u043A\u0438\u0439 \u043D\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0447\u0438\u043D\u043D\u0438\u043C \u0437\u0430\u043A\u043E\u043D\u0430\u043C \u0447\u0438 \u043D\u043E\u0440\u043C\u0430\u043C, \u0430\u0431\u043E \u0443 \u0441\u043F\u043E\u0441\u0456\u0431, \u044F\u043A\u0438\u0439 \u043D\u0435 \u0431\u0443\u0432 \u0434\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u0438\u0439 \u043D\u0430\u043C\u0438 \u0437\u0430 \u043D\u0430\u0448\u043E\u044E \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u044E \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u043E\u044E \u0437\u0433\u043E\u0434\u043E\u044E." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 298,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 196,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 304,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u0440\u043E\u0437\u0443\u043C\u0456\u0454\u0442\u0435 \u0442\u0430 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F, \u0449\u043E \u0443\u0447\u0430\u0441\u0442\u044C \u0443 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E\u043C\u0443 \u0430\u0431\u043E \u043D\u0435\u043D\u0430\u043B\u0435\u0436\u043D\u043E\u043C\u0443 \u0442\u0430/\u0430\u0431\u043E \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u043E\u043C\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u0456 \u0421\u0430\u0439\u0442\u0443 \u0442\u0430 \u0412\u043C\u0456\u0441\u0442\u0443, \u044F\u043A \u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u0432 \u0446\u0438\u0445 \u0423\u043C\u043E\u0432\u0430\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F\u043C \u0442\u0430/\u0430\u0431\u043E \u043A\u0440\u0430\u0434\u0456\u0436\u043A\u043E\u044E, \u0456 \u043C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u043F\u0435\u0440\u0435\u0441\u043B\u0456\u0434\u0443\u0432\u0430\u0442\u0438 \u0446\u0456 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F \u0432 \u043F\u043E\u0432\u043D\u043E\u043C\u0443 \u043E\u0431\u0441\u044F\u0437\u0456 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0437\u0430\u043A\u043E\u043D\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 304,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 311,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044C \u0456 \u0440\u043E\u0437\u0443\u043C\u0456\u0454\u0442\u0435, \u0449\u043E \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u0435, \u043D\u0435\u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0442\u0430/\u0430\u0431\u043E \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043C\u043E\u0436\u0435 \u043F\u0440\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0434\u043E \u0446\u0438\u0432\u0456\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0437\u043E\u0432\u0443 \u043F\u0440\u043E \u0432\u0456\u0434\u0448\u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0431\u0438\u0442\u043A\u0456\u0432 \u0456/\u0430\u0431\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0438\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u0438\u043C \u0437\u043B\u043E\u0447\u0438\u043D\u043E\u043C." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 311,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 316,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "\u0411\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0437\u0430\u043F\u0438\u0442 \u043D\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u043E\u0433\u043E \u0434\u043E\u0437\u0432\u043E\u043B\u0443 \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0412\u043C\u0456\u0441\u0442\u0443, \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0447\u0438 \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u043E, \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0456\u043D\u0448\u043E\u0457 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0457 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456 \u0430\u0431\u043E \u043C\u0430\u0439\u043D\u0430, \u0449\u043E \u043D\u0430\u043B\u0435\u0436\u0438\u0442\u044C \u043D\u0430\u043C (\xAB\u0412\u043C\u0456\u0441\u0442\xBB), \u043C\u0430\u0454 \u0431\u0443\u0442\u0438 \u0437\u0440\u043E\u0431\u043B\u0435\u043D\u043E \u0414\u041E \u0442\u043E\u0433\u043E, \u044F\u043A \u0412\u0438 \u0437\u0430\u0445\u043E\u0447\u0435\u0442\u0435 \u0439\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438, \u0437\u0430\u043F\u043E\u0432\u043D\u0438\u0432\u0448\u0438 \u0444\u043E\u0440\u043C\u0443 \xAB\u0417\u0432\u2019\u044F\u0437\u0430\u0442\u0438\u0441\u044F \u0437 \u043D\u0430\u043C\u0438\xBB \u043D\u0430 \u0421\u0430\u0439\u0442\u0456 \u0430\u0431\u043E \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u0432\u0448\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0439 \u043B\u0438\u0441\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0443 ",
      import.meta.env.VITE_MY_WORK_EMAIL
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 316,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 323,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u0434\u0443\u0436\u0435 \u0447\u0456\u0442\u043A\u043E \u0437\u0430\u044F\u0432\u043B\u044F\u0454\u043C\u043E, \u0449\u043E \u0412\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442 \u0442\u0430/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442, \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0447\u0438 \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u043E, \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u044F\u043A\u0438\u0439 \u0441\u0443\u043F\u0435\u0440\u0435\u0447\u0438\u0442\u044C \u0446\u0438\u043C \u0423\u043C\u043E\u0432\u0430\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u044F\u043A\u0449\u043E \u043C\u0438 \u043D\u0435 \u043D\u0430\u0434\u0430\u043C\u043E \u0412\u0430\u043C \u043D\u0430 \u0446\u0435 \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0438\u0439 \u0434\u043E\u0437\u0432\u0456\u043B. \u042F\u043A\u0449\u043E \u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u0432\u0456\u0434 \u043D\u0430\u0441 \u0434\u043E\u0437\u0432\u0456\u043B, \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u043F\u0435\u0432\u043D\u0438\u0439 \u0412\u043C\u0456\u0441\u0442, \u044F\u043A\u0438\u0439 \u043C\u0438 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454\u043C\u043E, \u0456 \u0422\u0406\u041B\u042C\u041A\u0418 \u0443 \u0441\u043F\u043E\u0441\u0456\u0431, \u043D\u0430 \u044F\u043A\u0438\u0439 \u043C\u0438 \u043D\u0430\u0434\u0430\u043B\u0438 \u0412\u0430\u043C \u043D\u0430\u0448 \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0438\u0439 \u0434\u043E\u0437\u0432\u0456\u043B." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 323,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 330,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u042F\u043A\u0449\u043E \u0412\u0438 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0432\u043C\u0456\u0441\u0442 \u0443 \u0441\u043F\u043E\u0441\u0456\u0431, \u043D\u0430 \u044F\u043A\u0438\u0439 \u043C\u0438 \u043D\u0435 \u043D\u0430\u0434\u0430\u0454\u043C\u043E \u0412\u0430\u043C \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0438\u0439 \u0434\u043E\u0437\u0432\u0456\u043B, \u0442\u043E \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F, \u0449\u043E \u0412\u0430\u0448\u0456 \u0434\u0456\u0457 \u0431\u0443\u0434\u0443\u0442\u044C \u0440\u043E\u0437\u0446\u0456\u043D\u0435\u043D\u0456 \u0442\u0430\u043A, \u043D\u0456\u0431\u0438 \u0412\u0438 \u0441\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043B\u0438 \u0442\u0430/\u0430\u0431\u043E \u0432\u043A\u0440\u0430\u043B\u0438 \u0442\u0430\u043A\u0438\u0439 \u0432\u043C\u0456\u0441\u0442 \u0443 \u043D\u0430\u0441, \u0456 \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u043D\u0435\u0433\u0430\u0439\u043D\u043E \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0412\u043C\u0456\u0441\u0442\u0443 \u0442\u0430 \u0432\u0436\u0438\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0434\u0456\u0439, \u044F\u043A\u0456 \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0438\u043C\u0430\u0433\u0430\u0442\u0438, \u043C\u0435\u0442\u043E\u0434\u0430\u043C\u0438 \u0442\u0430 \u0432 \u0442\u0435\u0440\u043C\u0456\u043D\u0438, \u044F\u043A\u0456 \u043C\u0438 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0430\u0454\u043C\u043E \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043D\u0430\u0448\u043E\u0457 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0457 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u043F\u0440\u0430\u0432 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456 \u043D\u0430 \u0421\u0430\u0439\u0442 \u0456 \u0412\u043C\u0456\u0441\u0442." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 330,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 338,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0412\u041D\u0415\u0421\u041E\u041A \u041A\u041E\u0420\u0418\u0421\u0422\u0423\u0412\u0410\u0427\u0406\u0412" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 339,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 338,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0421\u0430\u0439\u0442 \u043C\u043E\u0436\u0435 \u0437\u0430\u043F\u0440\u043E\u0448\u0443\u0432\u0430\u0442\u0438 \u0412\u0430\u0441 \u0441\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u0442\u0438\u0441\u044F, \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438, \u0440\u043E\u0431\u0438\u0442\u0438 \u0432\u043D\u0435\u0441\u043A\u0438 \u0430\u0431\u043E \u0431\u0440\u0430\u0442\u0438 \u0443\u0447\u0430\u0441\u0442\u044C \u0443 \u0431\u043B\u043E\u0433\u0430\u0445, \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0435\u0440\u0435\u0436\u0430\u0445, \u043E\u043D\u043B\u0430\u0439\u043D-\u0444\u043E\u0440\u0443\u043C\u0430\u0445 \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u043A\u0430\u043D\u0430\u043B\u0430\u0445 \u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u0457, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043C\u043E\u0436\u0435 \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0412\u0430\u043C \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438, \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0442\u0438, \u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438, \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u0438, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438, \u0432\u0438\u043A\u043E\u043D\u0443\u0432\u0430\u0442\u0438, \u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438, \u043F\u043E\u0448\u0438\u0440\u044E\u0432\u0430\u0442\u0438, \u0430\u0431\u043E \u0442\u0440\u0430\u043D\u0441\u043B\u044E\u0432\u0430\u0442\u0438 \u0432\u043C\u0456\u0441\u0442 \u0456 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0438 \u043D\u0430\u043C \u0430\u0431\u043E \u043D\u0430 \u0421\u0430\u0439\u0442\u0456, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u044E\u0447\u0438\u0441\u044C, \u0442\u0435\u043A\u0441\u0442\u0438, \u0432\u0456\u0434\u0435\u043E, \u0430\u0443\u0434\u0456\u043E, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457, \u0433\u0440\u0430\u0444\u0456\u043A\u0438, \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456, \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0430\u0431\u043E \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0447\u0438 \u0456\u043D\u0448\u0456 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0438 (\u0440\u0430\u0437\u043E\u043C \xAB\u0412\u043D\u0435\u0441\u043E\u043A\xBB)." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 341,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 350,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u043D\u0435\u0441\u043A\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u0456\u043D\u0448\u0456 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 \u0421\u0430\u0439\u0442\u0443 \u0442\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438. \u0422\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C, \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0432\u043D\u0435\u0441\u043E\u043A, \u044F\u043A\u0438\u0439 \u0412\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u0435, \u043C\u043E\u0436\u0435 \u0440\u043E\u0437\u0433\u043B\u044F\u0434\u0430\u0442\u0438\u0441\u044F \u044F\u043A \u043D\u0435\u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0438\u0439 \u0456 \u043D\u0435\u0432\u043B\u0430\u0441\u043D\u0438\u0439. \u041A\u043E\u043B\u0438 \u0412\u0438 \u0441\u0442\u0432\u043E\u0440\u044E\u0454\u0442\u0435 \u0430\u0431\u043E \u0440\u043E\u0431\u0438\u0442\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u043C\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0432\u043D\u0435\u0441\u043A\u0438, \u0412\u0438 \u0442\u0438\u043C \u0441\u0430\u043C\u0438\u043C \u0437\u0430\u044F\u0432\u043B\u044F\u0454\u0442\u0435 \u0442\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0454\u0442\u0435, \u0449\u043E:" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 350,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ol", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F, \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F, \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430, \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0438\u0439 \u043F\u043E\u043A\u0430\u0437 \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0434\u043E\u0441\u0442\u0443\u043F, \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0447\u0438 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u0412\u0430\u0448\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0456\u0432 \u043D\u0435 \u043F\u043E\u0440\u0443\u0448\u0443\u044E\u0442\u044C \u0456 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442\u044C \u043F\u043E\u0440\u0443\u0448\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u0430\u0432\u0430 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u044E\u0447\u0438\u0441\u044C, \u0430\u0432\u0442\u043E\u0440\u0441\u044C\u043A\u0435 \u043F\u0440\u0430\u0432\u043E, \u043F\u0430\u0442\u0435\u043D\u0442, \u0442\u043E\u0440\u0433\u043E\u0432\u0443 \u043C\u0430\u0440\u043A\u0443, \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0443 \u0442\u0430\u0454\u043C\u043D\u0438\u0446\u044E \u0430\u0431\u043E \u043D\u0435\u043C\u0430\u0439\u043D\u043E\u0432\u0456 \u043F\u0440\u0430\u0432\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0442\u0440\u0435\u0442\u044C\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 360,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0438 \u0454 \u0442\u0432\u043E\u0440\u0446\u0435\u043C \u0456 \u0432\u043B\u0430\u0441\u043D\u0438\u043A\u043E\u043C \u0430\u0431\u043E \u043C\u0430\u0454\u0442\u0435 \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u0457, \u043F\u0440\u0430\u0432\u0430, \u0437\u0433\u043E\u0434\u0438, \u0432\u0438\u043F\u0443\u0441\u043A\u0438 \u0442\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u0438 \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u0434\u043E\u0437\u0432\u0456\u043B \u041D\u0430\u043C, \u0421\u0430\u0439\u0442\u0443 \u0442\u0430 \u0456\u043D\u0448\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\u043C \u0421\u0430\u0439\u0442\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u0438\u043C \u0421\u0430\u0439\u0442\u043E\u043C \u0456 \u0446\u0438\u043C\u0438 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 367,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u0443 \u0437\u0433\u043E\u0434\u0443 \u0442\u0430/\u0430\u0431\u043E \u0434\u043E\u0437\u0432\u0456\u043B \u043A\u043E\u0436\u043D\u043E\u0457 \u043E\u043A\u0440\u0435\u043C\u043E\u0457 \u043E\u0441\u043E\u0431\u0438, \u044F\u043A\u0443 \u043C\u043E\u0436\u043D\u0430 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u0443 \u0412\u0430\u0448\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0430\u0445, \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0456\u043C\u0435\u043D\u0456 \u0447\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u043E\u043A\u0440\u0435\u043C\u043E\u0457 \u043E\u0441\u043E\u0431\u0438, \u044F\u043A\u0443 \u043C\u043E\u0436\u043D\u0430 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438, \u0449\u043E\u0431 \u0434\u043E\u0437\u0432\u043E\u043B\u0438\u0442\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0412\u0430\u0448\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0456\u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C, \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u0438\u043C \u0446\u0438\u043C \u0421\u0430\u0439\u0442\u043E\u043C \u0456 \u0446\u0438\u043C\u0438 \u0423\u043C\u043E\u0432\u0430\u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 373,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u0454 \u0444\u0430\u043B\u044C\u0448\u0438\u0432\u0438\u043C\u0438, \u043D\u0435\u0442\u043E\u0447\u043D\u0438\u043C\u0438 \u0447\u0438 \u0442\u0430\u043A\u0438\u043C\u0438, \u0449\u043E \u0432\u0432\u043E\u0434\u044F\u0442\u044C \u0432 \u043E\u043C\u0430\u043D\u0443." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 380,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u0454 \u043D\u0435\u0431\u0430\u0436\u0430\u043D\u043E\u044E \u0430\u0431\u043E \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u043E\u044E \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u044E, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438\u043C\u0438 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0430\u043C\u0438, \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0438\u043C\u0438 \u043F\u0456\u0440\u0430\u043C\u0456\u0434\u0430\u043C\u0438, \u0441\u043F\u0430\u043C\u043E\u043C, \u043C\u0430\u0441\u043E\u0432\u0438\u043C\u0438 \u0440\u043E\u0437\u0441\u0438\u043B\u043A\u0430\u043C\u0438 \u0447\u0438 \u0456\u043D\u0448\u0438\u043C\u0438 \u0444\u043E\u0440\u043C\u0430\u043C\u0438 \u043D\u0430\u0441\u0442\u0438\u0440\u043B\u0438\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0445\u0430\u043D\u043D\u044F." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 383,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u0454 \u043D\u0435\u043F\u0440\u0438\u0441\u0442\u043E\u0439\u043D\u0438\u043C\u0438, \u0431\u0440\u0443\u0434\u043D\u0438\u043C\u0438, \u043D\u0430\u0441\u0438\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u0438\u043C\u0438, \u043E\u0431\u0440\u0430\u0437\u043B\u0438\u0432\u0438\u043C\u0438, \u043D\u0430\u043A\u043B\u0435\u043F\u043D\u0438\u0446\u044C\u043A\u0438\u043C\u0438 \u0447\u0438 \u0456\u043D\u0448\u0438\u043C\u0438 \u043D\u0435\u043F\u0440\u0438\u0439\u043D\u044F\u0442\u043D\u0438\u043C\u0438 (\u043D\u0430 \u043D\u0430\u0448\u0443 \u0434\u0443\u043C\u043A\u0443)." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 388,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u0432\u0438\u0441\u043C\u0456\u044E\u044E\u0442\u044C, \u043D\u0435 \u0437\u043D\u0443\u0449\u0430\u044E\u0442\u044C\u0441\u044F, \u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u0436\u0443\u044E\u0442\u044C, \u043D\u0435 \u0437\u0430\u043B\u044F\u043A\u0443\u044E\u0442\u044C \u0456 \u043D\u0435 \u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u044C \u043A\u043E\u0433\u043E\u0441\u044C." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 392,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u043F\u0440\u043E\u043F\u0430\u0433\u0443\u044E\u0442\u044C \u043D\u0430\u0441\u0438\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u0433\u043E \u043F\u043E\u0432\u0430\u043B\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0443\u0440\u044F\u0434\u0443, \u043D\u0435 \u043F\u0456\u0434\u0431\u0443\u0440\u044E\u044E\u0442\u044C, \u043D\u0435 \u0437\u0430\u043E\u0445\u043E\u0447\u0443\u044E\u0442\u044C \u0456 \u043D\u0435 \u043F\u043E\u0433\u0440\u043E\u0436\u0443\u044E\u0442\u044C \u0437\u0430\u0432\u0434\u0430\u0442\u0438 \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u0457 \u0448\u043A\u043E\u0434\u0438 \u0456\u043D\u0448\u0438\u043C." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 396,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u043F\u043E\u0440\u0443\u0448\u0443\u044E\u0442\u044C \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u0447\u0438\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0443, \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0430\u043A\u0442\u0443 \u0447\u0438 \u043F\u0440\u0430\u0432\u0438\u043B\u0430." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 400,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u043F\u043E\u0440\u0443\u0448\u0443\u044E\u0442\u044C \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C \u0447\u0438 \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0456\u0441\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0442\u0440\u0435\u0442\u044C\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 404,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u043C\u0456\u0441\u0442\u044F\u0442\u044C \u0436\u043E\u0434\u043D\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432, \u044F\u043A\u0456 \u0437\u0431\u0438\u0440\u0430\u044E\u0442\u044C \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0432\u0456\u0434 \u043E\u0441\u0456\u0431 \u0432\u0456\u043A\u043E\u043C \u0434\u043E 18 \u0440\u043E\u043A\u0456\u0432 \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C \u043E\u0441\u0456\u0431 \u0432\u0456\u043A\u043E\u043C \u0434\u043E 18 \u0440\u043E\u043A\u0456\u0432 \u0443 \u0441\u0435\u043A\u0441\u0443\u0430\u043B\u044C\u043D\u043E\u043C\u0443 \u0447\u0438 \u043D\u0430\u0441\u0438\u043B\u044C\u043D\u0438\u0446\u044C\u043A\u043E\u043C\u0443 \u043F\u043E\u0440\u044F\u0434\u043A\u0443." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 408,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u043F\u043E\u0440\u0443\u0448\u0443\u044E\u0442\u044C \u0436\u043E\u0434\u043D\u043E\u0433\u043E \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0443 \u0447\u0438 \u0437\u0430\u043A\u043E\u043D\u0443 \u0448\u0442\u0430\u0442\u0443, \u0449\u043E \u0441\u0442\u043E\u0441\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u0438\u0442\u044F\u0447\u043E\u0457 \u043F\u043E\u0440\u043D\u043E\u0433\u0440\u0430\u0444\u0456\u0457, \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u0434\u043B\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0437\u0434\u043E\u0440\u043E\u0432\u2019\u044F \u0447\u0438 \u0431\u043B\u0430\u0433\u043E\u043F\u043E\u043B\u0443\u0447\u0447\u044F \u043D\u0435\u043F\u043E\u0432\u043D\u043E\u043B\u0456\u0442\u043D\u0456\u0445." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 413,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448 \u0412\u043D\u0435\u0441\u043E\u043A \u043D\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0437\u043B\u0438\u0432\u0438\u0445 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456\u0432 \u0449\u043E\u0434\u043E \u0440\u0430\u0441\u0438, \u043D\u0430\u0446\u0456\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u0441\u0442\u0430\u0442\u0456, \u0441\u0435\u043A\u0441\u0443\u0430\u043B\u044C\u043D\u0438\u0445 \u0443\u043F\u043E\u0434\u043E\u0431\u0430\u043D\u044C \u0447\u0438 \u0444\u0456\u0437\u0438\u0447\u043D\u0438\u0445 \u043D\u0435\u0434\u043E\u043B\u0456\u043A\u0456\u0432." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 418,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: "\u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u043D\u0435 \u043F\u043E\u0440\u0443\u0448\u0443\u044E\u0442\u044C \u0436\u043E\u0434\u043D\u0438\u0445 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u044C \u0446\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0447\u0438\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u0443 \u0447\u0438 \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u0430\u043A\u0442\u0443, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043D\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0438, \u044F\u043A\u0456 \u043F\u043E\u0440\u0443\u0448\u0443\u044E\u0442\u044C." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 422,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 356,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 428,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0411\u0443\u0434\u044C-\u044F\u043A\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443 \u0437 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F\u043C \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0437 \u0432\u0438\u0449\u0435\u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0445 \u043F\u0443\u043D\u043A\u0442\u0456\u0432 \u043F\u043E\u0440\u0443\u0448\u0443\u0454 \u0446\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u043C\u043E\u0436\u0435 \u043F\u0440\u0438\u0437\u0432\u0435\u0441\u0442\u0438, \u0441\u0435\u0440\u0435\u0434 \u0456\u043D\u0448\u043E\u0433\u043E, \u0434\u043E \u043F\u0440\u0438\u043F\u0438\u043D\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u0435\u043D\u043D\u044F \u0412\u0430\u0448\u0438\u0445 \u043F\u0440\u0430\u0432 \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 428,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 433,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u041B\u0406\u0426\u0415\u041D\u0417\u0406\u042F \u041D\u0410 \u0412\u041D\u0415\u0421\u041E\u041A" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 434,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 433,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041F\u0443\u0431\u043B\u0456\u043A\u0443\u044E\u0447\u0438 \u0441\u0432\u043E\u0457 \u0412\u043D\u0435\u0441\u043A\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u0447\u0430\u0441\u0442\u0438\u043D\u0456 \u0421\u0430\u0439\u0442\u0443 \u0430\u0431\u043E \u043D\u0430\u0434\u0430\u044E\u0447\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0412\u043D\u0435\u0441\u043A\u0456\u0432 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456, \u043F\u043E\u0432\u2019\u044F\u0437\u0443\u044E\u0447\u0438 \u0441\u0432\u0456\u0439 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0456\u0437 \u0412\u0430\u0448\u0438\u0445 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0445 \u0437\u0430\u043F\u0438\u0441\u0456\u0432 \u0443 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0435\u0440\u0435\u0436\u0430\u0445, \u0412\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u043D\u0430\u0434\u0430\u0454\u0442\u0435, \u0437\u0430\u044F\u0432\u043B\u044F\u0454\u0442\u0435 \u0442\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0454\u0442\u0435, \u0449\u043E \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438, \u043D\u0430\u043C \u0456 \u0431\u0443\u0434\u044C-\u043A\u043E\u043C\u0443, \u0443\u043F\u043E\u0432\u043D\u043E\u0432\u0430\u0436\u0435\u043D\u043E\u043C\u0443 \u043D\u0430\u043C\u0438, \u043D\u0435\u043E\u0431\u043C\u0435\u0436\u0435\u043D\u0435, \u0431\u0435\u0437\u0432\u0456\u0434\u043A\u043B\u0438\u0447\u043D\u0435, \u0431\u0435\u0437\u0441\u0442\u0440\u043E\u043A\u043E\u0432\u0435, \u043D\u0435\u0435\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0435, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u043D\u0435, \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0435, \u0432\u0441\u0435\u0441\u0432\u0456\u0442\u043D\u0454 \u043F\u0440\u0430\u0432\u043E \u0442\u0430 \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044E \u043D\u0430 \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u043D\u044F, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F, \u0432\u0456\u0434\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F, \u0440\u043E\u0437\u043A\u0440\u0438\u0442\u0442\u044F, \u043F\u0440\u043E\u0434\u0430\u0436, \u043F\u0435\u0440\u0435\u043F\u0440\u043E\u0434\u0430\u0436 , \u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F, \u0442\u0440\u0430\u043D\u0441\u043B\u044E\u0432\u0430\u043D\u043D\u044F, \u0437\u043C\u0456\u043D\u0435\u043D\u043D\u044F \u043D\u0430\u0437\u0432\u0438, \u0430\u0440\u0445\u0456\u0432\u0443\u0432\u0430\u043D\u043D\u044F, \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F, \u043A\u0435\u0448\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0435 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F, \u043F\u0443\u0431\u043B\u0456\u0447\u043D\u0435 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u0435\u0440\u0435\u0444\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F, \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u043D\u043D\u044F, \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0443\u0440\u0438\u0432\u043A\u0456\u0432 (\u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0447\u0438 \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u043E) \u0456 \u043F\u043E\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u0442\u0430\u043A\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0456\u0432 (\u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u044E\u0447\u0438\u0441\u044C, \u0412\u0430\u0448\u0456 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0442\u0430 \u0433\u043E\u043B\u043E\u0441) \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u044E \u043C\u0435\u0442\u043E\u044E, \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E\u044E, \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u044E \u0447\u0438 \u0456\u043D\u0448\u043E\u044E, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0433\u043E\u0442\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0445\u0456\u0434\u043D\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0430\u0431\u043E \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u0438 \u0432 \u0456\u043D\u0448\u0456 \u0440\u043E\u0431\u043E\u0442\u0438 \u0442\u0430\u043A\u0456 \u0412\u043D\u0435\u0441\u043A\u0438, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0442\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0442\u0438 \u0441\u0443\u0431\u043B\u0456\u0446\u0435\u043D\u0437\u0456\u0457 \u043D\u0430 \u0432\u0438\u0449\u0435\u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0435. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u043C\u043E\u0436\u0435 \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043C\u0435\u0434\u0456\u0430-\u0444\u043E\u0440\u043C\u0430\u0442\u0430\u0445 \u0456 \u0447\u0435\u0440\u0435\u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u043C\u0435\u0434\u0456\u0430-\u043A\u0430\u043D\u0430\u043B\u0438." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 436,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 453,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0426\u044F \u043B\u0456\u0446\u0435\u043D\u0437\u0456\u044F \u043F\u043E\u0448\u0438\u0440\u044E\u0432\u0430\u0442\u0438\u043C\u0435\u0442\u044C\u0441\u044F \u043D\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0444\u043E\u0440\u043C\u0443, \u043D\u043E\u0441\u0456\u0457 \u0447\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u044E, \u0432\u0456\u0434\u043E\u043C\u0443 \u0437\u0430\u0440\u0430\u0437 \u0430\u0431\u043E \u0440\u043E\u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0443 \u0432 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443, \u0456 \u0432\u043A\u043B\u044E\u0447\u0430\u0454 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043D\u0430\u043C\u0438 \u0412\u0430\u0448\u043E\u0433\u043E \u0456\u043C\u0435\u043D\u0456, \u043D\u0430\u0437\u0432\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457, \u044F\u043A\u0449\u043E \u0446\u0435 \u0437\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u043D\u043E, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0442\u043E\u0440\u0433\u043E\u0432\u0438\u0445 \u043C\u0430\u0440\u043E\u043A, \u0437\u043D\u0430\u043A\u0456\u0432 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F, \u0442\u043E\u0440\u0433\u043E\u0432\u0438\u0445 \u043D\u0430\u0437\u0432, \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0456\u0432, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0445 \u0456 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0445 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u044C, \u044F\u043A\u0456 \u0412\u0438 \u043D\u0430\u0434\u0430\u0454\u0442\u0435. \u0412\u0438 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u044F\u0454\u0442\u0435\u0441\u044F \u0432\u0456\u0434 \u0443\u0441\u0456\u0445 \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u043F\u0440\u0430\u0432 \u043D\u0430 \u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u0442\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0454\u0442\u0435, \u0449\u043E \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u0456 \u043F\u0440\u0430\u0432\u0430 \u043D\u0435 \u0437\u0430\u044F\u0432\u043B\u044F\u043B\u0438\u0441\u044F \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0443 \u0412\u0430\u0448\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0430\u0445." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 453,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 462,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u043D\u0435 \u0437\u0430\u044F\u0432\u043B\u044F\u0454\u043C\u043E \u043F\u0440\u043E \u043F\u0440\u0430\u0432\u043E \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456 \u043D\u0430 \u0412\u0430\u0448\u0456 \u0432\u043D\u0435\u0441\u043A\u0438. \u0412\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u0435 \u043F\u043E\u0432\u043D\u0435 \u043F\u0440\u0430\u0432\u043E \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456 \u043D\u0430 \u0432\u0441\u0456 \u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u0442\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u043F\u0440\u0430\u0432\u0430 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0457 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456 \u0447\u0438 \u0456\u043D\u0448\u0456 \u043F\u0440\u0430\u0432\u0430 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456, \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u0437 \u0412\u0430\u0448\u0438\u043C\u0438 \u0412\u043D\u0435\u0441\u043A\u0430\u043C\u0438. \u041C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0437\u0430\u044F\u0432\u0438 \u0443 \u0412\u0430\u0448\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0430\u0445, \u043D\u0430\u0434\u0430\u043D\u0438\u0445 \u0412\u0430\u043C\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u0447\u0430\u0441\u0442\u0438\u043D\u0456 \u0421\u0430\u0439\u0442\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 462,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 469,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043D\u0435\u0441\u0435\u0442\u0435 \u043E\u0434\u043D\u043E\u043E\u0441\u0456\u0431\u043D\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0430 \u0441\u0432\u0456\u0439 \u0412\u043D\u0435\u0441\u043E\u043A \u043D\u0430 \u0421\u0430\u0439\u0442 \u0456 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437\u0432\u0456\u043B\u044C\u043D\u0438\u0442\u0438 \u043D\u0430\u0441 \u0432\u0456\u0434 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0443\u0442\u0440\u0438\u043C\u0430\u0442\u0438\u0441\u044F \u0432\u0456\u0434 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0441\u0443\u0434\u043E\u0432\u0438\u0445 \u043F\u043E\u0437\u043E\u0432\u0456\u0432 \u043F\u0440\u043E\u0442\u0438 \u043D\u0430\u0441 \u0449\u043E\u0434\u043E \u0412\u0430\u0448\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0456\u0432." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 469,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 474,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u043C\u0430\u0454\u043C\u043E \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0440\u043E\u0437\u0441\u0443\u0434 (1) \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438, \u043F\u0440\u0438\u0445\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u043F\u0435\u0432\u043D\u0456 \u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0447\u0438 \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0412\u043D\u0435\u0441\u043E\u043A; (2) \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0456\u0432, \u0449\u043E\u0431 \u0440\u043E\u0437\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u0457\u0445 \u0443 \u0431\u0456\u043B\u044C\u0448 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0445 \u043C\u0456\u0441\u0446\u044F\u0445 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456; \u0456 (3) \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u0430\u0431\u043E \u0432\u0438\u0434\u0430\u043B\u044F\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0412\u043D\u0435\u0441\u043A\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441 \u0456 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u043F\u0440\u0438\u0447\u0438\u043D\u0438, \u0431\u0435\u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F. \u041C\u0438 \u043D\u0435 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u0432\u0430\u0442\u0438 \u0412\u0430\u0448\u0456 \u0412\u043D\u0435\u0441\u043A\u0438." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 474,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 482,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0412\u0410\u0428\u0410 \u0417\u0413\u041E\u0414\u0410" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 483,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 482,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u0432\u0438\u0437\u043D\u0430\u0454\u0442\u0435 \u0442\u0430 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437 \u0442\u0438\u043C, \u0449\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F, \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456, \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457, \u0456\u0434\u0435\u0457, \u0432\u0456\u0434\u0433\u0443\u043A\u0438 \u0447\u0438 \u0456\u043D\u0448\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0449\u043E\u0434\u043E \u0421\u0430\u0439\u0442\u0443 (\xAB\u041F\u043E\u0434\u0430\u043D\u043D\u044F\xBB), \u043D\u0430\u0434\u0430\u043D\u0430 \u0412\u0430\u043C\u0438 \u043D\u0430\u043C, \u043D\u0435 \u0454 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u044E \u0442\u0430 \u0441\u0442\u0430\u043D\u0435 \u043D\u0430\u0448\u043E\u044E \u0432\u0438\u043A\u043B\u044E\u0447\u043D\u043E\u044E \u0432\u043B\u0430\u0441\u043D\u0456\u0441\u0442\u044E. \u041C\u0438 \u0432\u043E\u043B\u043E\u0434\u0456\u0454\u043C\u043E \u0432\u0438\u043A\u043B\u044E\u0447\u043D\u0438\u043C\u0438 \u043F\u0440\u0430\u0432\u0430\u043C\u0438, \u0432\u043A\u043B\u044E\u0447\u043D\u043E \u0437 \u0443\u0441\u0456\u043C\u0430 \u043F\u0440\u0430\u0432\u0430\u043C\u0438 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0457 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456, \u0456 \u043C\u0430\u0454\u043C\u043E \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u043D\u0435\u043E\u0431\u043C\u0435\u0436\u0435\u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u0446\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432 \u0434\u043B\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0437\u0430\u043A\u043E\u043D\u043D\u0438\u0445 \u0446\u0456\u043B\u0435\u0439, \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0445 \u0447\u0438 \u0456\u043D\u0448\u0438\u0445, \u0431\u0435\u0437 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u0457 \u0412\u0430\u043C." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 485,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 494,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0422\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u044E\u0447\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0421\u0430\u0439\u0442\u043E\u043C \u0412\u0438 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u044F\u0454\u0442\u0435\u0441\u044F \u0432\u0456\u0434 \u0443\u0441\u0456\u0445 \u043C\u043E\u0440\u0430\u043B\u044C\u043D\u0438\u0445 \u043F\u0440\u0430\u0432 \u043D\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0442\u0430\u043A\u0435 \u041F\u043E\u0434\u0430\u043D\u043D\u044F, \u0456 \u0412\u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0454\u0442\u0435, \u0449\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0442\u0430\u043A\u0435 \u041F\u043E\u0434\u0430\u043D\u043D\u044F \u0454 \u0412\u0430\u0448\u0438\u043C \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0438\u043C \u0430\u0431\u043E \u0449\u043E \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u0442\u0430\u043A\u0456 \u041F\u043E\u0434\u0430\u043D\u043D\u044F. \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F, \u0449\u043E \u043F\u0440\u043E\u0442\u0438 \u041D\u0430\u0441 \u043D\u0435 \u0431\u0443\u0434\u0435 \u043F\u043E\u0437\u043E\u0432\u0456\u0432 \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u0435 \u0447\u0438 \u0444\u0430\u043A\u0442\u0438\u0447\u043D\u0435 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u0435 \u043F\u0440\u0438\u0432\u043B\u0430\u0441\u043D\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0430 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456 \u043D\u0430 \u0412\u0430\u0448\u0456 \u041F\u043E\u0434\u0430\u043D\u0456 \u0434\u0430\u043D\u0456." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 494,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 502,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0421\u0422\u041E\u0420\u041E\u041D\u041D\u0406 \u0412\u0415\u0411-\u0421\u0410\u0419\u0422\u0418 \u0422\u0410 \u0412\u041C\u0406\u0421\u0422" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 503,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 502,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0421\u0430\u0439\u0442 \u043C\u043E\u0436\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 (\u0430\u0431\u043E \u0412\u0430\u0441 \u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0421\u0430\u0439\u0442) \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0456\u043D\u0448\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438 (\xAB\u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438\xBB), \u0430 \u0442\u0430\u043A\u043E\u0436 \u0441\u0442\u0430\u0442\u0442\u0456, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u0457, \u0442\u0435\u043A\u0441\u0442, \u0433\u0440\u0430\u0444\u0456\u043A\u0443, \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F, \u0434\u0438\u0437\u0430\u0439\u043D, \u043C\u0443\u0437\u0438\u043A\u0443, \u0437\u0432\u0443\u043A, \u0432\u0456\u0434\u0435\u043E, \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0435 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u0456\u043D\u0448\u0438\u0439 \u0432\u043C\u0456\u0441\u0442 \u0430\u0431\u043E \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0438, \u0449\u043E \u043D\u0430\u043B\u0435\u0436\u0430\u0442\u044C \u0430\u0431\u043E \u043F\u043E\u0445\u043E\u0434\u044F\u0442\u044C \u0432\u0456\u0434 \u0442\u0440\u0435\u0442\u0456\u0445 \u043E\u0441\u0456\u0431 (\xAB\u0412\u043C\u0456\u0441\u0442 \u0442\u0440\u0435\u0442\u0456\u0445 \u0441\u0442\u043E\u0440\u0456\u043D\xBB)." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 505,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 512,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0422\u0430\u043A\u0456 \u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438 \u0442\u0430 \u0412\u043C\u0456\u0441\u0442 \u0442\u0440\u0435\u0442\u0456\u0445 \u0441\u0442\u043E\u0440\u0456\u043D \u041D\u0430\u043C\u0438 \u043D\u0435 \u0434\u043E\u0441\u043B\u0456\u0434\u0436\u0443\u044E\u0442\u044C\u0441\u044F, \u043D\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E\u044E\u0442\u044C\u0441\u044F \u0442\u0430 \u043D\u0435 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u043E\u0447\u043D\u0456\u0441\u0442\u044C, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0456\u0441\u0442\u044C \u0447\u0438 \u043F\u043E\u0432\u043D\u043E\u0442\u0443, \u0456 \u043C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438, \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u044F\u043A\u0438\u0445 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u041D\u0430\u0448 \u0421\u0430\u0439\u0442, \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u0438\u0439 \u0412\u043C\u0456\u0441\u0442 \u0442\u0440\u0435\u0442\u0456\u0445 \u0441\u0442\u043E\u0440\u0456\u043D, \u0449\u043E \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0438\u0439 \u043D\u0430, \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0447\u0435\u0440\u0435\u0437 \u0430\u0431\u043E \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0432\u043C\u0456\u0441\u0442, \u0442\u043E\u0447\u043D\u0456\u0441\u0442\u044C, \u043E\u0431\u0440\u0430\u0437\u043B\u0438\u0432\u0456\u0441\u0442\u044C, \u0434\u0443\u043C\u043A\u0438, \u043D\u0430\u0434\u0456\u0439\u043D\u0456\u0441\u0442\u044C, \u043C\u0435\u0442\u043E\u0434\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0430\u0431\u043E \u0456\u043D\u0448\u0456 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 \u0422\u0440\u0435\u0442\u0456\u0445 \u0421\u0442\u043E\u0440\u0456\u043D \u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442\u0443 \u0442\u0440\u0435\u0442\u0456\u0445 \u0441\u0442\u043E\u0440\u0456\u043D." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 512,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 522,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 \u0422\u0440\u0435\u0442\u0456\u0445 \u0421\u0442\u043E\u0440\u0456\u043D \u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0412\u043C\u0456\u0441\u0442\u0443 \u0442\u0440\u0435\u0442\u0456\u0445 \u0441\u0442\u043E\u0440\u0456\u043D, \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u043D\u0438\u0445 \u0430\u0431\u043E \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u043E\u0437\u0432\u043E\u043B\u0443 \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0447\u0438 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 \u0422\u0440\u0435\u0442\u0456\u0445 \u0421\u0442\u043E\u0440\u0456\u043D \u043D\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0454 \u0457\u0445 \u0441\u0445\u0432\u0430\u043B\u0435\u043D\u043D\u044F \u043D\u0430\u043C\u0438. \u042F\u043A\u0449\u043E \u0412\u0438 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0435 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u041D\u0430\u0448 \u0421\u0430\u0439\u0442 \u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 \u0422\u0440\u0435\u0442\u0456\u0445 \u0421\u0442\u043E\u0440\u0456\u043D, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0442\u0430/\u0430\u0431\u043E \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0412\u043C\u0456\u0441\u0442 \u0442\u0440\u0435\u0442\u0456\u0445 \u0441\u0442\u043E\u0440\u0456\u043D, \u0412\u0438 \u0440\u043E\u0431\u0438\u0442\u0435 \u0446\u0435 \u043D\u0430 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0440\u0438\u0437\u0438\u043A, \u0456 \u0412\u0438 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u0437\u043D\u0430\u0442\u0438, \u0449\u043E \u0446\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u041D\u0430\u0448\u043E\u0433\u043E \u0421\u0430\u0439\u0442\u0443 \u0431\u0456\u043B\u044C\u0448\u0435 \u043D\u0435 \u0434\u0456\u0439\u0441\u043D\u0456." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 522,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 531,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0430\u043C \u0441\u043B\u0456\u0434 \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u0438\u0442\u0438\u0441\u044F \u0437 \u0443\u043C\u043E\u0432\u0430\u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0437\u0431\u043E\u0440\u0443 \u0434\u0430\u043D\u0438\u0445, \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443, \u043D\u0430 \u044F\u043A\u0438\u0439 \u0412\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u0435 \u0456\u0437 \u041D\u0430\u0448\u043E\u0433\u043E \u0421\u0430\u0439\u0442\u0443, \u0430\u0431\u043E \u0441\u0442\u043E\u0441\u043E\u0432\u043D\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C, \u044F\u043A\u0456 \u0412\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u0435 \u0430\u0431\u043E \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u044E\u0454\u0442\u0435 \u0437 \u0421\u0430\u0439\u0442\u0443. \u0411\u0443\u0434\u044C-\u044F\u043A\u0456 \u043F\u043E\u043A\u0443\u043F\u043A\u0438, \u044F\u043A\u0456 \u0412\u0438 \u0440\u043E\u0431\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432 \u0422\u0440\u0435\u0442\u0456\u0445 \u0421\u0442\u043E\u0440\u0456\u043D, \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u0442\u0438\u043C\u0443\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0456\u043D\u0448\u0456 \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0438 \u0442\u0430 \u0432\u0456\u0434 \u0456\u043D\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0439, \u0456 \u043C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0436\u043E\u0434\u043D\u043E\u0457 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0449\u043E\u0434\u043E \u0442\u0430\u043A\u0438\u0445 \u043F\u043E\u043A\u0443\u043F\u043E\u043A, \u044F\u043A\u0456 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u044E\u0442\u044C\u0441\u044F \u0432\u0438\u043A\u043B\u044E\u0447\u043D\u043E \u043C\u0456\u0436 \u0412\u0430\u043C\u0438 \u0442\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u044E \u0442\u0440\u0435\u0442\u044C\u043E\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u044E." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 531,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 540,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0442\u0430 \u0432\u0438\u0437\u043D\u0430\u0454\u0442\u0435, \u0449\u043E \u043C\u0438 \u043D\u0435 \u0441\u0445\u0432\u0430\u043B\u044E\u0454\u043C\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u0447\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0438, \u044F\u043A\u0456 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0456\u0445 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430\u0445, \u0456 \u0412\u0438 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0443\u0454\u0442\u0435\u0441\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u0438 \u041D\u0430\u0441 \u0432\u0456\u0434 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0448\u043A\u043E\u0434\u0438, \u0441\u043F\u0440\u0438\u0447\u0438\u043D\u0435\u043D\u043E\u0457 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u043D\u044F\u043C \u0412\u0430\u043C\u0438 \u0442\u0430\u043A\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0447\u0438 \u043F\u043E\u0441\u043B\u0443\u0433. \u041A\u0440\u0456\u043C \u0442\u043E\u0433\u043E, \u0412\u0438 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0443\u0454\u0442\u0435\u0441\u044F \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u0438 \u041D\u0430\u0441 \u0432\u0456\u0434 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0432\u0442\u0440\u0430\u0442, \u044F\u043A\u0456 \u0412\u0438 \u0437\u0430\u0437\u043D\u0430\u043B\u0438, \u0430\u0431\u043E \u0448\u043A\u043E\u0434\u0438, \u0437\u0430\u043F\u043E\u0434\u0456\u044F\u043D\u043E\u0457 \u0412\u0430\u043C, \u044F\u043A\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0430 \u0437 \u0412\u043C\u0456\u0441\u0442\u043E\u043C \u0422\u0440\u0435\u0442\u0456\u0445 \u0421\u0442\u043E\u0440\u0456\u043D \u0430\u0431\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u043C \u0437 \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0430\u043C\u0438 \u0422\u0440\u0435\u0442\u0456\u0445 \u0421\u0442\u043E\u0440\u0456\u043D." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 540,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 548,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0423\u041F\u0420\u0410\u0412\u041B\u0406\u041D\u041D\u042F \u0421\u0410\u0419\u0422\u041E\u041C" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 549,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 548,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E, \u0430\u043B\u0435 \u043D\u0435 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u043D\u044F:" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 551,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(1) \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442 \u043D\u0430 \u043D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u044C \u0446\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 552,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(2) \u0432\u0436\u0438\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0445 \u0441\u0443\u0434\u043E\u0432\u0438\u0445 \u0437\u0430\u0445\u043E\u0434\u0456\u0432 \u043F\u0440\u043E\u0442\u0438 \u0431\u0443\u0434\u044C-\u043A\u043E\u0433\u043E, \u0445\u0442\u043E \u043D\u0430 \u043D\u0430\u0448 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0440\u043E\u0437\u0441\u0443\u0434 \u043F\u043E\u0440\u0443\u0448\u0443\u0454 \u0437\u0430\u043A\u043E\u043D \u0430\u0431\u043E \u0446\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u044E\u0447\u0438\u0441\u044C, \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u043F\u0440\u043E \u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043F\u0440\u0430\u0432\u043E\u043E\u0445\u043E\u0440\u043E\u043D\u043D\u0438\u043C \u043E\u0440\u0433\u0430\u043D\u0430\u043C;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 553,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(3) \u043D\u0430 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0440\u043E\u0437\u0441\u0443\u0434 \u0456 \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u044F\u0442\u0438, \u043E\u0431\u043C\u0435\u0436\u0443\u0432\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F, \u043E\u0431\u043C\u0435\u0436\u0443\u0432\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456\u0441\u0442\u044C \u0430\u0431\u043E \u0432\u0438\u043C\u0438\u043A\u0430\u0442\u0438 (\u043D\u0430\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0446\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u043E \u043C\u043E\u0436\u043B\u0438\u0432\u043E) \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0456\u0437 \u0432\u0430\u0448\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0456\u0432 \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0439\u043E\u0433\u043E \u0447\u0430\u0441\u0442\u0438\u043D\u0443;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 558,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(4) \u043D\u0430 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0440\u043E\u0437\u0441\u0443\u0434 \u0456 \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C, \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u044C \u0447\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0432\u0438\u0434\u0430\u043B\u044F\u0442\u0438 \u0456\u0437 \u0421\u0430\u0439\u0442\u0443 \u0447\u0438 \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0432\u0456\u0434\u043A\u043B\u044E\u0447\u0430\u0442\u0438 \u0432\u0441\u0456 \u0444\u0430\u0439\u043B\u0438 \u0442\u0430 \u0432\u043C\u0456\u0441\u0442, \u044F\u043A\u0456 \u043C\u0430\u044E\u0442\u044C \u043D\u0430\u0434\u043C\u0456\u0440\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043E\u0431\u0442\u044F\u0436\u043B\u0438\u0432\u0456 \u0434\u043B\u044F \u043D\u0430\u0448\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043C;" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 563,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "(5) \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442\u043E\u043C \u0442\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C, \u0449\u043E\u0431 \u0437\u0430\u0445\u0438\u0441\u0442\u0438\u0442\u0438 \u043D\u0430\u0448\u0456 \u043F\u0440\u0430\u0432\u0430 \u0442\u0430 \u0432\u043B\u0430\u0441\u043D\u0456\u0441\u0442\u044C \u0456 \u0441\u043F\u0440\u0438\u044F\u0442\u0438 \u043D\u0430\u043B\u0435\u0436\u043D\u043E\u043C\u0443 \u0444\u0443\u043D\u043A\u0446\u0456\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044E \u0421\u0430\u0439\u0442\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 568,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 572,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u041F\u041E\u041B\u0406\u0422\u0418\u041A\u0410 \u041A\u041E\u041D\u0424\u0406\u0414\u0415\u041D\u0426\u0406\u0419\u041D\u041E\u0421\u0422\u0406" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 573,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 572,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u0434\u0431\u0430\u0454\u043C\u043E \u043F\u0440\u043E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C \u0456 \u0431\u0435\u0437\u043F\u0435\u043A\u0443 \u0434\u0430\u043D\u0438\u0445. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u044C\u0442\u0435 \u043D\u0430\u0448\u0443 \u043F\u043E\u0432\u043D\u0443 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u0443 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0447\u0438 \u0421\u0430\u0439\u0442, \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430\u0448\u043E\u0457 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 575,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 580,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0414\u043B\u044F \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443 \u0442\u0430/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442\u0443 \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0438\u043C\u0430\u0433\u0430\u0442\u0438 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0430\u0431\u043E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0412\u0430\u0448\u0435 \u0456\u043C\u2019\u044F, \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438, \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443, \u0430\u0434\u0440\u0435\u0441\u0443, \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0434\u0430\u0442\u0443 \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u0443\u043F\u043E\u0434\u043E\u0431\u0430\u043D\u043D\u044F, \u0456\u043D\u0442\u0435\u0440\u0435\u0441\u0438, \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u0456\u043D\u0448\u0443 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E (\xAB\u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0430 \u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F\u201D), \u0430\u0431\u043E \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u043D\u0430\u0434\u0430\u0442\u0438 \u043D\u0430\u043C \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440, \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0456\u044E, \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F, \u0432\u0456\u0434\u0435\u043E \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0456\u043D\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0456\u0434 \u0447\u0430\u0441 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0443\u0447\u0430\u0441\u0442\u0456 \u0432 \u0421\u0430\u0439\u0442\u0456 \u0442\u0430/\u0430\u0431\u043E \u041A\u043E\u043D\u0442\u0435\u043D\u0442\u0456 (\u201C\u0406\u043D\u0448\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F\u201D). \u041D\u0430\u0434\u0430\u044E\u0447\u0438 \u043D\u0430\u043C \u0442\u0430\u043A\u0443 \u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0443 \u0447\u0438 \u0456\u043D\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0412\u0438 \u043D\u0430\u0434\u0430\u0454\u0442\u0435 \u043D\u0430\u043C \u0434\u043E\u0437\u0432\u0456\u043B \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0442\u0430 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u0442\u0430\u043A\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456. \u041C\u0438, \u0443 \u0441\u0432\u043E\u044E \u0447\u0435\u0440\u0433\u0443, \u0434\u043E\u043A\u043B\u0430\u0434\u0435\u043C\u043E \u0432\u0441\u0456\u0445 \u0437\u0443\u0441\u0438\u043B\u044C, \u0449\u043E\u0431 \u0412\u0430\u0448\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0431\u0443\u043B\u0430 \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E\u044E \u0442\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u044E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0446\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0456 \u043D\u0430\u0448\u043E\u0457 \u043F\u043E\u0432\u043D\u043E\u0457 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u044F\u043A\u0443 \u043C\u043E\u0436\u043D\u0430 \u0437\u043D\u0430\u0439\u0442\u0438 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 580,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 594,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041E\u0434\u043D\u0430\u043A \u0447\u0435\u0440\u0435\u0437 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0456 \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0443 \u043C\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u043C\u043E \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0438\u0442\u0438 \u0430\u0431\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0432\u0430\u0442\u0438 \u0431\u0435\u0437\u043F\u0435\u043A\u0443 \u0412\u0430\u0448\u043E\u0457 \u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0456\u043D\u0448\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0430\u0431\u043E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u0449\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430\u043C \u0430\u0431\u043E \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448\u0456 \u0441\u043B\u0443\u0436\u0431\u0438; \u0442\u043E\u043C\u0443 \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u0434\u0430\u043D\u0438\u0445 \u0430\u0431\u043E \u0456\u043D\u0448\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u043D\u0430 \u0412\u0430\u0448 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0440\u0438\u0437\u0438\u043A. \u041C\u0438 \u0432\u0436\u0438\u0432\u0430\u0454\u043C\u043E \u0440\u043E\u0437\u0443\u043C\u043D\u0456 \u0437\u0430\u0445\u043E\u0434\u0438 \u0431\u0435\u0437\u043F\u0435\u043A\u0438, \u0449\u043E\u0431 \u0437\u0430\u043F\u043E\u0431\u0456\u0433\u0442\u0438 \u0432\u0442\u0440\u0430\u0442\u0456, \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044E \u0442\u0430 \u0437\u043C\u0456\u043D\u0456 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E\u0457 \u0432\u0456\u0434 \u0412\u0430\u0441, \u0430\u043B\u0435 \u043C\u0438 \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0454\u043C\u043E, \u0449\u043E \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u0430\u043F\u043E\u0431\u0456\u0433\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u0442\u0430\u043A\u0456\u0439 \u0432\u0442\u0440\u0430\u0442\u0456, \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u043C\u0443 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044E \u0434\u043B\u044F \u0412\u0430\u0441 \u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0442\u0440\u0435\u0442\u044C\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0442\u0430\u043A\u043E\u0457 \u0432\u0442\u0440\u0430\u0442\u0438, \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0437\u043C\u0456\u043D\u0438." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 594,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 605,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u042F\u043A\u0449\u043E \u0412\u0438 \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u0435, \u0449\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0430 \u0412\u0430\u0448\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0454 \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u044E \u0430\u0431\u043E \u043D\u0435\u043F\u043E\u0432\u043D\u043E\u044E, \u0437\u0432\u2019\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0437 \u043D\u0430\u043C\u0438 \u044F\u043A\u043E\u043C\u043E\u0433\u0430 \u0448\u0432\u0438\u0434\u0448\u0435. \u041C\u0438 \u043D\u0435\u0433\u0430\u0439\u043D\u043E \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u043C\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u044F\u043A\u0443 \u0431\u0443\u0434\u0435 \u0432\u0438\u0437\u043D\u0430\u043D\u043E \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u044E." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 605,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 610,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u042F\u043A \u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E " }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 611,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0412\u0430\u0448\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 612,
        columnNumber: 13
      }, this),
      " \u041C\u0438 \u0437\u0430\u043F\u0438\u0442\u0443\u0454\u043C\u043E \u0442\u0430 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0440\u0456\u0437\u043D\u0456 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043D\u0456 \u0442\u0430/\u0430\u0431\u043E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0449\u043E\u0431 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438 \u0412\u0430\u0448\u0456 \u043F\u043E\u0442\u0440\u0435\u0431\u0438 \u0442\u0430 \u043D\u0430\u0434\u0430\u0442\u0438 \u0412\u0430\u043C \u043A\u0440\u0430\u0449\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438. \u041A\u0440\u0456\u043C \u0442\u043E\u0433\u043E, \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0442\u0430\u043A\u0456 \u0434\u0430\u043D\u0456 \u0442\u0430 \u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0437 \u0442\u0430\u043A\u0438\u0445 \u043F\u0440\u0438\u0447\u0438\u043D: (1) \u0434\u043B\u044F \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u0443, (2) \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443 \u0442\u0430/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442\u0443, (3) \u0434\u043B\u044F \u043F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E\u0457 \u0440\u043E\u0437\u0441\u0438\u043B\u043A\u0438 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438\u0445 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u044C \u043F\u0440\u043E \u043D\u043E\u0432\u0456 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u0430\u0431\u043E \u0456\u043D\u0448\u0456 \u0441\u043F\u0435\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457, \u0432\u0456\u0434 \u044F\u043A\u0438\u0445 \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441, (4) \u0434\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0441\u0443\u043A\u0443\u043F\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0449\u043E \u043D\u0435 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u044E\u0442\u044C\u0441\u044F, \u0434\u043B\u044F \u0434\u043E\u0441\u043B\u0456\u0434\u043D\u0438\u0446\u044C\u043A\u0438\u0445 \u0446\u0456\u043B\u0435\u0439, (5) \u0434\u043B\u044F \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0445 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0430\u0431\u043E \u041F\u043E\u0441\u043B\u0443\u0433, \u044F\u043A\u0456 \u0412\u0438 \u043A\u0443\u043F\u0443\u0454\u0442\u0435 \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u0435, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0432\u0430\u0448\u0438\u0445 \u0456\u043D\u0442\u0435\u0440\u0435\u0441\u0456\u0432 \u0442\u0430/\u0430\u0431\u043E (6) \u0434\u043B\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0430\u0431\u043E \u0441\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u043E\u0433\u043E \u0437 \u0412\u0430\u0448\u0438\u043C\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043C\u0438."
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 610,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 624,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0417\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F." }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 625,
        columnNumber: 13
      }, this),
      " \u0423\u0441\u0456 \u0434\u0430\u043D\u0456 \u0442\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044E\u0442\u044C\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u043C\u0438. \u0414\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0446\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0456 \u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043C\u0430\u044E\u0442\u044C \u043B\u0438\u0448\u0435 \u0442\u0456, \u0445\u0442\u043E \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0446\u0456\u0454\u044E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0454\u044E, \u0449\u043E\u0431 \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0442\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0437\u0432\u2019\u044F\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0437 \u0442\u0438\u043C\u0438, \u0445\u0442\u043E \u0445\u043E\u0447\u0435 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u043D\u0430\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E. \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0442\u0430 \u0432\u0438\u0437\u043D\u0430\u0454\u0442\u0435, \u0449\u043E \u043C\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u044E\u0447\u0438\u0441\u044C, \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0456 \u0444\u0456\u043B\u0456\u0457, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0442\u0456, \u0445\u0442\u043E \u043A\u0435\u0440\u0443\u0454 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u044E \u043A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u043C\u0438, \u043C\u043E\u0436\u0435\u043C\u043E \u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u0412\u0430\u0448\u043E\u0457 \u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457."
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 624,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 634,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0422\u0415\u0420\u041C\u0406\u041D \u0414\u0406\u0407 \u0422\u0410 \u0417\u0410\u0412\u0415\u0420\u0428\u0415\u041D\u041D\u042F" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 635,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 634,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "\u0426\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0437\u0430\u043B\u0438\u0448\u0430\u044E\u0442\u044C\u0441\u044F \u0434\u0456\u0439\u0441\u043D\u0438\u043C\u0438 \u0432 \u043F\u043E\u0432\u043D\u0456\u0439 \u0441\u0438\u043B\u0456, \u043F\u043E\u043A\u0438 \u0412\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u0435 \u0421\u0430\u0439\u0442 \u0456 \u0432 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443, \u043D\u0430\u0432\u0456\u0442\u044C \u043F\u0456\u0441\u043B\u044F \u043F\u0440\u0438\u043F\u0438\u043D\u0435\u043D\u043D\u044F \u0412\u0430\u043C\u0438 \u0430\u0431\u043E \u043D\u0430\u043C\u0438. \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441 \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0443\u0447\u0430\u0441\u0442\u044C \u0443 \u043D\u0430\u0448\u0438\u0445 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445 \u0447\u0438 \u041F\u043E\u0441\u043B\u0443\u0433\u0430\u0445, \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u0432\u0448\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0439 \u043B\u0438\u0441\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0443",
      import.meta.env.VITE_MY_WORK_EMAIL
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 637,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 644,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0411\u0415\u0417 \u041E\u0411\u041C\u0415\u0416\u0415\u041D\u041D\u042F \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0425 \u0406\u041D\u0428\u0418\u0425 \u041F\u041E\u041B\u041E\u0416\u0415\u041D\u042C \u0426\u0418\u0425 \u0423\u041C\u041E\u0412 \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F \u0421\u0410\u0419\u0422\u041E\u041C, \u041C\u0418 \u0417\u0410\u041B\u0418\u0428\u0410\u0404\u041C\u041E \u0417\u0410 \u0421\u041E\u0411\u041E\u042E \u041F\u0420\u0410\u0412\u041E \u041D\u0410 \u041D\u0410\u0428 \u0420\u041E\u0417\u0421\u0423\u0414 \u0422\u0410 \u0411\u0415\u0417 \u041F\u041E\u0412\u0406\u0414\u041E\u041C\u041B\u0415\u041D\u041D\u042F \u0427\u0418 \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u041E\u0421\u0422\u0406 \u0412\u0406\u0414\u041C\u041E\u0412\u0418\u0422\u0418 \u0423 \u0414\u041E\u0421\u0422\u0423\u041F\u0406 \u0414\u041E \u0421\u0410\u0419\u0422\u0423 \u0422\u0410 \u0419\u041E\u0413\u041E \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F (\u0412\u041A\u041B\u042E\u0427\u0410\u042E\u0427\u0418 \u0411\u041B\u041E\u041A\u0423\u0412\u0410\u041D\u041D\u042F \u041F\u0415\u0412\u041D\u0418\u0425 IP-\u0410\u0414\u0420\u0415\u0421) \u0411\u0423\u0414\u042C-\u042F\u041A\u0406\u0419 \u041E\u0421\u041E\u0411\u0406 \u0417 \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u0407 \u041F\u0420\u0418\u0427\u0418\u041D\u0418 \u0410\u0411\u041E \u0411\u0415\u0417 \u041F\u0420\u0418\u0427\u0418\u041D, \u0412\u041A\u041B\u042E\u0427\u0410\u042E\u0427\u0418, \u041D\u0415 \u041E\u0411\u041C\u0415\u0416\u0423\u042E\u0427\u0418\u0421\u042C, \u041F\u041E\u0420\u0423\u0428\u0415\u041D\u041D\u042F \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0425 \u0417\u0410\u042F\u0412, \u0413\u0410\u0420\u0410\u041D\u0422\u0406\u0419 \u0427\u0418 \u0423\u0413\u041E\u0414, \u0429\u041E \u0417\u041D\u0410\u0425\u041E\u0414\u042F\u0422\u042C\u0421\u042F \u0412 \u0426\u0418\u0425 \u0423\u041C\u041E\u0412\u0410\u0425 \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F \u0410\u0411\u041E \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u0413\u041E \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u041D\u041E\u0413\u041E \u0417\u0410\u041A\u041E\u041D\u0423 \u0427\u0418 \u041D\u041E\u0420\u041C\u0410\u0422\u0418\u0412\u041D\u041E\u0413\u041E \u041F\u0420\u0410\u0412\u0410. \u041C\u0418 \u041C\u041E\u0416\u0415\u041C\u041E \u041F\u0420\u0418\u041F\u0418\u041D\u0418\u0422\u0418 \u0412\u0410\u0428\u0415 \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F \u0410\u0411\u041E \u0423\u0427\u0410\u0421\u0422\u042C \u0423 \u0421\u0410\u0419\u0422\u0406 \u0410\u0411\u041E \u0412\u0418\u0414\u0410\u041B\u0418\u0422\u0418 \u0412\u0410\u0428 \u041E\u0411\u041B\u0406\u041A\u041E\u0412\u0418\u0419 \u0417\u0410\u041F\u0418\u0421 \u0422\u0410/\u0410\u0411\u041E \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0419 \u0412\u041C\u0406\u0421\u0422 \u0427\u0418 \u0406\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0406\u042E, \u0429\u041E \u0412\u0418 \u041E\u041F\u0423\u0411\u041B\u0406\u041A\u0423\u0412\u0410\u041B\u0418 \u0412 \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0419 \u0427\u0410\u0421, \u0411\u0415\u0417 \u041F\u041E\u041F\u0415\u0420\u0415\u0414\u0416\u0415\u041D\u041D\u042F, \u041D\u0410 \u041D\u0410\u0428 \u0420\u041E\u0417\u0421\u0423\u0414." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 644,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 656,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u042F\u043A\u0449\u043E \u043C\u0438 \u043F\u0440\u0438\u043F\u0438\u043D\u044F\u0454\u043C\u043E \u0430\u0431\u043E \u043F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u044F\u0454\u043C\u043E \u0434\u0456\u044E \u0412\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u043F\u0440\u0438\u0447\u0438\u043D\u0438, \u0412\u0430\u043C \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u044F\u0454\u0442\u044C\u0441\u044F \u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0441 \u043F\u0456\u0434 \u0441\u0432\u043E\u0457\u043C \u0456\u043C\u0435\u043D\u0435\u043C, \u0444\u0430\u043B\u044C\u0448\u0438\u0432\u0438\u043C \u0447\u0438 \u043F\u043E\u0437\u0438\u0447\u0435\u043D\u0438\u043C \u0456\u043C\u0435\u043D\u0435\u043C \u0430\u0431\u043E \u0456\u043C\u2019\u044F\u043C \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0442\u0440\u0435\u0442\u044C\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438, \u043D\u0430\u0432\u0456\u0442\u044C \u044F\u043A\u0449\u043E \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0456\u044F\u0442\u0438 \u0432\u0456\u0434 \u0456\u043C\u0435\u043D\u0456 \u0442\u0440\u0435\u0442\u044C\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 656,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 662,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041E\u043A\u0440\u0456\u043C \u043F\u0440\u0438\u043F\u0438\u043D\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u0435\u043D\u043D\u044F \u0434\u0456\u0457 \u0412\u0430\u0448\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0443, \u043C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0432\u0436\u0438\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0445 \u0441\u0443\u0434\u043E\u0432\u0438\u0445 \u0437\u0430\u0445\u043E\u0434\u0456\u0432, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438, \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C, \u0446\u0438\u0432\u0456\u043B\u044C\u043D\u0456, \u043A\u0440\u0438\u043C\u0456\u043D\u0430\u043B\u044C\u043D\u0456 \u0442\u0430 \u0441\u0443\u0434\u043E\u0432\u0456 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0438." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 662,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 667,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u041C\u041E\u0414\u0418\u0424\u0406\u041A\u0410\u0426\u0406\u0407 \u0422\u0410 \u041F\u0415\u0420\u0415\u0413\u041B\u042F\u0414" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 668,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 667,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438, \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u0432\u0438\u0434\u0430\u043B\u044F\u0442\u0438 \u0432\u043C\u0456\u0441\u0442 \u0421\u0430\u0439\u0442\u0443 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441 \u0456 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u043F\u0440\u0438\u0447\u0438\u043D\u0438 \u043D\u0430 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 \u0440\u043E\u0437\u0441\u0443\u0434 \u0431\u0435\u0437 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u043D\u044F. \u041F\u0440\u043E\u0442\u0435 \u043C\u0438 \u043D\u0435 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u043E\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0421\u0430\u0439\u0442\u0456. \u041C\u0438 \u0442\u0430\u043A\u043E\u0436 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 \u0430\u0431\u043E \u043F\u0440\u0438\u043F\u0438\u043D\u044F\u0442\u0438 \u0432\u0435\u0441\u044C \u0421\u0430\u0439\u0442 \u0430\u0431\u043E \u0439\u043E\u0433\u043E \u0447\u0430\u0441\u0442\u0438\u043D\u0443 \u0431\u0435\u0437 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u043D\u044F." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 670,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 677,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u043F\u0435\u0440\u0435\u0434 \u0412\u0430\u043C\u0438 \u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u044E \u0442\u0440\u0435\u0442\u044C\u043E\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u044E \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0457, \u0437\u043C\u0456\u043D\u0438 \u0446\u0456\u043D\u0438, \u043F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043F\u0440\u0438\u043F\u0438\u043D\u0435\u043D\u043D\u044F \u0440\u043E\u0431\u043E\u0442\u0438 \u0421\u0430\u0439\u0442\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 677,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 681,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u043C\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0432\u0430\u0442\u0438, \u0449\u043E \u0421\u0430\u0439\u0442 \u0431\u0443\u0434\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441. \u0423 \u043D\u0430\u0441 \u043C\u043E\u0436\u0443\u0442\u044C \u0432\u0438\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 \u0437 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F\u043C, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043D\u0438\u043C \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F\u043C \u0430\u0431\u043E \u0456\u043D\u0448\u0456 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0438 \u0430\u0431\u043E \u043D\u0430\u043C \u0437\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0438\u0441\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u0442\u0438 \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0435 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443, \u0449\u043E \u043F\u0440\u0438\u0437\u0432\u0435\u0434\u0435 \u0434\u043E \u043F\u0435\u0440\u0435\u0431\u043E\u0457\u0432, \u0437\u0430\u0442\u0440\u0438\u043C\u043E\u043A \u0430\u0431\u043E \u043F\u043E\u043C\u0438\u043B\u043E\u043A." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 681,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 687,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438, \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0442\u0438, \u043E\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438, \u043F\u0440\u0438\u0437\u0443\u043F\u0438\u043D\u044F\u0442\u0438, \u043F\u0440\u0438\u043F\u0438\u043D\u044F\u0442\u0438 \u0430\u0431\u043E \u0456\u043D\u0448\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442 \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441 \u0456 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u043F\u0440\u0438\u0447\u0438\u043D\u0438 \u0431\u0435\u0437 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0412\u0430\u0441. \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437 \u0442\u0438\u043C, \u0449\u043E \u043C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0436\u043E\u0434\u043D\u043E\u0457 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0432\u0442\u0440\u0430\u0442\u0438, \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u043D\u0435\u0437\u0440\u0443\u0447\u043D\u043E\u0441\u0442\u0456, \u0441\u043F\u0440\u0438\u0447\u0438\u043D\u0435\u043D\u0456 \u0432\u0430\u0448\u043E\u044E \u043D\u0435\u0437\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044E \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F \u0430\u0431\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043F\u0440\u043E\u0441\u0442\u043E\u044E \u0430\u0431\u043E \u043F\u0440\u0438\u043F\u0438\u043D\u0435\u043D\u043D\u044F \u0440\u043E\u0431\u043E\u0442\u0438 \u0421\u0430\u0439\u0442\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 687,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 695,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041D\u0456\u0449\u043E \u0432 \u0446\u0438\u0445 \u0423\u043C\u043E\u0432\u0430\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043D\u0435 \u0431\u0443\u0434\u0435 \u0442\u043B\u0443\u043C\u0430\u0447\u0438\u0442\u0438\u0441\u044F \u044F\u043A \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u0421\u0430\u0439\u0442 \u0430\u0431\u043E \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F, \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0447\u0438 \u0432\u0438\u043F\u0443\u0441\u043A\u0438 \u0443 \u0437\u0432\u2019\u044F\u0437\u043A\u0443 \u0437 \u043D\u0438\u043C." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 695,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 700,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0423\u0420\u042F\u0414\u041E\u0412\u0415 \u041F\u0420\u0410\u0412\u041E" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 701,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 700,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0426\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0412\u0430\u043C\u0438 \u0421\u0430\u0439\u0442\u0443 \u0440\u0435\u0433\u0443\u043B\u044E\u044E\u0442\u044C\u0441\u044F \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u043E\u043C \u0423\u043A\u0440\u0430\u0457\u043D\u0438, \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u043A\u043E\u043D\u0444\u043B\u0456\u043A\u0442\u0443 \u043F\u0440\u0430\u0432\u043E\u0432\u0438\u0445 \u043D\u043E\u0440\u043C." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 703,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 707,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0412\u0418\u0420\u0406\u0428\u0415\u041D\u041D\u042F \u0421\u041F\u041E\u0420\u0406\u0412" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 708,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 707,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "\u0421\u043F\u043E\u0434\u0456\u0432\u0430\u0454\u043C\u043E\u0441\u044F, \u0449\u043E \u044F\u043A\u0449\u043E \u0443 \u043D\u0430\u0441 \u043A\u043E\u043B\u0438\u0441\u044C \u0432\u0438\u043D\u0438\u043A\u043D\u0443\u0442\u044C \u0440\u043E\u0437\u0431\u0456\u0436\u043D\u043E\u0441\u0442\u0456, \u043C\u0438 \u0437\u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0438 \u0457\u0445 \u0434\u0440\u0443\u0436\u043D\u044C\u043E \u0447\u0435\u0440\u0435\u0437 \u043B\u0438\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E. \u041E\u0434\u043D\u0430\u043A, \u044F\u043A\u0449\u043E \u043C\u0438 \u043D\u0435 \u0437\u043C\u043E\u0436\u0435\u043C\u043E \u0434\u043E\u0441\u044F\u0433\u0442\u0438 \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u0440\u043E\u0437\u0443\u043C\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0443, \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F, \u0449\u043E \u0454\u0434\u0438\u043D\u0438\u043C \u043C\u0435\u0442\u043E\u0434\u043E\u043C \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0433\u043E \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0441\u043F\u043E\u0440\u0443, \u044F\u043A\u0438\u0439 \u0431\u0443\u0434\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044F, \u0454 \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u043E\u0432\u0438\u0439 \u0430\u0440\u0431\u0456\u0442\u0440\u0430\u0436 \u043F\u0435\u0440\u0435\u0434 \u043E\u0434\u043D\u0438\u043C \u0430\u0440\u0431\u0456\u0442\u0440\u043E\u043C, \u043E\u0431\u0440\u0430\u043D\u0438\u043C \u0441\u043F\u0456\u043B\u044C\u043D\u043E, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0420\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442\u0443 \u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u0457 \u0430\u0440\u0431\u0456\u0442\u0440\u0430\u0436\u043D\u043E\u0457 \u0430\u0441\u043E\u0446\u0456\u0430\u0446\u0456\u0457. \u041F\u0435\u0440\u0448 \u043D\u0456\u0436 \u0437\u0432\u0435\u0440\u043D\u0443\u0442\u0438\u0441\u044F \u0434\u043E \u0430\u0440\u0431\u0456\u0442\u0440\u0430\u0436\u0443, \u0412\u0438 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u043D\u0430\u043C \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0439 \u043B\u0438\u0441\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0443",
      import.meta.env.VITE_MY_WORK_EMAIL
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 710,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 720,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0456 \u0432\u043A\u0430\u0437\u0430\u0442\u0438 \u0443\u0441\u0456 \u0412\u0430\u0448\u0456 \u043F\u0440\u0438\u0447\u0438\u043D\u0438 \u043D\u0435\u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F \u0412\u0430\u0448\u0438\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u043C, \u043F\u043E\u0441\u043B\u0443\u0433\u043E\u044E. \u0412\u0438 \u0440\u043E\u0437\u0443\u043C\u0456\u0454\u0442\u0435 \u0442\u0430 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F, \u0449\u043E \u0454\u0434\u0438\u043D\u0438\u043C \u0437\u0430\u0441\u043E\u0431\u043E\u043C \u043F\u0440\u0430\u0432\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u0445\u0438\u0441\u0442\u0443, \u044F\u043A\u0438\u0439 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043D\u0430\u0434\u0430\u043D\u0438\u0439 \u0412\u0430\u043C \u0447\u0435\u0440\u0435\u0437 \u0430\u0440\u0431\u0456\u0442\u0440\u0430\u0436, \u0454 \u043F\u043E\u0432\u043D\u0435 \u0432\u0456\u0434\u0448\u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u0412\u0430\u0448\u043E\u0433\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0443, \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u043E\u0433\u043E \u043D\u0430 \u043C\u043E\u043C\u0435\u043D\u0442 \u043E\u043F\u043B\u0430\u0442\u0438 \u043D\u0430\u0448\u043E\u0433\u043E \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0443 \u0442\u0430/\u0430\u0431\u043E \u041F\u043E\u0441\u043B\u0443\u0433\u0438. \u0412\u0430\u043C \u043D\u0435 \u043C\u043E\u0436\u0443\u0442\u044C \u0431\u0443\u0442\u0438 \u043D\u0430\u0434\u0430\u043D\u0456 \u0436\u043E\u0434\u043D\u0456 \u0456\u043D\u0448\u0456 \u0434\u0456\u0457 \u0447\u0438 \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0456 \u0432\u0438\u043D\u0430\u0433\u043E\u0440\u043E\u0434\u0438 \u0437\u0430 \u043D\u0435\u043F\u0440\u044F\u043C\u0456 \u0437\u0431\u0438\u0442\u043A\u0438 \u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0456\u043D\u0448\u0456 \u0432\u0438\u0434\u0438 \u0437\u0431\u0438\u0442\u043A\u0456\u0432. \u041C\u0438 \u043E\u0431\u043E\u0454 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u043C\u043E\u0441\u044F \u0437 \u0442\u0438\u043C, \u0449\u043E \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0430\u0440\u0431\u0456\u0442\u0440\u0430 \u0454 \u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0438\u043C \u0456 \u043E\u0431\u043E\u0432\u2019\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0456 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u043E \u044F\u043A \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u0441\u0443\u0434\u0456 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E\u0457 \u044E\u0440\u0438\u0441\u0434\u0438\u043A\u0446\u0456\u0457." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 720,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 730,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u0442\u0430\u043A\u043E\u0436 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F, \u0449\u043E \u044F\u043A\u0449\u043E \u0430\u0440\u0431\u0456\u0442\u0440\u0430\u0436 \u0432\u0456\u0434\u0431\u0443\u0434\u0435\u0442\u044C\u0441\u044F, \u0432\u0456\u043D \u0431\u0443\u0434\u0435 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u0443 \u041A\u0438\u0454\u0432\u0456, \u0423\u043A\u0440\u0430\u0457\u043D\u0430, \u0456 \u0441\u0442\u043E\u0440\u043E\u043D\u0430, \u044F\u043A\u0430 \u043F\u0435\u0440\u0435\u043C\u043E\u0433\u043B\u0430, \u043C\u0430\u0442\u0438\u043C\u0435 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0432\u0441\u0456 \u0440\u043E\u0437\u0443\u043C\u043D\u0456 \u0433\u043E\u043D\u043E\u0440\u0430\u0440\u0438 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0456\u0432 \u0456 \u0432\u0441\u0456 \u0432\u0438\u0442\u0440\u0430\u0442\u0438, \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0456 \u0434\u043B\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0430\u0440\u0431\u0456\u0442\u0440\u0430." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 730,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 735,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0423 \u0440\u0430\u0437\u0456 \u0441\u0443\u043F\u0435\u0440\u0435\u0447\u043A\u0438 \u043C\u0456\u0436 \u043D\u0430\u043C\u0438 \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u043D\u0435 \u0431\u0440\u0430\u0442\u0438 \u0443\u0447\u0430\u0441\u0442\u0456 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u0446\u0456 \u0447\u0438 \u0441\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u0456, \u0437\u043E\u043A\u0440\u0435\u043C\u0430 \u0432 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0438\u0445 \u043C\u0435\u0440\u0435\u0436\u0430\u0445, \u0441\u043F\u0440\u044F\u043C\u043E\u0432\u0430\u043D\u043E\u043C\u0443 \u043D\u0430 \u043F\u0440\u0438\u043D\u0438\u0436\u0435\u043D\u043D\u044F \u043D\u0430\u0441, \u043D\u0430\u0448\u043E\u0457 \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043D\u0430\u0448\u0438\u0445 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0456/\u0430\u0431\u043E \u041F\u043E\u0441\u043B\u0443\u0433. \u0417\u0432\u0438\u0447\u0430\u0439\u043D\u043E, \u044F\u043A\u0449\u043E \u0446\u044C\u043E\u0433\u043E \u0432\u0438\u043C\u0430\u0433\u0430\u0454 \u0437\u0430\u043A\u043E\u043D \u0430\u0431\u043E \u0430\u0440\u0431\u0456\u0442\u0440\u0430\u0436, \u0412\u0430\u043C \u043D\u0435 \u0437\u0430\u0431\u043E\u0440\u043E\u043D\u0435\u043D\u043E \u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0441\u0432\u043E\u0457\u043C\u0438 \u0434\u0443\u043C\u043A\u0430\u043C\u0438 \u0442\u0430 \u0434\u0443\u043C\u043A\u0430\u043C\u0438 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0441\u0443\u0434\u043E\u0432\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 735,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 742,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u042F\u043A\u0449\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0443\u043C\u043E\u0432\u0438 \u0446\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u043F\u0440\u0438\u0447\u0438\u043D\u0438 \u0442\u043B\u0443\u043C\u0430\u0447\u0430\u0442\u044C\u0441\u044F \u044F\u043A \u043D\u0435\u0434\u0456\u0439\u0441\u043D\u0456 \u0430\u0431\u043E \u0442\u0430\u043A\u0456, \u0449\u043E \u043D\u0435 \u043C\u0430\u044E\u0442\u044C \u0437\u0430\u043A\u043E\u043D\u043D\u043E\u0457 \u0441\u0438\u043B\u0438, \u0446\u0435 \u043D\u0435 \u0432\u043F\u043B\u0438\u0432\u0430\u0454 \u043D\u0430 \u0434\u0456\u0439\u0441\u043D\u0456\u0441\u0442\u044C \u0430\u0431\u043E \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0456\u043D\u0448\u0438\u0445 \u0443\u043C\u043E\u0432, \u044F\u043A\u0438\u043C \u043D\u0430\u0434\u0430\u0454\u0442\u044C\u0441\u044F \u043F\u043E\u0432\u043D\u0430 \u0441\u0438\u043B\u0430." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 742,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 747,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u041F\u041E\u041C\u0418\u041B\u041A\u0418 \u0422\u0410 \u0423\u041F\u0423\u0429\u0415\u041D\u041D\u042F" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 748,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 747,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u043D\u0435 \u043D\u0430\u0434\u0430\u0454\u043C\u043E \u0436\u043E\u0434\u043D\u0438\u0445 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u0439 \u0449\u043E\u0434\u043E \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0456, \u0441\u0432\u043E\u0454\u0447\u0430\u0441\u043D\u043E\u0441\u0442\u0456, \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0456, \u043F\u043E\u0432\u043D\u043E\u0442\u0438 \u0447\u0438 \u043F\u0440\u0438\u0434\u0430\u0442\u043D\u043E\u0441\u0442\u0456 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0412\u043C\u0456\u0441\u0442. \u0420\u043E\u0431\u0438\u0442\u044C\u0441\u044F \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435, \u0449\u043E\u0431 \u043D\u0430\u0434\u0430\u0442\u0438 \u0412\u0430\u043C \u043D\u0430\u0439\u0442\u043E\u0447\u043D\u0456\u0448\u0443 \u0442\u0430 \u043D\u0430\u0439\u043D\u043E\u0432\u0456\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0430\u043B\u0435 \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043D\u0430\u0443\u043A\u043E\u0432\u0438\u0445 \u0434\u043E\u0441\u043B\u0456\u0434\u0436\u0435\u043D\u044C \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u0437\u0431\u0456\u043B\u044C\u0448\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043E\u0441\u0438\u0442\u044C \u0448\u0432\u0438\u0434\u043A\u043E, \u043C\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u043C\u043E \u043D\u0435\u0441\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0430 \u0442\u043E\u0447\u043D\u0456\u0441\u0442\u044C \u0412\u043C\u0456\u0441\u0442\u0443. \u0412\u0438 \u0432\u0438\u0437\u043D\u0430\u0454\u0442\u0435, \u0449\u043E \u0442\u0430\u043A\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043C\u043E\u0436\u0435 \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0435\u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0456 \u0447\u0438 \u043F\u043E\u043C\u0438\u043B\u043A\u0438, \u0456 \u043C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0442\u0430\u043A\u0456 \u043D\u0435\u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0456 \u0447\u0438 \u043F\u043E\u043C\u0438\u043B\u043A\u0438 \u0432 \u043F\u043E\u0432\u043D\u043E\u043C\u0443 \u043E\u0431\u0441\u044F\u0437\u0456, \u0434\u043E\u0437\u0432\u043E\u043B\u0435\u043D\u043E\u043C\u0443 \u0437\u0430\u043A\u043E\u043D\u043E\u043C." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 750,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 760,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0414\u0418\u0421\u041A\u041B\u0415\u0419\u041C\u0415\u0420" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 761,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 760,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0421\u0410\u0419\u0422 \u041D\u0410\u0414\u0410\u0404\u0422\u042C\u0421\u042F \u041D\u0410 \u041E\u0421\u041D\u041E\u0412\u0406 \xAB\u042F\u041A \u0404 \u0422\u0410 \u042F\u041A \u0414\u041E\u0421\u0422\u0423\u041F\u041D\u0418\u0419\xBB. \u0412\u0418 \u041F\u041E\u0413\u041E\u0414\u0416\u0423\u0404\u0422\u0415\u0421\u042F, \u0429\u041E \u0412\u0410\u0428\u0415 \u041A\u041E\u0420\u0418\u0421\u0422\u0423\u0412\u0410\u041D\u041D\u042F \u0421\u0410\u0419\u0422\u041E\u041C \u0422\u0410 \u041D\u0410\u0428\u0418\u041C\u0418 \u041F\u041E\u0421\u041B\u0423\u0413\u0410\u041C\u0418 \u0417\u0414\u0406\u0419\u0421\u041D\u042E\u0404\u0422\u042C\u0421\u042F \u041B\u0418\u0428\u0415 \u041D\u0410 \u0412\u0410\u0428 \u0412\u041B\u0410\u0421\u041D\u0418\u0419 \u0420\u0418\u0417\u0418\u041A. \u0423 \u041F\u041E\u0412\u041D\u041E\u041C\u0423 \u041E\u0411\u0421\u042F\u0417\u0406, \u0414\u041E\u0417\u0412\u041E\u041B\u0415\u041D\u041E\u041C\u0423 \u0417\u0410\u041A\u041E\u041D\u041E\u041C, \u041C\u0418 \u0412\u0406\u0414\u041C\u041E\u0412\u041B\u042F\u0404\u041C\u041E\u0421\u042F \u0412\u0406\u0414 \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0425 \u0413\u0410\u0420\u0410\u041D\u0422\u0406\u0419, \u042F\u0412\u041D\u0418\u0425 \u0410\u0411\u041E \u041D\u0415\u041F\u0420\u042F\u041C\u0418\u0425, \u0429\u041E\u0414\u041E \u0421\u0410\u0419\u0422\u0423 \u0422\u0410 \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F \u0419\u041E\u0413\u041E \u0412\u0410\u041C\u0418, \u0412\u041A\u041B\u042E\u0427\u0410\u042E\u0427\u0418, \u0410\u041B\u0415 \u041D\u0415 \u041E\u0411\u041C\u0415\u0416\u0423\u042E\u0427\u0418\u0421\u042C, \u041D\u0415\u041F\u0420\u042F\u041C\u0406 \u0413\u0410\u0420\u0410\u041D\u0422\u0406\u0407 \u041F\u0420\u0418\u0414\u0410\u0422\u041D\u041E\u0421\u0422\u0406 \u0414\u041B\u042F \u041F\u0420\u041E\u0414\u0410\u0416\u0423, \u041F\u0420\u0418\u0414\u0410\u0422\u041D\u041E\u0421\u0422\u0406 \u0414\u041B\u042F \u041A\u041E\u041D\u041A\u0420\u0415\u0422\u041D\u041E\u0407 \u041C\u0415\u0422\u0418 \u0422\u0410 \u041D\u0415\u041F\u041E\u0420\u0423\u0428\u0415\u041D\u041D\u042F \u041F\u0420\u0410\u0412. \u041C\u0418 \u041D\u0415 \u0414\u0410\u0404\u041C\u041E \u0416\u041E\u0414\u041D\u0418\u0425 \u0413\u0410\u0420\u0410\u041D\u0422\u0406\u0419 \u0410\u0411\u041E \u0417\u0410\u042F\u0412 \u0429\u041E\u0414\u041E \u0422\u041E\u0427\u041D\u041E\u0421\u0422\u0406 \u0410\u0411\u041E \u041F\u041E\u0412\u041D\u041E\u0422\u0418 \u0412\u041C\u0406\u0421\u0422\u0423 \u0421\u0410\u0419\u0422\u0423 \u0410\u0411\u041E \u0412\u041C\u0406\u0421\u0422\u0423 \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0425 \u0412\u0415\u0411-\u0421\u0410\u0419\u0422\u0406\u0412, \u0429\u041E \u041F\u041E\u0412\u2019\u042F\u0417\u0410\u041D\u0406 \u0417 \u0426\u0418\u041C \u0421\u0410\u0419\u0422\u041E\u041C, \u0406 \u041C\u0418 \u041D\u0415 \u041D\u0415\u0421\u0415\u041C\u041E \u0416\u041E\u0414\u041D\u041E\u0407 \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u041E\u0421\u0422\u0406 \u0417\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 (1) \u041F\u041E\u041C\u0418\u041B\u041A\u0418 \u0410\u0411\u041E \u041D\u0415\u0422\u041E\u0427\u041D\u0406\u0421\u0422\u042C \u0412\u041C\u0406\u0421\u0422\u0423 \u0422\u0410 \u041C\u0410\u0422\u0415\u0420\u0406\u0410\u041B\u0406\u0412 2) \u0422\u0420\u0410\u0412\u041C\u0418 \u0410\u0411\u041E \u041F\u041E\u0428\u041A\u041E\u0414\u0416\u0415\u041D\u041D\u042F \u041C\u0410\u0419\u041D\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u0413\u041E \u0425\u0410\u0420\u0410\u041A\u0422\u0415\u0420\u0423, \u0429\u041E \u0412\u0406\u0414\u0411\u0423\u041B\u0418\u0421\u042F \u0412 \u0420\u0415\u0417\u0423\u041B\u042C\u0422\u0410\u0422\u0406 \u0412\u0410\u0428\u041E\u0413\u041E \u0414\u041E\u0421\u0422\u0423\u041F\u0423 \u0414\u041E \u0421\u0410\u0419\u0422\u0423 \u0422\u0410 \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F \u041D\u0418\u041C, (3) \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0419 \u041D\u0415\u0421\u0410\u041D\u041A\u0426\u0406\u041E\u041D\u041E\u0412\u0410\u041D\u0418\u0419 \u0414\u041E\u0421\u0422\u0423\u041F \u0410\u0411\u041E \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F \u041D\u0410\u0428\u0418\u0425 \u0411\u0415\u0417\u041F\u0415\u0427\u041D\u0418\u0425 \u0421\u0415\u0420\u0412\u0415\u0420\u0406\u0412 \u0422\u0410/\u0410\u0411\u041E \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u0407 \u041E\u0421\u041E\u0411\u0418\u0421\u0422\u041E\u0407 \u0406\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0406\u0407 \u0422\u0410/\u0410\u0411\u041E \u0424\u0406\u041D\u0410\u041D\u0421\u041E\u0412\u041E\u0407 \u0406\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0406\u0407 \u0429\u041E \u0417\u0411\u0415\u0420\u0406\u0413\u0410\u0404\u0422\u042C\u0421\u042F \u0412 \u0426\u0418\u0425 \u0421\u0415\u0420\u0412\u0415\u0420\u0410\u0425, (4) \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u041F\u0415\u0420\u0415\u0420\u0418\u0412\u0410\u041D\u041D\u042F \u0410\u0411\u041E \u041F\u0420\u0418\u041F\u0418\u041D\u0415\u041D\u041D\u042F \u041F\u0415\u0420\u0415\u0414\u0410\u0427\u0406 \u0406\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0406\u0407 \u041D\u0410 \u0421\u0410\u0419\u0422 \u0410\u0411\u041E \u0417 \u0421\u0410\u0419\u0422\u0423, (5) \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u041F\u041E\u041C\u0418\u041B\u041A\u0418, \u0412\u0406\u0420\u0423\u0421\u0418, \u0422\u0420\u041E\u042F\u041D\u0418 \u0410\u0411\u041E \u0429\u041E\u0421\u042C \u0421\u0425\u041E\u0416\u0415, \u0429\u041E \u041C\u041E\u0416\u0415 \u0411\u0423\u0422\u0418 \u041F\u0415\u0420\u0415\u0414\u0410\u041D\u041E \u041D\u0410 \u0421\u0410\u0419\u0422 \u0410\u0411\u041E \u0427\u0415\u0420\u0415\u0417 \u0421\u0410\u0419\u0422 \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u042E \u0422\u0420\u0415\u0422\u042C\u041E\u042E \u0421\u0422\u041E\u0420\u041E\u041D\u041E\u042E \u0422\u0410/\u0410\u0411\u041E ( 6) \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u041F\u041E\u041C\u0418\u041B\u041A\u0418 \u0427\u0418 \u0423\u041F\u0423\u0429\u0415\u041D\u041D\u042F \u0423 \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u041C\u0423 \u0412\u041C\u0406\u0421\u0422\u0406 \u0422\u0410 \u041C\u0410\u0422\u0415\u0420\u0406\u0410\u041B\u0410\u0425 \u0410\u0411\u041E \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u0412\u0422\u0420\u0410\u0422\u0418 \u0427\u0418 \u041F\u041E\u0428\u041A\u041E\u0414\u0416\u0415\u041D\u041D\u042F \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u0413\u041E \u0412\u0418\u0414\u0423, \u0421\u0422\u0412\u041E\u0420\u0415\u041D\u041E\u0413\u041E \u0412 \u0420\u0415\u0417\u0423\u041B\u042C\u0422\u0410\u0422\u0406 \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u0413\u041E \u0412\u041C\u0406\u0421\u0422\u0423, \u041E\u041F\u0423\u0411\u041B\u0406\u041A\u041E\u0412\u0410\u041D\u041E\u0413\u041E, \u041F\u0415\u0420\u0415\u0414\u0410\u041D\u041D\u041E\u0413\u041E \u0410\u0411\u041E \u0406\u041D\u0428\u0418\u041C \u0421\u041F\u041E\u0421\u041E\u0411\u041E\u041C \u0417\u0420\u041E\u0411\u041B\u0415\u041D\u041E\u0413\u041E \u0414\u041E\u0421\u0422\u0423\u041F\u041D\u0418\u041C \u0427\u0415\u0420\u0415\u0417 \u0421\u0410\u0419\u0422. \u041C\u0418 \u041D\u0415 \u0412\u0418\u041F\u0420\u0410\u0412\u0414\u041E\u0412\u0423\u0404\u041C\u041E, \u041D\u0415 \u0421\u0425\u0412\u0410\u041B\u042E\u0404\u041C\u041E, \u041D\u0415 \u0413\u0410\u0420\u0410\u041D\u0422\u0423\u0404\u041C\u041E \u0422\u0410 \u041D\u0415 \u041D\u0415\u0421\u0415\u041C\u041E \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u041E\u0421\u0422\u0406 \u0417\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0419 \u041F\u0420\u041E\u0414\u0423\u041A\u0422 \u0410\u0411\u041E \u041F\u041E\u0421\u041B\u0423\u0413\u0423, \u0429\u041E \u0420\u0415\u041A\u041B\u0410\u041C\u0423\u0404\u0422\u042C\u0421\u042F \u0410\u0411\u041E \u041F\u0420\u041E\u041F\u041E\u041D\u0423\u0404\u0422\u042C\u0421\u042F \u0422\u0420\u0415\u0422\u042C\u041E\u042E \u0421\u0422\u041E\u0420\u041E\u041D\u041E\u042E \u041D\u0410 \u041D\u0410\u0428\u041E\u041C\u0423 \u0421\u0410\u0419\u0422\u0406, \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u041C\u0423 \u0413\u0406\u041F\u0415\u0420\u041F\u041E\u0421\u0418\u041B\u0410\u041D\u041D\u042E \u041D\u0410 \u0406\u041D\u0428\u0418\u0419 \u0421\u0410\u0419\u0422 \u0410\u0411\u041E \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0419 \u0406\u041D\u0428\u0418\u0419 \u0412\u0415\u0411-\u0421\u0410\u0419\u0422 \u0410\u0411\u041E \u041C\u041E\u0411\u0406\u041B\u042C\u041D\u0418\u0419 \u0414\u041E\u0414\u0410\u0422\u041E\u041A, \u042F\u041A\u0418\u0419 \u0420\u041E\u0417\u041C\u0406\u0429\u0423\u0404\u0422\u042C\u0421\u042F \u041D\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u041C\u0423 \u0411\u0410\u041D\u0415\u0420\u0406 \u0410\u0411\u041E \u0406\u041D\u0428\u0406\u0419 \u0420\u0415\u041A\u041B\u0410\u041C\u0406 \u0406 \u041C\u0418 \u041D\u0415 \u0411\u0423\u0414\u0415\u041C\u041E \u0421\u0422\u041E\u0420\u041E\u041D\u041E\u042E \u0410\u0411\u041E \u0412 \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0419 \u0421\u041F\u041E\u0421\u0406\u0411 \u041D\u0415\u0421\u0422\u0418 \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u0406\u0421\u0422\u042C \u0417\u0410 \u041C\u041E\u041D\u0406\u0422\u041E\u0420\u0418\u041D\u0413 \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0425 \u041E\u041F\u0415\u0420\u0410\u0426\u0406\u0419 \u041C\u0406\u0416 \u0412\u0410\u041C\u0418 \u0422\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u041C\u0418 \u0421\u0422\u041E\u0420\u041E\u041D\u041D\u0406\u041C\u0418 \u041F\u041E\u0421\u0422\u0410\u0427\u0410\u041B\u042C\u041D\u0418\u041A\u0410\u041C\u0418 \u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0406\u0412 \u0410\u0411\u041E \u041F\u041E\u0421\u041B\u0423\u0413." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 763,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 792,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0426\u0415\u0419 \u0412\u041C\u0406\u0421\u0422 \u041F\u0420\u0418\u0417\u041D\u0410\u0427\u0415\u041D\u0418\u0419 \u041B\u0418\u0428\u0415 \u0414\u041B\u042F \u0406\u041D\u0424\u041E\u0420\u041C\u0410\u0426\u0406\u0419\u041D\u0418\u0425 \u0422\u0410 \u041D\u0410\u0412\u0427\u0410\u041B\u042C\u041D\u0418\u0425 \u0426\u0406\u041B\u0415\u0419 \u0406 \u041D\u0415 \u041F\u041E\u0412\u0418\u041D\u0415\u041D \u0421\u041F\u0420\u0418\u0419\u041C\u0410\u0422\u0418\u0421\u042F \u042F\u041A \u041C\u0415\u0414\u0418\u0427\u041D\u0410 \u041F\u041E\u0420\u0410\u0414\u0410, \u041F\u041E\u0420\u0410\u0414\u0410 \u0429\u041E\u0414\u041E \u0417\u0414\u041E\u0420\u041E\u0412\u2019\u042F, \u041F\u0421\u0418\u0425\u041E\u041B\u041E\u0413\u0406\u0427\u041D\u0410, \u042E\u0420\u0418\u0414\u0418\u0427\u041D\u0410 \u0422\u0410/\u0410\u0411\u041E \u0424\u0406\u041D\u0410\u041D\u0421\u041E\u0412\u0410 \u041F\u041E\u0420\u0410\u0414\u0410. \u041C\u0418 \u041D\u0415 \u041D\u0410\u0414\u0410\u0404\u041C\u041E \u041C\u0415\u0414\u0418\u0427\u041D\u0418\u0425 \u041F\u041E\u0420\u0410\u0414 \u0410\u0411\u041E \u041F\u041E\u0421\u041B\u0423\u0413 \u041F\u041E \u0417\u0414\u041E\u0420\u041E\u0412\u2019\u042E \u0410\u0411\u041E \u0425\u0410\u0420\u0427\u0423\u0412\u0410\u041D\u041D\u042E \u0406 \u041D\u0415 \u041D\u0410\u041C\u0410\u0413\u0410\u0404\u041C\u041E\u0421\u042F \u041F\u0420\u041E\u0412\u041E\u0414\u0418\u0422\u0418 \u0414\u0406\u0410\u0413\u041D\u041E\u0421\u0422\u0418\u041A\u0423, \u041B\u0406\u041A\u0423\u0412\u0410\u041D\u041D\u042F, \u041F\u0420\u041E\u0424\u0406\u041B\u0410\u041A\u0422\u0418\u041A\u0423 \u0422\u0410/\u0410\u0411\u041E \u0412\u0418\u041B\u0406\u041A\u041E\u0412\u0423\u0412\u0410\u041D\u041D\u042F \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u041C \u0421\u041F\u041E\u0421\u041E\u0411\u041E\u041C \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0425 \u041F\u0421\u0418\u0425\u0406\u0427\u041D\u0418\u0425, \u0415\u041C\u041E\u0426\u0406\u0419\u041D\u0418\u0425, \u0424\u0406\u0417\u0418\u0427\u041D\u0418\u0425 \u041F\u0420\u041E\u0411\u041B\u0415\u041C, \u0417\u0410\u0425\u0412\u041E\u0420\u042E\u0412\u0410\u041D\u042C \u0410\u0411\u041E \u0421\u0422\u0410\u041D\u0406\u0412. \u0412 \u041F\u041E\u0412\u041D\u041E\u041C\u0423 \u041E\u0411\u0421\u042F\u0417\u0406, \u041D\u0410\u0421\u041A\u0406\u041B\u042C\u041A\u0418 \u0426\u0415 \u0414\u041E\u0417\u0412\u041E\u041B\u0415\u041D\u041E \u0417\u0410\u041A\u041E\u041D\u041E\u041C, \u041C\u0418 \u041F\u0420\u042F\u041C\u041E \u0412\u0418\u041A\u041B\u042E\u0427\u0410\u0404\u041C\u041E \u0411\u0423\u0414\u042C-\u042F\u041A\u0423 \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u0406\u0421\u0422\u042C \u0417\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u041F\u0420\u042F\u041C\u0406, \u041D\u0415\u041F\u0420\u042F\u041C\u0406 \u0410\u0411\u041E \u041F\u041E\u0411\u0406\u0427\u041D\u0406 \u0417\u0411\u0418\u0422\u041A\u0418 \u0410\u0411\u041E \u0428\u041A\u041E\u0414\u0423, \u041F\u041E\u041D\u0415\u0421\u0415\u041D\u0406 \u0412\u0410\u041C\u0418 \u0410\u0411\u041E \u0406\u041D\u0428\u0418\u041C\u0418 \u041E\u0421\u041E\u0411\u0410\u041C\u0418 \u0423 \u0417\u0412\u2019\u042F\u0417\u041A\u0423 \u0417 \u0421\u0410\u0419\u0422\u041E\u041C \u0422\u0410/\u0410\u0411\u041E \u0412\u041C\u0406\u0421\u0422\u041E\u041C, \u0412\u041A\u041B\u042E\u0427\u0410\u042E\u0427\u0418, \u0410\u041B\u0415 \u041D\u0415 \u041E\u0411\u041C\u0415\u0416\u0423\u042E\u0427\u0418\u0421\u042C, \u0411\u0423\u0414\u042C-\u042F\u041A\u0423 \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u0406\u0421\u0422\u042C \u0417\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u0423 \u0428\u041A\u041E\u0414\u0423, \u0412\u0422\u0420\u0410\u0422\u0418, \u041F\u041E\u0428\u041A\u041E\u0414\u0416\u0415\u041D\u041D\u042F, \u0412\u0422\u0420\u0410\u0427\u0415\u041D\u0406 \u041F\u0420\u0418\u0411\u0423\u0422\u041A\u0418, \u0424\u0406\u0417\u0418\u0427\u041D\u0406, \u041F\u0421\u0418\u0425\u0406\u0427\u041D\u0406, \u0415\u041C\u041E\u0426\u0406\u0419\u041D\u0406, \u0414\u0423\u0425\u041E\u0412\u041D\u0406 \u0422\u0420\u0410\u0412\u041C\u0418, \u0428\u041A\u041E\u0414\u0423, \u0412\u0422\u0420\u0410\u0422\u0423 \u0414\u041E\u0425\u041E\u0414\u0423, \u0411\u0406\u0417\u041D\u0415\u0421\u0423 \u0422\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u0406\u041D\u0428\u0406 \u0412\u0422\u0420\u0410\u0422\u0418 \u0410\u0411\u041E \u0428\u041A\u041E\u0414\u0418 \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u0413\u041E \u0412\u0418\u0414\u0423, \u0412\u0418\u041A\u041B\u0418\u041A\u0410\u041D\u0406 \u041D\u0415\u0414\u0411\u0410\u041B\u0406\u0421\u0422\u042E, \u041F\u041E\u0420\u0423\u0428\u0415\u041D\u041D\u042F\u041C \u041A\u041E\u041D\u0422\u0420\u0410\u041A\u0422\u0423 \u0410\u0411\u041E \u0406\u041D\u0428\u0418\u041C \u0427\u0418\u041D\u041E\u041C, \u041D\u0410\u0412\u0406\u0422\u042C \u042F\u041A\u0429\u041E \u041F\u0415\u0420\u0415\u0414\u0411\u0410\u0427\u0415\u041D\u041E." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 792,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 808,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0421\u0406 \u0412\u0410\u0428\u0406 \u0414\u0406\u0407 \u041F\u041E\u0412\u0418\u041D\u041D\u0406 \u041A\u0415\u0420\u0423\u0412\u0410\u0422\u0418\u0421\u042F \u0412\u0410\u0428\u0418\u041C \u0420\u041E\u0417\u0421\u0423\u0414\u041E\u041C \u0406 \u0411\u0423\u0422\u0418 \u041E\u0411\u0415\u0420\u0415\u0416\u041D\u0418\u041C\u0418 \u0414\u0415 \u0426\u0415 \u041C\u041E\u0416\u041B\u0418\u0412\u041E, \u0422\u0410\u041A \u0421\u0410\u041C\u041E \u042F\u041A \u0406 \u041F\u0420\u0418\u0414\u0411\u0410\u041D\u041D\u042F \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u0413\u041E \u041F\u0420\u041E\u0414\u0423\u041A\u0422\u0423 \u0427\u0418 \u0421\u0415\u0420\u0412\u0406\u0421\u0423 \u0427\u0415\u0420\u0415\u0417 \u0411\u0423\u0414\u042C-\u042F\u041A\u0418\u0419 \u041C\u0415\u0422\u041E\u0414 \u041F\u041E\u041A\u0423\u041F\u041A\u0418." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 808,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 813,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0418 \u041D\u0410\u041C\u0410\u0413\u0410\u0404\u041C\u041E\u0421\u042F \u0417\u0410\u0411\u0415\u0417\u041F\u0415\u0427\u0418\u0422\u0418 \u0414\u041E\u0421\u0422\u0423\u041F\u041D\u0406\u0421\u0422\u042C \u0422\u0410 \u0411\u0415\u0417\u041F\u0415\u0420\u0415\u0411\u0406\u0419\u041D\u0418\u0419 \u0414\u041E\u0421\u0422\u0423\u041F \u0414\u041E \u0421\u0410\u0419\u0422\u0423 \u0422\u0410 \u041A\u041E\u041D\u0422\u0415\u041D\u0422\u0423. \u041E\u0414\u041D\u0410\u041A \u041C\u0418 \u041D\u0415 \u041C\u041E\u0416\u0415\u041C\u041E \u0413\u0410\u0420\u0410\u041D\u0422\u0423\u0412\u0410\u0422\u0418, \u0429\u041E \u0412\u0410\u0428 \u0414\u041E\u0421\u0422\u0423\u041F \u041D\u0415 \u0411\u0423\u0414\u0415 \u041F\u0420\u0418\u0417\u0423\u041F\u0418\u041D\u0415\u041D\u041E \u0410\u0411\u041E \u041E\u0411\u041C\u0415\u0416\u0415\u041D\u041E \u0427\u0410\u0421 \u0412\u0406\u0414 \u0427\u0410\u0421\u0423, \u0417\u041E\u041A\u0420\u0415\u041C\u0410 \u0414\u041B\u042F \u041F\u0420\u041E\u0412\u0415\u0414\u0415\u041D\u041D\u042F \u0422\u0415\u0425\u041D\u0406\u0427\u041D\u041E\u0413\u041E \u041E\u0411\u0421\u041B\u0423\u0413\u041E\u0412\u0423\u0412\u0410\u041D\u041D\u042F \u0410\u0411\u041E \u041E\u041D\u041E\u0412\u041B\u0415\u041D\u042C, \u0425\u041E\u0427\u0410 \u041C\u0418 \u0411\u0423\u0414\u0415\u041C\u041E \u041D\u0410\u041C\u0410\u0413\u0410\u0422\u0418\u0421\u042F \u041E\u0411\u041C\u0415\u0416\u0418\u0422\u0418 \u0427\u0410\u0421\u0422\u041E\u0422\u0423 \u0422\u0410 \u0422\u0420\u0418\u0412\u0410\u041B\u0406\u0421\u0422\u042C \u041F\u0420\u0418\u0417\u0423\u041F\u0418\u041D\u0415\u041D\u041D\u042F \u0410\u0411\u041E \u041E\u0411\u041C\u0415\u0416\u0415\u041D\u042C. \u0412 \u041F\u041E\u0412\u041D\u041E\u041C\u0423 \u041E\u0411\u0421\u042F\u0417\u0406, \u041D\u0410\u0421\u041A\u0406\u041B\u042C\u041A\u0418 \u0426\u0415 \u0414\u041E\u0417\u0412\u041E\u041B\u0415\u041D\u041E \u0417\u0410\u041A\u041E\u041D\u041E\u041C, \u041C\u0418 \u041D\u0415 \u041D\u0415\u0421\u0415\u041C\u041E \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u041E\u0421\u0422\u0406 \u041F\u0415\u0420\u0415\u0414 \u0412\u0410\u041C\u0418 \u0417\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u0417\u0411\u0418\u0422\u041A\u0418 \u0410\u0411\u041E \u041F\u041E\u0412\u0415\u0420\u041D\u0415\u041D\u041D\u042F \u041A\u041E\u0428\u0422\u0406\u0412, \u042F\u041A\u0429\u041E \u0421\u0410\u0419\u0422 \u0422\u0410/\u0410\u0411\u041E \u0412\u041C\u0406\u0421\u0422, \u041F\u041E\u0412\u041D\u0406\u0421\u0422\u042E \u0410\u0411\u041E \u0427\u0410\u0421\u0422\u041A\u041E\u0412\u041E, \u0421\u0422\u0410\u041D\u0423\u0422\u042C \u041D\u0415\u0414\u041E\u0421\u0422\u0423\u041F\u041D\u0418\u041C\u0418 \u0410\u0411\u041E \u0414\u041E\u0421\u0422\u0423\u041F \u0414\u041E \u041D\u0418\u0425 \u0421\u0422\u0410\u041D\u0415 \u041F\u041E\u0412\u0406\u041B\u042C\u041D\u0418\u041C \u0427\u0415\u0420\u0415\u0417 \u0411\u0423\u0414\u042C-\u042F\u041A\u0423 \u041F\u0420\u0418\u0427\u0418\u041D\u0423, \u0412\u041A\u041B\u042E\u0427\u0410\u042E\u0427\u0418 \u0410\u041B\u0415 \u041D\u0415 \u041E\u0411\u041C\u0415\u0416\u0423\u042E\u0427\u0418\u0421\u042C \u041E\u041D\u041E\u0412\u041B\u0415\u041D\u041D\u042F\u041C\u0418, \u041E\u0411\u0421\u042F\u0413\u041E\u041C \u0406\u041D\u0422\u0415\u0420\u041D\u0415\u0422-\u0422\u0420\u0410\u0424\u0406\u041A\u0423, \u041F\u0415\u0420\u0415\u0412\u0410\u041D\u0422\u0410\u0416\u0415\u041D\u041D\u042F\u041C \u0421\u0415\u0420\u0412\u0415\u0420\u0406\u0412, \u0417\u0410\u0413\u0410\u041B\u042C\u041D\u0418\u041C\u0418 \u0417\u0411\u041E\u042F\u041C\u0418 \u041C\u0415\u0420\u0415\u0416\u0406 \u0410\u0411\u041E \u0406\u041D\u0428\u0418\u041C\u0418 \u041F\u0420\u0418\u0427\u0418\u041D\u0410\u041C\u0418." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 813,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 825,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u041E\u0411\u041C\u0415\u0416\u0415\u041D\u041D\u042F \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u041E\u0421\u0422\u0406" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 826,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 825,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0418 \u0410\u0411\u041E \u041D\u0410\u0428\u0406 \u0414\u0418\u0420\u0415\u041A\u0422\u041E\u0420\u0418, \u0421\u041F\u0406\u0412\u0420\u041E\u0411\u0406\u0422\u041D\u0418\u041A\u0418, \u041F\u0410\u0420\u0422\u041D\u0415\u0420\u0418 \u0410\u0411\u041E \u0410\u0413\u0415\u041D\u0422\u0418 \u041D\u0415 \u041D\u0415\u0421\u0415\u041C\u041E \u0412\u0406\u0414\u041F\u041E\u0412\u0406\u0414\u0410\u041B\u042C\u041D\u041E\u0421\u0422\u0406 \u041F\u0415\u0420\u0415\u0414 \u0412\u0410\u041C\u0418 \u0410\u0411\u041E \u0411\u0423\u0414\u042C-\u042F\u041A\u041E\u042E \u0422\u0420\u0415\u0422\u042C\u041E\u042E \u0421\u0422\u041E\u0420\u041E\u041D\u041E\u042E \u0417\u0410 \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u041F\u0420\u042F\u041C\u0406, \u041D\u0415\u041F\u0420\u042F\u041C\u0406, \u041D\u0410\u0421\u041B\u0406\u0414\u041A\u041E\u0412\u0406, \u0412\u0418\u041F\u0410\u0414\u041A\u041E\u0412\u0406, \u0421\u041F\u0415\u0426\u0406\u0410\u041B\u042C\u041D\u0406 \u0410\u0411\u041E \u0428\u0422\u0420\u0410\u0424\u041D\u0406 \u0417\u0411\u0418\u0422\u041A\u0418, \u0412\u041A\u041B\u042E\u0427\u0410\u042E\u0427\u0418, \u0410\u041B\u0415 \u041D\u0415 \u041E\u0411\u041C\u0415\u0416\u0423\u042E\u0427\u0418\u0421\u042C, \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u041F\u041E\u0428\u041A\u041E\u0414\u0416\u0415\u041D\u041D\u042F, \u0412\u0422\u0420\u0410\u0427\u0415\u041D\u0418\u0419 \u041F\u0420\u0418\u0411\u0423\u0422\u041E\u041A, \u0412\u0422\u0420\u0410\u0422\u0423 \u0414\u0410\u041D\u0418\u0425 \u0410\u0411\u041E \u0411\u0423\u0414\u042C-\u042F\u041A\u0406 \u0406\u041D\u0428\u0406 \u0417\u0411\u0418\u0422\u041A\u0418, \u0429\u041E \u0412\u0418\u041D\u0418\u041A\u0410\u042E\u0422\u042C \u0412\u041D\u0410\u0421\u041B\u0406\u0414\u041E\u041A \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F \u0412\u0410\u041C\u0418 \u0421\u0410\u0419\u0422\u0423, \u041D\u0410\u0412\u0406\u0422\u042C \u042F\u041A\u0429\u041E \u041D\u0410\u0421 \u041F\u041E\u0412\u0406\u0414\u041E\u041C\u0418\u041B\u0418 \u041F\u0420\u041E \u041C\u041E\u0416\u041B\u0418\u0412\u0406\u0421\u0422\u042C \u0422\u0410\u041A\u0418\u0425 \u0417\u0411\u0418\u0422\u041A\u0406\u0412." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 828,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 836,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0412\u0406\u0414\u0428\u041A\u041E\u0414\u0423\u0412\u0410\u041D\u041D\u042F" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 837,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 836,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437\u0430\u0445\u0438\u0449\u0430\u0442\u0438, \u0432\u0456\u0434\u0448\u043A\u043E\u0434\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0437\u0432\u0456\u043B\u044C\u043D\u044F\u0442\u0438 \u043D\u0430\u0441, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u043D\u0430\u0448\u0456 \u0434\u043E\u0447\u0456\u0440\u043D\u0456 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457, \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432 \u0442\u0430 \u0432\u0441\u0456\u0445 \u043D\u0430\u0448\u0438\u0445 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0445 \u043F\u043E\u0441\u0430\u0434\u043E\u0432\u0438\u0445 \u043E\u0441\u0456\u0431, \u0430\u0433\u0435\u043D\u0442\u0456\u0432, \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432 \u0456 \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0456\u0432, \u0432\u0456\u0434 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0432\u0442\u0440\u0430\u0442, \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u044C, \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456, \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0456\u0439 \u0430\u0431\u043E \u0432\u0438\u043C\u043E\u0433, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u043A\u043E\u043C\u0456\u0441\u0456\u0457 \u0442\u0430 \u0432\u0438\u0442\u0440\u0430\u0442\u0438 \u043D\u0430 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0456\u0432, \u0437\u0434\u0456\u0439\u0441\u043D\u0435\u043D\u0456 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u044E \u0442\u0440\u0435\u0442\u044C\u043E\u044E \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u044E \u0432\u043D\u0430\u0441\u043B\u0456\u0434\u043E\u043A: (1) \u0412\u0430\u0448\u0438\u0445 \u0412\u043D\u0435\u0441\u043A\u0456\u0432; (2) \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443; (3) \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F \u0446\u0438\u0445 \u0423\u043C\u043E\u0432 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F; (4) \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F \u0412\u0430\u0448\u0438\u0445 \u0437\u0430\u044F\u0432 \u0456 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u0439, \u0432\u0438\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0445 \u0443 \u0446\u0438\u0445 \u0423\u043C\u043E\u0432\u0430\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F; (5) \u043F\u043E\u0440\u0443\u0448\u0435\u043D\u043D\u044F \u0412\u0430\u043C\u0438 \u043F\u0440\u0430\u0432 \u0442\u0440\u0435\u0442\u044C\u043E\u0457 \u0441\u0442\u043E\u0440\u043E\u043D\u0438, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438, \u0430\u043B\u0435 \u043D\u0435 \u043E\u0431\u043C\u0435\u0436\u0443\u044E\u0447\u0438\u0441\u044C \u043F\u0440\u0430\u0432\u0430\u043C\u0438 \u0456\u043D\u0442\u0435\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0457 \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456; \u0430\u0431\u043E (6) \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u044F\u0432\u043D\u0456 \u0448\u043A\u0456\u0434\u043B\u0438\u0432\u0456 \u0434\u0456\u0457 \u0449\u043E\u0434\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0456\u043D\u0448\u043E\u0433\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0421\u0430\u0439\u0442\u0443, \u0437 \u044F\u043A\u0438\u043C \u0412\u0438 \u043F\u043E\u0437\u043D\u0430\u0439\u043E\u043C\u0438\u043B\u0438\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u0421\u0430\u0439\u0442." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 839,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 852,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0432\u0438\u0449\u0435\u0437\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0435, \u043C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0437\u0430 \u0412\u0430\u0448 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0432\u0437\u044F\u0442\u0438 \u043D\u0430 \u0441\u0435\u0431\u0435 \u0432\u0438\u043A\u043B\u044E\u0447\u043D\u0438\u0439 \u0437\u0430\u0445\u0438\u0441\u0442 \u0456 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u0441\u043F\u0440\u0430\u0432\u0456, \u0437\u0430 \u044F\u043A\u0443 \u0412\u0438 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u0432\u0456\u0434\u0448\u043A\u043E\u0434\u0443\u0432\u0430\u0442\u0438 \u043D\u0430\u043C \u0437\u0431\u0438\u0442\u043A\u0438, \u0456 \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438 \u0437\u0430 \u0441\u0432\u0456\u0439 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0443 \u043D\u0430\u0448\u043E\u043C\u0443 \u0437\u0430\u0445\u0438\u0441\u0442\u0456 \u0442\u0430\u043A\u0438\u0445 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0456\u0439. \u041C\u0438 \u0434\u043E\u043A\u043B\u0430\u0434\u0435\u043C\u043E \u0440\u043E\u0437\u0443\u043C\u043D\u0438\u0445 \u0437\u0443\u0441\u0438\u043B\u044C, \u0449\u043E\u0431 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0438 \u0412\u0430\u0441 \u043F\u0440\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0442\u0430\u043A\u0443 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0456\u044E, \u0434\u0456\u044E \u0447\u0438 \u043F\u0440\u043E\u0432\u0430\u0434\u0436\u0435\u043D\u043D\u044F, \u044F\u043A\u0456 \u043F\u0456\u0434\u043F\u0430\u0434\u0430\u044E\u0442\u044C \u043F\u0456\u0434 \u0446\u044E \u043A\u043E\u043C\u043F\u0435\u043D\u0441\u0430\u0446\u0456\u044E, \u043A\u043E\u043B\u0438 \u043D\u0430\u043C \u0441\u0442\u0430\u043D\u0435 \u0432\u0456\u0434\u043E\u043C\u043E \u043F\u0440\u043E \u0446\u0435." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 852,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 860,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0414\u0410\u041D\u0406 \u041A\u041E\u0420\u0418\u0421\u0422\u0423\u0412\u0410\u0427\u0406\u0412" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 861,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 860,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041C\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438\u043C\u0435\u043C\u043E \u043F\u0435\u0432\u043D\u0456 \u0434\u0430\u043D\u0456, \u044F\u043A\u0456 \u0412\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u0435 \u043D\u0430 \u0421\u0430\u0439\u0442 \u0437 \u043C\u0435\u0442\u043E\u044E \u043A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u043E\u043C, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0434\u0430\u043D\u0456, \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u0437 \u0412\u0430\u0448\u0438\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F\u043C \u0421\u0430\u0439\u0442\u0443. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0442\u0435, \u0449\u043E \u043C\u0438 \u0432\u0438\u043A\u043E\u043D\u0443\u0454\u043C\u043E \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u0435 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u0435 \u043A\u043E\u043F\u0456\u044E\u0432\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445, \u0412\u0438 \u043D\u0435\u0441\u0435\u0442\u0435 \u043F\u043E\u0432\u043D\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0430 \u0432\u0441\u0456 \u0434\u0430\u043D\u0456, \u044F\u043A\u0456 \u0412\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0454\u0442\u0435 \u0430\u0431\u043E \u044F\u043A\u0456 \u0441\u0442\u043E\u0441\u0443\u044E\u0442\u044C\u0441\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456, \u044F\u043A\u0443 \u0412\u0438 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u043B\u0438 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 863,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 870,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437 \u0442\u0438\u043C, \u0449\u043E \u043C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u043F\u0435\u0440\u0435\u0434 \u0412\u0430\u043C\u0438 \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0432\u0442\u0440\u0430\u0442\u0443 \u0430\u0431\u043E \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0442\u0430\u043A\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0456 \u0446\u0438\u043C \u0412\u0438 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u044F\u0454\u0442\u0435\u0441\u044F \u0432\u0456\u0434 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043F\u0440\u0430\u0432 \u043D\u0430 \u043F\u043E\u0437\u043E\u0432 \u043F\u0440\u043E\u0442\u0438 \u043D\u0430\u0441 \u0443 \u0437\u0432\u2019\u044F\u0437\u043A\u0443 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u044E \u0442\u0430\u043A\u043E\u044E \u0432\u0442\u0440\u0430\u0442\u043E\u044E \u0430\u0431\u043E \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u043D\u044F\u043C \u0442\u0430\u043A\u0438\u0445 \u0434\u0430\u043D\u0438\u0445." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 870,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 876,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0415\u041B\u0415\u041A\u0422\u0420\u041E\u041D\u041D\u0406 \u041A\u041E\u041C\u0423\u041D\u0406\u041A\u0410\u0426\u0406\u0407, \u0422\u0420\u0410\u041D\u0417\u0410\u041A\u0426\u0406\u0407 \u0422\u0410 \u041F\u0406\u0414\u041F\u0418\u0421\u0418" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 877,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 876,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0456\u0434\u0432\u0456\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u0421\u0430\u0439\u0442\u0443, \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430\u043C \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0445 \u043B\u0438\u0441\u0442\u0456\u0432, \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u0438\u0445 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432, \u041F\u043E\u0441\u043B\u0443\u0433 \u0442\u0430 \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F \u043E\u043D\u043B\u0430\u0439\u043D-\u0444\u043E\u0440\u043C \u0441\u0442\u0430\u043D\u043E\u0432\u043B\u044F\u0442\u044C \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456 \u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u0457. \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0442\u0430 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F, \u0449\u043E \u0432\u0441\u0456 \u0443\u0433\u043E\u0434\u0438 \u0442\u0430 \u0456\u043D\u0448\u0456 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F, \u044F\u043A\u0456 \u043C\u0438 \u043D\u0430\u0434\u0430\u0454\u043C\u043E \u0412\u0430\u043C \u0432 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u043C\u0443 \u0432\u0438\u0433\u043B\u044F\u0434\u0456, \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E \u0442\u0430 \u043D\u0430 \u0421\u0430\u0439\u0442\u0456, \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044F\u044E\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0456 \u0432\u0438\u043C\u043E\u0433\u0438 \u0449\u043E\u0434\u043E \u043F\u0438\u0441\u044C\u043C\u043E\u0432\u043E\u0457 \u0444\u043E\u0440\u043C\u0438 \u0442\u0430\u043A\u043E\u0433\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 879,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 887,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0422\u0410\u041A\u0418\u041C \u0427\u0418\u041D\u041E\u041C \u041F\u0420\u041E\u0414\u041E\u0412\u0416\u0423\u042E\u0427\u0418 \u041A\u041E\u0420\u0418\u0421\u0422\u0423\u0412\u0410\u0422\u0418\u0421\u042F \u041D\u0410\u0428\u0418\u041C \u0421\u0410\u0419\u0422\u041E\u041C \u0412\u0418 \u041F\u041E\u0413\u041E\u0414\u0416\u0423\u0404\u0422\u0415\u0421\u042F \u041D\u0410 \u0412\u0418\u041A\u041E\u0420\u0418\u0421\u0422\u0410\u041D\u041D\u042F \u0415\u041B\u0415\u041A\u0422\u0420\u041E\u041D\u041D\u0418\u0425 \u041F\u0406\u0414\u041F\u0418\u0421\u0406\u0412, \u041A\u041E\u041D\u0422\u0420\u0410\u041A\u0422\u0406\u0412, \u0417\u0410\u041C\u041E\u0412\u041B\u0415\u041D\u042C \u0422\u0410 \u0406\u041D\u0428\u0418\u0425 \u0417\u0410\u041F\u0418\u0421\u0406\u0412, \u0422\u0410 \u041D\u0410 \u0415\u041B\u0415\u041A\u0422\u0420\u041E\u041D\u041D\u0423 \u0414\u041E\u0421\u0422\u0410\u0412\u041A\u0423 \u041F\u041E\u0412\u0406\u0414\u041E\u041C\u041B\u0415\u041D\u042C, \u041F\u041E\u041B\u0406\u0422\u0418\u041A \u0422\u0410 \u0417\u0410\u041F\u0418\u0421\u0406\u0412 \u041F\u0420\u041E \u0422\u0420\u0410\u041D\u0417\u0410\u041A\u0426\u0406\u0407, \u0406\u041D\u0406\u0426\u0406\u0419\u041E\u0412\u0410\u041D\u0406 \u0410\u0411\u041E \u0417\u0410\u0412\u0415\u0420\u0428\u0415\u041D\u0406 \u041D\u0410\u041C\u0418 \u0410\u0411\u041E \u0427\u0415\u0420\u0415\u0417 \u0421\u0410\u0419\u0422." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 887,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 893,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0422\u0430\u043A\u043E\u0436 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u044E\u0447\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430\u0448\u0438\u043C \u0421\u0430\u0439\u0442\u043E\u043C \u0412\u0438 \u0432\u0456\u0434\u043C\u043E\u0432\u043B\u044F\u0454\u0442\u0435\u0441\u044F \u0432\u0456\u0434 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u043F\u0440\u0430\u0432 \u0430\u0431\u043E \u0432\u0438\u043C\u043E\u0433 \u0437\u0433\u0456\u0434\u043D\u043E \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C\u0438 \u0441\u0442\u0430\u0442\u0443\u0442\u0430\u043C\u0438, \u043D\u043E\u0440\u043C\u0430\u0442\u0438\u0432\u043D\u0438\u043C\u0438 \u0430\u043A\u0442\u0430\u043C\u0438, \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438, \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u0436\u0435\u043D\u043D\u044F\u043C\u0438 \u0447\u0438 \u0456\u043D\u0448\u0438\u043C\u0438 \u0437\u0430\u043A\u043E\u043D\u0430\u043C\u0438 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456\u0439 \u044E\u0440\u0438\u0441\u0434\u0438\u043A\u0446\u0456\u0457, \u044F\u043A\u0456 \u0432\u0438\u043C\u0430\u0433\u0430\u044E\u0442\u044C \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0456\u0434\u043F\u0438\u0441\u0443 \u0430\u0431\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0447\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u043D\u0435\u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0445 \u0437\u0430\u043F\u0438\u0441\u0456\u0432, \u0430\u0431\u043E \u0449\u043E\u0434\u043E \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432 \u0447\u0438 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043A\u0440\u0435\u0434\u0438\u0442\u0456\u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C\u0438 \u0456\u043D\u0448\u0438\u043C\u0438 \u0441\u043F\u043E\u0441\u043E\u0431\u0430\u043C\u0438 \u043D\u0456\u0436 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456 \u0437\u0430\u0441\u043E\u0431\u0438." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 893,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 901,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0423\u0441\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0447\u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0456\u0457 \u0449\u043E\u0434\u043E \u043D\u0430\u0448\u0438\u0445 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0442\u0430/\u0430\u0431\u043E \u041F\u043E\u0441\u043B\u0443\u0433, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0443\u0441\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u044F\u043A\u0443 \u0412\u0438 \u043D\u0430\u0434\u0430\u0454\u0442\u0435 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0456\u0457, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u0412\u0430\u0448\u0435 \u0456\u043C\u2019\u044F, \u0430\u0434\u0440\u0435\u0441\u0430, \u0441\u043F\u043E\u0441\u0456\u0431 \u043E\u043F\u043B\u0430\u0442\u0438, \u043D\u043E\u043C\u0435\u0440 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438 \u0442\u0430 \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0437\u0456\u0431\u0440\u0430\u043D\u0430 \u044F\u043A \u043D\u0430\u043C\u0438, \u0442\u0430\u043A \u0456 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0454\u044E, \u044F\u043A\u0443 \u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0434\u043B\u044F \u043F\u0440\u0438\u0439\u043C\u0430\u043D\u043D\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432 \u043D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0441\u0430\u0439\u0442\u0456. \u0417\u0433\u0456\u0434\u043D\u043E \u0437 \u043D\u0430\u0448\u043E\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u0439\u0442\u0435\u0441\u044F, \u0449\u043E \u0412\u0438 \u043E\u0437\u043D\u0430\u0439\u043E\u043C\u0438\u043B\u0438\u0441\u044F \u0437 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u043D\u0430\u0448\u043E\u0433\u043E \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 901,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 910,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041D\u0430 \u0434\u0430\u043D\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E www.wayforpay.com \u044F\u043A \u043D\u0430\u0448\u043E\u0433\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0430. \u0426\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0454, \u0449\u043E \u044F\u043A\u0449\u043E \u0412\u0438 \u0440\u043E\u0431\u0438\u0442\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438, \u0432\u0456\u0434\u043C\u0456\u043D\u043D\u043E\u0457 \u0432\u0456\u0434 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u0457, \u0412\u0430\u0448 \u0431\u0430\u043D\u043A \u043C\u043E\u0436\u0435 \u0437\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u043F\u043B\u0430\u0442\u0456\u0436 \u044F\u043A \u043F\u0456\u0434\u043E\u0437\u0440\u0456\u043B\u0438\u0439, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0432\u0430\u043B\u044E\u0442\u043E\u044E \u0454 \u0433\u0440\u0438\u0432\u043D\u044F, \u0430 \u043D\u0435 \u0434\u043E\u043B\u0430\u0440 \u0421\u0428\u0410. \u041E\u0442\u0436\u0435, \u0412\u0430\u043C \u0434\u043E\u0432\u0435\u0434\u0435\u0442\u044C\u0441\u044F \u0437\u0432\u2019\u044F\u0437\u0430\u0442\u0438\u0441\u044F \u0437\u0456 \u0441\u043B\u0443\u0436\u0431\u043E\u044E \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u0412\u0430\u0448\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0443 \u0442\u0430 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0457\u0445 \u0441\u0445\u0432\u0430\u043B\u0438\u0442\u0438 \u043F\u043B\u0430\u0442\u0456\u0436. \u041C\u043E\u0436\u0443\u0442\u044C \u0437\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u043A\u043E\u043C\u0456\u0441\u0456\u0457." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 910,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 918,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u043A\u0443\u043F\u0443\u0432\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440\u0438 \u0447\u0438 \u043F\u043E\u0441\u043B\u0443\u0433\u0438 \u043B\u0438\u0448\u0435 \u0434\u043B\u044F \u0441\u0435\u0431\u0435 \u0447\u0438 \u0434\u043B\u044F \u0456\u043D\u0448\u043E\u0457 \u043E\u0441\u043E\u0431\u0438, \u0434\u043B\u044F \u044F\u043A\u043E\u0457 \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0446\u0435 \u0440\u043E\u0431\u0438\u0442\u0438 \u0437\u0430 \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u0430\u0431\u043E \u0432\u0456\u0434 \u044F\u043A\u043E\u0457 \u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u0447\u0456\u0442\u043A\u0443 \u0437\u0433\u043E\u0434\u0443 \u043D\u0430\u0434\u0430\u0442\u0438 \u0457\u0457 \u0456\u043C\u2019\u044F, \u0430\u0434\u0440\u0435\u0441\u0443, \u0441\u043F\u043E\u0441\u0456\u0431 \u043E\u043F\u043B\u0430\u0442\u0438, \u043D\u043E\u043C\u0435\u0440 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438 \u0442\u0430 \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 918,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 924,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u043D\u0435\u0441\u0442\u0438 \u0444\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0437\u0430 \u0432\u0441\u0456 \u043F\u043E\u043A\u0443\u043F\u043A\u0438, \u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0456 \u0412\u0430\u043C\u0438 \u0430\u0431\u043E \u043E\u0441\u043E\u0431\u043E\u044E, \u044F\u043A\u0430 \u0434\u0456\u0454 \u0432\u0456\u0434 \u0412\u0430\u0448\u043E\u0433\u043E \u0456\u043C\u0435\u043D\u0456. \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u043D\u0430\u0448\u0456 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438, \u041F\u043E\u0441\u043B\u0443\u0433\u0438 \u043B\u0438\u0448\u0435 \u0432 \u0437\u0430\u043A\u043E\u043D\u043D\u0438\u0445, \u043D\u0435\u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u0438\u0445 \u0446\u0456\u043B\u044F\u0445, \u0430 \u043D\u0435 \u0432 \u0441\u043F\u0435\u043A\u0443\u043B\u044F\u0442\u0438\u0432\u043D\u0438\u0445, \u0444\u0430\u043B\u044C\u0448\u0438\u0432\u0438\u0445, \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u044C\u043A\u0438\u0445 \u0430\u0431\u043E \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u0438\u0445 \u0446\u0456\u043B\u044F\u0445." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 924,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 930,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u042F\u043A\u0449\u043E \u0412\u0438 \u0440\u043E\u0431\u0438\u0442\u0435 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u0432 \u043E\u0434\u043D\u043E\u0433\u043E \u0437 \u043D\u0430\u0448\u0438\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432 \u0430\u0431\u043E \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0456\u043D\u0448\u043E\u0457 \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u0457 \u043E\u0441\u043E\u0431\u0438 \u0447\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0437\u0430 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C, \u043D\u0430\u0434\u0430\u043D\u0438\u043C \u0443 \u043D\u0430\u0448\u0438\u0445 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445 \u0447\u0438 \u041F\u043E\u0441\u043B\u0443\u0433\u0430\u0445 \u0430\u0431\u043E \u0447\u0435\u0440\u0435\u0437 \u043D\u0438\u0445 (\xAB\u041C\u0435\u0440\u0447\u0430\u043D\u0442\xBB), \u0443\u0441\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0412\u0430\u0448\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0447\u0438 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0456\u0457, \u0456 \u0432\u0441\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u044F\u043A\u0443 \u0412\u0438 \u043D\u0430\u0434\u0430\u0454\u0442\u0435 \u044F\u043A \u0447\u0430\u0441\u0442\u0438\u043D\u0443 \u0442\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0456\u0457, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u043D\u043E\u043C\u0435\u0440 \u0412\u0430\u0448\u043E\u0457 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438 \u0442\u0430 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0442\u0430\u043A\u043E\u0436 \u043C\u043E\u0436\u0443\u0442\u044C \u0431\u0443\u0442\u0438 \u0437\u0456\u0431\u0440\u0430\u043D\u0456 \u043C\u0435\u0440\u0447\u0430\u043D\u0442\u043E\u043C \u0442\u0430 \u0439\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0454\u044E \u0437 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432. \u0412\u0430\u0448\u0430 \u0443\u0447\u0430\u0441\u0442\u044C, \u043B\u0438\u0441\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0434\u0456\u043B\u043E\u0432\u0456 \u0432\u0456\u0434\u043D\u043E\u0441\u0438\u043D\u0438 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u043C \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u043C, \u0444\u0456\u0437\u0438\u0447\u043D\u043E\u044E \u043E\u0441\u043E\u0431\u043E\u044E \u0447\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0454\u044E \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448\u0456 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u0447\u0438 \u041F\u043E\u0441\u043B\u0443\u0433\u0438, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0443\u0441\u0456 \u0443\u043C\u043E\u0432\u0438 \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u043D\u044F, \u0437\u0430\u044F\u0432\u0438 \u0447\u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u0457, \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u0437 \u043E\u043F\u043B\u0430\u0442\u043E\u044E, \u0432\u0456\u0434\u0448\u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F\u043C \u0442\u0430/\u0430\u0431\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u043E\u044E, \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u043E\u044E \u0437 \u0412\u0430\u0448\u043E\u044E \u043F\u043E\u043A\u0443\u043F\u043A\u043E\u044E, \u0454 \u0432\u0438\u043A\u043B\u044E\u0447\u043D\u043E \u043C\u0456\u0436 \u0412\u0430\u043C\u0438 \u0456 \u041C\u0435\u0440\u0447\u0430\u043D\u0442\u043E\u043C. \u0412\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437 \u0442\u0438\u043C, \u0449\u043E \u043C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0456 \u0432\u0442\u0440\u0430\u0442\u0438, \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u043D\u044F, \u0432\u0456\u0434\u0448\u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0456\u043D\u0448\u0456 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0440\u043E\u0434\u0443, \u044F\u043A\u0456 \u0432\u0438\u043D\u0438\u043A\u043B\u0438 \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456 \u0442\u0430\u043A\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u0439 \u0437 \u041C\u0435\u0440\u0447\u0430\u043D\u0442\u043E\u043C." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 930,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 945,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u0457, \u0449\u043E \u0437\u0430\u0439\u043C\u0430\u044E\u0442\u044C\u0441\u044F \u043E\u0431\u0440\u043E\u0431\u043A\u043E\u044E \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432, \u0456 \u041C\u0435\u0440\u0447\u0430\u043D\u0442\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u043C\u0430\u0442\u0438 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0437\u0431\u043E\u0440\u0443 \u0434\u0430\u043D\u0438\u0445, \u044F\u043A\u0456 \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u044E\u0442\u044C\u0441\u044F \u0432\u0456\u0434 \u043D\u0430\u0448\u0438\u0445. \u041C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0436\u043E\u0434\u043D\u043E\u0457 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0446\u044E \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u0443 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0439 \u0437 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432 \u0456 \u041C\u0435\u0440\u0447\u0430\u043D\u0442\u0456\u0432. \u041A\u0440\u0456\u043C \u0442\u043E\u0433\u043E, \u043A\u043E\u043B\u0438 \u0412\u0438 \u0440\u043E\u0431\u0438\u0442\u0435 \u043F\u0435\u0432\u043D\u0456 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448\u0456 \u041F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u0430\u0431\u043E \u041F\u043E\u0441\u043B\u0443\u0433\u0438, \u043D\u0430 \u0412\u0430\u0441 \u043C\u043E\u0436\u0443\u0442\u044C \u043F\u043E\u0448\u0438\u0440\u044E\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0456 \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457, \u0449\u043E \u0437\u0430\u0439\u043C\u0430\u0454\u0442\u044C\u0441\u044F \u043E\u0431\u0440\u043E\u0431\u043A\u043E\u044E \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432, \u041C\u0435\u0440\u0447\u0430\u043D\u0442\u0430 \u0430\u0431\u043E \u043D\u0430\u0441, \u044F\u043A\u0456 \u0441\u0442\u043E\u0441\u0443\u044E\u0442\u044C\u0441\u044F \u0441\u0430\u043C\u0435 \u0412\u0430\u0448\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438. \u0429\u043E\u0431 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u043E \u041C\u0435\u0440\u0447\u0430\u043D\u0442\u0430 \u0442\u0430 \u0439\u043E\u0433\u043E \u0423\u043C\u043E\u0432\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u044F\u043A\u0456 \u043C\u043E\u0436\u0443\u0442\u044C \u0437\u0430\u0441\u0442\u043E\u0441\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044F, \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0439\u0442\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0446\u044C\u043E\u0433\u043E \u041C\u0435\u0440\u0447\u0430\u043D\u0442\u0430 \u0442\u0430 \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043D\u0430 \u0439\u043E\u0433\u043E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0456 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0437\u0432\u2019\u044F\u0436\u0456\u0442\u044C\u0441\u044F \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0437 \u041C\u0435\u0440\u0447\u0430\u043D\u0442\u043E\u043C." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 945,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 957,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0412\u0438 \u0437\u0432\u0456\u043B\u044C\u043D\u044F\u0454\u0442\u0435 \u043D\u0430\u0441, \u043D\u0430\u0448\u0438\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432, \u043D\u0430\u0448\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044E \u0437 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432 \u0456 \u041C\u0435\u0440\u0447\u0430\u043D\u0442\u0456\u0432 \u0432\u0456\u0434 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0437\u0431\u0438\u0442\u043A\u0456\u0432, \u044F\u043A\u0438\u0445 \u0412\u0438 \u0437\u0430\u0437\u043D\u0430\u0454\u0442\u0435, \u0456 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u043D\u0435 \u043F\u0440\u0435\u0434\u2019\u044F\u0432\u043B\u044F\u0442\u0438 \u0436\u043E\u0434\u043D\u0438\u0445 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0456\u0439 \u0434\u043E \u043D\u0430\u0441 \u0430\u0431\u043E \u0434\u043E \u043D\u0438\u0445, \u0449\u043E \u0432\u0438\u043D\u0438\u043A\u0430\u044E\u0442\u044C \u0443 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456 \u0412\u0430\u0448\u043E\u0457 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0430\u0431\u043E \u0439\u043E\u0433\u043E \u0412\u043C\u0456\u0441\u0442." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 957,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 963,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u041F\u041E\u041B\u0406\u0422\u0418\u041A\u0410 \u041F\u041E\u0412\u0415\u0420\u041D\u0415\u041D\u041D\u042F \u041A\u041E\u0428\u0422\u0406\u0412" }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 964,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 963,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\u0414\u043B\u044F \u043D\u0430\u0441 \u0432\u0430\u0436\u043B\u0438\u0432\u043E, \u0449\u043E\u0431 \u0412\u0438 \u0431\u0443\u043B\u0438 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0456 \u043D\u0430\u0448\u0438\u043C\u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u043C\u0438 \u0442\u0430 \u043F\u043E\u0441\u043B\u0443\u0433\u0430\u043C\u0438, \u0456 \u043C\u0438 \u0449\u0438\u0440\u043E \u0432\u0456\u0440\u0438\u043C\u043E, \u0449\u043E \u043D\u0430\u0448\u0456 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u0412\u0430\u043C \u043F\u043E\u043A\u0440\u0430\u0449\u0438\u0442\u0438 \u0412\u0430\u0448\u0435 \u0436\u0438\u0442\u0442\u044F. \u041E\u0442\u0436\u0435, \u0449\u043E\u0431 \u043F\u043E\u043B\u0435\u0433\u0448\u0438\u0442\u0438 \u0412\u0430\u043C \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u0442\u044F \u0440\u0456\u0448\u0435\u043D\u043D\u044F, \u044F\u043A\u0449\u043E \u0456\u043D\u0448\u0435 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u043C \u0430\u0431\u043E \u0432 \u043E\u043A\u0440\u0435\u043C\u0438\u0445 \u0447\u0430\u0441\u0442\u0438\u043D\u0430\u0445 \u0421\u0430\u0439\u0442\u0443, \u043C\u0438 \u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0454\u043C\u043E 30-\u0434\u0435\u043D\u043D\u0443 \u0433\u0430\u0440\u0430\u043D\u0442\u0456\u044E \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u0433\u0440\u043E\u0448\u0435\u0439 \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u043D\u0430\u0448 \u043F\u043B\u0430\u0442\u043D\u0438\u0439 \u041F\u0440\u043E\u0434\u0443\u043A\u0442, \u041F\u043E\u0441\u043B\u0443\u0433\u0443." }, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 966,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 973,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "\u0429\u043E\u0431 \u043F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u043A\u043E\u0448\u0442\u0438 \u0412\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u043D\u0430\u043C \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u043B\u0438\u0441\u0442\u0430 \u043D\u0430 \u043F\u043E\u0448\u0442\u0443",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: `mailto:${import.meta.env.VITE_MY_WORK_EMAIL}`, children: import.meta.env.VITE_MY_WORK_EMAIL }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 975,
        columnNumber: 13
      }, this),
      " \u0442\u0430 \u0432\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0432\u043E\u0457 \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0456 \u0434\u0430\u043D\u0456, \u044F\u043A\u0456 \u0412\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043B\u0438 \u0434\u043B\u044F \u043E\u043F\u043B\u0430\u0442\u0438 (\u041F\u0406\u0411, email, \u0442\u0435\u043B\u0435\u0444\u043E\u043D) \u0442\u0430 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043A\u043E\u0448\u0442\u0456\u0432."
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 973,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 979,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: "\u0417\u0412\u2019\u042F\u0416\u0406\u0422\u042C\u0421\u042F \u0417 \u041D\u0410\u041C\u0418" }, void 0, false, {
        fileName: "app/pages/uk/TermsOfService_ua.jsx",
        lineNumber: 980,
        columnNumber: 13
      }, this),
      " "
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 979,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "\u042F\u043A\u0449\u043E \u0443 \u0412\u0430\u0441 \u0432\u0438\u043D\u0438\u043A\u043B\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0449\u043E\u0434\u043E \u0421\u0430\u0439\u0442\u0443 \u0442\u0430/\u0430\u0431\u043E \u0412\u043C\u0456\u0441\u0442\u0443, \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0439 \u043B\u0438\u0441\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0443 ",
      import.meta.env.VITE_MY_WORK_EMAIL,
      ", \u0456 \u043C\u0438 \u0437\u0440\u043E\u0431\u0438\u043C\u043E \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435, \u0449\u043E\u0431 \u0448\u0432\u0438\u0434\u043A\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438 \u043D\u0430 \u0412\u0430\u0448\u0435 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F."
    ] }, void 0, true, {
      fileName: "app/pages/uk/TermsOfService_ua.jsx",
      lineNumber: 982,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/uk/TermsOfService_ua.jsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/pages/uk/TermsOfService_ua.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/pages/uk/TermsOfService_ua.jsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c5 = TermsOfServiceUa;
var _c5;
$RefreshReg$(_c5, "TermsOfServiceUa");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/library/TOS.jsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/library/TOS.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/library/TOS.jsx"
  );
  import.meta.hot.lastModified = "1759270078751.6223";
}
var termsComponents = {
  en: TermsOfService,
  uk: TermsOfServiceUa
};
var TermsOfServiceWrapper = () => {
  _s5();
  const {
    t,
    i18n: i18n2
  } = useTranslation();
  const SelectedTermsComponent = termsComponents[i18n2.language] || termsComponents.en;
  let url;
  if (typeof window !== "undefined") {
    url = window.location.href;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("title", { children: t("meta.tos.title") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "title", content: t("meta.tos.title") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "description", content: t("meta.tos.description") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { name: "author", content: t("meta.author") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "canonical", href: url }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "og:type", content: "article" }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "og:url", content: url }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "og:title", content: t("meta.tos.title") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "og:description", content: t("meta.tos.description") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "og:locale", content: t("meta.OgLocale") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "og:site_name", content: t("meta.author") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "twitter:card", content: "summary_large_image" }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "twitter:site", content: url }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "twitter:title", content: t("meta.tos.title") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("meta", { property: "twitter:description", content: t("meta.tos.description") }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 78,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SelectedTermsComponent, {}, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 79,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/library/TOS.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/library/TOS.jsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
};
_s5(TermsOfServiceWrapper, "OZwazanA59tbNDUkc8lMSmTHj9Q=", false, function() {
  return [useTranslation];
});
_c6 = TermsOfServiceWrapper;
var TOS_default = TermsOfServiceWrapper;
var _c6;
$RefreshReg$(_c6, "TermsOfServiceWrapper");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/pages/PrivacyPolicy.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/PrivacyPolicy.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/PrivacyPolicy.jsx"
  );
  import.meta.hot.lastModified = "1758753345254.818";
}
function PrivacyPolicy() {
  _s6();
  const {
    t,
    i18n: i18n2
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: ` inset-0 top-[150px] max-w-7xl mt-20`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-[#2a7a2a] text-center text-4xl", children: "Privacy Policy" }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { style: {
      fontWeight: "bold",
      lineHeight: "1.2",
      fontSize: 22,
      color: "#494e53ff"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
        fontSize: 14
      }, children: "Last Updated On 02-Mar-2024" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
        fontSize: 14
      }, children: "Effective Date 02-Mar-2024" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 40,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 54,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      "This Privacy Policy describes how ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "SerhiiShevchenko.com" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 55,
        columnNumber: 55
      }, this),
      " ",
      "(\u201CCompany\u201D, \u201Cwe\u201D, \u201Cus\u201D, \u201Cwebsite\u201D) collects, uses, processes and distributes your information, including Personal Data (as defined below) used to access this Website. We will not use or share your information with anyone except as described in this Privacy Policy. The use of information collected through our Website shall be limited to the purposes under this Privacy Policy, and also our Terms of Use if you\u2019re a client or customer."
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 54,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 63,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Consent" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      " "
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 63,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "By using our website, you hereby consent to our Privacy Policy and agree to its terms." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 67,
      columnNumber: 33
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 71,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Non-Personal Data" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 75,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 71,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We also collect and use information about your interactions with the website in a manner and format that does not identify you as an individual (\u201CNon-Personal Data\u201D).\xA0" }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 75,
      columnNumber: 32
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 80,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Use of \u201CCookies\u201D" }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 81,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 80,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      "Like many websites, when you visit SerhiiShevchenko.com we may use cookies to identify your browser and see how you use our website (e.g., the pages you view, the links you click and other actions you take). You may choose to disable cookies through your own web browser\u2019s settings or by declining our cookie consent settings by clicking on the button on the left bottom of the Website. However, disabling cookies may diminish your experience on our Website and some features may not work as intended.",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "https://serhiishevchenko.com/cookie-policy/", target: "_blank", rel: "noopener", children: "Click here" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 89,
        columnNumber: 21
      }, this),
      " ",
      "to read our cookie policy."
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 81,
      columnNumber: 59
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 94,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Information automatically collected" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 96,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 99,
        columnNumber: 21
      }, this),
      " "
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 95,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We automatically collect certain information when you visit, use, or navigate our Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Website, and for our internal analytics and reporting purposes." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 100,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 111,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Like many businesses, we also collect information through cookies and similar technologies.\xA0" }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 111,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 115,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "The information we collect includes:" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 116,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 119,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 115,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Log and Usage Data" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 125,
          columnNumber: 25
        }, this),
        ". Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called \u201Ccrash dumps\u201D), and hardware settings)."
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 124,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Device Data" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 137,
          columnNumber: 25
        }, this),
        ". We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information."
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 136,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Location Data" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 146,
          columnNumber: 25
        }, this),
        ". We collect location data such as information about your device\u2019s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of our Website."
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 145,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 120,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 158,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Web Beacons" }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 160,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 159,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
      fontWeight: 400
    }, children: "Certain sections of our Website, resources and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity)." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 165,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 164,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 177,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Personal Data" }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 179,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 178,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We collect personal information from you so that we can provide you with a positive experience when utilizing our Website or content. Usually the personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 183,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 190,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "We may collect:" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 192,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 195,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 191,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ol", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "A name and an email address so we can deliver our newsletter to you \u2013 you would be affirmatively consenting to this by providing this information to us in our contact forms." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 200,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Billing information including name, address and credit card information so that we can process payment to deliver our products or services to you under our contractual obligation." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 205,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "A name, an email address, the contents of the message and any other information you may choose to provide us when contacting us directly by completing our contact form. We may send you marketing emails with either your consent or if we believe we have a legitimate interest to contact you based on your contact or question." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 210,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 196,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 218,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      "Please note that the information above that you are giving to us is voluntarily, and by providing this information to us you are giving consent for us to use, collect and process this Personal Data. You are welcome to opt-out or request for us to delete your Personal Data at any point by contacting us at ",
      import.meta.env.VITE_MY_WORK_EMAIL
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 218,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 225,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "If you choose not to provide us with certain Personal Data, you may not be able to participate in certain aspects of our Website or Content." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 225,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 229,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "How do we use and process your data" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 231,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 234,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 230,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We may use and disclose your Personal Data as follows:" }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 235,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Improve, personalize, and expand our website and offers." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 242,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Understand and analyze how you use our website." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 243,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Develop new products, services, features, and functionality." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 244,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website such as new features, updates, and changes to our Privacy Policy, and for marketing and promotional purposes." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 245,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Share your information with trusted third parties such as our newsletter provider in order to contact you via email, or our merchant accounts to process payments, Google accounts in order to analyze how you use our website, to run advertisements and our affiliates." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 251,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "To provide information to representatives and advisors, like attorneys and accountants, to help us comply with legal, accounting, or security requirements." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 257,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "To send you informational and promotional content that you may choose (or \u201Copt-in\u201D) to receive, such as daily, weekly, and monthly emails. You can stop receiving our promotional emails by following the unsubscribe instructions included in every email." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 262,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "To protect our Website. We may process your information as part of our efforts to keep our Website safe and secure, including fraud monitoring and prevention." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 268,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 238,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 274,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 276,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 275,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 280,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "\xA0" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 288,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("b", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("u", { children: "If you are located in the EU or UK, this section applies to you." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 291,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 290,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 289,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 294,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { style: {
        listStyleType: "disc",
        paddingLeft: "20px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 304,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Performance of a Contract. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 310,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          "Legitimate Interests. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 322,
            columnNumber: 29
          }, this),
          "\u2013 Send users information about special offers and discounts on our products and services",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 324,
            columnNumber: 29
          }, this),
          "\u2013 Develop and display personalized and relevant advertising content for our users",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 326,
            columnNumber: 29
          }, this),
          "\u2013 Analyze how our Services are used so we can improve them to engage and retain users",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 328,
            columnNumber: 29
          }, this),
          "\u2013 Support our marketing activities",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 329,
            columnNumber: 29
          }, this),
          "\u2013 Diagnose problems and/or prevent fraudulent activities",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 330,
            columnNumber: 29
          }, this),
          "\u2013 Understand how our users use our products and services so we can improve user experience."
        ] }, void 0, true, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 316,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 333,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 340,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 300,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "In legal terms, we are generally the \u201Cdata controller\u201D under European data protection laws of the personal information described in this privacy notice, since we determine the means and/or purposes of the data processing we perform. This privacy notice does not apply to the personal information we process as a \u201Cdata processor\u201D on behalf of our customers. In those situations, the customer that we provide services to and with whom we have entered into a data processing agreement is the \u201Cdata controller\u201D responsible for your personal information, and we merely process your information on their behalf in accordance with your instructions. If you want to know more about our customers\u2019 privacy practices, you should read their privacy policies and direct any questions you have to them." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 347,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "\xA0" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 361,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("b", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("u", { children: "If you are located in Canada, this section applies to you." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 365,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 364,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 363,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
          "We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time by contacting us by email at ",
          import.meta.env.VITE_MY_WORK_EMAIL,
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
            fontWeight: 400
          }, children: "or updating your preferences" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 374,
            columnNumber: 29
          }, this),
          "."
        ] }, void 0, true, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 368,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "\xA0" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 378,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 379,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { style: {
          listStyleType: "disc",
          paddingLeft: "20px"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 388,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "For investigations and fraud detection and prevention" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 392,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "For business transactions provided certain conditions are met" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 393,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 394,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "For identifying injured, ill, or deceased persons and communicating with next of kin" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 398,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 402,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 406,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 413,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 417,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "If the collection is solely for journalistic, artistic, or literary purposes" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 422,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "If the information is publicly available and is specified by the regulations." }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 426,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 384,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 362,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 433,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 435,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 438,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 434,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 432,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party vendors, service providers, contractors, or agents (\u201Cthird parties\u201D) who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct. The categories of third parties we may share personal information with are as follows:" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 440,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { style: {
        listStyleType: "disc",
        paddingLeft: "20px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Ad Networks" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 457,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Affiliate Marketing Programs" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 458,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Cloud Computing Services" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 459,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Communication & Collaboration Tools" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 460,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Data Analytics Services" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 461,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Data Storage Service Providers" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 462,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Finance & Accounting Tools" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 463,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Government Entities" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 464,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Order Fulfillment Service Providers" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 465,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Payment Processors" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 466,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Performance Monitoring Tools" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 467,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Product Engineering & Design Tools" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 468,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Retargeting Platforms" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 469,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Sales & Marketing Tools" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 470,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Social Networks" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 471,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Testing Tools" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 472,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "User Account Registration & Authentication Services" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 473,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Website Hosting Service Providers" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 474,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 453,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 476,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "We also may need to share your personal information in the following situations:" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 478,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 482,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 477,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { style: {
        listStyleType: "disc",
        paddingLeft: "20px"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 488,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: [
          "When we use Google Analytics. Google Analytics uses cookies to help us analyze how you use our Website and Content so we could better understand what content you are interested in and thus serve you better Content.\xA0For more information on how Google uses this data, go to\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "text-[#00bbff] hover:text-[#0093c9ff]", href: "https://www.google.com/policies/privacy/partners/", target: "_blank", rel: "noopener", children: "www.google.com/policies/privacy/partners/" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 500,
            columnNumber: 29
          }, this),
          ".\xA0You can learn more about how to opt out of Google Analytics by going to\xA0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { className: "text-[#00bbff] hover:text-[#0093c9ff]", href: "https://tools.google.com/dlpage/gaoptout", target: "_blank", rel: "noopener", children: "https://tools.google.com/dlpage/gaoptout" }, void 0, false, {
            fileName: "app/pages/PrivacyPolicy.jsx",
            lineNumber: 505,
            columnNumber: 29
          }, this),
          ". For more information on the privacy practices of Google, please visit the Google Privacy & Terms page."
        ] }, void 0, true, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 494,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 511,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 518,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { children: "Other Users. When you share personal information (for example, by posting comments, contributions, or other content to the Services) or otherwise interact with public areas of the Services, such personal information may be viewed by all users and may be publicly made available outside the Services in perpetuity. If you interact with other users of our Services and register for our Services through a social network (such as Facebook), your contacts on the social network will see your name, profile photo, and descriptions of your activity. Similarly, other users will be able to view descriptions of your activity, communicate with you within our Services, and view your profile." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 522,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 484,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 535,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 537,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 540,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 536,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Our Website may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy policy. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Website. You should review the policies of such third parties and contact them directly to respond to your questions.\xA0" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 541,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 274,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 559,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Also, whenever you voluntarily make your Personal Data available for viewing by others online through this Website or its content, it may be seen, collected and used by others, and therefore, we cannot be responsible for any unauthorized or improper use of the information that you voluntarily share (i.e., sharing a comment on a blog post, posting in a Facebook group or commenting on a Telegram channel that we manage, etc." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 559,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 567,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 569,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 572,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 568,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 573,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 583,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We will use the information we receive only for the purposes that are described in this privacy policy or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy policy to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 583,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 592,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Submission, Storage, Sharing and Transferring of Personal Data" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 594,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 597,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 593,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
        fontWeight: 400
      }, children: [
        "Your information, including Personal Data, is processed at the Company\u2019s operating offices and in any other places where the parties involved in the processing are located (i.e., our hosting provider, newsletter provider, payment processors or team members). It means that this information may be transferred to \u2014 and maintained on \u2014 computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.",
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 610,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 599,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
        fontWeight: 400
      }, children: "Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 612,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 598,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 619,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
      fontWeight: 400
    }, children: "The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 620,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 619,
      columnNumber: 24
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 630,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Security of Your Personal Data" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 632,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 635,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 631,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
      fontWeight: 400
    }, children: "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 637,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 636,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 647,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Instances where we are required to share your Personal Data" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 649,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 652,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 648,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "SerhiiShevchenko.com will disclose Personal Information where required to do so by law or subpoena or if we reasonably believe that such action is necessary to (a) comply with the law and the reasonable requests of law enforcement; (b) to enforce our Terms of Service or to protect the security or integrity of our website; and/or (c) to exercise or protect the rights, property, or personal safety of SerhiiShevchenko.com, our Users or others." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 653,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 661,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Retention" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 663,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 666,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 662,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We retain your Personal Data for as long as we need it to fulfill the purposes set out in this Privacy Policy. We may need to retain certain information for longer periods such as record-keeping / reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc.\xA0" }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 667,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 674,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "How You Can Access, Update or Delete Your Personal Data" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 676,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 679,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 675,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
      fontWeight: 400
    }, children: "You have the right under this Privacy Policy, and by law if You are within the EU, to:" }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 681,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 680,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { style: {
        fontWeight: 400
      }, "aria-level": 1, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("b", { children: "Request access to Your Personal Data" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 692,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
          fontWeight: 400
        }, children: [
          ". The right to access, update or delete the information We have on You. You can access, update or request deletion of Your Personal Data by contacting us at ",
          import.meta.env.VITE_MY_WORK_EMAIL,
          ".\xA0"
        ] }, void 0, true, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 693,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 689,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { style: {
        fontWeight: 400
      }, "aria-level": 1, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("b", { children: "Request correction of the Personal Data that We hold about You" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 704,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
          fontWeight: 400
        }, children: ". You have the right to have any incomplete or inaccurate information We hold about You corrected." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 705,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 701,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { style: {
        fontWeight: 400
      }, "aria-level": 1, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("b", { children: "Object to processing of Your Personal Data" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 715,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
          fontWeight: 400
        }, children: ". This right exists where We are relying on a legitimate interest as the legal basis for Our processing and there is something about Your particular situation, which makes You want to object to our processing of Your Personal Data on this ground. You also have the right to object where We are processing Your Personal Data for direct marketing purposes." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 716,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 712,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { style: {
        fontWeight: 400
      }, "aria-level": 1, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("b", { children: "Request erasure of Your Personal Data" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 730,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
          fontWeight: 400
        }, children: ". You have the right to ask Us to delete or remove Personal Data when there is no good reason for Us to continue processing it." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 731,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 727,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { style: {
        fontWeight: 400
      }, "aria-level": 1, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("b", { children: "Request the transfer of Your Personal Data" }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 741,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
          fontWeight: 400
        }, children: ". We will provide to You, or to a third-party You have chosen, Your Personal Data in a structured, commonly used, machine-readable format. Please note that this right only applies to automated information which You initially provided consent for Us to use or where We used the information to perform a contract with You." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 742,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 738,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("li", { style: {
        fontWeight: 400
      }, "aria-level": 1, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("b", { style: {
          fontStyle: "inherit"
        }, children: "Withdraw Your consent." }, void 0, false, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 755,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
          fontWeight: 400
        }, children: [
          " ",
          "You have the right to withdraw Your consent on using your Personal Data. If You withdraw Your consent, We may not be able to provide You with access to certain specific functionalities of the Service."
        ] }, void 0, true, {
          fileName: "app/pages/PrivacyPolicy.jsx",
          lineNumber: 758,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 752,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 688,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 768,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Exercising of Your GDPR Data Protection Rights" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 770,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 773,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 769,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
      fontWeight: 400
    }, children: [
      "You may exercise Your rights of access, rectification, cancellation and opposition by contacting Us at ",
      import.meta.env.VITE_MY_WORK_EMAIL,
      ". Please note that we may ask You to verify Your identity before responding to such requests. If You make a request, We will try our best to respond to You as soon as possible."
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 775,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 774,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 785,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "CONTROLS FOR DO-NOT-TRACK FEATURES" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 787,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 790,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 786,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (\u201CDNT\u201D) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy policy." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 791,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 803,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Children\u2019s Privacy Policy" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 805,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 808,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 804,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We do not collect any information from anyone under 18 years of age in compliance with COPPA (Children\u2019s Online Privacy Protection Act) and the GDPR (General Data Protection Regulation of the EU). Our Website and its content is directed to individuals who are at least 18 years old or older." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 809,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 815,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Changes to this Privacy Policy" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 817,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 820,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 816,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
        fontWeight: 400
      }, children: [
        "We may update Our Privacy Policy from time to time. Please review this Privacy Policy periodically. Continued use of any of information obtained through or on the Website or its content following the posting of changes and/or modifications constituted acceptance of the revised Privacy Policy.",
        " "
      ] }, void 0, true, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 822,
        columnNumber: 21
      }, this),
      "We reserve the right to change this Privacy Policy on the Website at any time without notice.",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { style: {
        fontWeight: 400
      }, children: "We may let You know via email and/or a prominent notice on Our Service about some important changes in our Privacy Policy." }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 832,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 821,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 839,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("strong", { children: "Data Controller and Processors" }, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 841,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/PrivacyPolicy.jsx",
        lineNumber: 844,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 840,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We are the data controllers as we are collecting and using your Personal Data.\xA0 We use trusted third parties as our data processors for technical and organizational purposes, including for payments and email marketing. We use reasonable efforts to make sure our data processors are GDPR- compliant." }, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 845,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 852,
      columnNumber: 17
    }, this),
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      "If you have any questions about this Privacy Policy, please contact us at",
      import.meta.env.VITE_MY_WORK_EMAIL
    ] }, void 0, true, {
      fileName: "app/pages/PrivacyPolicy.jsx",
      lineNumber: 852,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/PrivacyPolicy.jsx",
    lineNumber: 37,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/pages/PrivacyPolicy.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s6(PrivacyPolicy, "OZwazanA59tbNDUkc8lMSmTHj9Q=", false, function() {
  return [useTranslation];
});
_c7 = PrivacyPolicy;
var _c7;
$RefreshReg$(_c7, "PrivacyPolicy");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/pages/uk/PrivacyPolicy_ua.jsx
init_dist();
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/pages/uk/PrivacyPolicy_ua.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/pages/uk/PrivacyPolicy_ua.jsx"
  );
  import.meta.hot.lastModified = "1758752636195.686";
}
function PrivacyPolicyUa() {
  _s7();
  const {
    lang
  } = useParams();
  const {
    t,
    i18n: i18n2
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: ` inset-0 top-[150px] max-w-7xl mt-20`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { className: "entry-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-[#2a7a2a] text-center text-4xl", children: "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456" }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 41,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 40,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { style: {
      fontWeight: "bold",
      lineHeight: "1.2",
      fontSize: 22,
      color: "#494e53ff"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { style: {
        fontSize: 14
      }, children: "\u041E\u0441\u0442\u0430\u043D\u043D\u0454 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F: 02.03.2024." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 51,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 54,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { style: {
        fontSize: 14
      }, children: "\u0414\u0430\u0442\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432 \u0434\u0456\u044E: 02.03.2024." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 55,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 45,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 59,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u0426\u044F \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u043E\u043F\u0438\u0441\u0443\u0454, \u044F\u043A SerhiiShevchenko.com (\xAB\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F\xBB, \xAB\u043C\u0438\xBB, \xAB\u0432\u0435\u0431-\u0441\u0430\u0439\u0442\xBB) \u0437\u0431\u0438\u0440\u0430\u0454, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454, \u043E\u0431\u0440\u043E\u0431\u043B\u044F\u0454 \u0442\u0430 \u043F\u043E\u0448\u0438\u0440\u044E\u0454 \u0412\u0430\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 (\u044F\u043A \u0432\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u043D\u0438\u0436\u0447\u0435), \u044F\u043A\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0443 \u0434\u043E \u0446\u044C\u043E\u0433\u043E \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0443. \u041C\u0438 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u043C\u0435\u043C\u043E \u0412\u0430\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0442\u0430 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438\u043C\u0435\u043C\u043E \u0457\u0457 \u043D\u0456\u043A\u043E\u043C\u0443, \u043A\u0440\u0456\u043C \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432, \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0445 \u0443 \u0446\u0456\u0439 \u041F\u043E\u043B\u0456\u0442\u0438\u0446\u0456 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456. \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u0437\u0456\u0431\u0440\u0430\u043D\u043E\u0457 \u0447\u0435\u0440\u0435\u0437 \u043D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u043E\u0431\u043C\u0435\u0436\u0443\u0454\u0442\u044C\u0441\u044F \u0446\u0456\u043B\u044F\u043C\u0438, \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u0438\u043C\u0438 \u0446\u0456\u0454\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043D\u0430\u0448\u0438\u043C\u0438 \u0423\u043C\u043E\u0432\u0430\u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u044F\u043A\u0449\u043E \u0412\u0438 \u0454 \u043A\u043B\u0456\u0454\u043D\u0442\u043E\u043C." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 59,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 70,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0417\u0433\u043E\u0434\u0430" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 72,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 75,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 71,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041A\u043E\u0440\u0438\u0441\u0442\u0443\u044E\u0447\u0438\u0441\u044C \u043D\u0430\u0448\u0438\u043C \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u043C, \u0412\u0438 \u0442\u0438\u043C \u0441\u0430\u043C\u0438\u043C \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437 \u043D\u0430\u0448\u043E\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u0437 \u0457\u0457 \u0443\u043C\u043E\u0432\u0430\u043C\u0438." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 76,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 80,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u041D\u0435\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 82,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 85,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 81,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E \u0442\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043F\u0440\u043E \u0412\u0430\u0448\u0443 \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044E \u0437 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u043E\u043C \u0443 \u0441\u043F\u043E\u0441\u0456\u0431 \u0456 \u0444\u043E\u0440\u043C\u0430\u0442, \u044F\u043A\u0456 \u043D\u0435 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u044E\u0442\u044C \u0412\u0430\u0441 \u044F\u043A \u043E\u0441\u043E\u0431\u0443 (\xAB\u041D\u0435\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456\xBB)." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 86,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 90,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \xABCookies\xBB" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 92,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 95,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 91,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u042F\u043A \u0456 \u0431\u0430\u0433\u0430\u0442\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456\u0432, \u043A\u043E\u043B\u0438 \u0412\u0438 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0454\u0442\u0435 SerhiiShevchenko.com, \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0444\u0430\u0439\u043B\u0438 cookie, \u0449\u043E\u0431 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0456 \u0431\u0430\u0447\u0438\u0442\u0438, \u044F\u043A \u0412\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u0435 \u043D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 (\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438, \u044F\u043A\u0456 \u0412\u0438 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0454\u0442\u0435, \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F, \u044F\u043A\u0456 \u0412\u0438 \u043D\u0430\u0442\u0438\u0441\u043A\u0430\u0454\u0442\u0435, \u0442\u0430 \u0456\u043D\u0448\u0456 \u0412\u0430\u0448\u0456 \u0434\u0456\u0457). \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0438\u043C\u043A\u043D\u0443\u0442\u0438 \u0444\u0430\u0439\u043B\u0438 cookie \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 \u0432\u043B\u0430\u0441\u043D\u043E\u0433\u043E \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u041E\u0434\u043D\u0430\u043A \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043D\u044F \u0444\u0430\u0439\u043B\u0456\u0432 cookie \u043C\u043E\u0436\u0435 \u043F\u043E\u0433\u0456\u0440\u0448\u0438\u0442\u0438 \u0412\u0430\u0448 \u0434\u043E\u0441\u0432\u0456\u0434 \u0440\u043E\u0431\u043E\u0442\u0438 \u043D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456, \u0430 \u0434\u0435\u044F\u043A\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457 \u043C\u043E\u0436\u0443\u0442\u044C \u043D\u0435 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438 \u043D\u0430\u043B\u0435\u0436\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 96,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 105,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0424\u0430\u0439\u043B\u0438 \u0436\u0443\u0440\u043D\u0430\u043B\u0456\u0432" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 107,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 110,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 106,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043F\u0440\u043E \u0444\u0430\u0439\u043B \u0436\u0443\u0440\u043D\u0430\u043B\u0443 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0454\u0442\u044C\u0441\u044F \u0412\u0430\u0448\u0438\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u043C \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443, \u043A\u043E\u043B\u0438 \u0412\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0454\u0442\u0435 \u0432\u0435\u0431-\u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443. \u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u0437\u0456\u0431\u0440\u0430\u043D\u0430 \u0444\u0430\u0439\u043B\u0430\u043C\u0438 \u0436\u0443\u0440\u043D\u0430\u043B\u0443, \u0432\u043A\u043B\u044E\u0447\u0430\u0454 \u0430\u0434\u0440\u0435\u0441\u0438 \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0443 (IP), \u0442\u0438\u043F \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430, \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440\u0430 (ISP), \u043F\u043E\u0437\u043D\u0430\u0447\u043A\u0443 \u0434\u0430\u0442\u0438 \u0442\u0430 \u0447\u0430\u0441\u0443, \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0443/\u0432\u0438\u0445\u043E\u0434\u0443 \u0442\u0430, \u043C\u043E\u0436\u043B\u0438\u0432\u043E, \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043A\u043B\u0456\u043A\u0456\u0432. \u0412\u043E\u043D\u0438 \u043D\u0435 \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u0437 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u044E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0454\u044E, \u044F\u043A\u0430 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454 \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0443\u0432\u0430\u0442\u0438 \u043E\u0441\u043E\u0431\u0443. \u041C\u0435\u0442\u043E\u044E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0454 \u0430\u043D\u0430\u043B\u0456\u0437 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0456\u0439, \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0430\u0439\u0442\u0443, \u0432\u0456\u0434\u0441\u0442\u0435\u0436\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0435\u043C\u0456\u0449\u0435\u043D\u044C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456 \u0442\u0430 \u0437\u0431\u0456\u0440 \u0434\u0435\u043C\u043E\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 111,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 121,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0412\u0435\u0431-\u043C\u0430\u044F\u043A\u0438" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 123,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 126,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 122,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041F\u0435\u0432\u043D\u0456 \u0440\u043E\u0437\u0434\u0456\u043B\u0438 \u043D\u0430\u0448\u043E\u0433\u043E \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0443, \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u0442\u0430 \u043D\u0430\u0448\u0456 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456 \u043B\u0438\u0441\u0442\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456 \u0444\u0430\u0439\u043B\u0438, \u0432\u0456\u0434\u043E\u043C\u0456 \u044F\u043A \u0432\u0435\u0431-\u043C\u0430\u044F\u043A\u0438 (\u0442\u0430\u043A\u043E\u0436 \u043D\u0430\u0437\u0438\u0432\u0430\u044E\u0442\u044C\u0441\u044F \u0447\u0438\u0441\u0442\u0438\u043C\u0438 gif, \u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u0438\u043C\u0438 \u0442\u0435\u0433\u0430\u043C\u0438 \u0442\u0430 \u043E\u0434\u043D\u043E\u043F\u0456\u043A\u0441\u0435\u043B\u044C\u043D\u0438\u043C\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F\u043C\u0438 gif), \u044F\u043A\u0456 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442\u044C \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u0457, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u043F\u0456\u0434\u0440\u0430\u0445\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432, \u044F\u043A\u0456 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u043B\u0438 \u0446\u0456 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 \u0430\u0431\u043E \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0456 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456 \u043B\u0438\u0441\u0442\u0438 \u0442\u0430 \u0434\u043B\u044F \u0456\u043D\u0448\u043E\u0457 \u043F\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u043E\u0457 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443 (\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u0437\u0430\u043F\u0438\u0441 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0456 \u043F\u0435\u0432\u043D\u043E\u0433\u043E \u0440\u043E\u0437\u0434\u0456\u043B\u0443 \u0442\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0446\u0456\u043B\u0456\u0441\u043D\u043E\u0441\u0442\u0456 \u0441\u0438\u0441\u0442\u0435\u043C\u0438 \u0442\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430)." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 127,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 136,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u041E\u0441\u043E\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043D\u0456" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 138,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 141,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 137,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E \u0412\u0430\u0448\u0443 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0449\u043E\u0431 \u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u043D\u0430\u0434\u0430\u0442\u0438 \u0412\u0430\u043C \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u043E\u0433\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443 \u0430\u0431\u043E \u0432\u043C\u0456\u0441\u0442\u0443. \u0417\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u044F\u043A\u0443 \u0412\u0430\u0441 \u043F\u0440\u043E\u0441\u044F\u0442\u044C \u043D\u0430\u0434\u0430\u0442\u0438, \u0456 \u043F\u0440\u0438\u0447\u0438\u043D\u0438, \u0447\u043E\u043C\u0443 \u0412\u0430\u0441 \u043F\u0440\u043E\u0441\u044F\u0442\u044C \u043D\u0430\u0434\u0430\u0442\u0438 \u043F\u0435\u0432\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0431\u0443\u0434\u0443\u0442\u044C \u0432\u043A\u0430\u0437\u0430\u043D\u0456 \u0412\u0430\u043C \u0443 \u043C\u043E\u043C\u0435\u043D\u0442 \u0437\u0430\u043F\u0438\u0442\u0443 \u0446\u0456\u0454\u0457 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 142,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 148,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u041C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0437\u0431\u0438\u0440\u0430\u0442\u0438:" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 150,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 153,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 149,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ol", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u0406\u043C\u2019\u044F \u0442\u0430 \u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438, \u0449\u043E\u0431 \u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0442\u0438 \u0432\u0430\u043C \u043D\u0430\u0448\u0443 \u0440\u043E\u0437\u0441\u0438\u043B\u043A\u0443 \u2013 \u0432\u0438 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u0454\u0442\u0435 \u0441\u0432\u043E\u044E \u0437\u0433\u043E\u0434\u0443 \u043D\u0430 \u0446\u0435, \u043D\u0430\u0434\u0430\u044E\u0447\u0438 \u0446\u044E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u043D\u0430\u043C \u0443 \u043D\u0430\u0448\u0438\u0445 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0438\u0445 \u0444\u043E\u0440\u043C\u0430\u0445." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 158,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u041F\u043B\u0430\u0442\u0456\u0436\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0456\u043C\u2019\u044F, \u0430\u0434\u0440\u0435\u0441\u0443 \u0442\u0430 \u0434\u0430\u043D\u0456 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u043E\u0457 \u043A\u0430\u0440\u0442\u043A\u0438, \u0449\u043E\u0431 \u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u043E\u0431\u0440\u043E\u0431\u0438\u0442\u0438 \u043E\u043F\u043B\u0430\u0442\u0443 \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0430\u0431\u043E \u043F\u043E\u0441\u043B\u0443\u0433 \u0432\u0430\u043C \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u043D\u0430\u0448\u0438\u0445 \u0434\u043E\u0433\u043E\u0432\u0456\u0440\u043D\u0438\u0445 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u044C." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 163,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u0406\u043C\u2019\u044F, \u0430\u0434\u0440\u0435\u0441\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438, \u0432\u043C\u0456\u0441\u0442 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0442\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0456\u043D\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u044F\u043A\u0443 \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0434\u0430\u0442\u0438 \u043D\u0430\u043C \u043F\u0456\u0434 \u0447\u0430\u0441 \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E\u0433\u043E \u0437\u0432\u2019\u044F\u0437\u043A\u0443 \u0437 \u043D\u0430\u043C\u0438, \u0437\u0430\u043F\u043E\u0432\u043D\u0438\u0432\u0448\u0438 \u043D\u0430\u0448\u0443 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0443 \u0444\u043E\u0440\u043C\u0443. \u041C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0442\u0438 \u0432\u0430\u043C \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0456 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456 \u043B\u0438\u0441\u0442\u0438 \u0437 \u0432\u0430\u0448\u043E\u0457 \u0437\u0433\u043E\u0434\u0438 \u0430\u0431\u043E \u044F\u043A\u0449\u043E \u0432\u0432\u0430\u0436\u0430\u0454\u043C\u043E, \u0449\u043E \u043C\u0430\u0454\u043C\u043E \u0437\u0430\u043A\u043E\u043D\u043D\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u0435\u0441 \u0437\u0432\u2019\u044F\u0437\u0430\u0442\u0438\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043D\u0430 \u043E\u0441\u043D\u043E\u0432\u0456 \u0432\u0430\u0448\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0443 \u0447\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 168,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 154,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 176,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      "\u0417\u0432\u0435\u0440\u043D\u0456\u0442\u044C \u0443\u0432\u0430\u0433\u0443, \u0449\u043E \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0430 \u0432\u0438\u0449\u0435 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u044F\u043A\u0443 \u0412\u0438 \u043D\u0430\u0434\u0430\u0454\u0442\u0435 \u043D\u0430\u043C \u0454 \u0434\u043E\u0431\u0440\u043E\u0432\u0456\u043B\u044C\u043D\u043E\u044E, \u0456, \u043D\u0430\u0434\u0430\u044E\u0447\u0438 \u043D\u0430\u043C \u0446\u044E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0412\u0438 \u0434\u0430\u0454\u0442\u0435 \u0437\u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F, \u0437\u0431\u0456\u0440 \u0456 \u043E\u0431\u0440\u043E\u0431\u043A\u0443 \u0446\u0438\u0445 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0432\u0456\u0434\u043C\u043E\u0432\u0438\u0442\u0438\u0441\u044F \u0430\u0431\u043E \u043F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u043F\u0438\u0442 \u043D\u0430 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0412\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0437\u0432\u2019\u044F\u0437\u0430\u0432\u0448\u0438\u0441\u044C \u0437 \u043D\u0430\u043C\u0438 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E ",
      import.meta.env.VITE_MY_WORK_EMAIL
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 176,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 183,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u042F\u043A\u0449\u043E \u0412\u0438 \u0432\u0438\u0440\u0456\u0448\u0438\u0442\u0435 \u043D\u0435 \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u043D\u0430\u043C \u043F\u0435\u0432\u043D\u0456 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456, \u0412\u0438 \u043D\u0435 \u0437\u043C\u043E\u0436\u0435\u0442\u0435 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044C \u043F\u0435\u0432\u043D\u0438\u043C\u0438 \u0444\u0443\u043D\u043A\u0446\u0456\u044F\u043C\u0438 \u0456 \u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0430\u043C\u0438 \u043D\u0430\u0448\u043E\u0433\u043E \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0443." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 183,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 187,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0406\u043D\u0448\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u044F\u043A\u0443 \u043C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 189,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 192,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 188,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      "\u041C\u0438 \u0434\u043E\u0437\u0432\u043E\u043B\u044F\u0454\u043C\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0456\u043C \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430\u043C \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0444\u0430\u0439\u043B\u0438 cookie \u0430\u0431\u043E \u043F\u043E\u0434\u0456\u0431\u043D\u0456 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0456\u0457 \u0434\u043B\u044F \u0437\u0431\u043E\u0440\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043F\u0440\u043E \u0432\u0430\u0448\u0443 \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u043D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0421\u0430\u0439\u0442\u0456 \u0443 \u0432\u0435\u0431-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456. \u041D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E Google Analytics, \u0441\u043B\u0443\u0436\u0431\u0443 \u0432\u0435\u0431-\u0430\u043D\u0430\u043B\u0456\u0442\u0438\u043A\u0438 \u0432\u0456\u0434 Google, Inc. (\u201CGoogle\u201D). Google Analytics \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0444\u0430\u0439\u043B\u0438 cookie, \u0449\u043E\u0431 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043D\u0430\u043C \u043F\u0440\u043E\u0430\u043D\u0430\u043B\u0456\u0437\u0443\u0432\u0430\u0442\u0438, \u044F\u043A \u0412\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u0435 \u043D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0456 \u0432\u043C\u0456\u0441\u0442, \u0449\u043E\u0431 \u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u043A\u0440\u0430\u0449\u0435 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438, \u044F\u043A\u0438\u0439 \u0432\u043C\u0456\u0441\u0442 \u0432\u0430\u0441 \u0446\u0456\u043A\u0430\u0432\u0438\u0442\u044C, \u0456 \u0442\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0412\u0430\u043C \u043A\u0440\u0430\u0449\u0438\u0439 \u0432\u043C\u0456\u0441\u0442. \u0429\u043E\u0431 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u0442\u0435, \u044F\u043A Google \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454 \u0446\u0456 \u0434\u0430\u043D\u0456, \u043F\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044C \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "https://policies.google.com/technologies/partner-sites", target: "_blank", rel: "noreferrer noopener", children: "www.google.com/policies/privacy/partners/" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 202,
        columnNumber: 25
      }, this),
      ". \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0456\u0437\u043D\u0430\u0442\u0438\u0441\u044F \u0431\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E \u0442\u0435, \u044F\u043A \u0432\u0456\u0434\u043C\u043E\u0432\u0438\u0442\u0438\u0441\u044F \u0432\u0456\u0434 Google Analytics, \u043F\u0435\u0440\u0435\u0439\u0448\u043E\u0432\u0448\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "https://tools.google.com/dlpage/gaoptout", target: "_blank", rel: "noreferrer noopener", children: "https://tools.google.com/dlpage/gaoptout" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 207,
        columnNumber: 25
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 193,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 212,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u042F\u043A \u043C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0412\u0430\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 214,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 217,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 213,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0440\u043E\u0437\u043A\u0440\u0438\u0432\u0430\u0442\u0438 \u0412\u0430\u0448\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0442\u0430\u043A\u0438\u043C \u0447\u0438\u043D\u043E\u043C:" }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 218,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u0414\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 \u0442\u0430 \u0440\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u043D\u044F \u043D\u0430\u0448\u043E\u0433\u043E \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0443 \u0456 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0439." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 225,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u0429\u043E\u0431 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438 \u0442\u0430 \u043F\u0440\u043E\u0430\u043D\u0430\u043B\u0456\u0437\u0443\u0432\u0430\u0442\u0438, \u044F\u043A \u0412\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u0435 \u043D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 229,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u0414\u043B\u044F \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043D\u043E\u0432\u0438\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432, \u043F\u043E\u0441\u043B\u0443\u0433, \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A \u0442\u0430 \u0444\u0443\u043D\u043A\u0446\u0456\u0439." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 230,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u0414\u043B\u044F \u0441\u043F\u0456\u043B\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u0437 \u0412\u0430\u043C\u0438 \u0431\u0435\u0437\u043F\u043E\u0441\u0435\u0440\u0435\u0434\u043D\u044C\u043E \u0430\u0431\u043E \u0447\u0435\u0440\u0435\u0437 \u043E\u0434\u043D\u043E\u0433\u043E \u0437 \u043D\u0430\u0448\u0438\u0445 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0456\u0432, \u0437\u043E\u043A\u0440\u0435\u043C\u0430 \u0434\u043B\u044F \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u043A\u043B\u0456\u0454\u043D\u0442\u0456\u0432, \u0449\u043E\u0431 \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0412\u0430\u043C \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0442\u0430 \u0456\u043D\u0448\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u0449\u043E \u0441\u0442\u043E\u0441\u0443\u0454\u0442\u044C\u0441\u044F \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434 \u043D\u043E\u0432\u0456 \u0444\u0443\u043D\u043A\u0446\u0456\u0457, \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0442\u0430 \u0437\u043C\u0456\u043D\u0438 \u0432 \u043D\u0430\u0448\u0456\u0439 \u041F\u043E\u043B\u0456\u0442\u0438\u0446\u0456 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u0430 \u0442\u0430\u043A\u043E\u0436 \u0434\u043B\u044F \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u043E\u0432\u0438\u0445 \u0456 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438\u0445 \u0446\u0456\u043B\u0435\u0439." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 231,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u0429\u043E\u0431 \u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0446\u0456\u0454\u044E \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0454\u044E \u0437 \u0434\u043E\u0432\u0456\u0440\u0435\u043D\u0438\u043C\u0438 \u0442\u0440\u0435\u0442\u0456\u043C\u0438 \u0441\u0442\u043E\u0440\u043E\u043D\u0430\u043C\u0438 \u044F\u043A, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u043D\u0430\u0448\u0438\u043C \u0441\u0435\u0440\u0432\u0456\u0441\u043E\u043C Email \u0440\u043E\u0437\u0441\u0438\u043B\u043E\u043A, \u0449\u043E\u0431 \u0437\u0432\u2019\u044F\u0437\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E, \u0430\u0431\u043E \u0437 \u043D\u0430\u0448\u0438\u043C\u0438 \u043C\u0435\u0440\u0447\u0430\u043D\u0442 \u0430\u043A\u0430\u0443\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u044F \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432, \u043E\u0431\u043B\u0456\u043A\u043E\u0432\u0438\u043C\u0438 \u0437\u0430\u043F\u0438\u0441\u0430\u043C\u0438 Google \u0434\u043B\u044F \u0430\u043D\u0430\u043B\u0456\u0437\u0443 \u0442\u043E\u0433\u043E, \u044F\u043A \u0412\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u0435 \u043D\u0430\u0448 \u0412\u0435\u0431-\u0441\u0430\u0439\u0442, \u0434\u043B\u044F \u043F\u043E\u043A\u0430\u0437\u0443 \u0440\u0435\u043A\u043B\u0430\u043C\u0438 \u0442\u0430 \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u043D\u0430\u0448\u0438\u043C\u0438 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C\u0438." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 238,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u0414\u043B\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043D\u0438\u043A\u0430\u043C \u0456 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u0430\u043C, \u044F\u043A-\u043E\u0442 \u0430\u0434\u0432\u043E\u043A\u0430\u0442\u0430\u043C \u0456 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0430\u043C, \u0449\u043E\u0431 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043D\u0430\u043C \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0432\u0438\u043C\u043E\u0433 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430, \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u043E\u0431\u043B\u0456\u043A\u0443 \u0447\u0438 \u0431\u0435\u0437\u043F\u0435\u043A\u0438." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 245,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: "\u0414\u043B\u044F \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0412\u0430\u043C \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u043E\u0433\u043E \u0442\u0430 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443, \u044F\u043A\u0438\u0439 \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 (\u0430\u0431\u043E \xAB\u043F\u0456\u0434\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F\xBB), \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u0449\u043E\u0434\u0435\u043D\u043D\u0456, \u0449\u043E\u0442\u0438\u0436\u043D\u0435\u0432\u0456 \u0442\u0430 \u0449\u043E\u043C\u0456\u0441\u044F\u0447\u043D\u0456 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0456 (Email) \u043B\u0438\u0441\u0442\u0438. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u0438\u0445 \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u0438\u0445 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0445 \u043B\u0438\u0441\u0442\u0456\u0432, \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u044E\u0447\u0438\u0441\u044C \u0456\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u0439 \u0449\u043E\u0434\u043E \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0438, \u044F\u043A\u0456 \u043C\u0456\u0441\u0442\u044F\u0442\u044C\u0441\u044F \u0432 \u043A\u043E\u0436\u043D\u043E\u043C\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u043C\u0443 \u043B\u0438\u0441\u0442\u0456." }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 250,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 221,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 258,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0456 \u0441\u0430\u0439\u0442\u0438 \u0442\u0430 \u0440\u0435\u0441\u0443\u0440\u0441\u0438" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 260,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 263,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 259,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "SerhiiShevchenko.com \u0456 \u0439\u043E\u0433\u043E \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u0447\u0438\u0441\u043B\u0435\u043D\u043D\u0456 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0456\u043D\u0448\u0456 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0438, \u0447\u0438\u044F \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u043C\u043E\u0436\u0435 \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u0442\u0438\u0441\u044F \u0432\u0456\u0434 \u043D\u0430\u0448\u043E\u0457. \u042F\u043A\u0449\u043E \u0412\u0438 \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0454\u0442\u0435 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u043D\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0456\u0437 \u0446\u0438\u0445 \u0441\u0430\u0439\u0442\u0456\u0432, \u0412\u0430\u0448\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0440\u0435\u0433\u0443\u043B\u044E\u0454\u0442\u044C\u0441\u044F \u0457\u0445\u043D\u044C\u043E\u044E \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456. \u041C\u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0454\u043C\u043E \u0412\u0430\u043C \u0443\u0432\u0430\u0436\u043D\u043E \u0447\u0438\u0442\u0430\u0442\u0438 \u043F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0433\u043E \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0443, \u044F\u043A\u0438\u0439 \u0412\u0438 \u0432\u0456\u0434\u0432\u0456\u0434\u0443\u0454\u0442\u0435." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 264,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 272,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041A\u043E\u0436\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443, \u043A\u043E\u043B\u0438 \u0412\u0438 \u0434\u043E\u0431\u0440\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u043D\u0430\u0434\u0430\u0454\u0442\u0435 \u0441\u0432\u043E\u0457 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0443 \u0456\u043D\u0448\u0438\u043C \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\u043C \u0432 \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0456 \u0447\u0435\u0440\u0435\u0437 \u0446\u0435\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442, \u0432\u043E\u043D\u0438 \u043C\u043E\u0436\u0443\u0442\u044C \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0442\u0438\u0441\u044F, \u0437\u0431\u0438\u0440\u0430\u0442\u0438\u0441\u044F \u0442\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0456\u043D\u0448\u0438\u043C\u0438, \u0456 \u0442\u043E\u043C\u0443 \u043C\u0438 \u043D\u0435 \u043D\u0435\u0441\u0435\u043C\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0456\u043E\u043D\u043E\u0432\u0430\u043D\u0435 \u0447\u0438 \u043D\u0435\u043D\u0430\u043B\u0435\u0436\u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u044F\u043A\u0443 \u0412\u0438 \u0434\u043E\u0431\u0440\u043E\u0432\u0456\u043B\u044C\u043D\u043E \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0443\u0454\u0442\u0435 (\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u0440\u043E\u0437\u043F\u043E\u0432\u0441\u044E\u0434\u0436\u0435\u043D\u043D\u044F \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456\u0432 \u0434\u043E \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0439 \u0443 \u0431\u043B\u043E\u0437\u0456, \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0439 \u0432 \u0433\u0440\u0443\u043F\u0456 Facebook \u0430\u0431\u043E \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456 \u0432 \u043A\u0430\u043D\u0430\u043B\u0456 Telegram, \u044F\u043A\u0438\u043C \u043C\u0438 \u043A\u0435\u0440\u0443\u0454\u043C\u043E, \u0442\u043E\u0449\u043E)." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 272,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 281,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u041F\u043E\u0434\u0430\u043D\u043D\u044F, \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F, \u043E\u0431\u043C\u0456\u043D \u0456 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 283,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 286,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 282,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u0412\u0430\u0448\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F, \u0432\u043A\u043B\u044E\u0447\u043D\u043E \u0437 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438, \u043E\u0431\u0440\u043E\u0431\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0432 \u0440\u043E\u0431\u043E\u0447\u0438\u0445 \u043E\u0444\u0456\u0441\u0430\u0445 \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0442\u0430 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0445 \u0456\u043D\u0448\u0438\u0445 \u043C\u0456\u0441\u0446\u044F\u0445, \u0434\u0435 \u0437\u043D\u0430\u0445\u043E\u0434\u044F\u0442\u044C\u0441\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0438, \u0437\u0430\u043B\u0443\u0447\u0435\u043D\u0456 \u0434\u043E \u043E\u0431\u0440\u043E\u0431\u043A\u0438 (\u0442\u043E\u0431\u0442\u043E \u043D\u0430\u0448 \u0445\u043E\u0441\u0442\u0438\u043D\u0433-\u043F\u0440\u043E\u0432\u0430\u0439\u0434\u0435\u0440, \u0441\u0435\u0440\u0432\u0456\u0441 Email \u0440\u043E\u0437\u0441\u0438\u043B\u043E\u043A, \u043F\u043B\u0430\u0442\u0456\u0436\u043D\u0456 \u043F\u0440\u043E\u0446\u0435\u0441\u043E\u0440\u0438 \u0430\u0431\u043E \u0447\u043B\u0435\u043D\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0438). \u0426\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0454, \u0449\u043E \u0446\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u043C\u043E\u0436\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u0438\u0441\u044C \u043D\u0430 \u043A\u043E\u043C\u043F\u2019\u044E\u0442\u0435\u0440\u0438, \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0456 \u0437\u0430 \u043C\u0435\u0436\u0430\u043C\u0438 \u0412\u0430\u0448\u043E\u0433\u043E \u0448\u0442\u0430\u0442\u0443, \u043F\u0440\u043E\u0432\u0456\u043D\u0446\u0456\u0457, \u043A\u0440\u0430\u0457\u043D\u0438 \u0447\u0438 \u0456\u043D\u0448\u043E\u0457 \u0443\u0440\u044F\u0434\u043E\u0432\u043E\u0457 \u044E\u0440\u0438\u0441\u0434\u0438\u043A\u0446\u0456\u0457, \u0434\u0435 \u0437\u0430\u043A\u043E\u043D\u0438 \u043F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u0434\u0430\u043D\u0438\u0445 \u043C\u043E\u0436\u0443\u0442\u044C \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u044F\u0442\u0438\u0441\u044F \u0432\u0456\u0434 \u0437\u0430\u043A\u043E\u043D\u0456\u0432 \u0412\u0430\u0448\u043E\u0457 \u044E\u0440\u0438\u0441\u0434\u0438\u043A\u0446\u0456\u0457." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 287,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 296,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u0412\u0430\u0448\u0430 \u0437\u0433\u043E\u0434\u0430 \u0437 \u0446\u0456\u0454\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0437 \u043F\u043E\u0434\u0430\u043B\u044C\u0448\u0438\u043C \u043D\u0430\u0434\u0430\u043D\u043D\u044F\u043C \u0442\u0430\u043A\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043E\u0437\u043D\u0430\u0447\u0430\u0454 \u0412\u0430\u0448\u0443 \u0437\u0433\u043E\u0434\u0443 \u043D\u0430 \u0442\u0430\u043A\u0443 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 296,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 300,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F \u0432\u0436\u0438\u0432\u0430\u0442\u0438\u043C\u0435 \u0432\u0441\u0456\u0445 \u0440\u043E\u0437\u0443\u043C\u043D\u043E \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0438\u0445 \u0437\u0430\u0445\u043E\u0434\u0456\u0432 \u0434\u043B\u044F \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u0432\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0437 \u0412\u0430\u0448\u0438\u043C\u0438 \u0434\u0430\u043D\u0438\u043C\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0446\u0456\u0454\u0457 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u0456 \u0436\u043E\u0434\u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0412\u0430\u0448\u0438\u0445 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u0447\u0438 \u043A\u0440\u0430\u0457\u043D\u0456 \u043D\u0435 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0432\u0430\u0442\u0438\u043C\u0435\u0442\u044C\u0441\u044F, \u044F\u043A\u0449\u043E \u043D\u0435 \u0431\u0443\u0434\u0435 \u0432\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0430\u0434\u0435\u043A\u0432\u0430\u0442\u043D\u0438\u0445 \u0437\u0430\u0441\u043E\u0431\u0456\u0432 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E, \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0447\u0438 \u0431\u0435\u0437\u043F\u0435\u043A\u0443 \u0412\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0442\u0430 \u0456\u043D\u0448\u043E\u0457 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 300,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 307,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0411\u0435\u0437\u043F\u0435\u043A\u0430 \u0412\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 309,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 312,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 308,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u0411\u0435\u0437\u043F\u0435\u043A\u0430 \u0412\u0430\u0448\u0438\u0445 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u0432\u0430\u0436\u043B\u0438\u0432\u0430 \u0434\u043B\u044F \u043D\u0430\u0441, \u0430\u043B\u0435 \u043F\u0430\u043C\u2019\u044F\u0442\u0430\u0439\u0442\u0435, \u0449\u043E \u0436\u043E\u0434\u0435\u043D \u043C\u0435\u0442\u043E\u0434 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0456 \u0447\u0435\u0440\u0435\u0437 \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0430\u0431\u043E \u043C\u0435\u0442\u043E\u0434 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u043D\u043D\u044F \u043D\u0435 \u0454 \u043D\u0430 100% \u0431\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u043C. \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0442\u0435, \u0449\u043E \u043C\u0438 \u043F\u0440\u0430\u0433\u043D\u0435\u043C\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u0435\u0440\u0446\u0456\u0439\u043D\u043E \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u043D\u0456 \u0437\u0430\u0441\u043E\u0431\u0438 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0412\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u043C\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u043C\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0432\u0430\u0442\u0438 \u0457\u0445 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u0443 \u0431\u0435\u0437\u043F\u0435\u043A\u0443." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 313,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 320,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0412\u0438\u043F\u0430\u0434\u043A\u0438, \u043A\u043E\u043B\u0438 \u043C\u0438 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u0456 \u043D\u0430\u0434\u0430\u0442\u0438 \u0412\u0430\u0448\u0456 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 322,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 325,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 321,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "SerhiiShevchenko.com \u0440\u043E\u0437\u043A\u0440\u0438\u0454 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u044F\u043A\u0449\u043E \u0446\u044C\u043E\u0433\u043E \u0432\u0438\u043C\u0430\u0433\u0430\u0454 \u0437\u0430\u043A\u043E\u043D \u0430\u0431\u043E \u043F\u043E\u0432\u0456\u0441\u0442\u043A\u0430 \u0434\u043E \u0441\u0443\u0434\u0443, \u0430\u0431\u043E \u044F\u043A\u0449\u043E \u043C\u0438 \u043E\u0431\u0491\u0440\u0443\u043D\u0442\u043E\u0432\u0430\u043D\u043E \u0432\u0432\u0430\u0436\u0430\u0454\u043C\u043E, \u0449\u043E \u0442\u0430\u043A\u0430 \u0434\u0456\u044F \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u0430 \u0434\u043B\u044F (a) \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0437\u0430\u043A\u043E\u043D\u0443 \u0442\u0430 \u043E\u0431\u0491\u0440\u0443\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0445 \u0437\u0430\u043F\u0438\u0442\u0456\u0432 \u043F\u0440\u0430\u0432\u043E\u043E\u0445\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u043E\u0440\u0433\u0430\u043D\u0456\u0432; (b) \u0434\u043B\u044F \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u0438\u0445 \u0423\u043C\u043E\u0432 \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u043F\u043E\u0441\u043B\u0443\u0433 \u0430\u0431\u043E \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0431\u0435\u0437\u043F\u0435\u043A\u0438 \u0447\u0438 \u0446\u0456\u043B\u0456\u0441\u043D\u043E\u0441\u0442\u0456 \u043D\u0430\u0448\u043E\u0433\u043E \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0443; \u0442\u0430/\u0430\u0431\u043E (c) \u0434\u043B\u044F \u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 \u0447\u0438 \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u043F\u0440\u0430\u0432, \u0432\u043B\u0430\u0441\u043D\u043E\u0441\u0442\u0456 \u0447\u0438 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E\u0457 \u0431\u0435\u0437\u043F\u0435\u043A\u0438 SerhiiShevchenko.com, \u043D\u0430\u0448\u0438\u0445 \u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0447\u0438 \u0456\u043D\u0448\u0438\u0445 \u043E\u0441\u0456\u0431." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 326,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 335,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 337,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 340,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 336,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041C\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u043C\u043E \u0412\u0430\u0448\u0456 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C \u043C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0435\u0440\u0456\u043E\u0434\u0443 \u0447\u0430\u0441\u0443, \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E\u0433\u043E \u0434\u043B\u044F \u0446\u0456\u043B\u0435\u0439, \u0432\u0438\u043A\u043B\u0430\u0434\u0435\u043D\u0438\u0445 \u0443 \u0446\u0456\u0439 \u041F\u043E\u043B\u0456\u0442\u0438\u0446\u0456 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456. \u041C\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438\u043C\u0435\u043C\u043E \u0442\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438\u043C\u0435\u043C\u043E \u0412\u0430\u0448\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0432 \u043E\u0431\u0441\u044F\u0437\u0456, \u043D\u0435\u043E\u0431\u0445\u0456\u0434\u043D\u043E\u043C\u0443 \u0434\u043B\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u0438\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0438\u0445 \u0437\u043E\u0431\u043E\u0432\u2019\u044F\u0437\u0430\u043D\u044C (\u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, \u044F\u043A\u0449\u043E \u0432\u0456\u0434 \u043D\u0430\u0441 \u0432\u0438\u043C\u0430\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u0412\u0430\u0448\u0456 \u0434\u0430\u043D\u0456 \u0434\u043B\u044F \u0434\u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0447\u0438\u043D\u043D\u043E\u0433\u043E \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0432\u0441\u0442\u0432\u0430), \u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0441\u0443\u043F\u0435\u0440\u0435\u0447\u043E\u043A \u0456 \u0437\u0430\u0431\u0435\u0437\u043F\u0435\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u043D\u0430\u0448\u0438\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0438\u0445 \u0443\u0433\u043E\u0434 \u0456 \u043F\u043E\u043B\u0456\u0442\u0438\u043A." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 341,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 349,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u042F\u043A \u0432\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F, \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u0430\u0431\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0441\u0432\u043E\u0457 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043D\u0456" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 351,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 354,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 350,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u0417\u0433\u0456\u0434\u043D\u043E \u0437 \u0446\u0456\u0454\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0442\u0430 \u0437\u0430\u043A\u043E\u043D\u043E\u043C, \u044F\u043A\u0449\u043E \u0412\u0438 \u043F\u0435\u0440\u0435\u0431\u0443\u0432\u0430\u0454\u0442\u0435 \u0432 \u0404\u0421, \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E:" }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 355,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { style: {
      listStyleType: "disc",
      paddingLeft: "20px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0417\u0430\u043F\u0438\u0442 \u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E " }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 364,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0412" }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 365,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0430\u0448\u0438\u0445 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0438\u0445 \u0434\u0430\u043D\u0438\u0445." }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 366,
          columnNumber: 29
        }, this),
        " \u041F\u0440\u0430\u0432\u043E \u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F, \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0430\u0431\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u044F\u043A\u0443 \u043C\u0438 \u043C\u0430\u0454\u043C\u043E \u043F\u0440\u043E \u0412\u0430\u0441. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F, \u043E\u043D\u043E\u0432\u0438\u0442\u0438 \u0430\u0431\u043E \u043F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u043F\u0438\u0442 \u043D\u0430 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0441\u0432\u043E\u0457\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u0437\u0432\u2019\u044F\u0437\u0430\u0432\u0448\u0438\u0441\u044C \u0437 \u043D\u0430\u043C\u0438 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: `mailto:${import.meta.env.VITE_MY_WORK_EMAIL}`, children: import.meta.env.VITE_MY_WORK_EMAIL }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 370,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 363,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0417\u0430\u043F\u0438\u0442 \u043D\u0430 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445, \u044F\u043A\u0456 \u043C\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u043C\u043E \u043F\u0440\u043E " }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 373,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0412\u0430\u0441." }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 374,
          columnNumber: 29
        }, this),
        " \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u043D\u0430 \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u043D\u0435\u043F\u043E\u0432\u043D\u043E\u0457 \u0430\u0431\u043E \u043D\u0435\u0442\u043E\u0447\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u043F\u0440\u043E \u0412\u0430\u0441, \u044F\u043A\u0443 \u043C\u0438 \u043C\u0430\u0454\u043C\u043E."
      ] }, void 0, true, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 372,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0417\u0430\u043F\u0435\u0440\u0435\u0447\u0435\u043D\u043D\u044F \u043F\u0440\u043E\u0442\u0438 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u0412\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445." }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 378,
          columnNumber: 29
        }, this),
        " \u0426\u0435 \u043F\u0440\u0430\u0432\u043E \u0456\u0441\u043D\u0443\u0454, \u044F\u043A\u0449\u043E \u043C\u0438 \u043F\u043E\u043A\u043B\u0430\u0434\u0430\u0454\u043C\u043E\u0441\u044F \u043D\u0430 \u0437\u0430\u043A\u043E\u043D\u043D\u0438\u0439 \u0456\u043D\u0442\u0435\u0440\u0435\u0441 \u044F\u043A \u043F\u0440\u0430\u0432\u043E\u0432\u0443 \u043E\u0441\u043D\u043E\u0432\u0443 \u0434\u043B\u044F \u043D\u0430\u0448\u043E\u0457 \u043E\u0431\u0440\u043E\u0431\u043A\u0438, \u0456 \u0454 \u0449\u043E\u0441\u044C \u0443 \u0412\u0430\u0448\u0456\u0439 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u0456\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457, \u0449\u043E \u0437\u043C\u0443\u0448\u0443\u0454 \u0412\u0430\u0441 \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0442\u0438 \u043D\u0430\u0448\u043E\u0457 \u043E\u0431\u0440\u043E\u0431\u043A\u0438 \u0412\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445 \u043D\u0430 \u0446\u0456\u0439 \u043F\u0456\u0434\u0441\u0442\u0430\u0432\u0456. \u0412\u0438 \u0442\u0430\u043A\u043E\u0436 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0438\u0442\u0438, \u044F\u043A\u0449\u043E \u043C\u0438 \u043E\u0431\u0440\u043E\u0431\u043B\u044F\u0454\u043C\u043E \u0412\u0430\u0448\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0434\u043B\u044F \u0446\u0456\u043B\u0435\u0439 \u043F\u0440\u044F\u043C\u043E\u0433\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443."
      ] }, void 0, true, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 377,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0417\u0430\u043F\u0438\u0442 \u043D\u0430" }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 386,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: " \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u0412\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445." }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 387,
          columnNumber: 29
        }, this),
        " \u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u041D\u0430\u0441 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0412\u0430\u0448\u0456 \u041E\u0441\u043E\u0431\u0438\u0441\u0442\u0456 \u0434\u0430\u043D\u0456, \u044F\u043A\u0449\u043E \u0434\u043B\u044F \u043D\u0430\u0441 \u043D\u0435\u043C\u0430\u0454 \u0432\u0430\u0433\u043E\u043C\u0438\u0445 \u043F\u0440\u0438\u0447\u0438\u043D \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0432\u0430\u0442\u0438 \u0457\u0445 \u043E\u0431\u0440\u043E\u0431\u043A\u0443."
      ] }, void 0, true, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 385,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0417\u0430\u043F\u0438\u0442 \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0412\u0430\u0448\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445." }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 392,
          columnNumber: 29
        }, this),
        " \u041C\u0438 \u043D\u0430\u0434\u0430\u043C\u043E \u0412\u0430\u043C \u0430\u0431\u043E \u043E\u0431\u0440\u0430\u043D\u0456\u0439 \u0412\u0430\u043C\u0438 \u0442\u0440\u0435\u0442\u0456\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u0456 \u0412\u0430\u0448\u0456 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456 \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u043E\u0432\u0430\u043D\u043E\u043C\u0443, \u0448\u0438\u0440\u043E\u043A\u043E \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043D\u043E\u043C\u0443, \u0447\u0438\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u043C\u0443 \u0444\u043E\u0440\u043C\u0430\u0442\u0456. \u0417\u0430\u0443\u0432\u0430\u0436\u0442\u0435, \u0449\u043E \u0446\u0435 \u043F\u0440\u0430\u0432\u043E \u043F\u043E\u0448\u0438\u0440\u044E\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u043E\u0432\u0430\u043D\u0443 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E, \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u044F\u043A\u043E\u0457 \u0412\u0438 \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u043D\u0430\u0434\u0430\u043B\u0438 \u041D\u0430\u043C \u0437\u0433\u043E\u0434\u0443, \u0430\u0431\u043E \u0434\u0435 \u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u043B\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044E \u0434\u043B\u044F \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u043A\u043E\u043D\u0442\u0440\u0430\u043A\u0442\u0443 \u0437 \u0412\u0430\u043C\u0438."
      ] }, void 0, true, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 391,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0412\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u043D\u043D\u044F \u0441\u0432\u043E\u0454\u0457 \u0437\u0433\u043E\u0434\u0438." }, void 0, false, {
          fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
          lineNumber: 400,
          columnNumber: 29
        }, this),
        "\u0412\u0438 \u043C\u0430\u0454\u0442\u0435 \u043F\u0440\u0430\u0432\u043E \u0432\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0441\u0432\u043E\u044E \u0437\u0433\u043E\u0434\u0443 \u043D\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0412\u0430\u0448\u0438\u0445 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0438\u0445 \u0434\u0430\u043D\u0438\u0445. \u042F\u043A\u0449\u043E \u0412\u0438 \u0432\u0456\u0434\u043A\u043B\u0438\u043A\u0430\u0454\u0442\u0435 \u0441\u0432\u043E\u044E \u0437\u0433\u043E\u0434\u0443, \u043C\u0438 \u043D\u0435 \u0437\u043C\u043E\u0436\u0435\u043C\u043E \u043D\u0430\u0434\u0430\u0442\u0438 \u0412\u0430\u043C \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E \u043F\u0435\u0432\u043D\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0456\u0439 \u0421\u0435\u0440\u0432\u0456\u0441\u0443."
      ] }, void 0, true, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 399,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 359,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 406,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u043D\u044F \u0412\u0430\u0448\u0438\u0445 \u043F\u0440\u0430\u0432 \u0449\u043E\u0434\u043E \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0434\u0430\u043D\u0438\u0445 GDPR" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 408,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 411,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 407,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      "\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044F \u0441\u0432\u043E\u0457\u043C\u0438 \u043F\u0440\u0430\u0432\u0430\u043C\u0438 \u043D\u0430 \u0434\u043E\u0441\u0442\u0443\u043F, \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F, \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0435\u043D\u043D\u044F, \u0437\u0432\u0435\u0440\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u0434\u043E \u043D\u0430\u0441 \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E ",
      import.meta.env.VITE_MY_WORK_EMAIL,
      ". \u0417\u0432\u0435\u0440\u043D\u0456\u0442\u044C \u0443\u0432\u0430\u0433\u0443, \u0449\u043E \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0412\u0430\u0441 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438 \u0412\u0430\u0448\u0443 \u043E\u0441\u043E\u0431\u0443, \u043F\u0435\u0440\u0448 \u043D\u0456\u0436 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u043D\u0430 \u0442\u0430\u043A\u0456 \u0437\u0430\u043F\u0438\u0442\u0438. \u042F\u043A\u0449\u043E \u0412\u0438 \u0437\u0440\u043E\u0431\u0438\u0442\u0435 \u0437\u0430\u043F\u0438\u0442, \u043C\u0438 \u0437\u0440\u043E\u0431\u0438\u043C\u043E \u0432\u0441\u0435 \u043C\u043E\u0436\u043B\u0438\u0432\u0435, \u0449\u043E\u0431 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438 \u0412\u0430\u043C \u044F\u043A\u043E\u043C\u043E\u0433\u0430 \u0448\u0432\u0438\u0434\u0448\u0435."
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 412,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 419,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0434\u0456\u0442\u0435\u0439" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 420,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 423,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 419,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041C\u0438 \u043D\u0435 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E \u0436\u043E\u0434\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0432\u0456\u0434 \u043E\u0441\u0456\u0431 \u0432\u0456\u043A\u043E\u043C \u0434\u043E 18 \u0440\u043E\u043A\u0456\u0432 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E COPPA (\u0417\u0430\u043A\u043E\u043D \u043F\u0440\u043E \u0437\u0430\u0445\u0438\u0441\u0442 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u0434\u0456\u0442\u0435\u0439 \u0432 \u0406\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0456) \u0456 GDPR (\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442 \u0404\u0421 \u0449\u043E\u0434\u043E \u0437\u0430\u0445\u0438\u0441\u0442\u0443 \u0434\u0430\u043D\u0438\u0445). \u041D\u0430\u0448 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442 \u0456 \u0439\u043E\u0433\u043E \u0432\u043C\u0456\u0441\u0442 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u0456 \u0434\u043B\u044F \u043E\u0441\u0456\u0431 \u0432\u0456\u043A\u043E\u043C \u0432\u0456\u0434 18 \u0440\u043E\u043A\u0456\u0432." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 424,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 430,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u0417\u043C\u0456\u043D\u0438 \u0434\u043E \u0446\u0456\u0454\u0457 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 432,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 435,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 431,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u0427\u0430\u0441 \u0432\u0456\u0434 \u0447\u0430\u0441\u0443 \u043C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043E\u043D\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438 \u043D\u0430\u0448\u0443 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456. \u041F\u0435\u0440\u0456\u043E\u0434\u0438\u0447\u043D\u043E \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0439\u0442\u0435 \u0446\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456. \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E\u0457 \u0447\u0435\u0440\u0435\u0437 \u0412\u0435\u0431-\u0441\u0430\u0439\u0442 \u0430\u0431\u043E \u043D\u0430 \u043D\u044C\u043E\u043C\u0443, \u0430\u0431\u043E \u0439\u043E\u0433\u043E \u0432\u043C\u0456\u0441\u0442\u0443 \u043F\u0456\u0441\u043B\u044F \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457 \u0437\u043C\u0456\u043D \u0442\u0430/\u0430\u0431\u043E \u043C\u043E\u0434\u0438\u0444\u0456\u043A\u0430\u0446\u0456\u0439 \u043E\u0437\u043D\u0430\u0447\u0430\u0454 \u0412\u0430\u0448\u0443 \u0437\u0433\u043E\u0434\u0443 \u0437 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u043E\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u043E\u044E \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456. \u041C\u0438 \u0437\u0430\u043B\u0438\u0448\u0430\u0454\u043C\u043E \u0437\u0430 \u0441\u043E\u0431\u043E\u044E \u043F\u0440\u0430\u0432\u043E \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 \u0446\u044E \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0456 \u0432 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441 \u0431\u0435\u0437 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0436\u0435\u043D\u043D\u044F. \u041C\u0438 \u043C\u043E\u0436\u0435\u043C\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0438 \u0412\u0430\u0441 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E \u0442\u0430/\u0430\u0431\u043E \u0443 \u0432\u0438\u0434\u043D\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456 \u043D\u0430 \u043D\u0430\u0448\u043E\u043C\u0443 \u0412\u0435\u0431-\u0441\u0430\u0439\u0442\u0456 \u043F\u0440\u043E \u0434\u0435\u044F\u043A\u0456 \u0432\u0430\u0436\u043B\u0438\u0432\u0456 \u0437\u043C\u0456\u043D\u0438 \u0432 \u043D\u0430\u0448\u0456\u0439 \u041F\u043E\u043B\u0456\u0442\u0438\u0446\u0456 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 436,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 446,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-[#2a7a2a]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("strong", { children: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u0440 \u0434\u0430\u043D\u0438\u0445 \u0456 \u043E\u0431\u0440\u043E\u0431\u043D\u0438\u043A\u0438" }, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 447,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
        fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
        lineNumber: 450,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 446,
      columnNumber: 27
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "\u041C\u0438 \u0454 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0435\u0440\u0430\u043C\u0438 \u0434\u0430\u043D\u0438\u0445, \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u043C\u0438 \u0437\u0431\u0438\u0440\u0430\u0454\u043C\u043E \u0442\u0430 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0412\u0430\u0448\u0456 \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0456 \u0434\u0430\u043D\u0456. \u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u043D\u0430\u0434\u0456\u0439\u043D\u0438\u0445 \u0442\u0440\u0435\u0442\u0456\u0445 \u0441\u0442\u043E\u0440\u0456\u043D \u044F\u043A \u043D\u0430\u0448\u0438\u0445 \u043E\u0431\u0440\u043E\u0431\u043D\u0438\u043A\u0456\u0432 \u0434\u0430\u043D\u0438\u0445 \u0434\u043B\u044F \u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0445 \u0456 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0439\u043D\u0438\u0445 \u0446\u0456\u043B\u0435\u0439, \u0437\u043E\u043A\u0440\u0435\u043C\u0430 \u0434\u043B\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0456\u0432 \u0456 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u044E \u043F\u043E\u0448\u0442\u043E\u044E. \u041C\u0438 \u0434\u043E\u043A\u043B\u0430\u0434\u0430\u0454\u043C\u043E \u0440\u043E\u0437\u0443\u043C\u043D\u0438\u0445 \u0437\u0443\u0441\u0438\u043B\u044C, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u0442\u0438\u0441\u044F, \u0449\u043E \u043D\u0430\u0448\u0456 \u043E\u0431\u0440\u043E\u0431\u043D\u0438\u043A\u0438 \u0434\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u044E\u0442\u044C \u0432\u0438\u043C\u043E\u0433\u0430\u043C GDPR." }, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 451,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("br", {}, void 0, false, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 458,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: [
      "\u042F\u043A\u0449\u043E \u0443 \u0412\u0430\u0441 \u0432\u0438\u043D\u0438\u043A\u043B\u0438 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0449\u043E\u0434\u043E \u0446\u0456\u0454\u0457 \u041F\u043E\u043B\u0456\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0441\u0442\u0456, \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043D\u0430\u043C \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0438\u0439 \u043B\u0438\u0441\u0442 \u043D\u0430 \u0430\u0434\u0440\u0435\u0441\u0443 ",
      import.meta.env.VITE_MY_WORK_EMAIL
    ] }, void 0, true, {
      fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
      lineNumber: 458,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
    lineNumber: 39,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
    lineNumber: 37,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/pages/uk/PrivacyPolicy_ua.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s7(PrivacyPolicyUa, "r0LIVANrHbaSV1YakUocq28Bis4=", false, function() {
  return [useParams, useTranslation];
});
_c8 = PrivacyPolicyUa;
var _c8;
$RefreshReg$(_c8, "PrivacyPolicyUa");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/library/Privacy.jsx
var import_react4 = __toESM(require_react(), 1);
init_dist();
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/library/Privacy.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s8 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/library/Privacy.jsx"
  );
  import.meta.hot.lastModified = "1759184275488.007";
}
var privacyComponents = {
  en: PrivacyPolicy,
  uk: PrivacyPolicyUa
};
var PrivacyWrapper = () => {
  _s8();
  const {
    t,
    i18n: i18n2
  } = useTranslation();
  const SelectedPrivacyComponent = privacyComponents[i18n2.language] || privacyComponents.en;
  const url = useLocation().href;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("title", { children: t("meta.privacy.title") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { name: "title", content: t("meta.privacy.title") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { name: "description", content: t("meta.privacy.description") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { name: "author", content: t("meta.author") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("link", { rel: "canonical", href: url }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "og:type", content: "article" }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "og:url", content: url }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "og:title", content: t("meta.privacy.title") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "og:description", content: t("meta.privacy.description") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "og:locale", content: t("meta.OgLocale") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "og:site_name", content: t("meta.author") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "twitter:card", content: "summary_large_image" }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "twitter:site", content: url }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "twitter:title", content: t("meta.privacy.title") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("meta", { property: "twitter:description", content: t("meta.privacy.description") }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "Loading..." }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 62,
      columnNumber: 27
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(SelectedPrivacyComponent, {}, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/library/Privacy.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/library/Privacy.jsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s8(PrivacyWrapper, "9rM7aE9ca518L2fKJMptCDw4ViU=", false, function() {
  return [useTranslation, useLocation];
});
_c9 = PrivacyWrapper;
var Privacy_default = PrivacyWrapper;
var _c9;
$RefreshReg$(_c9, "PrivacyWrapper");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/library/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/library/index.js"
  );
  import.meta.hot.lastModified = "1758978716244.9612";
}

export {
  Navbar_default,
  Footer,
  TOS_default,
  Privacy_default
};
//# sourceMappingURL=/build/_shared/chunk-PYZ3CRA3.js.map
