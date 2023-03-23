import { FC } from 'react';
import { Spin } from 'antd';
import React from 'react';

interface LoadingProps {
  name?: string
}
const Loading: FC<LoadingProps> = (props) => {
  return (
    // <Spin spinning/>
    <div>加载中...</div>
  )
}

export default Loading