module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential'],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': 0,
    "no-unused-vars":"off",
    'vue/no-unused-vars': "off"
  },

  'extends': [
    'plugin:vue/essential'
  ]
}
