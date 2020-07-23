// https://www.webpackjs.com/guides/dependency-management/#%E4%B8%8A%E4%B8%8B%E6%96%87%E6%A8%A1%E5%9D%97-api 中文文档
// https://webpack.js.org/guides/dependency-management/#context-module-api 英文文档
function importAll (r) {
  r.keys().forEach(r);
}

// require.context('./icons', true, /\.svg$/) 创建一个 icons 目录下匹配以.svg结尾的所有文件的上下文
try{
  importAll(require.context('../icons', true, /\.svg$/));
}catch(error){
}