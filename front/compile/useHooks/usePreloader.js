"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePreloader = void 0;
var react_1 = require("react");
var PreloadContext = react_1.createContext(null);
exports.default = PreloadContext;
var usePreloader = function (resolve) {
    var preloadContext = react_1.useContext(PreloadContext);
    if (!preloadContext)
        return null;
    if (preloadContext.done)
        return null;
    preloadContext.promises.push(Promise.resolve(resolve()));
};
exports.usePreloader = usePreloader;
