//== Hooks
import { useState } from "react";

export default function useLogic() {
  const [state, setState] = useState({
    top: false
  });

  const toggleDrawer = (anchor: any, open: boolean) => (event: any) => {
    setState({ ...state, [anchor]: open });
  };

  return {
    state,
    toggleDrawer
  }
}