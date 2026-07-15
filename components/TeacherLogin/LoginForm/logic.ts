//== Hooks
import { useState } from "react";
import { useRouter } from "next/navigation";
//== API
import { teacherLogin } from "@/API/auth";
//== Utils
import { errorNotify } from "@/utils/toast";
import Cookies from "universal-cookie";

type LoginData = {
  email: string,
  password: string
}

const cookies = new Cookies();

export default function useLogic() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

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
      const response = await teacherLogin(loginData);
      if (response.success) {
        cookies.set('hawas-auth', response.data.access_token, { path: '/' });
        cookies.set('hawas-user', {
          name: response.data.teacher.name,
          email: response.data.teacher.email,
          photo_file: response.data.teacher.photo_file,
          role: "teacher"
        }, { path: '/' });
        setTimeout(() => {
          window.location.href = '/books';
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