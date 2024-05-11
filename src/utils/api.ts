import {post} from './httpService';

// login
export async function sendLogin(params:{
  "mobile": string,
  "validateCode": string
}) {
  try {
    return await post<any>('/api/proxy', {
      ...params,
      url: "https://ssologin.bestwehotel.com/plateno_mall/unionLogin/login"
    })
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}
