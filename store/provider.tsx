"use client";
//== Utils
import { store } from "./store";
import { Provider } from 'react-redux';
import { setQuestions } from "./slices/teacher";
import { useQuery } from "@tanstack/react-query";
import Cookies from "universal-cookie";
//== Api
import { getQuestionsForTeacher } from "@/API/quizzes/reported-quizzes";
// COMPONENT PROPS TYPES
interface Cprops {
  children: React.ReactNode;
}

const StoreProvider = ({ children }: Cprops) => {
  const hydratedStore = store;
  const currentState = store.getState();
  const cookies = new Cookies();

  const { data, isLoading } = useQuery(['questionsForTeacher'], getQuestionsForTeacher, {
    enabled: cookies.get("hawas-user")?.role === "teacher"
  })

  if (data && !isLoading) {
    hydratedStore.dispatch(setQuestions(data));
  }

  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}

export default StoreProvider;