import { createContext, useContext } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserWrapper = ({ children }) => {
  const accessToken = Cookies.get("accessToken");
  let data = accessToken && jwt_decode(accessToken);
  console.log(data);
  const { name, exp } = data;
  return (
    <UserContext.Provider value={{ name, exp }}>
      {!data ? null : children}
    </UserContext.Provider>
  );
};
