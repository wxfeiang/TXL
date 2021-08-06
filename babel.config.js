module.exports = {
  presets: [['@babel/preset-env', { modules: false }]],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
    // 放弃使用  acyc  awit
    // '@babel/transform-runtime',
    // [
    //   'transform-runtime',
    //   {
    //     helpers: false,
    //     polyfill: false,
    //     regenerator: true,
    //     moduleName: '@babel/plugin-transform-runtime',
    //   },
    // ],
  ],
}
