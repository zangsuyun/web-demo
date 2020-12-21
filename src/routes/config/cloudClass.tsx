/*
 * @Description: 
 * @Author: zangsuyun
 * @Date: 2020-12-18 16:47:27
 * @LastEditors: zangsuyun
 * @LastEditTime: 2020-12-21 14:15:04
 */

import { MenuConfig } from '@/routes/interface';

import VideoCourse from '@/modules/video-course';
import ClassBook from '@/modules/class-book';

const CloudClassConfig: MenuConfig = {
  key: 'cloudClass',
  name: '云课堂',
  routes: [
    {
      key: 'video_course',
      name: '视频课',
      path: '/cloudclass/video_course',
      component: VideoCourse
    },
    {
      key: 'prepare_lesson',
      name: '资料云盘',
      path: '/cloudclass/prepare_lesson',
      component: ClassBook
    }
  ]
};

export default CloudClassConfig;