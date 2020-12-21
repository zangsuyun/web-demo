#! /usr/bin / env node

/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:17:09
 */

const fs = require('fs')
const [
  messageFile,
  commitType,
] = process.env.HUSKY_GIT_PARAMS.split(' ');

if (commitType == null) {
  const currentMessage = fs.readFileSync(messageFile, 'utf8');
  // eslint-disable-next-line no-console
  const pattern = new RegExp('(feat|fix|style|docs|refactor|pref|test):');
  const _currentMessage = currentMessage.replace('\n', '');
  if (!pattern.test(currentMessage) && currentMessage.indexOf('Merge branch') === -1) {
    // eslint-disable-next-line no-console
    console.error(`\x1b[31m ${_currentMessage}不符合commit-msg规范，具体规范请访问 http://wiki.ixm5.cn/pages/viewpage.action?pageId=2918494 \x1b[31m`);
    process.exit(1);
  }

  if (_currentMessage.length <= 10) {
    // eslint-disable-next-line no-console
    console.error(`\x1b[31m ${_currentMessage}提交的信息字数不得少于5个字符`);
    process.exit(1);
  }

  process.exit(0);
}
