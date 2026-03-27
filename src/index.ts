/**
 * AnyMenu Plugin
 *
 * Template for AnyMenu plugin development based on Svelte.
 * Implements PluginInterface with TypeScript class syntax.
 */

// 插件自定义样式
// 
// 另一个做法不太推荐，但也说一下。
// 使用库: import cssInjectedByJs from 'vite-plugin-css-injected-by-js';
// 使用: 放到 defineConfig plugins 中
// 功能: 可以将 CSS 内联到 JS 中，插件只需分发单个 .js 文件
import cssText from './style.css?inline';

import type { PluginInterface, PluginInterfaceCtx } from '../types/any-menu';

let cache_ctx: PluginInterfaceCtx | undefined

export default class ExamplePluginSvelte implements PluginInterface {
  metadata = {
    id: 'example-plugin-svelte',
    name: 'Example Plugin Svelte',
    version: '1.0.0',
    min_app_version: '1.1.0',
    author: 'your-name',
    description: 'A minimal AnyMenu plugin template based on Svelte.',
    icon: 'lucide-printer',
    css: cssText,
  };

  onLoad(): void {
    console.log('[ExamplePluginSvelte] Plugin loaded');
  }

  onUnload(): void {
    if (cache_ctx) cache_ctx.api.unregisterSubPanel('example-plugin-svelte-panel')
    console.log('[ExamplePluginSvelte] Plugin unloaded');
  }

  async run(ctx: PluginInterfaceCtx): Promise<void> {
    // 注册面板示例
    if (!cache_ctx) {
      cache_ctx = ctx
      const newPanel = document.createElement('div'); newPanel.innerText = 'New Panel Content';
      ctx.api.registerSubPanel({
          id: 'example-plugin-svelte-panel',
          el: newPanel
      })
    }

    // 文本输出示例
    const selected = ctx.env.selectedText;
    if (selected && selected.trim() !== '') {
      // 如果有选中文本，在其后追加问候
      ctx.api.sendText(`${selected} — ExamplePluginSvelte!`);
    } else {
      // 否则直接输出
      // ctx.api.sendText('ExamplePluginSvelte!');

      // 否则显示面板
      ctx.api.hidePanel(['menu'])
      ctx.api.showPanel(['example-plugin-svelte-panel'])
    }

    ctx.api.notify('ExamplePluginSvelte plugin executed ✅');
  }
}
