function isWebTarget(caller) {
   return Boolean(caller && caller.target === "web");
}

function isWebpack(caller) {
   return Boolean(caller && caller.name === "babel-loader");
}

module.exports = (api) => {
   const web = api.caller(isWebTarget);
   const webpack = api.caller(isWebpack);

   return {
      presets: [
         "@babel/preset-react",
         [
            "@babel/preset-env",
            {
               useBuiltIns: web ? "entry" : undefined,
               corejs: 3,
               targets: !web ? { node: "current" } : undefined,
               modules: webpack ? false : "commonjs",
            },
         ],
         "@babel/preset-typescript",
      ],
      plugins: ["@loadable/babel-plugin",
         ["module-resolver", {
            "root": ["./"],
            "alias": {
               "@src": "./src",
               "@pages": "./src/pages",
               "@component": "./src/component",
               "@useHooks": "./src/useHooks",
               "@lib": "./src/lib",
               "@modules": "./src/modules",
               "@config": "./src/config",
            },
         }]],

   };
};
