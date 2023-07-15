//== Modules
import axios from '@/utils/axios';

interface Response<T> {
  succuss: boolean
  message: string
  data: T
}

class API {
  public async GET<T>(endpoint: string): Promise<any> {
    try {
      const response = await axios.get<Response<T>>(endpoint);
      const data = response.data as T
      // return data
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

const api = new API();

export default api;