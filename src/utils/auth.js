import Cookies from "js-cookie";

const TokenKey = "class_admin_token";

export function getToken() {
  return Cookies.get(TokenKey);
}
