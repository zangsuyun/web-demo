/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:20:45
 */
import { MapInterface } from '@/domains/basic-domain/interface'

// 默认是 dev 环境
const ENV: string = process.env.DEPLOY_ENV || 'dev';

const BASIC_HOST_MAP: MapInterface = {
  dev: 'https://dev-heimdall.xiaomai5.com/',
  dev1: 'https://dev1-heimdall.xiaomai5.com/',
  rc: 'https://rc-heimdall.xiaomai5.com/',
  gray: 'https://gray-heimdall.xiaomai5.com/',
  prod: 'https://gateway-heimdall.xiaomai5.com/'
};

// axios headers config
export const TIME_OUT: number = 20000;
export const USER_TYPE: string = 'B';
export const PROJECT = 'xmzj-web-b';
export const VERSION = '5.4.8';
export const PREFIX = 'xiaomai';
// host
export const BASIC_HOST: string = BASIC_HOST_MAP[ENV];