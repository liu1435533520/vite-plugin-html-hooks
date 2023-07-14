/*
 * @Author: liutaotao 17386012013@163.com
 * @Date: 2023-07-14 23:59:00
 * @LastEditors: liutaotao 17386012013@163.com
 * @LastEditTime: 2023-07-15 00:18:09
 * @FilePath: \vite-plugin-html-hooks\tsup.config.ts
 * @Description:
 */
import {defineConfig} from 'tsup';

export default defineConfig(() => ({
  entry: ['src/index.ts'],
  splitting: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
}));
