import { NextApiRequest, NextApiResponse } from "next";

type sendRequestType = {
    method?: "POST"
    body?: {}
    token: string
    url: string
}

export async function sendRequest({method = "POST", body = {}, token, url}:sendRequestType) {
  const data = JSON.stringify({
    "clientInfo": {
      "sid": 574582,
      "activityId": "",
      "channel": 2001
    },
    ...body
  })

  const headers: Record<string, string> = { // 默认请求头
    // 'Content-Length': data.length,
    // 'Authtype': '5',
    // 'Blackbox': 'kWPH91711592677c6Z8zt4hpP4',
    // 'Content-Type': 'application/json;charset=UTF-8',
    // 'Unitype': '10000011',
    // 'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',


    'Authtype': '5',
    'Blackbox': 'kWPH91711592677c6Z8zt4hpP4',
    'Content-Length': data.length,
    'Content-Type': 'application/json;charset=UTF-8',
    'Token': token,
    'Unitype': '10000011',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
  }

    try {
      const response = await fetch(
        `https://malls.bestwehotel.com/${url}`,
        {
          method,
          headers: {
            ...headers,
            'Token': token,
          },
          body: data
        }
      );
  
      console.log(`https://malls.bestwehotel.com/${url}`,
      {
        method,
        headers: {
          ...headers,
          'Token': token,
        },
        body: data
      })

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
  
      const responseData = await response.json();
      console.log(responseData)

      return responseData.data
    } catch (error) {
      return false
    }
  }


export const getInfo = async (token: string) => {
    return await sendRequest({url: "/plateno_mall/member/myPage", token})
}