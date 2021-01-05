import React from "react";
import { Helmet } from "react-helmet";

interface IReactHelmet {
   keywords: string
   description: string
   title: string
}

function ReactHelmet({ keywords, description, title }: IReactHelmet) {
   return (
      <Helmet>
         <title>{title}</title>
         <meta name="description" content={description} data-react-helmet="true" />
         <meta name="keywords" content={keywords} data-react-helmet="true" />
         <meta property="og:title" content={title} data-react-helmet="true" />
         <meta property="og:url" content="http://www.junggri.com" data-react-helmet="true" />
         <meta property="og:image" content="http://www.junggri.com/image/og.jpg" data-react-helmet="true" />
         <meta property="og:site_name" content="junggri.com" data-react-helmet="true" />
         <meta property="og:description" content={description} data-react-helmet="true" />
      </Helmet>
   );
}

export default ReactHelmet;