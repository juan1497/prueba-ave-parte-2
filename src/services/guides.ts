import axios, { AxiosResponse } from "axios";
import { GuideResponse } from "../types/GuideType";

function getGuide(params: any): Promise<AxiosResponse<GuideResponse>> {
  const route = `https://aveonline.co/api/nal/v1.0/estado_guia.php?guia=${params}`;
  return axios.get(route);
}

export { getGuide };
