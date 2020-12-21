/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:20:56
 */
export interface VerifyInfo {
  aid: string | undefined,
  tid: string | undefined,
  cid: string | undefined,
  uid: string | undefined,
  token: string | undefined,
}

// constants.ts
export interface MapInterface {
  dev: string,
  dev1: string,
  rc: string,
  gray: string,
  prod: string,
  [key: string]: any,
}

export interface XMStorageImplements {
  get: (key: string) => any,
  set: (key: string, value: any) => void,
  getObj: (key: string) => any,
  setObj: (key: string, obj: any) => void,
  remove: (key: string) => void,
  clear: () => void,
}