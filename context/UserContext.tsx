'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { UserContext as UserContextType } from '@/types';

interface UserContextProviderProps {
  children: ReactNode;
}

const UserContextState = createContext<{
  userContext: UserContextType | null;
  setUserContext: (context: UserContextType | null) => void;
} | null>(null);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userContext, setUserContext] = useState<UserContextType | null>(null);

  return (
    <UserContextState.Provider value={{ userContext, setUserContext }}>
      {children}
    </UserContextState.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContextState);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}