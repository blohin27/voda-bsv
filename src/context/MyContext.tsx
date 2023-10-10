import React, {FC} from 'react';

 export  const MyContext = React.createContext({});

interface Props{
  children:React.ReactNode
}


export const MyProvider:FC<Props> = ({ children }) => {
  const value = {
    // Ваши данные и функции состояния здесь, например:
    data: "Hello from context",
    data1:'ghbdt'
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
