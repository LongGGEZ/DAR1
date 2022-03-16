import { createContext, useState } from "react";
const ModalContext = createContext();
function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
      setShowModal(false);
  };
  const value = {
    showModal,
    handleShowModal,
    handleCloseModal,
  };
  return (
    <ModalContext.Provider value={value} setShowModal={setShowModal}>{children}</ModalContext.Provider>
  );
}
export { ModalContext, ModalProvider };
