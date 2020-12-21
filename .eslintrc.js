/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:22:01
 */
module.exports = {
  "parser": '@typescript-eslint/parser',
  "plugins": [
    "jsx-control-statements",
    "@typescript-eslint"
  ],
  "rules": {
    "react/jsx-no-undef": [2, { "allowGlobals": true }]
  },
  "extends": ["react-app", "plugin:jsx-control-statements/recommended"],
}
