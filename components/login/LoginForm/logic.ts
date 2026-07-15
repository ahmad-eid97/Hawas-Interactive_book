//== Hooks
import { useState } from "react";
import { useRouter } from "next/navigation";
//== Moddules
import Cookies from "universal-cookie";
//== Utils
import { errorNotify } from "@/utils/toast";
//== API
import { studentLogin } from "@/API/auth";

type LoginData = {
  email: string,
  password: string
}

const cookies = new Cookies();

export default function useLogic() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }
  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const btn = e.currentTarget;
    btn.classList.add('loading-btn');
    try {
      const response = await studentLogin(loginData);
      if (response.success) {
        cookies.set('hawas-auth', response.data.access_token, { path: '/' });
        cookies.set('hawas-user', {
          name: response.data.student.name,
          email: response.data.student.email,
          photo_file: response.data.student.photo_file,
          role: "student"
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
    login
  }
}