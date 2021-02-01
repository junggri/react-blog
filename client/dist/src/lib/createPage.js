"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var manifest = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve("./build/asset-manifest.json"), "utf8"));
var chunks = Object.keys(manifest.files)
    .filter(function (key) { return /chunk\.js$/.exec(key); })
    .map(function (key) { return "<script src=\"" + manifest.files[key] + "\"></script>"; })
    .join("");
function createPage(root, script, styles, helmet) {
    return "\n      <!DOCTYPE html>\n      <html lang=\"ko\" " + helmet.htmlAttributes.toString() + ">\n      <head>\n          " + helmet.title.toString() + "\n          " + helmet.meta.toString() + "\n          " + helmet.link.toString() + "\n         <meta charset=\"utf-8\" />\n         <meta content=\"width=device-width, initial-scale=1\" name=\"viewport\" />\n         " + styles + "\n         <link href=\"" + manifest.files["main.css"] + "\" rel=\"stylesheet\" />\n         <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-186554267-1\"></script>\n         <script>\n               window.dataLayer = window.dataLayer || [];\n               function gtag() {\n                  dataLayer.push(arguments);\n               }\n               gtag(\"js\", new Date());\n               gtag(\"config\", \"UA-186554267-1\");\n            </script>\n         </head>\n         <body  " + helmet.bodyAttributes.toString() + ">\n         <noscript>You need to enable JavaScript to run this app.</noscript>\n         <div id=\"root\">\n            " + root + "   \n         </div>    \n          " + script + "\n           <script src=\"" + manifest.files["runtime-main.js"] + "\"></script>\n           " + chunks + "\n           <script src=\"" + manifest.files["main.js"] + "\"></script>  \n      </body>\n      </html>\n   ";
}
exports.default = createPage;
