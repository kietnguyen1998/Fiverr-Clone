import Axios from "axios";
import { DOMAIN, TOKEN, TOKEN_CYBERSOFT } from "../util/config";
export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        tokenByClass: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(TOKEN)
      } //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        tokenByClass: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(TOKEN)
      } //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        tokenByClass: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(TOKEN)
      } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        tokenByClass: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(TOKEN)
      } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
