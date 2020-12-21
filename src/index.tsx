/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:14:22
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { createHashHistory } from 'history';
import zh_CN from 'antd/es/locale/zh_CN';
import _ from 'underscore';

import Storage from '@/common/js/storage';
import { PREFIX } from '@/domains/basic-domain/constants';
import { VerifyInfo } from '@/domains/basic-domain/interface';

import 'antd/dist/antd.less';
import '@/common/less/index.less';

import App from './App';

import '@/common/less/index.less';

const history = createHashHistory();

window.RCHistory = _.extend({}, history, {
  push: (obj: any) => {
    history.push(obj)
  },
  pushState: (obj: any) => {
    history.push(obj)
  },
  pushStateWithStatus: (obj: any) => {
    history.push(obj)
  },
  goBack: history.goBack,
  location: history.location,
  replace: (obj: any) => {
    history.replace(obj)
  }
});


// 合并父子属性
const mergeWindowProps = (superProps: any) => {
  const { verifyInfo } = superProps;
  storeVerifyInfo(verifyInfo);
}

// 存储身份信息
const storeVerifyInfo = (verifyInfo: VerifyInfo) => {
  const { aid, tid, uid, cid, token } = verifyInfo;

  Storage.set(`${PREFIX}_aid`, aid);
  Storage.set(`${PREFIX}_tid`, tid);
  Storage.set(`${PREFIX}_uid`, uid);
  Storage.set(`${PREFIX}_cid`, cid);
  Storage.set(`${PREFIX}_token`, token);
}

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log('react app bootstraped');
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {

  // 将父应用的window中的属性全部复制到子应用
  mergeWindowProps(props);

  ReactDOM.render((
    <HashRouter {...history} >
      <ConfigProvider locale={zh_CN}>
        <App />
      </ConfigProvider>
    </HashRouter>
  ), document.getElementById('root'));
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
  if (document.getElementById('root')) {
    ReactDOM.unmountComponentAtNode(document.getElementById('root') as any);
  }
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
  console.log('update props', props);
}