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

/**
 * 获取100积分
 * @param token
 */
export async function getCoupon(token: string) {
  let url = `https://malls.bestwehotel.com/plateno_mall/common/proxy/module-couponPick`

  const requestBody ={"clientInfo":{"lbs":",","phoneType":"","appVersion":"","deviceId":"","sysCode":"","browserType":"Netscape","sysType":"MacIntel","channelId":"","platformId":"","sid":574582,"activityId":"","channel":2001},"couponActivityId":45832}

  try {
    return await post<any>('/api/proxy', {
      url,
      ...requestBody
    }, {
      'uniType': '10000011',
          'authType': '5',
          // 'Host': 'malls.bestwehotel.com',
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json;charset=utf-8',
          'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
          'blackBox': 'undefined',
          token,
    },)
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}

/**
 * 领取300无门槛
 * @param token
 */
export async function getCoupon300(token: string) {
  let url = `https://malls.bestwehotel.com/plateno_mall/common/proxy/module-couponPick`
  const requestBody ={"clientInfo":{"lbs":",","phoneType":"","appVersion":"","deviceId":"","sysCode":"","browserType":"Netscape","sysType":"MacIntel","channelId":"","platformId":"","sid":574582,"activityId":"","channel":2001},"couponActivityId":45828}

  try {
    return await post<any>('/api/proxy', {
      url,
      ...requestBody
    }, {
      'uniType': '10000011',
          'authType': '5',
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json;charset=utf-8',
          'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
          'blackBox': 'undefined',
          token,
    },)
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}


/**
 * 领取100无门槛
 * @param token
 */
export async function getCoupon100(token: string) {
  let url = `https://malls.bestwehotel.com/plateno_mall/common/proxy/module-couponPick`
  const requestBody ={
    "clientInfo": {
      "lbs": ",",
      "phoneType": "iPad13,18",
      "appVersion": "5.8.5",
      "sysCode": "16.5.1",
      "browserType": "Netscape",
      "sysType": "iPad",
      "channelId": "309488",
      "platformId": "",
      "sid": 365348,
      "activityId": "",
      "channel": 3001
    },
    "actId": 95,
    "channel": 3001,
    "couponId": 31100
  }

  try {
    return await post<any>('/api/proxy', {
      url,
      ...requestBody
    }, {
      'uniType': '10000011',
          'authType': '5',
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json;charset=utf-8',
          'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
          'blackBox': 'undefined',
          token,
    },)
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}






export async function getLishengImgCode(mobile: string, picVerifyCode?: string) {
  let url = "https://mkt.bestwehotel.com/proxy/mkt-toolkit/gift-act/member/sms-validate-code?mobile="+mobile
  if(picVerifyCode) {
    url += `&picVerifyCode=${picVerifyCode}`
  }
  try {
    return await post<any>('/api/proxy', {
      url
    })
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}



export async function getLishengLingqu(mobile: string, code?: string) {
  let url = `https://mkt.bestwehotel.com/proxy/mkt-toolkit/gift-act/member/login-and-get?actId=LBL00343&mobile=${mobile}&vcode=`+code
  try {
    return await post<any>('/api/proxy', {
      url
    })
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}

