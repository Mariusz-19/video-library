import React, { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../core/modules/firebase";
import { AuthContextType } from "../../core/types/video-item";
import LoadingCircle from "../LoadingCircle/LoadingCircle";

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, loading, error] = useAuthState(auth);
  console.log("errorerror", error)
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
