<!--
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:20:31
-->
### 与后台的数据交互层（承担防腐重任）

**本目录的引用别名是 @/data-source**

request-apis.js和translators注意都是 复数。
translators.js 为前后端字段（or 数据结构）转换的方法集合。（防腐层）

### 注意：接口请求的所有返回数据结构，必须经过 translator 转后成与前端 domain 中的结构匹配后才能用于视图层。
