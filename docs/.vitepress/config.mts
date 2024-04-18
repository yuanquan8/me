import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "主页",
  description: "你好呀,好久不见",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '为思考点赞', link: '/article' }
    ],
    sidebar: [
      {
        text: '',
        items: [
          { text: 'No.1,好久不见', link: '/article' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'discord', link: 'http://www.nprint.cn' }
    ]
  }
})
