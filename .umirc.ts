/*
 * @Descripttion:
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-20 23:20:27
 */
import { defineConfig } from 'umi';
import path from 'path';

/** 根据url 获取名称 */
function getNameByUrl(url: string) {
  const curl = (url.split('.less')[0] || '').split('/').join('-');
  return curl;
}

const ssoTarget = 'http://sso1.clickpaas.com';
const appTarget = 'http://app-admin.clickpaas.com';
const socketTarget = 'ws://app-admin.clickpaas.com';

const target = {
  sso: ssoTarget,
  app: appTarget,
  socket: socketTarget,
};

const proxyConfig = {
  '/api/sso/': {
    target: target.sso,
    changeOrigin: true,
    cookieDomainRewrite: '',
  },
  '/api/im/ws/': {
    target: target.socket,
    changeOrigin: true,
    ws: true,
    secure: false,
  },
  '/api/': {
    target: target.app,
    changeOrigin: true,
    cookieDomainRewrite: '',
  },
};

export default defineConfig({
  base: '/',
  fastRefresh: {},
  layout: {},
  // webpack5: {},
  // mfsu: {},
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: proxyConfig,
  alias: {
    '@': path.resolve(__dirname, './src')
  },
  routes: [
    { 
      path: '/', 
      component: '@/pages/index',
    },
    {
      path: '/demo',
      component: '@/pages/demo',
    },
  ],
  /** 动态加载 */
  dynamicImport: {
    loading: '@/components/loading',
  },
  /** css打包优化 */
  cssLoader: {
    modules: {
      getLocalIdent: (
        context: Record<'resourcePath', any>,
        _: any,
        localName: string,
      ) => {
        const resourcePath = context.resourcePath;
        const nodeModules = resourcePath.includes('node_modules');
        if (
          nodeModules ||
          resourcePath.includes('ant.design.pro.less') ||
          resourcePath.includes('global.less')
        ) {
          return localName;
        }
        const match = resourcePath.match(/src(.*)/);
        if (match && match[1]) {
          const otherClassName = getNameByUrl(match[1]);
          return `umi-app-${otherClassName}-${localName}`;
        } else {
          return `umi-app-${localName}`;
        }
      },
    },
  },
  plugins: [
  ],
  /** 外链 */
  // externals: {
  //   "three-mesh-bvh": "https://unpkg.com/three-mesh-bvh@0.5.23/build/index.module.js",
  //   "web-ifc": "https://unpkg.com/web-ifc@0.0.36/web-ifc-api.js",
  //   "web-ifc-three": "https://unpkg.com/web-ifc-three@0.0.122/IFCLoader.js"
  // },
  /** moment 国际化忽略 */
  ignoreMomentLocale: false,
});
