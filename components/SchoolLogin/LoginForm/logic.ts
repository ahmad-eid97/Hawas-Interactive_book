//== Hooks
import { useState } from "react"

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

  const handleFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const showMyPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(!showPassword)
  }

  const login = () => {
    console.log(loginData)
  }

  return {
    loginData,
    handleFields,
    login,
    showMyPassword,
    showPassword
  }
}