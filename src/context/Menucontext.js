"use client"

import React, { createContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState("");

  return (

    <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;