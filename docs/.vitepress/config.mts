import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "主页",
  description: "你好呀,好久不见",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/article' }
    ],
    sidebar: [
      {
        text: '文章',
        items: [
          { text: '示例', link: '/article' },
        ]
      }
    ],
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
