import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom";
import App from "./shared/App";
import path from "path";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "@lib/store";
import { Helmet } from "react-helmet";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import createPage from "./lib/createPage";
import PreloadContext from "./lib/PreloadContext";

const statsFile = path.resolve("./build/loadable-stats.json");

const app = express();
app.disable("x-powered-by");

const serverRender = async (req: any, res: any, next: any) => {
   const sheet = new ServerStyleSheet();
   const context = {};
   const preloadContext: any = { done: false, promises: [] };
   const extractor = new ChunkExtractor({ statsFile });
   const jsx = (
      <ChunkExtractorManager extractor={extractor}>
         <PreloadContext.Provider value={preloadContext}>
            <Provider store={store}>
               <StaticRouter location={req.url} context={context}>
                  <GlobalStyles />
                  <App />
               </StaticRouter>
            </Provider>
         </PreloadContext.Provider>
      </ChunkExtractorManager>
   );
   ReactDOMServer.renderToStaticMarkup(jsx);
   try {
      await Promise.all(preloadContext.promises);
   } catch (e) {
      console.error(e);
      return res.status(500);
   }
   preloadContext.done = true;
   const html = ReactDOMServer.renderToString(sheet.collectStyles(jsx));
   const styles = sheet.getStyleTags();
   const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
   const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`;
   const RHelmet = Helmet.renderStatic();

   const tags = {
      scripts: extractor.getScriptTags(),
      links: extractor.getLinkTags(),
      styles: extractor.getStyleTags(),
   };
   res.send(createPage(html, stateScript, styles, RHelmet, tags));
};
const server = express.static(path.resolve("./build"), { index: false });

app.use(server);
app.use(serverRender);

app.listen(4000, () => {
   console.log(`listen 4000 port`);
});
