'use client'
import React, { createContext, useContext, useState, ReactNode ,useEffect} from 'react';

interface ModalContextType {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);
export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
  };
  
  interface ModalProviderProps {
    children: ReactNode;
  }
  
  export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    useEffect(()=>{
        console.log("CALL THIS !!") 
    },[])
    const [isVisible, setIsVisible] = useState<boolean>(false);
  
    const openModal = () => setIsVisible(true);
    const closeModal = () => setIsVisible(false);
  
    return (
      <ModalContext.Provider value={{ isVisible, openModal, closeModal }}>
        {children}
      </ModalContext.Provider>
    );
  };