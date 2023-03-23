/*
 * @Descripttion: ts 声明
 * @LastEditors: cross.Carol
 * @LastEditTime: 2022-08-31 22:54:12
 */
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';

declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

interface ModelState {
  /** 名称 */
  name?: string;
}

interface ModelType<Effect, ReducerModelState> {
  namespace: string;
  state: ModelState;
  effects: {};
  reducers: {
    // 更新基础state
    updateState: ReducerModelState;
    // 情况全局state
    clearState: ReducerModelState;
  };
}
