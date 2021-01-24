import fs from "fs";
import path from "path";

const manifest = JSON.parse(
   fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8"),
);

const chunks = Object.keys(manifest.files)
   .filter(key => /chunk\.js$/.exec(key))
   .map(key => `<script src="${manifest.files[key]}"></script>`)
   .join("");


export default function createPage(root: any, script: any, styles: any) {
   return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
         <title>정그리의 블로그</title>
         <meta charset="utf-8" />
         <link href="favicon.ico" rel="icon" />
         <meta content="width=device-width, initial-scale=1" name="viewport" />
         <meta content="http://www.junggri.com/image/og.jpg" data-react-helmet="true" property="og:image" />
         ${styles}
         <link href="${manifest.files["main.css"]}" rel="stylesheet" />
         <!--    <link href="%PUBLIC_URL%/logo192.png" rel="apple-touch-icon"/>-->
         <!-- manifest.json provides metadata used when your web app is installed on a
         user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
       -->
         <!--    <link href="%PUBLIC_URL%/manifest.json" rel="manifest"/>-->
      
      
         <!---->
      
         <!--
           Notice the use of %PUBLIC_URL% in the tags above.
           It will be replaced with the URL of the \`public\` folder during the build.
           Only files inside the \`public\` folder can be referenced from the HTML.
           Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
           work correctly both with client-side routing and a non-root public URL.
           Learn how to configure a non-root public URL by running \`npm run build\`.
         -->
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
         <body>
         <noscript>You need to enable JavaScript to run this app.</noscript>
         <div id="root">
            ${root}   
         </div>    
          ${script}
           <script src="${manifest.files["runtime-main.js"]}"></script>
           ${chunks}
           <script src="${manifest.files["main.js"]}"></script>  
         <!--
        This HTML file is a template.
        If you open it directly in the browser, you will see an empty page.
        You can add webfonts, meta tags, or analytics to this file.
        The build step will place the bundled scripts into the <body> tag.
        To begin the development, run \`npm start\` or \`yarn start\`.
        To create a production bundle, use \`npm run build\` or \`yarn build\`.
      -->
      </body>
      </html>
   `;
}