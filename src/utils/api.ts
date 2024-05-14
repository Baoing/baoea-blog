import {post} from './httpService';
import {clientInfo} from "@/app/member/metadata";

const getHeaders = (token: string) => {
  return {
    'Token': token,
    'Authtype': '5',
    'Blackbox': '',
    'Content-Type': 'application/json;charset=UTF-8',
    'Unitype': '10000011',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
  }
}

// login
export async function sendLogin(params: {
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
    }, getHeaders(token))
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}


export async function addBooking({token, body}: any) {
  try {
    return await post<any>('/api/proxy', {
      url: "https://malls.bestwehotel.com/plateno_mall/booking/addBooking",
      ...body,
    }, getHeaders(token))
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}

/**
 * couponActivityId
 * 45832 获取100积分
 * 45828 获取300无门槛
 * 45828 获取300无门槛
 * @param token
 */
export async function getCoupon(token: string) {
  let url = `https://malls.bestwehotel.com/plateno_mall/common/proxy/module-couponPick`

  const requestBody = {
    "clientInfo": clientInfo,
    "couponActivityId": 45832
  }

  try {
    return await post<any>('/api/proxy', {
      url,
      ...requestBody
    }, getHeaders(token))
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
  const requestBody = {
    "clientInfo": clientInfo,
    "couponActivityId": 45828
  }

  try {
    return await post<any>('/api/proxy', {
      url,
      ...requestBody
    }, getHeaders(token))
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
  const requestBody = {
    "clientInfo": clientInfo,
    "actId": 95,
    "channel": 3001,
    "couponId": 31100
  }

  try {
    return await post<any>('/api/proxy', {
      url,
      ...requestBody
    }, getHeaders(token))
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}

/**
 * 获取订单详情
 * @param token
 * @param orderId
 */
export async function getOrderDetailById(token:string, orderId: string) {
  let url = `https://malls.bestwehotel.com/plateno_mall/common/proxy/booking-getOrderDetail`
  const requestBody = {
    "clientInfo": clientInfo,
    orderNo: orderId
  }

  try {
    return await post<any>('/api/proxy', {
      url,
      ...requestBody
    }, getHeaders(token))
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}
/**
 * 获取所有券码id
 * @param token
 * @param orderId
 */
export async function getMallCouponList(token:string) {
  let url = `https://malls.bestwehotel.com/plateno_mall/coupon/mallCouponList`
  const requestBody = {
    "clientInfo": clientInfo,
    "pageNum": 1,
    "pageSize": 100,
    "status": [1, 2]
  }

  try {
    return await post<any>('/api/proxy', {
      url,
      ...requestBody
    }, getHeaders(token))
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}



// -===============================================================-

/**
 * 丽苼活动
 * @param mobile
 * @param picVerifyCode
 */
export async function getLishengImgCode(mobile: string, picVerifyCode?: string) {
  let url = "https://mkt.bestwehotel.com/proxy/mkt-toolkit/gift-act/member/sms-validate-code?mobile=" + mobile
  if (picVerifyCode) {
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
  let url = `https://mkt.bestwehotel.com/proxy/mkt-toolkit/gift-act/member/login-and-get?actId=LBL00343&mobile=${mobile}&vcode=` + code
  try {
    return await post<any>('/api/proxy', {
      url
    })
    // 在这里对返回的数据进行处理
  } catch (error) {
    console.error('POST请求失败:', error);
  }
}

