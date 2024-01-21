//== Hooks
import { useState } from "react";
import { useRouter } from "next/navigation";
//== API
import { studentLogin } from "@/API/auth";
//== Utils
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
  });
  const router = useRouter();

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await studentLogin(loginData);
    console.log(response);
    // if (loginData.email === 'admin@hawas.com' && loginData.password === '12345678') {
    //   cookies.set('hawas-auth', 'true', { path: '/' });
    //   setTimeout(() => {
    //     location.href = '/';
    //   }, 1000)
    // }
  }

  return {
    loginData,
    handleFields,
    login
  }
}