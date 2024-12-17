"use client";

import { createContext, ReactNode, useContext, useRef } from "react";
import { createStore, useStore } from "zustand";

export interface AuthInfoState {
  isAuth: boolean;
  token?: string;
}

export interface AuthInfoAction {
  setAuthInfo: (state: Partial<AuthInfoState>) => void;
  clearAuthInfo: () => void;
}

export interface AuthInfoStore {
  state: AuthInfoState;
  action: AuthInfoAction;
}

export const authInfoDefaultState: AuthInfoState = {
  isAuth: false,
  token: undefined,
};

export const createAuthInfoStore = (
  initState: AuthInfoState = authInfoDefaultState,
) => {
  return createStore<AuthInfoStore>()((set) => ({
    state: {
      ...initState,
    },
    action: {
      setAuthInfo(state) {
        set((prev) => ({
          ...prev,
          state: { ...prev.state, ...state },
        }));
      },
      clearAuthInfo() {
        set((prev) => ({ ...prev, ...initState }));
      },
    },
  }));
};

export type AuthInfoStoreApi = ReturnType<typeof createAuthInfoStore>;

export const AuthInfoContext = createContext<AuthInfoStoreApi | undefined>(
  undefined,
);

export const AuthInfoProvider = ({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: AuthInfoState;
}) => {
  const storeRef = useRef<AuthInfoStoreApi>(undefined);

  if (!storeRef.current) {
    storeRef.current = createAuthInfoStore(initialState);
  }

  return (
    <AuthInfoContext.Provider value={storeRef.current}>
      {children}
    </AuthInfoContext.Provider>
  );
};

export const useAuthInfoStore = <T,>(
  selector: (store: AuthInfoStore) => T,
): T => {
  const authInfoContext = useContext(AuthInfoContext);

  if (!authInfoContext) {
    throw new Error(`useAuthInfoStore must be used within AuthInfoProvider`);
  }

  return useStore(authInfoContext, selector);
};
