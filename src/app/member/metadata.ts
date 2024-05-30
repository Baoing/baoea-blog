export const clientInfo = {
  "lbs": ",",
  "phoneType": "",
  "appVersion": "",
  "deviceId": "",
  "sysCode": "",
  "browserType": "Netscape",
  "sysType": "MacIntel",
  "channelId": "",
  "platformId": "",
  "sid": 574582,
  "activityId": "",
  "channel": 2001
}
/**
 * 获取抢购停车券的data
 */
export const getParkingCoupon = () => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 9, // 这个不一样
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 2001,
    "couponId": "",
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [
      {
        "goodsId": 179101, // 商品id不一样
        "quantity": 1,
        "priceType": 3,
        "gift": 0,
        "present": 0,
        "priceStrategy": 20088, // 价格策略
        "entrance": null,
        "pureIntegralId": null,
        "pointActivityId": null, // 活动id，有些是有活动的
        "usePointNums": "9", // 所需积分
        "activityId": "20088", // 互动id
        "activityType": "1" // 活动类型
      }
    ],
    "orderResource": "1",
    "deductPoint": 9, // 所需积分
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "orderRequiredValue": "[]"
  }
}

/**
 * 获取抢购停车券20的data
 */
export const getParkingCoupon20 = () => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 9, // 这个不一样
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 2001,
    "couponId": "",
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [
      {
        "goodsId": 178788, // 商品id不一样
        "quantity": 1,
        "priceType": 3,
        "gift": 0,
        "present": 0,
        "priceStrategy": 20088, // 价格策略
        "entrance": null,
        "pureIntegralId": null,
        "pointActivityId": null, // 活动id，有些是有活动的
        "usePointNums": "9", // 所需积分
        "activityId": "20088", // 互动id
        "activityType": "1" // 活动类型
      }
    ],
    "orderResource": "1",
    "deductPoint": 9, // 所需积分
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "orderRequiredValue": "[]"
  }
}

/**
 * 获取金卡的data
 */
export const getGoldCard = () => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 0, // 这个不一样
    "totalAmount": 9900,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 2001,
    "couponId": "",
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [
      {
        "goodsId": 78757, // 商品id不一样
        "quantity": 1,
        "priceType": 3,
        "gift": 0,
        "present": 0,
        "priceStrategy": 20088, // 价格策略
        "entrance": null,
        "pureIntegralId": null,
        "pointActivityId": null, // 活动id，有些是有活动的
        "usePointNums": "9", // 所需积分
        "activityId": "20088", // 互动id
        "activityType": "1" // 活动类型
      }
    ],
    "orderResource": "1",
    "deductPoint": 9, // 所需积分
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "orderRequiredValue": "[]"
  }
}

/**
 * 获取迪士尼券的data
 */
export const getDSNCoupon = (phone: string) => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 23750,
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 2001,
    "couponId": "",
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [
      {
        "goodsId": 179008,
        "quantity": 1,
        "priceType": 3,
        "gift": 0,
        "present": 0,
        "priceStrategy": 1,
        "entrance": null,
        "pureIntegralId": null,
        "pointActivityId": "147",
        "usePointNums": "23750",
        "activityId": "147",
        "activityType": "4001"
      }
    ],
    "orderResource": "1",
    "deductPoint": 23750,
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "orderRequiredValue": `[{"k":1,"v":"${phone}]`
  }
}

/**
 * 获取100积分礼包
 */
export const get100Points = (couponId: string) => {

  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 0,
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 2001,
    couponId,
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [{
      "goodsId": 179451,
      "quantity": 1,
      "priceType": 3,
      "gift": 0,
      "present": 0,
      "priceStrategy": 1,
      "entrance": null,
      "pureIntegralId": null,
      "pointActivityId": null,
      "usePointNums": "1000"
    }],
    "orderResource": "1",
    "deductPoint": 1000,
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "orderRequiredValue": "[]"
  }
}
/**
 * 获取19积分喜马拉雅
 */
export const get19Himalaya = () => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 19,
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 3001,
    "couponId": "",
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [{
      "goodsId": 169219,
      "quantity": 1,
      "priceType": 3,
      "gift": 0,
      "present": 0,
      "priceStrategy": 1,
      "entrance": null,
      "pureIntegralId": null,
      "pointActivityId": "119",
      "usePointNums": "19",
      "activityId": "119",
      "activityType": "4001"
    }],
    "orderResource": "1",
    "deductPoint": 19,
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "verificationCode": "1",
    "orderRequiredValue": "[]"
  }
}
/**
 * 获取1积分喜马拉雅
 */
export const get1Himalaya = () => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 1,
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 3001,
    "couponId": "",
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [{
      "goodsId": 169219,
      "quantity": 1,
      "priceType": 3,
      "gift": 0,
      "present": 0,
      "priceStrategy": 1,
      "entrance": null,
      "pureIntegralId": null,
      "pointActivityId": "157",
      "usePointNums": "1",
      "activityId": "157",
      "activityType": "4001"
    }],
    "orderResource": "1",
    "deductPoint": 1,
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "verificationCode": "1",
    "orderRequiredValue": "[]"
  }
}

/**
 * 获取1积分芒果
 */
export const get1Mango = () => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 1,
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 2001,
    "couponId": "",
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [
      {
        "goodsId": 169218,
        "quantity": 1,
        "priceType": 3,
        "gift": 0,
        "present": 0,
        "priceStrategy": 1,
        "entrance": 13,
        "pureIntegralId": null,
        "pointActivityId": "157",
        "usePointNums": "1",
        "activityId": "157",
        "activityType": "4001"
      }
    ],
    "orderResource": "1",
    "deductPoint": 1,
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "orderRequiredValue": "[]"
  }
}
/**
 * 获取0积分芒果
 */
export const get0Mango = (couponId:string) => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 0, // 商品所需积分
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 2001,
    couponId,
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [
      {
        "goodsId": 169218,
        "quantity": 1,
        "priceType": 3,
        "gift": 0,
        "present": 0,
        "priceStrategy": 1,
        "entrance": null,
        "pureIntegralId": null,
        "pointActivityId": "119",
        "usePointNums": "249",
        "activityId": "119",
        "activityType": "4001"
      }
    ],
    "orderResource": "1",
    "deductPoint": 0,
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "orderRequiredValue": "[]"
  }
}

/**
 * 获取399积分芒果季卡
 */
export const get399Mango = (couponId:string) => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 399,
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 3001,
    couponId,
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [
      {
        "goodsId": 179778,
        "quantity": 1,
        "priceType": 3,
        "gift": 0,
        "present": 0,
        "priceStrategy": 1,
        "entrance": null,
        "pureIntegralId": null,
        "pointActivityId": "119",
        "usePointNums": "699",
        "activityId": "119",
        "activityType": "4001"
      }
    ],
    "orderResource": "1",
    "deductPoint": 399,
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "verificationCode": " ",
    "orderRequiredValue": "[]"
  }
}
/**
 * 获取49积分芒果月卡
 */
export const get49Mango = (couponId:string) => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 49,
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 2001,
    couponId,
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [
      {
        "goodsId": 169218,
        "quantity": 1,
        "priceType": 3,
        "gift": 0,
        "present": 0,
        "priceStrategy": 1,
        "entrance": null,
        "pureIntegralId": null,
        "pointActivityId": "119",
        "usePointNums": "249",
        "activityId": "119",
        "activityType": "4001"
      }
    ],
    "orderResource": "1",
    "deductPoint": 49,
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "orderRequiredValue": "[]"
  }
}
/**
 * 获取149积分芒果月卡
 */
export const get149Mango = (couponId:string) => {
  return {
    "clientInfo": clientInfo,
    "chainID": null,
    "packetReduceMoney": null,
    "activityReduceAmount": 0,
    "point": 149,
    "totalAmount": 0,
    "consigneeName": "",
    "consigneeMobile": "",
    "consigneeAddress": "",
    "chanelId": 101,
    "shippingType": 1,
    "resource": 2001,
    couponId,
    "province": "",
    "city": "",
    "area": "",
    "offline": 0,
    "goodsList": [
      {
        "goodsId": 169218,
        "quantity": 1,
        "priceType": 3,
        "gift": 0,
        "present": 0,
        "priceStrategy": 1,
        "entrance": null,
        "pureIntegralId": null,
        "pointActivityId": "119",
        "usePointNums": "249",
        "activityId": "119",
        "activityType": "4001"
      }
    ],
    "orderResource": "1",
    "deductPoint": 149,
    "isVirtual": 1,
    "rechargeAccount": "",
    "postageCouponId": "",
    "discountType": 0,
    "flowType": 0,
    "postageCouponNum": 0,
    "orderRemark": "",
    "orderRequiredValue": "[]"
  }
}