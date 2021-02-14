import React from "react";
import { Helmet } from "react-helmet";

interface IReactHelmet {
   keywords: string
   description: string
   title: string
   canonical?: string
   img?: string
}

function ReactHelmet({ title, keywords, description }: IReactHelmet) {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name="description" content={description} />
         <meta name="keywords" content={keywords} />
         <meta property="og:image" content="http://www.junggri.com/images/og.jpg" />
         <meta property="og:image:secure_url" content="https://www.junggri.com/images/og.jpg" />
         <meta property="og:url" content="https://www.junggri.com" />
         <meta property="og:locale" content="ko_KR" />
         <meta property="og:type" content="website" />
         <meta property="og:site_name" content="JUNGGRI BLOG" />
         <meta property="og:image:width" content="1080" />
         <meta property="og:image:height" content="600" />
         <meta property="og:title" content={title} />
         <meta property="og:description" content={description} />
      </Helmet>
   );
}

export default ReactHelmet;