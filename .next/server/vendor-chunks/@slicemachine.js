"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@slicemachine";
exports.ids = ["vendor-chunks/@slicemachine"];
exports.modules = {

/***/ "(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/SliceSimulatorWrapper.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@slicemachine/adapter-next/dist/simulator/SliceSimulatorWrapper.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SliceSimulatorWrapper: () => (/* binding */ SliceSimulatorWrapper)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var _prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/simulator/kit */ \"(ssr)/./node_modules/@prismicio/simulator/dist/kit.js\");\n\n\nconst SliceSimulatorWrapper = ({ className, children, zIndex, background, message, hasSlices }) => {\n  const defaultProps = (0,_prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_1__.getDefaultProps)();\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { className: [_prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_1__.simulatorClass, className].filter(Boolean).join(\" \"), style: {\n    zIndex: typeof zIndex === \"undefined\" ? defaultProps.zIndex : zIndex ?? void 0,\n    position: \"fixed\",\n    top: 0,\n    left: 0,\n    width: \"100%\",\n    height: \"100vh\",\n    overflow: \"auto\",\n    background: typeof background === \"undefined\" ? defaultProps.background : background ?? void 0\n  }, children: message ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"article\", { dangerouslySetInnerHTML: { __html: message } }) : hasSlices ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", { id: \"root\", className: _prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_1__.simulatorRootClass, onClickCapture: _prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_1__.onClickHandler, onSubmitCapture: _prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_1__.disableEventHandler, children }) : null });\n};\n\n//# sourceMappingURL=SliceSimulatorWrapper.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNsaWNlbWFjaGluZS9hZGFwdGVyLW5leHQvZGlzdC9zaW11bGF0b3IvU2xpY2VTaW11bGF0b3JXcmFwcGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3QztBQUM0RjtBQUNwSSxpQ0FBaUMsNkRBQTZEO0FBQzlGLHVCQUF1Qix5RUFBZTtBQUN0QyxTQUFTLHNEQUFHLFVBQVUsWUFBWSxvRUFBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxzQkFBc0Isc0RBQUcsY0FBYywyQkFBMkIsbUJBQW1CLGdCQUFnQixzREFBRyxVQUFVLHVCQUF1Qix3RUFBa0Isa0JBQWtCLG9FQUFjLG1CQUFtQix5RUFBbUIsWUFBWSxVQUFVO0FBQzFQO0FBR0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zdGFydGVyLXByaXNtaWMtbWluaW1hbC10cy8uL25vZGVfbW9kdWxlcy9Ac2xpY2VtYWNoaW5lL2FkYXB0ZXItbmV4dC9kaXN0L3NpbXVsYXRvci9TbGljZVNpbXVsYXRvcldyYXBwZXIuanM/MmQwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGdldERlZmF1bHRQcm9wcywgc2ltdWxhdG9yQ2xhc3MsIHNpbXVsYXRvclJvb3RDbGFzcywgb25DbGlja0hhbmRsZXIsIGRpc2FibGVFdmVudEhhbmRsZXIgfSBmcm9tIFwiQHByaXNtaWNpby9zaW11bGF0b3Iva2l0XCI7XG5jb25zdCBTbGljZVNpbXVsYXRvcldyYXBwZXIgPSAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCB6SW5kZXgsIGJhY2tncm91bmQsIG1lc3NhZ2UsIGhhc1NsaWNlcyB9KSA9PiB7XG4gIGNvbnN0IGRlZmF1bHRQcm9wcyA9IGdldERlZmF1bHRQcm9wcygpO1xuICByZXR1cm4ganN4KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBbc2ltdWxhdG9yQ2xhc3MsIGNsYXNzTmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLCBzdHlsZToge1xuICAgIHpJbmRleDogdHlwZW9mIHpJbmRleCA9PT0gXCJ1bmRlZmluZWRcIiA/IGRlZmF1bHRQcm9wcy56SW5kZXggOiB6SW5kZXggPz8gdm9pZCAwLFxuICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgIG92ZXJmbG93OiBcImF1dG9cIixcbiAgICBiYWNrZ3JvdW5kOiB0eXBlb2YgYmFja2dyb3VuZCA9PT0gXCJ1bmRlZmluZWRcIiA/IGRlZmF1bHRQcm9wcy5iYWNrZ3JvdW5kIDogYmFja2dyb3VuZCA/PyB2b2lkIDBcbiAgfSwgY2hpbGRyZW46IG1lc3NhZ2UgPyBqc3goXCJhcnRpY2xlXCIsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiBtZXNzYWdlIH0gfSkgOiBoYXNTbGljZXMgPyBqc3goXCJkaXZcIiwgeyBpZDogXCJyb290XCIsIGNsYXNzTmFtZTogc2ltdWxhdG9yUm9vdENsYXNzLCBvbkNsaWNrQ2FwdHVyZTogb25DbGlja0hhbmRsZXIsIG9uU3VibWl0Q2FwdHVyZTogZGlzYWJsZUV2ZW50SGFuZGxlciwgY2hpbGRyZW4gfSkgOiBudWxsIH0pO1xufTtcbmV4cG9ydCB7XG4gIFNsaWNlU2ltdWxhdG9yV3JhcHBlclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNsaWNlU2ltdWxhdG9yV3JhcHBlci5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/SliceSimulatorWrapper.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SliceSimulator: () => (/* binding */ SliceSimulator)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prismicio/simulator/kit */ \"(ssr)/./node_modules/@prismicio/simulator/dist/kit.js\");\n/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lz-string */ \"(ssr)/./node_modules/lz-string/libs/lz-string.js\");\n/* harmony import */ var _SliceSimulatorWrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SliceSimulatorWrapper.js */ \"(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/SliceSimulatorWrapper.js\");\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions.js */ \"(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/actions.js\");\n/* harmony import */ var _getSlices_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getSlices.js */ \"(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js\");\n/* __next_internal_client_entry_do_not_use__ SliceSimulator auto */ \n\n\n\n\n\n\nconst STATE_PARAMS_KEY = \"state\";\nconst throttle = // eslint-disable-next-line @typescript-eslint/no-explicit-any\n(fn, wait)=>{\n    let timeoutId;\n    let lastCallTime = 0;\n    return (...args)=>{\n        clearTimeout(timeoutId);\n        const now = Date.now();\n        const timeSinceLastCall = now - lastCallTime;\n        const delayForNextCall = wait - timeSinceLastCall;\n        if (delayForNextCall <= 0) {\n            lastCallTime = now;\n            fn(...args);\n        } else {\n            timeoutId = setTimeout(()=>{\n                lastCallTime = Date.now();\n                fn(...args);\n            }, delayForNextCall);\n        }\n    };\n};\nconst throttledRevalidatePath = throttle(_actions_js__WEBPACK_IMPORTED_MODULE_5__.revalidatePath, 300);\nconst simulatorManager = new _prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_2__.SimulatorManager();\nconst SliceSimulator = ({ children, background, zIndex, className })=>{\n    const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1__.useState(()=>(0,_prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_2__.getDefaultMessage)());\n    const state =  false ? 0 : void 0;\n    const hasSlices = (0,_getSlices_js__WEBPACK_IMPORTED_MODULE_6__.getSlices)(state).length > 0;\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        simulatorManager.state.on(_prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_2__.StateEventType.Slices, (newSlices)=>{\n            const url = new URL(window.location.href);\n            url.searchParams.set(STATE_PARAMS_KEY, (0,lz_string__WEBPACK_IMPORTED_MODULE_3__.compressToEncodedURIComponent)(JSON.stringify(newSlices)));\n            window.history.pushState(null, \"\", url);\n            const path = window.location.pathname;\n            setTimeout(()=>throttledRevalidatePath(path), 0);\n        }, \"simulator-slices\");\n        simulatorManager.state.on(_prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_2__.StateEventType.Message, (newMessage)=>setMessage(newMessage), \"simulator-message\");\n        simulatorManager.init();\n        return ()=>{\n            simulatorManager.state.off(_prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_2__.StateEventType.Slices, \"simulator-slices\");\n            simulatorManager.state.off(_prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_2__.StateEventType.Message, \"simulator-message\");\n        };\n    }, []);\n    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SliceSimulatorWrapper_js__WEBPACK_IMPORTED_MODULE_4__.SliceSimulatorWrapper, {\n        message,\n        hasSlices,\n        background,\n        zIndex,\n        className,\n        children\n    });\n};\n //# sourceMappingURL=SliceSimulator.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNsaWNlbWFjaGluZS9hZGFwdGVyLW5leHQvZGlzdC9zaW11bGF0b3IvcmVhY3Qtc2VydmVyL1NsaWNlU2ltdWxhdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O29FQUV3QztBQUNUO0FBQ2dFO0FBQ3JDO0FBQ1U7QUFDdEI7QUFDSDtBQUMzQyxNQUFNUyxtQkFBbUI7QUFDekIsTUFBTUMsV0FDSiw4REFBOEQ7QUFDOUQsQ0FBQ0MsSUFBSUM7SUFDSCxJQUFJQztJQUNKLElBQUlDLGVBQWU7SUFDbkIsT0FBTyxDQUFDLEdBQUdDO1FBQ1RDLGFBQWFIO1FBQ2IsTUFBTUksTUFBTUMsS0FBS0QsR0FBRztRQUNwQixNQUFNRSxvQkFBb0JGLE1BQU1IO1FBQ2hDLE1BQU1NLG1CQUFtQlIsT0FBT087UUFDaEMsSUFBSUMsb0JBQW9CLEdBQUc7WUFDekJOLGVBQWVHO1lBQ2ZOLE1BQU1JO1FBQ1IsT0FBTztZQUNMRixZQUFZUSxXQUFXO2dCQUNyQlAsZUFBZUksS0FBS0QsR0FBRztnQkFDdkJOLE1BQU1JO1lBQ1IsR0FBR0s7UUFDTDtJQUNGO0FBQ0Y7QUFFRixNQUFNRSwwQkFBMEJaLFNBQVNILHVEQUFjQSxFQUFFO0FBQ3pELE1BQU1nQixtQkFBbUIsSUFBSXJCLHNFQUFnQkE7QUFDN0MsTUFBTXNCLGlCQUFpQixDQUFDLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRTtJQUNqRSxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBRzdCLDJDQUFjLENBQUMsSUFBTUUsMkVBQWlCQTtJQUNwRSxNQUFNNkIsUUFBUSxNQUE2QixHQUFHLENBQWdFdkIsR0FBRyxLQUFLO0lBQ3RILE1BQU04QixZQUFZL0Isd0RBQVNBLENBQUN3QixPQUFPUSxNQUFNLEdBQUc7SUFDNUN2Qyw0Q0FBZSxDQUFDO1FBQ2RzQixpQkFBaUJTLEtBQUssQ0FBQ1UsRUFBRSxDQUFDdEMsb0VBQWNBLENBQUN1QyxNQUFNLEVBQUUsQ0FBQ0M7WUFDaEQsTUFBTUMsTUFBTSxJQUFJWixJQUFJQyxPQUFPQyxRQUFRLENBQUNDLElBQUk7WUFDeENTLElBQUlSLFlBQVksQ0FBQ1MsR0FBRyxDQUFDckMsa0JBQWtCSix3RUFBNkJBLENBQUMwQyxLQUFLQyxTQUFTLENBQUNKO1lBQ3BGVixPQUFPZSxPQUFPLENBQUNDLFNBQVMsQ0FBQyxNQUFNLElBQUlMO1lBQ25DLE1BQU1NLE9BQU9qQixPQUFPQyxRQUFRLENBQUNpQixRQUFRO1lBQ3JDL0IsV0FBVyxJQUFNQyx3QkFBd0I2QixPQUFPO1FBQ2xELEdBQUc7UUFDSDVCLGlCQUFpQlMsS0FBSyxDQUFDVSxFQUFFLENBQUN0QyxvRUFBY0EsQ0FBQ2lELE9BQU8sRUFBRSxDQUFDQyxhQUFleEIsV0FBV3dCLGFBQWE7UUFDMUYvQixpQkFBaUJnQyxJQUFJO1FBQ3JCLE9BQU87WUFDTGhDLGlCQUFpQlMsS0FBSyxDQUFDd0IsR0FBRyxDQUFDcEQsb0VBQWNBLENBQUN1QyxNQUFNLEVBQUU7WUFDbERwQixpQkFBaUJTLEtBQUssQ0FBQ3dCLEdBQUcsQ0FBQ3BELG9FQUFjQSxDQUFDaUQsT0FBTyxFQUFFO1FBQ3JEO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsT0FBT3JELHNEQUFHQSxDQUFDTSw0RUFBcUJBLEVBQUU7UUFBRXVCO1FBQVNVO1FBQVdiO1FBQVlDO1FBQVFDO1FBQVdIO0lBQVM7QUFDbEc7QUFHRSxDQUNGLDBDQUEwQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zdGFydGVyLXByaXNtaWMtbWluaW1hbC10cy8uL25vZGVfbW9kdWxlcy9Ac2xpY2VtYWNoaW5lL2FkYXB0ZXItbmV4dC9kaXN0L3NpbXVsYXRvci9yZWFjdC1zZXJ2ZXIvU2xpY2VTaW11bGF0b3IuanM/YzE2OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG4ndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2ltdWxhdG9yTWFuYWdlciwgZ2V0RGVmYXVsdE1lc3NhZ2UsIFN0YXRlRXZlbnRUeXBlIH0gZnJvbSBcIkBwcmlzbWljaW8vc2ltdWxhdG9yL2tpdFwiO1xuaW1wb3J0IHsgY29tcHJlc3NUb0VuY29kZWRVUklDb21wb25lbnQgfSBmcm9tIFwibHotc3RyaW5nXCI7XG5pbXBvcnQgeyBTbGljZVNpbXVsYXRvcldyYXBwZXIgfSBmcm9tIFwiLi4vU2xpY2VTaW11bGF0b3JXcmFwcGVyLmpzXCI7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCIuL2FjdGlvbnMuanNcIjtcbmltcG9ydCB7IGdldFNsaWNlcyB9IGZyb20gXCIuL2dldFNsaWNlcy5qc1wiO1xuY29uc3QgU1RBVEVfUEFSQU1TX0tFWSA9IFwic3RhdGVcIjtcbmNvbnN0IHRocm90dGxlID0gKFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAoZm4sIHdhaXQpID0+IHtcbiAgICBsZXQgdGltZW91dElkO1xuICAgIGxldCBsYXN0Q2FsbFRpbWUgPSAwO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgdGltZVNpbmNlTGFzdENhbGwgPSBub3cgLSBsYXN0Q2FsbFRpbWU7XG4gICAgICBjb25zdCBkZWxheUZvck5leHRDYWxsID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuICAgICAgaWYgKGRlbGF5Rm9yTmV4dENhbGwgPD0gMCkge1xuICAgICAgICBsYXN0Q2FsbFRpbWUgPSBub3c7XG4gICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGFzdENhbGxUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBmbiguLi5hcmdzKTtcbiAgICAgICAgfSwgZGVsYXlGb3JOZXh0Q2FsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuKTtcbmNvbnN0IHRocm90dGxlZFJldmFsaWRhdGVQYXRoID0gdGhyb3R0bGUocmV2YWxpZGF0ZVBhdGgsIDMwMCk7XG5jb25zdCBzaW11bGF0b3JNYW5hZ2VyID0gbmV3IFNpbXVsYXRvck1hbmFnZXIoKTtcbmNvbnN0IFNsaWNlU2ltdWxhdG9yID0gKHsgY2hpbGRyZW4sIGJhY2tncm91bmQsIHpJbmRleCwgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gZ2V0RGVmYXVsdE1lc3NhZ2UoKSk7XG4gIGNvbnN0IHN0YXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoU1RBVEVfUEFSQU1TX0tFWSkgOiB2b2lkIDA7XG4gIGNvbnN0IGhhc1NsaWNlcyA9IGdldFNsaWNlcyhzdGF0ZSkubGVuZ3RoID4gMDtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzaW11bGF0b3JNYW5hZ2VyLnN0YXRlLm9uKFN0YXRlRXZlbnRUeXBlLlNsaWNlcywgKG5ld1NsaWNlcykgPT4ge1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldChTVEFURV9QQVJBTVNfS0VZLCBjb21wcmVzc1RvRW5jb2RlZFVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuZXdTbGljZXMpKSk7XG4gICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgXCJcIiwgdXJsKTtcbiAgICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRocm90dGxlZFJldmFsaWRhdGVQYXRoKHBhdGgpLCAwKTtcbiAgICB9LCBcInNpbXVsYXRvci1zbGljZXNcIik7XG4gICAgc2ltdWxhdG9yTWFuYWdlci5zdGF0ZS5vbihTdGF0ZUV2ZW50VHlwZS5NZXNzYWdlLCAobmV3TWVzc2FnZSkgPT4gc2V0TWVzc2FnZShuZXdNZXNzYWdlKSwgXCJzaW11bGF0b3ItbWVzc2FnZVwiKTtcbiAgICBzaW11bGF0b3JNYW5hZ2VyLmluaXQoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2ltdWxhdG9yTWFuYWdlci5zdGF0ZS5vZmYoU3RhdGVFdmVudFR5cGUuU2xpY2VzLCBcInNpbXVsYXRvci1zbGljZXNcIik7XG4gICAgICBzaW11bGF0b3JNYW5hZ2VyLnN0YXRlLm9mZihTdGF0ZUV2ZW50VHlwZS5NZXNzYWdlLCBcInNpbXVsYXRvci1tZXNzYWdlXCIpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIGpzeChTbGljZVNpbXVsYXRvcldyYXBwZXIsIHsgbWVzc2FnZSwgaGFzU2xpY2VzLCBiYWNrZ3JvdW5kLCB6SW5kZXgsIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSk7XG59O1xuZXhwb3J0IHtcbiAgU2xpY2VTaW11bGF0b3Jcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TbGljZVNpbXVsYXRvci5qcy5tYXBcbiJdLCJuYW1lcyI6WyJqc3giLCJSZWFjdCIsIlNpbXVsYXRvck1hbmFnZXIiLCJnZXREZWZhdWx0TWVzc2FnZSIsIlN0YXRlRXZlbnRUeXBlIiwiY29tcHJlc3NUb0VuY29kZWRVUklDb21wb25lbnQiLCJTbGljZVNpbXVsYXRvcldyYXBwZXIiLCJyZXZhbGlkYXRlUGF0aCIsImdldFNsaWNlcyIsIlNUQVRFX1BBUkFNU19LRVkiLCJ0aHJvdHRsZSIsImZuIiwid2FpdCIsInRpbWVvdXRJZCIsImxhc3RDYWxsVGltZSIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJub3ciLCJEYXRlIiwidGltZVNpbmNlTGFzdENhbGwiLCJkZWxheUZvck5leHRDYWxsIiwic2V0VGltZW91dCIsInRocm90dGxlZFJldmFsaWRhdGVQYXRoIiwic2ltdWxhdG9yTWFuYWdlciIsIlNsaWNlU2ltdWxhdG9yIiwiY2hpbGRyZW4iLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwiY2xhc3NOYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ1c2VTdGF0ZSIsInN0YXRlIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiaGFzU2xpY2VzIiwibGVuZ3RoIiwidXNlRWZmZWN0Iiwib24iLCJTbGljZXMiLCJuZXdTbGljZXMiLCJ1cmwiLCJzZXQiLCJKU09OIiwic3RyaW5naWZ5IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInBhdGgiLCJwYXRobmFtZSIsIk1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwiaW5pdCIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/actions.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/actions.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   revalidatePath: () => (/* binding */ revalidatePath)
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(ssr)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"26e7fe749b94d3318168b8ec98dbce38abb98071":"revalidatePath"} */ var revalidatePath = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("26e7fe749b94d3318168b8ec98dbce38abb98071");

 //# sourceMappingURL=actions.js.map



/***/ }),

/***/ "(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSlices: () => (/* binding */ getSlices)\n/* harmony export */ });\n/* harmony import */ var _prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/simulator/kit */ \"(ssr)/./node_modules/@prismicio/simulator/dist/kit.js\");\n/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lz-string */ \"(ssr)/./node_modules/lz-string/libs/lz-string.js\");\n\n\nconst getSlices = (state) => {\n  return state ? JSON.parse((0,lz_string__WEBPACK_IMPORTED_MODULE_1__.decompressFromEncodedURIComponent)(state)) : (0,_prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_0__.getDefaultSlices)();\n};\n\n//# sourceMappingURL=getSlices.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNsaWNlbWFjaGluZS9hZGFwdGVyLW5leHQvZGlzdC9zaW11bGF0b3IvcmVhY3Qtc2VydmVyL2dldFNsaWNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEQ7QUFDRTtBQUM5RDtBQUNBLDRCQUE0Qiw0RUFBaUMsV0FBVywwRUFBZ0I7QUFDeEY7QUFHRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YXJ0ZXItcHJpc21pYy1taW5pbWFsLXRzLy4vbm9kZV9tb2R1bGVzL0BzbGljZW1hY2hpbmUvYWRhcHRlci1uZXh0L2Rpc3Qvc2ltdWxhdG9yL3JlYWN0LXNlcnZlci9nZXRTbGljZXMuanM/MTY2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREZWZhdWx0U2xpY2VzIH0gZnJvbSBcIkBwcmlzbWljaW8vc2ltdWxhdG9yL2tpdFwiO1xuaW1wb3J0IHsgZGVjb21wcmVzc0Zyb21FbmNvZGVkVVJJQ29tcG9uZW50IH0gZnJvbSBcImx6LXN0cmluZ1wiO1xuY29uc3QgZ2V0U2xpY2VzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZSA/IEpTT04ucGFyc2UoZGVjb21wcmVzc0Zyb21FbmNvZGVkVVJJQ29tcG9uZW50KHN0YXRlKSkgOiBnZXREZWZhdWx0U2xpY2VzKCk7XG59O1xuZXhwb3J0IHtcbiAgZ2V0U2xpY2VzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0U2xpY2VzLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@slicemachine/adapter-next/dist/simulator/react-server.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SliceSimulator: () => (/* reexport safe */ _react_server_SliceSimulator_js__WEBPACK_IMPORTED_MODULE_0__.SliceSimulator),\n/* harmony export */   getSlices: () => (/* reexport safe */ _react_server_getSlices_js__WEBPACK_IMPORTED_MODULE_1__.getSlices)\n/* harmony export */ });\n/* harmony import */ var _react_server_SliceSimulator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react-server/SliceSimulator.js */ \"(rsc)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js\");\n/* harmony import */ var _react_server_getSlices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-server/getSlices.js */ \"(rsc)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js\");\n\n\n\n//# sourceMappingURL=react-server.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHNsaWNlbWFjaGluZS9hZGFwdGVyLW5leHQvZGlzdC9zaW11bGF0b3IvcmVhY3Qtc2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0U7QUFDVjtBQUl0RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YXJ0ZXItcHJpc21pYy1taW5pbWFsLXRzLy4vbm9kZV9tb2R1bGVzL0BzbGljZW1hY2hpbmUvYWRhcHRlci1uZXh0L2Rpc3Qvc2ltdWxhdG9yL3JlYWN0LXNlcnZlci5qcz9mZWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNsaWNlU2ltdWxhdG9yIH0gZnJvbSBcIi4vcmVhY3Qtc2VydmVyL1NsaWNlU2ltdWxhdG9yLmpzXCI7XG5pbXBvcnQgeyBnZXRTbGljZXMgfSBmcm9tIFwiLi9yZWFjdC1zZXJ2ZXIvZ2V0U2xpY2VzLmpzXCI7XG5leHBvcnQge1xuICBTbGljZVNpbXVsYXRvcixcbiAgZ2V0U2xpY2VzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3Qtc2VydmVyLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliceSimulator: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/nathan/Desktop/volt-ai/node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/nathan/Desktop/volt-ai/node_modules/@slicemachine/adapter-next/dist/simulator/react-server/SliceSimulator.js#SliceSimulator`);


/***/ }),

/***/ "(action-browser)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/actions.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/actions.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   revalidatePath: () => (/* binding */ revalidatePath)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(action-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(action-browser)/./node_modules/next/dist/server/app-render/action-encryption.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(action-browser)/./node_modules/next/cache.js\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(action-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"26e7fe749b94d3318168b8ec98dbce38abb98071\":\"revalidatePath\"} */ \n\n\nasync function revalidatePath(path) {\n    (0,next_cache__WEBPACK_IMPORTED_MODULE_2__.revalidatePath)(path);\n}\n //# sourceMappingURL=actions.js.map\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__.ensureServerEntryExports)([\n    revalidatePath\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(\"26e7fe749b94d3318168b8ec98dbce38abb98071\", revalidatePath);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9Ac2xpY2VtYWNoaW5lL2FkYXB0ZXItbmV4dC9kaXN0L3NpbXVsYXRvci9yZWFjdC1zZXJ2ZXIvYWN0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRWdFO0FBQ2hFLGVBQWVBLGVBQWVFLElBQUk7SUFDaENELDBEQUFnQkEsQ0FBQ0M7QUFDbkI7QUFHRSxDQUNGLG1DQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zdGFydGVyLXByaXNtaWMtbWluaW1hbC10cy8uL25vZGVfbW9kdWxlcy9Ac2xpY2VtYWNoaW5lL2FkYXB0ZXItbmV4dC9kaXN0L3NpbXVsYXRvci9yZWFjdC1zZXJ2ZXIvYWN0aW9ucy5qcz9iMmU4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcbid1c2Ugc2VydmVyJztcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIGFzIHJldmFsaWRhdGVQYXRoJDEgfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuYXN5bmMgZnVuY3Rpb24gcmV2YWxpZGF0ZVBhdGgocGF0aCkge1xuICByZXZhbGlkYXRlUGF0aCQxKHBhdGgpO1xufVxuZXhwb3J0IHtcbiAgcmV2YWxpZGF0ZVBhdGhcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hY3Rpb25zLmpzLm1hcFxuIl0sIm5hbWVzIjpbInJldmFsaWRhdGVQYXRoIiwicmV2YWxpZGF0ZVBhdGgkMSIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/actions.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSlices: () => (/* binding */ getSlices)\n/* harmony export */ });\n/* harmony import */ var _prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/simulator/kit */ \"(rsc)/./node_modules/@prismicio/simulator/dist/kit.js\");\n/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lz-string */ \"(rsc)/./node_modules/lz-string/libs/lz-string.js\");\n\n\nconst getSlices = (state) => {\n  return state ? JSON.parse((0,lz_string__WEBPACK_IMPORTED_MODULE_1__.decompressFromEncodedURIComponent)(state)) : (0,_prismicio_simulator_kit__WEBPACK_IMPORTED_MODULE_0__.getDefaultSlices)();\n};\n\n//# sourceMappingURL=getSlices.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHNsaWNlbWFjaGluZS9hZGFwdGVyLW5leHQvZGlzdC9zaW11bGF0b3IvcmVhY3Qtc2VydmVyL2dldFNsaWNlcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEQ7QUFDRTtBQUM5RDtBQUNBLDRCQUE0Qiw0RUFBaUMsV0FBVywwRUFBZ0I7QUFDeEY7QUFHRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN0YXJ0ZXItcHJpc21pYy1taW5pbWFsLXRzLy4vbm9kZV9tb2R1bGVzL0BzbGljZW1hY2hpbmUvYWRhcHRlci1uZXh0L2Rpc3Qvc2ltdWxhdG9yL3JlYWN0LXNlcnZlci9nZXRTbGljZXMuanM/NTlkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREZWZhdWx0U2xpY2VzIH0gZnJvbSBcIkBwcmlzbWljaW8vc2ltdWxhdG9yL2tpdFwiO1xuaW1wb3J0IHsgZGVjb21wcmVzc0Zyb21FbmNvZGVkVVJJQ29tcG9uZW50IH0gZnJvbSBcImx6LXN0cmluZ1wiO1xuY29uc3QgZ2V0U2xpY2VzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiBzdGF0ZSA/IEpTT04ucGFyc2UoZGVjb21wcmVzc0Zyb21FbmNvZGVkVVJJQ29tcG9uZW50KHN0YXRlKSkgOiBnZXREZWZhdWx0U2xpY2VzKCk7XG59O1xuZXhwb3J0IHtcbiAgZ2V0U2xpY2VzXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0U2xpY2VzLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@slicemachine/adapter-next/dist/simulator/react-server/getSlices.js\n");

/***/ })

};
;