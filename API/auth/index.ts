//== API
import api from "../handlers";
//== Types
import { LoginData } from "./types";

export function studentLogin(payload: LoginData) {
  const response = api.POST(`/users/auth/login`, payload);
  if (response) return response;
}