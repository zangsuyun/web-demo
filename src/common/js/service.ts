/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:19:11
 */


import Axios from './axios';

class Service {

  static Business(url: string, params: any, option: any) {
    return Axios.post('POST', `business/${url}`, params, option);
  }

  static Apollo(url: string, params: any, option: any) {
    return Axios.post('POST', `apollo/${url}`, params, option);
  }

  static Sales(url: string, params: any, option: any) {
    return Axios.post('POST', `sales/${url}`, params, option);
  }

  static post(url: string, params: any, option: any) {
    return Axios.post('POST', url, params, option);
  }
}

export default Service;