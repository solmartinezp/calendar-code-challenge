import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type AxiosConfig = AxiosRequestConfig & {
  url: string;
};

const AbstractService = async (config: AxiosConfig): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw new Error(`Error in AbstractService: ${error}`);
  }
};

export default AbstractService;