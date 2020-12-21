/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:21:46
 */

/** 路由配置，最终解析后转给<Route>组件 */
export interface RouteConfig {
  /** 标题，用于route组件和kio的description */
  name?: string;
  /** 子菜单key */
  key?: string;
  /** 子菜单路径 */
  path?: string;
  component?: React.ComponentType<any>;
  // 是否精确匹配
  exact?: boolean;
}

/** 左侧的菜单配置 */
export interface MenuConfig {
  // 菜单名称
  name: string;
  // 菜单key
  key: string;
  // 菜单对应的路由
  path?: string;
  // 子路由
  routes?: RouteConfig[];
}