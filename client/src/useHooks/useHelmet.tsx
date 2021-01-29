import React from "react";
import { Helmet } from "react-helmet-async";

interface IReactHelmet {
   keywords: string
   description: string
   title: string
   img?: string
}

function ReactHelmet({ keywords, description, title, img = "http://www.junggri.com/image/og.jpg" }: IReactHelmet) {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name="description" content={description} data-react-helmet="true" />
         <meta name="keywords" content={keywords} data-react-helmet="true" />
         <meta property="og:title" content={title} data-react-helmet="true" />
         <meta property="og:url" content="http://www.junggri.com" data-react-helmet="true" />
         <meta property="og:locale" content="ko_KR" />
         <meta property="og:type" content="website" />
         <meta property="og:image" content={img} data-react-helmet="true" />
         <meta property="og:site_name" content="junggri blog" data-react-helmet="true" />
         <meta property="og:description" content={description} data-react-helmet="true" />
      </Helmet>
   );
}

export default ReactHelmet;