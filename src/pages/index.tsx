/*
 * @Descripttion:
 * @LastEditors: cross.Carol
 * @LastEditTime: 2022-08-31 23:06:19
 */
import React, { FC, useEffect } from 'react';
import { connect, Dispatch, history } from 'umi';
import styles from './index.less';

interface IndexProps {
  name: ModelState['name'];
  dispatch: Dispatch;
}

const Index: FC<IndexProps> = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    // 组件卸载时候
    return () => {
      dispatch({
        type: 'home/clearState',
      });
    };
  }, []);

  /** 页面跳转 */
  const handleJump = () => {
    history.push('/demo');
  };

  return (
    <div>
      <h1 onClick={handleJump} className={styles.title}>
        点击跳转到demo页面
      </h1>
    </div>
  );
};

export default connect()(Index);
