const baseJestConfig = require("./jest.config");

module.exports = Object.assign({}, baseJestConfig, {
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results/jest",
        outputName: "results.xml",
      },
    ]
  ] // jest-junit 生成 xml 测试报表(默认路径是.test-results/jest/results.xml)
})
