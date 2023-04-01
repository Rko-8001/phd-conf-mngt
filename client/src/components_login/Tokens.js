export const getToken = () => {
    return sessionStorage.getItem("token") || null;
  };
  
export const removeUserToken = () => {
    sessionStorage.removeItem("token");
  };
  
export const setUserToken = (token) => {
    sessionStorage.setItem("token", token);
  };