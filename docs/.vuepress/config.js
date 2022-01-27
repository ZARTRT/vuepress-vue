module.exports = {
  title: "Hello Vue2",
  description: "个人网站",
  head: [
    ["link", { rel: "icon", href: "https://vuepress.vuejs.org/logo.png" }],
  ],
  base: "/",
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 3,
    displayAllHeaders: true,
    nav: [
      // 导航栏配置
      {
        text: "主页",
        link: "/",
      },
      {
        text: "个人网站",
        items: [
          { text: "github", link: "https://github.com/ZARTRT" },
          { text: "我的知乎", link: "https://www.zhihu.com/people/jnin-14" },
        ],
      },
    ],
    sidebar: ["/guide/"],
    search: true,
    searchMaxSuggestions: 10,
  },
};
