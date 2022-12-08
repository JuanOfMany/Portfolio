module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
  },
  settings: {
      react: {
          version: 'detect',
      },
  },
  extends: [
      'prettier',
      'plugin:prettier/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:jsx-a11y/recommended',
  ],
  rules: {
      'no-unused-vars': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      indent: ['error', 2],
      'max-len': ['error', { code: 120 }],
  },
}