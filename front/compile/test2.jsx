import React from "react";
import loadable from "@loadable/component";
const T2est2 = loadable(() => import(/* webpackChunkName: "Header" */ "./test2"));
const Test2 = () => {
    return <div>test2</div>;
};
export default Test2;
