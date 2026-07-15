//== Hooks
import { parentLogin } from "@/API/auth";
import { useState } from "react"
import { useRouter } from "next/navigation";
//== Utils
import { errorNotify } from "@/utils/toast";
import Cookies from "universal-cookie";

type LoginData = {
  email: string,
  password: string
}

export default function useLogic() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const cookies = new Cookies();

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const showMyPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(!showPassword)
  }

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const btn = e.currentTarget;
    btn.classList.add('loading-btn');
    try {
      const response = await parentLogin(loginData);
      if (response.success) {
        cookies.set('hawas-auth', response.data.access_token, { path: '/' });
        cookies.set('hawas-user', {
          name: response.data.parent.name,
          email: response.data.parent.email,
          photo_file: response.data.parent.photo_file,
          role: "parent"
        }, { path: '/' });
        setTimeout(() => {
          window.location.href = '/';
        }, 500)
      } else {
        errorNotify('البريد الإلكتروني أو كلمة المرور غير صحيحة');
      }
    } catch (err) {
    }
    btn.classList.remove('loading-btn');
  }

  return {
    loginData,
    handleFields,
    login,
    showMyPassword,
    showPassword
  }
}