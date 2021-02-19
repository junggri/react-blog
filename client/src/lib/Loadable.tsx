import React from "react";
import baseLoadable from "@loadable/component";

export default function loadable(func: any) {
   return baseLoadable(func, { fallback: <div>Loading...</div> });
}

// export default (loader: any) => loadable(loader, { fallback: <p> Loading...</p> });