import { createContext, useState } from "react";
const loadingIcon = {
  prop: "bubbles",
};
const LoadingContext = createContext();
function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const value = {
    isLoading,
    setIsLoading,
    loadingIcon
  };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
}
export {LoadingContext,LoadingProvider}
// export default LoadingProvider;
