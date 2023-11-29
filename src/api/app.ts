import request from '@/utils/request'

// 获取协议信息
export function getProtocol(params?: Record<string, any>) {
  return request.get({url: '/app/protocol', params})
}
