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

export async function getInfoByToken(token: string) {
  try {
    return await post<any>('/api/proxy', {
      url: "https://malls.bestwehotel.com/plateno_mall/member/myPage",
    },{
      'Authtype': '5',
        'Blackbox': 'kWPH91711592677c6Z8zt4hpP4',
        // 'Content-Length': data.length,
        'Content-Type': 'application/json;charset=UTF-8',
        'Token': token,
        'Unitype': '10000011',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    })
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}


export async function addBooking({headers, body}: any) {
  try {
    return await post<any>('/api/proxy', {
      url: "https://malls.bestwehotel.com/plateno_mall/booking/addBooking",
      ...body,
    }, headers)
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}

