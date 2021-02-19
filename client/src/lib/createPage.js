"use strict";
// const manifest = JSON.parse(
//    fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8"),
// );
//
// const chunks = Object.keys(manifest.files)
//    .filter(key => /chunk\.js$/.exec(key))
//    .map(key => `<script src="${manifest.files[key]}"></script>`)
//    .join("");
Object.defineProperty(exports, "__esModule", { value: true });
var GA = process.env.NODE_ENV === "development"
    ? ""
    : "<script>\n           window.dataLayer = window.dataLayer || [];\n           function gtag() {\n                dataLayer.push(arguments);\n           }\n           gtag(\"js\", new Date());\n           gtag(\"config\", \"UA-186554267-1\");\n      </script>\n      <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-186554267-1\"></script>\n       ";
function createPage(root, script, styles, helmet, tags) {
    return "\n      <!DOCTYPE html>\n      <html lang=\"ko\" " + helmet.htmlAttributes.toString() + ">\n      <head>\n         <title>\uC815\uADF8\uB9AC\uC758 \uBE14\uB85C\uADF8\uC785\uB2C8\uB2E4</title>\n         <meta charset=\"utf-8\" />\n         <meta content=\"width=device-width, initial-scale=1\" name=\"viewport\" />\n         <meta name=\"description\" content=\"\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC640 \uC6F9 \uD504\uB85C\uADF8\uB798\uBC0D, \uB9E4\uC77C \uB9E4\uC77C \uC131\uC7A5\uD574 \uB098\uAC00\uAE30\uB97C \uC6D0\uD558\uB294 \uBE14\uB85C\uC785\uB2C8\uB2E4.\" />\n         <meta name=\"keywords\" content=\"\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8,nodejs,\uC54C\uACE0\uB9AC\uC998,\uCC45,\uD504\uB85C\uADF8\uB798\uBC0D,\uD504\uB860\uD2B8\uC5D4\uB4DC,\uBC31\uC5D4\uB4DC\"/>\n         " + GA + "\n         <script data-ad-client=\"ca-pub-6475394953521607\" async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n         " + tags.links + "\n         " + tags.style + "\n         " + helmet.link.toString() + "\n         " + helmet.meta.toString() + "\n         </head>\n         <body " + helmet.bodyAttributes.toString() + ">\n         <div id=\"root\">\n            " + root + "   \n         </div>    \n         " + tags.scripts + "\n      </body>\n      </html>\n   ";
}
exports.default = createPage;