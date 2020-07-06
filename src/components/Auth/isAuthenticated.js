import jwt_decode from "jwt-decode";

const isAuthenticated = () => {
  if (localStorage.getItem("Token")) {
    const token = localStorage.getItem("Token");
    try {
      const result = jwt_decode(token);

      return result.role;
    } catch (error) {}
  }

  //si no hay token
  return false;
};

export default isAuthenticated;
