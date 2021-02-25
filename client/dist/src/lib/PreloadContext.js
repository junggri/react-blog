"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePreloader = exports.Preloader = void 0;
var react_1 = require("react");
var PreloadContext = react_1.createContext(null);
exports.default = PreloadContext;
var Preloader = function (_a) {
    var resolve = _a.resolve;
    var preloadContext = react_1.useContext(PreloadContext);
    if (!preloadContext)
        return null;
    if (preloadContext.done)
        return null;
    if (resolve.length !== 0)
        resolve.forEach(function (func) {
            preloadContext.promises.push(Promise.resolve(func()));
        });
    return null;
};
exports.Preloader = Preloader;
var usePreloader = function (resolve) {
    var preloadContext = react_1.useContext(PreloadContext);
    console.log(preloadContext);
    if (!preloadContext)
        return null;
    if (preloadContext.done)
        return null;
    preloadContext.promises.push(Promise.resolve(resolve()));
};
exports.usePreloader = usePreloader;
