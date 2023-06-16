import React, { useState } from 'react';

interface User {
  id?: string;
  token: string;
}

interface UserContextProps {
  user: User | null;
  updateUser: (userData: User) => void;
  isAuthenticating: boolean;
}

export const UserContext = React.createContext<UserContextProps>({
  user: null,
  updateUser: () => { },
  isAuthenticating: false,
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const updateUser = (userData: User) => {
    setUser(userData);
  };

  const value: UserContextProps = {
    user,
    updateUser,
    isAuthenticating,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
