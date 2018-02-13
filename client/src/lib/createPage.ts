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
         <title>정그리의 블로그입니다.</title>
         <meta name="description" content="자바스크립트와 nodejs 그리고 매일 성장해 나가길 원하는 블로입니다." />
         <meta name="keywords" content="자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드" />
         <meta property="og:title" content="정그리의 블로그입니다." />
         <meta property="og:image" content="http://www.junggri.com/images/og.jpg" />
         <meta property="og:image:secure_url" content="https://www.junggri.com/images/og.jpg" />
         <meta property="og:url" content="https://www.junggri.com" />
         <meta property="og:description" content="자바스크립트와 nodejs 그리고 매일 성장해 나가길 원하는 블로입니다."  />
         <meta property="og:locale" content="ko_KR" />
         <meta property="og:type" content="website" />
         <meta property="og:site_name" content="JUNGGRI BLOG" />
         <meta property="og:image:width" content="1080" />
         <meta property="og:image:height" content="600" />
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
         <meta charset="utf-8" />
         <meta content="width=device-width, initial-scale=1" name="viewport" />
         ${styles}
         <link href="${manifest.files["main.css"]}" rel="stylesheet" />
         <script>
               window.dataLayer = window.dataLayer || [];
               function gtag() {
                  dataLayer.push(arguments);
               }
               gtag("js", new Date());
               gtag("config", "UA-186554267-1");
            </script>
             <script async src="https://www.googletagmanager.com/gtag/js?id=UA-186554267-1"></script>
             <script data-ad-client="ca-pub-6475394953521607" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
         </head>
         <body ${helmet.bodyAttributes.toString()}>
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