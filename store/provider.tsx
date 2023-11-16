"use client";
//== Utils
import { store } from "./store";
import { Provider } from 'react-redux';
// COMPONENT PROPS TYPES
interface Cprops {
  children: React.ReactNode
}

const StoreProvider = ({ children }: Cprops) => {
  return (
    <Provider store={store} >
      {children}
    </Provider>
  )
}

export default StoreProvider;