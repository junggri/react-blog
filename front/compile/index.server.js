"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var express_1 = __importDefault(require("express"));
var react_router_dom_1 = require("react-router-dom");
var App_1 = __importDefault(require("./App"));
var path_1 = __importDefault(require("path"));
var server_2 = require("@loadable/server");
var statsFile = path_1.default.resolve("./build/loadable-stats.json");
function createPage(root, tags) {
    return "\n       <!DOCTYPE html>\n       <html lang=\"ko\">\n       <head>\n          <title>\uC815\uADF8\uB9AC\uC758 \uBE14\uB85C\uADF8\uC785\uB2C8\uB2E4</title>\n          <meta charset=\"utf-8\" />\n          <meta content=\"width=device-width, initial-scale=1\" name=\"viewport\" />\n          <meta name=\"description\" content=\"\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC640 \uC6F9 \uD504\uB85C\uADF8\uB798\uBC0D, \uB9E4\uC77C \uB9E4\uC77C \uC131\uC7A5\uD574 \uB098\uAC00\uAE30\uB97C \uC6D0\uD558\uB294 \uBE14\uB85C\uC785\uB2C8\uB2E4.\" />\n          <meta name=\"keywords\" content=\"\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8,nodejs,\uC54C\uACE0\uB9AC\uC998,\uCC45,\uD504\uB85C\uADF8\uB798\uBC0D,\uD504\uB860\uD2B8\uC5D4\uB4DC,\uBC31\uC5D4\uB4DC\"/>\n          <script data-ad-client=\"ca-pub-6475394953521607\" async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\n          " + tags.styles + "\n          " + tags.links + "\n          </head>\n          <body>\n          <div id=\"root\">\n             " + root + "   \n          </div>    \n            " + tags.scripts + "\n       </body>\n       </html>\n    ";
}
var app = express_1.default();
var serverRender = function (req, res, next) {
    var context = {};
    var extractor = new server_2.ChunkExtractor({ statsFile: statsFile });
    var jsx = (react_1.default.createElement(server_2.ChunkExtractorManager, { extractor: extractor },
        react_1.default.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: context },
            react_1.default.createElement(App_1.default, null))));
    var root = server_1.default.renderToString(jsx);
    var tags = {
        scripts: extractor.getScriptTags(),
        links: extractor.getLinkTags(),
        styles: extractor.getStyleTags(),
    };
    res.send(createPage(root, tags));
};
var server = express_1.default.static(path_1.default.resolve("./build"), { index: false });
app.use(server);
app.use(serverRender);
app.listen(4000, function () {
    console.log("listen 4000 port");
});
