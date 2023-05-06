export const getUserToken = () => {
  return sessionStorage.getItem("token") || null;

};

export const removeUserToken = () => {
  sessionStorage.removeItem("token");
};

export const setUserToken = (token) => {
  sessionStorage.setItem("token", token);
  // console.log(" Token Set: " + token);
};

export const setAppToken = (appToken) => {
  sessionStorage.setItem("appToken", appToken);
  // console.log(" Token Set: " + token);
};

export const getAppToken = () => {
  return sessionStorage.getItem("appToken") || null;

};

export const removeAppToken = () => {
  sessionStorage.removeItem("appToken");
};

export const setroleToken = (roleToken) => {
  sessionStorage.setItem("roleToken", roleToken);
  // console.log(" Token Set: " + token);
};

export const getroleToken = () => {
  return sessionStorage.getItem("roleToken") || null;

};

export const removeroleToken = () => {
  sessionStorage.removeItem("roleToken");
};

