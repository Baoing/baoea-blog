// pages/api/proxy.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method, query, body } = req;
    const { url } = query;

    const response = await axios({
      method: method,
      url: url,
      data: body,
      headers: {
        // 如果需要设置特定的请求头，可以在这里添加
      },
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error while proxying request:', error);
    res.status(error.response.status || 500).json({ error: 'Proxy error' });
  }
};
