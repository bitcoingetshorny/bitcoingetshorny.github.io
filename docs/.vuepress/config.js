module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@public': '/'
      }
    }
  },
  // base: '/blog/',
  title: 'bitcoingetshorny',
  description: 'aigc + web3 + 外包',
  head: [],
  extraWatchFiles: [],
  // theme: '',
  themeConfig: {
    nav: [
      { text: 'About Us', link: '/aboutus/' },
      { text: 'github', link: 'https://github.com/bitcoingetshorny', target:'_blank' }
    ],
    sidebar: {
      
    },
    sidebarDepth: 4, // 标题深度
    displayAllHeaders: true, // 显示所有标题
    lastUpdated: 'Last Updated', // 最后更新时间
  },
  plugins: [],
  Markdown: {
    lineNumbers: true
  }
}