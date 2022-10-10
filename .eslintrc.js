module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-tabs": 0,
    "indent": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "semi": 0,
    "brace-style": 0,
    "object-curly-spacing": 0,
    "space-infix-ops": 0,
    "curly": 0,
    "keyword-spacing": 0,
    "no-multi-spaces": 0,
    "handle-callback-err": 0,
    "valid-typeof": 0
  }
}
