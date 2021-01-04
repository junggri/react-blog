import React from "react";
import { Helmet } from "react-helmet";
import Logo from "../image/Logo.svg";

interface IReactHelmet {
   keywords: string
   description: string
   title: string
   favicon?: string
}

function ReactHelmet({ keywords, description, title, favicon }: IReactHelmet) {

   return (
      <Helmet>
         <meta name="description" content={description} />
         <meta name="keywords" content={keywords} />
         <title>{title}</title>
         <meta property="og:title" content={title} />
         <meta property="og:image" content={`http://junggri.com${Logo}`} />
         <meta property="og:site_name" content="junggri.com" />
         <meta property="og:description" content={description} />
         og:image:width - The number of pixels wide.
         og:image:height - The number of pixels high.
         <meta property="og:image:width" content="600" />
         <meta property="og:image:height" content="315" />
      </Helmet>
   );
}

export default ReactHelmet;