//== Hooks
import { useRouter } from "next/navigation";
//== Utils
import Cookies from "universal-cookie"

const cookie = new Cookies();

export default function useLogic() {
  const router = useRouter();

  const logout = () => {
    cookie.remove("hawas-auth");
    cookie.remove("hawas-user");
    setTimeout(() => {
      window.location.href = '/login';
    }, 200)
  }

  return {
    logout
  }
}