import React from "react";
import { Helmet } from "react-helmet-async";

interface IReactHelmet {
   keywords: string
   description: string
   title: string
   img?: string
}

function ReactHelmet({ title, keywords, description, img = "http://junggri.com/image/og.jpg" }: IReactHelmet) {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name="description" content={description} data-react-helmet="true" />
         <meta name="keywords" content={keywords} data-react-helmet="true" />
         <meta property="og:image" content={img} data-react-helmet="true" />
         <meta property="og:url" content={img} data-react-helmet="true" />
         <meta property="og:locale" content="ko_KR" data-react-helmet="true" />
         <meta property="og:type" content="website" data-react-helmet="true" />
         <meta property="og:site_name" content="JUNGGRI BLOG" data-react-helmet="true" />
         <meta property="og:title" content={title} data-react-helmet="true" />
         <meta property="og:description" content={description} data-react-helmet="true" />
         <meta property="og:image:width" content="1080" data-react-helmet="true" />
         <meta property="og:image:height" content="600" data-react-helmet="true" />
      </Helmet>
   );
}

export default ReactHelmet;