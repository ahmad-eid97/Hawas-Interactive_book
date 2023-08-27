//== Hooks
import { useRouter } from "next/navigation";
//== Utils
import Cookies from "universal-cookie"

const cookie = new Cookies();

export default function useLogic() {
  const router = useRouter();

  const logout = () => {
    cookie.remove("hawas-auth");
    setTimeout(() => {
      router.push('/login');
    }, 200)
  }

  return {
    logout
  }
}