const { loadModule } = window['vue3-sfc-loader']

const options = {
  moduleCache: { vue: Vue },
  getFile(url) {
    url = /.*?\.js|.mjs|.css|.less|.vue$/.test(url) ? url : `${url}.vue`
    const type = /.*?\.js|.mjs$/.test(url) ? '.mjs' : /.*?\.vue$/.test(url) ? '.vue' : /.*?\.css$/.test(url) ? '.css' : '.vue'
    const getContentData = asBinary => fetch(url).then(res => !res.ok ? Promise.reject(url) : asBinary ? res.arrayBuffer() : res.text())
    return { getContentData: getContentData, type: type }
  },
  addStyle(textContent) {
    const styleElement = document.createElement('style')
    document.head.insertBefore(Object.assign(styleElement, { textContent }),
      document.head.getElementsByTagName('style')[0] || null)
  },
  handleModule(type, getContentData, path, options) {
    switch (type) {
      case '.css':
        return options.addStyle(getContentData(false))
      case '.less':
        console.error('.......')
    }
  },
  log(type, ...args) {
    console.log(type, ...args)
  }
}

loadModule('App', options)
  .then(App => Vue.createApp(App).mount('#app'))
