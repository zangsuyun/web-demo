/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:19:01
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios';
import { message } from 'antd';

import { BASIC_HOST, TIME_OUT, USER_TYPE, VERSION, PROJECT } from '@/domains/basic-domain/constants';

import User from './user';

interface FetchParams {
  url: string,
  data: any,
  options?: FetchOptions
}

interface FetchOptions {
  requestType: string   // 请求类型  form为表单类型   json为json类型，默认json类型
}

class Axios {

  static post(
    method: string,
    url: string,
    params: any,
    options: FetchOptions = { requestType: 'json' }
  ): Promise<any> {
    const _url = `${url}?p=w&v=v${VERSION}&userType=${USER_TYPE}&token=${User.getToken()}&uid=${User.getUid()}&tid=${User.getTid()}&aid=${User.getAid()}`;
    return new Promise((resolve, reject) => {
      const { NewVersion, currentUserInstInfo } = window;
      const { instId } = currentUserInstInfo;

      const instance: AxiosInstance = axios.create({
        timeout: TIME_OUT,
        responseType: 'json',
        headers: {
          instId,
          p: 'w',
          v: 'VERSION',
          vn: `v${VERSION}`,
          project: PROJECT,
          userType: USER_TYPE,
          cid: User.getCid(),
          uid: User.getUid(),
          tid: User.getTid(),
          token: User.getToken(),
          bizAccountId: User.getAid(),
          xmVersion: NewVersion ? '5.0' : '4.0',
          'Content-Type': options.requestType === 'json' ? 'application/json; charset=UTF-8' : 'application/x-www-form-urlencoded',
        }
      });

      if (method !== 'GET' && options.requestType === 'form') {
        instance.defaults.transformRequest = [(queryParam): string => {
          let ret: string = '';
          const queryKeys = Object.keys(queryParam);
          queryKeys.forEach((item: string, index: number): void => {
            if (index < queryKeys.length - 1) {
              ret += `${encodeURIComponent(item)}=${encodeURIComponent(queryParam[item])}&`;
            } else {
              ret += `${encodeURIComponent(item)}=${encodeURIComponent(queryParam[item])}`;
            }
          });
          ret.replace(/&$/, '');
          return ret;
        }]
      }

      instance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
        return config;
      }, (error: Error): Promise<any> => {
        return Promise.reject(error);
      })

      instance.interceptors.response.use((response: AxiosResponse): AxiosResponse | AxiosPromise => {
        const { message: ResMessage, success, resultMsg, resultCode } = response.data;
        if (success || resultCode === 0) {
          return response;
        }
        message.error(ResMessage || resultMsg);
        return Promise.reject(response.data);
      }, (error): AxiosPromise => {
        message.error(error.message)
        return Promise.reject(error.message);
      });

      let config: any;
      if (method === 'GET') {
        config = Object.assign({ params, url: `${BASIC_HOST}${_url}`, method });
      } else {
        config = Object.assign({ data: params, url: `${BASIC_HOST}${_url}`, method });
      }

      instance(config).then((res: AxiosResponse): void => {
        resolve(res.data);
      }).catch((error: Error) => {
        reject(error);
      })
    })
  }
}

export default Axios;