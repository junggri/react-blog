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
    return "\n      <!DOCTYPE html>\n      <html lang=\"ko\" " + helmet.htmlAttributes.toString() + ">\n      <head>\n         <title>\uC815\uADF8\uB9AC\uC758 \uBE14\uB85C\uADF8</title>\n         <meta charset=\"utf-8\" />\n         <meta content=\"width=device-width, initial-scale=1\" name=\"viewport\" />\n            " + helmet.title.toString() + "\n            " + helmet.meta.toString() + "\n            " + helmet.link.toString() + "\n         <meta content=\"http://www.junggri.com/image/og.jpg\" data-react-helmet=\"true\" property=\"og:image\" />\n         " + styles + "\n         <link href=\"" + manifest.files["main.css"] + "\" rel=\"stylesheet\" />\n         <!--    <link href=\"%PUBLIC_URL%/logo192.png\" rel=\"apple-touch-icon\"/>-->\n         <!-- manifest.json provides metadata used when your web app is installed on a\n         user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/\n       -->\n         <!--    <link href=\"%PUBLIC_URL%/manifest.json\" rel=\"manifest\"/>-->\n      \n      \n         <!---->\n      \n         <!--\n           Notice the use of %PUBLIC_URL% in the tags above.\n           It will be replaced with the URL of the `public` folder during the build.\n           Only files inside the `public` folder can be referenced from the HTML.\n           Unlike \"/favicon.ico\" or \"favicon.ico\", \"%PUBLIC_URL%/favicon.ico\" will\n           work correctly both with client-side routing and a non-root public URL.\n           Learn how to configure a non-root public URL by running `npm run build`.\n         -->\n         <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-186554267-1\"></script>\n         <script>\n               window.dataLayer = window.dataLayer || [];\n               function gtag() {\n                  dataLayer.push(arguments);\n               }\n               gtag(\"js\", new Date());\n               gtag(\"config\", \"UA-186554267-1\");\n            </script>\n         </head>\n         <body  " + helmet.bodyAttributes.toString() + ">\n         <noscript>You need to enable JavaScript to run this app.</noscript>\n         <div id=\"root\">\n            " + root + "   \n         </div>    \n          " + script + "\n           <script src=\"" + manifest.files["runtime-main.js"] + "\"></script>\n           " + chunks + "\n           <script src=\"" + manifest.files["main.js"] + "\"></script>  \n      </body>\n      </html>\n   ";
}
exports.default = createPage;
