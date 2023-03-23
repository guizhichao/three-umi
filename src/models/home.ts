/*
 * @Descripttion:
 * @LastEditors: cross.Carol
 * @LastEditTime: 2022-08-31 23:09:53
 */
import { getModelState, copy, delay } from '@/utils/tool';
import type { Effect } from 'dva';
import type { Reducer } from 'redux';

// 初始化配置项
const defaultState: ModelState = {
  name: 'demo点击切换名称',
};

const model: ModelType<Effect, Reducer<ModelState>> = {
  /** 命名空间 */
  namespace: 'home',
  /** state 数据 */
  state: copy(defaultState),
  effects: {},
  reducers: {
    /** 更新state */
    updateState(state, { payload }): ModelState {
      return {
        ...state,
        ...payload,
      };
    },
    /** 清除state（离开组件的时候，可以使用） */
    clearState(): ModelState {
      return copy(defaultState);
    },
  },
};

export default model;
