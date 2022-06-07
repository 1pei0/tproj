import axios from "axios";

export const getParkInfo = async () => {
   const { data } = await axios.get('https://data.ntpc.gov.tw/api/datasets/8D44BFAB-002C-4403-A283-D77C752AA1C3/json/preview');
   return data;
 };