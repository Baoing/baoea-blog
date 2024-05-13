/**
 * 获取抢购停车券的header和data
 */
export const getParkingCoupon = (token: string) => {
    const postData = JSON.stringify({
        "clientInfo": {
        "lbs": ",",
        "phoneType": "",
        "appVersion": "",
        "deviceId": "",
        "sysCode": "",
        "browserType": "Netscape",
        "sysType": "Win32",
        "channelId": "",
        "platformId": "",
        "sid": 574582,
        "activityId": "",
        "channel": 2001
        },
        "chainID": null,
        "packetReduceMoney": null,
        "activityReduceAmount": 0,
        "point": 9,
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
            "goodsId": 179101,
            "quantity": 1,
            "priceType": 3,
            "gift": 0,
            "present": 0,
            "priceStrategy": 20088,
            "entrance": null,
            "pureIntegralId": null,
            "pointActivityId": null,
            "usePointNums": "9",
            "activityId": "20088",
            "activityType": "1"
        }
        ],
        "orderResource": "1",
        "deductPoint": 9,
        "isVirtual": 1,
        "rechargeAccount": "",
        "postageCouponId": "",
        "discountType": 0,
        "flowType": 0,
        "postageCouponNum": 0,
        "orderRemark": "",
        "orderRequiredValue": "[]"
    })
    
    return {
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Content-Length': postData.length,
            "authType": "5",
            "token": token,
            "uniType": "10000011",

            'Accept': 'application/json, text/plain, */*',
            
            'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
            'blackBox': 'undefined',
            // 'Cookie': 'gdp_user_id=768e81e8-7465-4940-afbb-99b7505764df; 989d198a589474f0_gdp_session_id=a8d4b7c9-9c75-4237-ab45-4892a6a6f250; HWWAFSESID=fff9e73bcf772ed38e; HWWAFSESTIME=1714701550570; token=rTZ0FBp+Pb0ihvRN3DH9EoyYFjVk3CNyaQGo753SV+AYx7gaIsMWwtW1tjfYrfJb; Hm_lvt_9f2ae361d92de34235f5d20dda95b0bd=1714701553; Hm_lpvt_9f2ae361d92de34235f5d20dda95b0bd=1714701588; 9AD585D8A7CB034A=4Hgns1aG-1714701589688-ba6ffcdfcf8692015583756; 1735D64331DF397E=JOoY2ySsqFFxh61vv4Tsm%2FmRoh3SrEcwFychknVlFmP8wcyfphryzkuaxBMvD9N7SZ7X9Xi2uSlB27NJNqWvdw%3D%3D; _xid=l0K6kEi%2BJ5wxRC99GTN0H%2F1x%2BU1tHK3C3MjmZNLN0SE%3D; 989d198a589474f0_gdp_sequence_ids=%7B%22globalKey%22%3A12%2C%22PAGE%22%3A7%2C%22CUSTOM%22%3A6%7D; 989d198a589474f0_gdp_session_id_a8d4b7c9-9c75-4237-ab45-4892a6a6f250=true',
        },
        body: {
            "clientInfo": {
                "lbs": ",",
                "phoneType": "",
                "appVersion": "",
                "deviceId": "",
                "sysCode": "",
                "browserType": "Netscape",
                "sysType": "Win32",
                "channelId": "",
                "platformId": "",
                "sid": 574582,
                "activityId": "",
                "channel": 2001
            },
            "chainID": null,
            "packetReduceMoney": null,
            "activityReduceAmount": 0,
            "point": 9,
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
                "goodsId": 179101,
                "quantity": 1,
                "priceType": 3,
                "gift": 0,
                "present": 0,
                "priceStrategy": 20088,
                "entrance": null,
                "pureIntegralId": null,
                "pointActivityId": null,
                "usePointNums": "9",
                "activityId": "20088",
                "activityType": "1"
            }
            ],
            "orderResource": "1",
            "deductPoint": 9,
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
}
