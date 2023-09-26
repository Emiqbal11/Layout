import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item = null, operationMode = "") => {
    setIsOpen(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return { isOpen, openModal, closeModal, selectedItem };
};

export default useToggle;
