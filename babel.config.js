module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            _components: './src/components/',
            _models: './src/models/',
            _enums: './src/enums/',
            _screens: './src/screens/',
            _utils: './src/utils/',
            _navigation: './src/navigation',
            _hooks: './src/hooks/',
            _languages: './src/locales/languages',
            _i18n: './src/locales/i18n',
            _store: './src/store/',
            _rtkQuery: './src/rtkQuery/',
          },
        },
      ],
    ],
    presets: ['module:metro-react-native-babel-preset'],
    overrides: [
      {
        plugins: [
          [
            '@babel/plugin-transform-private-methods',
            {
              loose: true,
            },
          ],
        ],
      },
    ],
  };
};
