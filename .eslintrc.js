module.exports = {
    extends: ['@jcmtallon/eslint-config-glamping-react-ts', '@jcmtallon/eslint-config-glamping-react-ts/hooks', "plugin:prettier/recommended"],
    rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'default-param-last': 'off',
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        'react/function-component-definition': ['error', {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        }],
        '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }]
      },
      // Eslint was complaining that this file didn't match my project config. 
      // I applied the most voted solution indicated in this thread. Narrowing down the parser option to only ts files. 
      // https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser
      overrides: [
        {
          files: ['*.ts', '*.tsx'],
          parserOptions: {
            project: ['./tsconfig.json'],
          },
        },
      ],
  }