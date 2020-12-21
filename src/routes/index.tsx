/*
 * @Description: 路由配置
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:15:43
 */

import { MenuConfig, RouteConfig } from '@/routes/interface';
import CloudClass from './config/cloudClass';

// 领域路由配置
export const menuConfigs: MenuConfig[] = [CloudClass];

/** 所有处理后的路由的集合,用于生成Route组件 */
const allRoutes: RouteConfig[] = menuConfigs.map((config: MenuConfig) => {
  return config.routes || [];
}).reduce((prev: RouteConfig[], next: RouteConfig[]) => {
  return prev.concat(...next);
});

export default allRoutes;
