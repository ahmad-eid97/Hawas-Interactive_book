//== Modules
import axios from '@/utils/axios';
import { errorNotify } from '@/utils/toast';

interface Response<T> {
  succuss: boolean
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
  public async POST<T>(endpoint: string, headers?: object, payload?: object): Promise<any> {
    try {
      const response = await axios.post<Response<T>>(endpoint, headers, payload);
      const data = response.data;
      if (data.succuss) return data;
      else errorNotify(data.message)
    } catch (error) {
      console.log(error)
    }
  }
}

const api = new API();

export default api;