var j=Object.create;var l=Object.defineProperty,b=Object.defineProperties,h=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,y=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var u=(r,e,o)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,m=(r,e)=>{for(var o in e||(e={}))p.call(e,o)&&u(r,o,e[o]);if(s)for(var o of s(e))D.call(e,o)&&u(r,o,e[o]);return r},c=(r,e)=>b(r,v(e));var P=(r,e)=>{for(var o in e)l(r,o,{get:e[o],enumerable:!0})},d=(r,e,o,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of x(e))!p.call(r,i)&&i!==o&&l(r,i,{get:()=>e[i],enumerable:!(n=h(e,i))||n.enumerable});return r};var C=(r,e,o)=>(o=r!=null?j(y(r)):{},d(e||!r||!r.__esModule?l(o,"default",{value:r,enumerable:!0}):o,r)),H=r=>d(l({},"__esModule",{value:!0}),r);var _={};P(_,{ViteMpPlugin:()=>O});module.exports=H(_);var g=require("vite"),f=require("path"),a=C(require("glob")),t=r=>(0,f.resolve)(process.cwd(),r);function O(){return{name:"vite-plugin-mp",config:r=>(0,g.mergeConfig)({root:"src",resolve:{alias:{"@":t("src")}},publicDir:t("public"),build:{emptyOutDir:!0,outDir:t("dist"),rollupOptions:{input:a.default.sync("src/**/*.html").reduce((e,o)=>c(m({},e),{[o.split("/").slice(1).join(".").replace(/(\.index)?\.html$/,"")]:o}),{}),output:{manualChunks:(e,{getModuleInfo:o})=>{if(["commonjsHelpers.js","\0commonjsHelpers.js","vite/modulepreload-polyfill"].includes(e))return"runtime";if(e.includes("/node_modules/")&&o(e).importers.length>1)return e.split("node_modules/")[1].split("/")[0]}}}}},r)}}0&&(module.exports={ViteMpPlugin});
//# sourceMappingURL=index.js.map