import { createContext, useState } from "react";
const MenuMobileContext = createContext();
function MenuMobileProvider({ children }) {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const handleShowMenuMobile = () => {
    setShowMenuMobile(true);
  };
  const handleCloseMenuMobile = () => {
    setShowMenuMobile(false);
  };
  const value = {
    showMenuMobile,
    setShowMenuMobile,
    handleShowMenuMobile,
    handleCloseMenuMobile,
  };
  return (
    <MenuMobileContext.Provider value={value}>
      {children}
    </MenuMobileContext.Provider>
  );
}
export { MenuMobileContext, MenuMobileProvider };
