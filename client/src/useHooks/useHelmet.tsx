import React from 'react'
import {Helmet} from "react-helmet";


interface IReactHelmet {
    keywords: string
    description: string
    title: string
    favicon: string
}

function ReactHelmet({keywords, description, title, favicon}: IReactHelmet) {
    return (
        <Helmet>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <title>{title}</title>
            <meta property="og:title" content={title}/>
            <meta property="og:image" content={favicon}/>
            <meta property="og:site_name" content="junggri.com"/>
            <meta property="og:description" content={description}/>
        </Helmet>
    )
}

export default ReactHelmet