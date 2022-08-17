import React, { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../core/modules/firebase";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

export const AuthContext = createContext<{
  user: any;
  loading: any;
  error: any;
}>({
  user: null,
  loading: false,
  error: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
      }}
    >
      {loading ? <LoadingCircle /> : children}
    </AuthContext.Provider>
  );
}
