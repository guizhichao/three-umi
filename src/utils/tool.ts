/*
 * @Descripttion: 简单tools 工具类
 * @LastEditors: cross.Carol
 * @LastEditTime: 2022-08-31 22:54:16
 */
/**
 * 获取model全局state
 * @param state
 * @returns
 */
export const getModelState = (state: Record<string, any>) => state.home;

/**
 * 简单的深层拷贝
 * @param data
 * @returns
 */
export const copy = (data: any) => JSON.parse(JSON.stringify(data));

/**
 * 简单的延时器
 * @param time
 * @returns
 */
export const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, time);
  });
