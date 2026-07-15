//== Modules
import axios from '@/utils/axios';
import { errorNotify } from '@/utils/toast';

export interface Response<T> {
  success: boolean
  message: string
  data: T
}

class API {
  public async GET<T>(endpoint: string, headers?: object): Promise<any> {
    try {
      const response = await axios.get<Response<T>>(endpoint, headers);
      return response;
    } catch (error) {
      console.log(error)
    }
  }
  public async POST<T>(endpoint: string, payload?: object, headers?: object, error?: { noError?: boolean }): Promise<any> {
    try {
      const response = await axios.post<Response<T>>(endpoint, payload, headers);
      const data = response.data;
      if (data.success) return data;
      else error?.noError ? null : errorNotify(data.message)
    } catch (error: any) {
      if (error?.response?.status === 429) {
        errorNotify("لقد حاولت الدخول أكثر من مرة. حاول مرة أخري بعد 15 دقيقة")
      }
    }
  }
  public async PUT<T>(endpoint: string, payload?: object, headers?: object): Promise<any> {
    try {
      const response = await axios.put<Response<T>>(endpoint, payload, headers);
      console.log(response)
      const data = response.data;
      if (data.success) return data;
      else errorNotify(data.message)
    } catch (error: any) {
      console.log(error)
    }
  }
  public async DELETE<T>(endpoint: string, headers?: object): Promise<any> {
    try {
      const response = await axios.delete<Response<T>>(endpoint, headers);
      return response;
    } catch (error) {
      console.log(error)
    }
  }
}

const api = new API();

export default api;


export async function readStyles(_questionId: number) {
  return null;
}

export function loadStyles(_res: { styles: string, pathnames: string[], date: string }) {
  // No-op: backend offline
}