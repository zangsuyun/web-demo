#! /usr/bin / env node

/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:17:34
 */

const execSync = require('child_process').execSync;

// 获取当前分支名称
const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
// 校验分支名是否合法
const firstPattern = new RegExp('dev|rc|gray|master');
const secondPattern = new RegExp('(feature|hotfix)/[a-z]{4,}/[0-9]{8,}/[a-zA-Z-]{4,}');

const firstMatch = firstPattern.test(branchName);
const secondMatch = secondPattern.test(branchName);
if (!firstMatch && !secondMatch) {
  // eslint-disable-next-line no-console
  console.error(`\x1b[31m ${branchName}不符合分支规范，具体规范请访问 http://wiki.ixm5.cn/pages/viewpage.action?pageId=2918496 \x1b[31m`);
  process.exit(1);
}

// 获取缓存区内容
// 通过diff指令获得所有改动过（不包括删除）的js文件路径
const fileNameStr = execSync('git diff --diff-filter=AM --cached HEAD --name-only').toString();
const fileNameList = fileNameStr.split('\n').filter(item => !!item);

// 获取需要检测的文件
const detectedFileList = fileNameList.filter(file => {
  // 过滤掉空的和hooks文件夹下所有的文件
  return file && file.indexOf('hooks') < 0;
});

// 遍历需要检测的文件
let errorFileList = [];
detectedFileList.forEach((file) => {
  const results = execSync(`git diff --cached ${file}`);
  const pattern = /^http:\/\/{1,}/;
  if (pattern.test(results.toString())) {
    errorFileList.push(file);
  }
});

if (errorFileList.length > 0) {
  const errorFileStr = JSON.stringify(errorFileList);
  // eslint-disable-next-line no-console
  console.error(`\x1b[31m ${errorFileStr}文件中存在不合法的http://，请将http替换为https \x1b[31m`);
  process.exit(1);
}

// 校验是否有冲突
const conflictPattern = new RegExp('^<<<<<<<\\s|^=======$|^>>>>>>>\\s');
const conflictFileList = [];
fileNameList.forEach((file) => {
  const results = execSync(`git diff --cached ${file}`);
  if (conflictPattern.test(results)) {
    conflictFileList.push(file);
  }
})
if (conflictFileList.length > 0) {
  const conflictFileStr = JSON.stringify(conflictFileList);
  // eslint-disable-next-line no-console
  console.error(`\x1b[31m ${conflictFileStr}文件中存在冲突，请解决冲突之后再提交 \x1b[31m`);
  process.exit(1);
}

process.exit(0);