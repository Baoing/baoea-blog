
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
        "goodsId": 178405,
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
  });
  
  const headers = {
    'Content-Type': 'application/json',
    'Content-Length': postData.length,
    "authType": "5",
    "token": "rTZ0FBp+Pb0ihvRN3DH9EoyYFjVk3CNyaQGo753SV+AYx7gaIsMWwtW1tjfYrfJb",
    "uniType": "10000011",
    'Cookie': 'gdp_user_id=768e81e8-7465-4940-afbb-99b7505764df; 989d198a589474f0_gdp_session_id=a8d4b7c9-9c75-4237-ab45-4892a6a6f250; HWWAFSESID=fff9e73bcf772ed38e; HWWAFSESTIME=1714701550570; token=rTZ0FBp+Pb0ihvRN3DH9EoyYFjVk3CNyaQGo753SV+AYx7gaIsMWwtW1tjfYrfJb; Hm_lvt_9f2ae361d92de34235f5d20dda95b0bd=1714701553; Hm_lpvt_9f2ae361d92de34235f5d20dda95b0bd=1714701588; 9AD585D8A7CB034A=4Hgns1aG-1714701589688-ba6ffcdfcf8692015583756; 1735D64331DF397E=JOoY2ySsqFFxh61vv4Tsm%2FmRoh3SrEcwFychknVlFmP8wcyfphryzkuaxBMvD9N7SZ7X9Xi2uSlB27NJNqWvdw%3D%3D; _xid=l0K6kEi%2BJ5wxRC99GTN0H%2F1x%2BU1tHK3C3MjmZNLN0SE%3D; 989d198a589474f0_gdp_sequence_ids=%7B%22globalKey%22%3A12%2C%22PAGE%22%3A7%2C%22CUSTOM%22%3A6%7D; 989d198a589474f0_gdp_session_id_a8d4b7c9-9c75-4237-ab45-4892a6a6f250=true',
    // 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
  }
  

export async function POST() {

    // 构造转发请求的选项
    const options = {
        method: 'POST',
        headers: headers,
        body: postData
    };

    try {
        // 发送转发请求
        const response = await fetch('https://malls.bestwehotel.com/plateno_mall/booking/addBooking', options);
        const responseData = await response.json();
        
        // 返回从另一个服务器获取的数据
        return new Response(JSON.stringify(responseData), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        // 处理错误
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'An error occurred while processing your request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
