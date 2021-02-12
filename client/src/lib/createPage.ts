import fs from "fs";
import path from "path";

const manifest = JSON.parse(
   fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8"),
);

const chunks = Object.keys(manifest.files)
   .filter(key => /chunk\.js$/.exec(key))
   .map(key => `<script src="${manifest.files[key]}"></script>`)
   .join("");


export default function createPage(root: any, script: any, styles: any, helmet: any) {
   return `
      <!DOCTYPE html>
      <html lang="ko" ${helmet.htmlAttributes.toString()}>
      <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
         <meta charset="utf-8" />
         <meta content="width=device-width, initial-scale=1" name="viewport" />
         ${styles}
         <link href="${manifest.files["main.css"]}" rel="stylesheet" />
         <script data-ad-client="ca-pub-6475394953521607" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
         <script async src="https://www.googletagmanager.com/gtag/js?id=UA-186554267-1"></script>
         <script>
               window.dataLayer = window.dataLayer || [];
               function gtag() {
                  dataLayer.push(arguments);
               }
               gtag("js", new Date());
               gtag("config", "UA-186554267-1");
            </script>
         </head>
         <body  ${helmet.bodyAttributes.toString()}>
         <div id="root">
            ${root}   
         </div>    
          ${script}
           <script src="${manifest.files["runtime-main.js"]}"></script>
           ${chunks}
           <script src="${manifest.files["main.js"]}"></script>  
      </body>
      </html>
   `;
}