//== Hooks
import { useState } from "react";
//== Utils
import Cookies from "universal-cookie"

const cookie = new Cookies();

export default function useLogic() {
  const [state, setState] = useState({
    top: false
  });

  const toggleDrawer = (anchor: any, open: boolean) => (event: any) => {
    setState({ ...state, [anchor]: open });
  };

  const logout = () => {
    cookie.remove("hawas-auth");
    cookie.remove("hawas-user");
    setTimeout(() => {
      window.location.href = '/login';
    }, 200)
  }

  return {
    state,
    toggleDrawer,
    logout
  }
}