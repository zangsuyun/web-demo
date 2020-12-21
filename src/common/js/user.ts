/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:19:25
 */


import Storage from './storage';
import { PREFIX } from '@/domains/basic-domain/constants';

class User {

  getUid() {
    return Storage.get(`${PREFIX}_uid`) || '1115167164014264433';
  }

  getAid() {
    return Storage.get(`${PREFIX}_aid`) || '1298172751712686082';
  }

  getTid() {
    return Storage.get(`${PREFIX}_tid`) || '1298172751712686082';
  }

  getCid() {
    return Storage.get(`${PREFIX}_cid`);
  }

  getToken() {
    return Storage.get(`${PREFIX}_token`) || 'f24733242f634815a30184dfa5edf9b6';
  }
}

export default new User();