const GA =
   process.env.NODE_ENV === "development"
      ? ""
      : `<script>
           window.dataLayer = window.dataLayer || [];
           function gtag() {
                dataLayer.push(arguments);
           }
           gtag("js", new Date());
           gtag("config", "UA-186554267-1");
      </script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-186554267-1"></script>
       `;

export default function createPage(root: any, script: any, styles: any, helmet: any, tags: any) {
   return `
  <!DOCTYPE html>
  <html lang="ko" ${helmet.htmlAttributes.toString()}>
  <head>
     <title>정그리의 블로그입니다</title>
     <link rel="icon" href="https://junggri.com/images/Logo.svg"/>
     <meta charset="utf-8" />
     <meta content="width=device-width, initial-scale=1" name="viewport" />
     <meta name="description" content="자바스크립트와 웹 프로그래밍, 매일 매일 성장해 나가기를 원하는 블로입니다." />
     <meta name="keywords" content="자바스크립트,nodejs,알고리즘,책,프로그래밍,프론트엔드,백엔드"/>
     ${tags.styles}
     ${tags.links}
     ${GA}
     <script data-ad-client="ca-pub-6475394953521607" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
     ${styles}
     ${helmet.link.toString()}
     ${helmet.meta.toString()}
     </head>
     <body ${helmet.bodyAttributes.toString()}>
     <div id="root">
        ${root}   
     </div>
       ${script}  
       ${tags.scripts}
  </body>
  </html>
   `;
}
