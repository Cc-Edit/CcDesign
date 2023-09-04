import { axiosInstance } from '@/utils/axios';
import { get } from 'lodash';
import { dataConfigProp } from '@/types';
export async function getData(dataConfig: dataConfigProp) {
  const { type, request, data = [] } = dataConfig;
  let result = null;
  if (type === 'static') {
    result = data;
  } else {
    const { url, method, options, resultKey } = request;
    let axiosData = await axiosInstance[method](url, options);
    result = resultKey ? get(axiosData, resultKey, null) : axiosData;
  }
  return result;
}