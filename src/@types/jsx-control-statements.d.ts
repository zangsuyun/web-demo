/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:18:37
 */

declare var If: React.SFC<{ condition: boolean }>;
declare var For: React.SFC<{ each: string; index?: string; of: any[] }>;
declare var Choose: React.SFC;
declare var When: React.SFC<{ condition: boolean }>;
declare var Otherwise: React.SFC;