import axios, { AxiosResponse, AxiosError } from 'axios';


// 封装GET请求
export async function get<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error while making GET request:', error);
    throw error;
  }
}

// 封装POST请求
export async function post<T>(url: string, data: any): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error while making POST request:', error);
    throw error;
  }
}