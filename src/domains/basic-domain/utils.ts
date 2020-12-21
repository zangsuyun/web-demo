/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:21:09
 */

// 限制字数
const getEllipsText = (text: string, limitNum: number) => {
  const limitText: string = text.replace(/\n/g, ' ');

  if (limitText.length > limitNum) {
    return `${limitText.substr(0, limitNum)}...`;
  }
  return limitText;
}

export {
  getEllipsText
}