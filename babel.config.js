module.exports = api => {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];

  const plugins = [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
