import React from 'react';
import { Table } from 'antd';

import Service from '@/common/js/service';

import './index.less';

class VideoCourse extends React.Component {

  constructor(props) {
    super(props);
    const { instId } = window.currentUserInstInfo;

    this.state = {
      query: {
        instId,
        size: 10,
        current: 1,
      },
      dataSource: []
    }
  }

  componentDidMount() {
    this.handleFetchVideoCourseList();
  }

  parseColumns = () => {
    const columns = [
      {
        title: '视频课',
        key: 'scheduleName',
        dataIndex: 'scheduleName',
        width: '25%',
      },
      {
        title: '学员人数',
        key: "stuNum",
        dataIndex: "stuNum",
      },
      {
        title: '创建人',
        key: 'teacherName',
        dataIndex: 'teacherName'
      },
      {
        title: '操作',
        key: 'operate',
        dataIndex: 'operate',
        render: (val, record) => {
          return (
            <div className="operate">
              <div className="operate__item">分享</div>
              <span className="operate__item split"> | </span>
              <div className="operate__item">编辑</div>
              <span className="operate__item split"> | </span>
              <div className="operate__item">删除</div>
            </div>
          )
        }
      }
    ];
    return columns;
  }

  handleFetchVideoCourseList = () => {
    Service.Apollo('public/apollo/lessonScheduleListPage', this.state.query)
      .then((res) => {
        const { result = {} } = res;
        const { records = [] } = result;

        this.setState({
          dataSource: records
        })
      })
  }

  render() {
    const { dataSource } = this.state;

    return (
      <div className="video-course">
        <div className="page-header">视频课</div>

        <div className="page-body">
          <Table
            rowKey={record => record.id}
            dataSource={dataSource}
            columns={this.parseColumns()}
          />
        </div>
      </div>
    )
  }
}

export default VideoCourse;
