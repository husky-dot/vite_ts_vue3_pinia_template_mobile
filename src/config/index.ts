const config = {
  terminal: 1, //终端
  title: 'APP Galaxy', //网站默认标题
  version: '1.4.0', //版本号
  baseUrl: `${import.meta.env.VITE_APP_BASE_URL || ''}/`, //请求接口域名
  urlPrefix: 'api', //请求默认前缀
  timeout: 10 * 2000, //请求超时时长
  ossPreFix: 'https://resource.waixingyun.cn',
}

export default config
