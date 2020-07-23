module.exports = {
  verbose: true,
  transform: { // 配置编译器转换(相应文件对应相应转换器)
    '\\.tsx?$': ['ts-jest'],
    '\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: { // 将非 js 文件的模块转换成 js (jest只能测试 js)
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|s[ac]ss)$": "<rootDir>/test/__mocks__/styleMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>test/setupTests.js"],  // enzyme 的设置文件路径
};