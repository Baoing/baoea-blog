import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  list: any[]; // 根据你的数据结构定义
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const token = "NIIvMpdcdxqTE01adboYUTVFWJJlGUMEKgrp937M6eSKGiHDYpZ1FexN6Ft/FOtA"

  const data = JSON.stringify({
    "clientInfo": {
      "sid": 574582,
      "activityId": "",
      "channel": 2001
    },
  });

  const response = await fetch('https://malls.bestwehotel.com/plateno_mall/member/myPage', {
    method: "POST",
    headers: {
      'Authtype': '5',
      'Blackbox': 'kWPH91711592677c6Z8zt4hpP4',
      'Content-Length': data.length,
      'Content-Type': 'application/json;charset=UTF-8',
      'Token': token,
      'Unitype': '10000011',
      'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
    },
    body: data
  })
  
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const responseData = await response.json();

  return new Response(JSON.stringify(responseData.data), { status: 200 })
}

export { handler as GET, handler as POST };
