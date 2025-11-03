import React, { createContext } from 'react';

export const UserContext = createContext();

// function UserContext({ children }) {
//   return <UserContext.Provider value="홍길동">{children}</UserContext.Provider>;
// }

// export default UserContext;

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value="홍길동">{children}</UserContext.Provider>;
};
