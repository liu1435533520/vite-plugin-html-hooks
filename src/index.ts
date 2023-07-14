/*
 * @Author: liutaotao 17386012013@163.com
 * @Date: 2023-07-14 20:46:19
 * @LastEditors: liutaotao 17386012013@163.com
 * @LastEditTime: 2023-07-15 00:15:26
 * @FilePath: \vite-plugin-html-hooks\src\index.ts
 * @Description:
 */

import type {Plugin} from 'vite';

type HtmlHooks = <F extends (s: string) => string>(funList: Array<F> | F) => Plugin;

const htmlHooks: HtmlHooks = (funList) => {
  return {
    name: 'vite-plugin-html-hooks',
    transformIndexHtml(html: string) {
      if (funList instanceof Array) {
        return funList.reduce((pFun, nFun) => nFun(pFun), html);
      } else {
        return funList(html);
      }
    },
  };
};
export default htmlHooks;
