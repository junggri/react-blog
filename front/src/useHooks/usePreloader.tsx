import { createContext, useContext } from "react";

const PreloadContext = createContext(null);
export default PreloadContext;


export const usePreloader = (resolve: any) => {
   const preloadContext: any = useContext(PreloadContext);

   if (!preloadContext) return null;
   if (preloadContext.done) return null;
   preloadContext.promises.push(Promise.resolve(resolve()));
};
