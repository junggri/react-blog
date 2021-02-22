import React from "react";
import ReactDOMserver from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import path from "path";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
const statsFile = path.resolve("./build/loadable-stats.json");
function createPage(root, tags) {
    return `
       <!DOCTYPE html>
       <html lang="ko">
       <head>
          <title>정그리의 블로그입니다</title>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="description" content="자바스크립트와 웹 프로그래밍, 매일 매일 성장해 나가기를 원하는 블로입니다." />
          <meta name="keywords" content="자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드"/>
          <script data-ad-client="ca-pub-6475394953521607" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          ${tags.styles}
          ${tags.links}
          </head>
          <body>
          <div id="root">
             ${root}   
          </div>    
            ${tags.scripts}
       </body>
       </html>
    `;
}
const app = express();
const serverRender = (req, res, next) => {
    const context = {};
    const extractor = new ChunkExtractor({ statsFile });
    const jsx = (<ChunkExtractorManager extractor={extractor}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ChunkExtractorManager>);
    const root = ReactDOMserver.renderToString(jsx);
    const tags = {
        scripts: extractor.getScriptTags(),
        links: extractor.getLinkTags(),
        styles: extractor.getStyleTags(),
    };
    res.send(createPage(root, tags));
};
const server = express.static(path.resolve("./build"), { index: false });
app.use(server);
app.use(serverRender);
app.listen(4000, () => {
    console.log(`listen 4000 port`);
});
