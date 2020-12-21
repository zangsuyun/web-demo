/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:19:20
 */

import { XMStorageImplements } from '@/domains/basic-domain/interface';

const LS: Storage = window.localStorage;

class XMStorage implements XMStorageImplements {

  supportLocalStorage() {
    return !!LS;
  }

  get(key: string) {
    if (this.supportLocalStorage()) {
      return LS.getItem(key);
    }
  }

  set(key: string, value: any) {
    if (this.supportLocalStorage()) {
      LS.setItem(key, value);
    }
  }

  setObj(key: string, obj: any) {
    if (this.supportLocalStorage()) {
      LS.setItem(key, JSON.stringify(obj));
    }
  }

  getObj(key: string) {
    let value: null | string = null;
    if (this.supportLocalStorage()) {
      const LSItem = LS.getItem(key);
      try {
        if (LSItem) {
          value = JSON.parse(LSItem);
        }
      } catch (error) {
        value = LSItem;
      }
    }
    return value;
  }

  remove(key: string) {
    if (this.supportLocalStorage()) {
      LS.removeItem(key);
    }
  }

  clear() {
    if (this.supportLocalStorage()) {
      LS.clear();
    }
  }
}

export default new XMStorage();