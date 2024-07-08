"use client";
import { User } from "@supabase/supabase-js";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextValue = {
  isInitialized: boolean;
  isLoggedIn: boolean;
  me: User | null;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  signUp: (email: string, password: string) => void;
};
const initialValue: AuthContextValue = {
  isInitialized: false,
  isLoggedIn: false,
  me: null,
  logIn: () => {},
  logOut: () => {},
  signUp: () => {},
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [me, setMe] = useState<User | null>(null);
  const isLoggedIn = !!me;

  const logIn: AuthContextValue["logIn"] = async (email, password) => {
    if (me) return alert("이미 로그인 되어 있어요");

    if (!email || !password) return alert("이메일, 비밀번호 모두 채워 주세요.");
    const data = {
      email,
      password,
    };
    const response = await fetch("http://localhost:3000/api/auth/log-in", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const loggedInUser = await response.json();
    setMe(loggedInUser);
  };

  const logOut: AuthContextValue["logOut"] = async () => {
    if (!me) return alert("로그인 후 눌러주세요");

    await fetch("http://localhost:3000/api/auth/log-out", { method: "DELETE" });
    setMe(null);
  };

  const signUp: AuthContextValue["signUp"] = async (email, password) => {
    if (me) return alert("이미 로그인 되어 있어요");

    if (!email || !password) return alert("이메일, 비밀번호 모두 채워 주세요.");
    const data = {
      email,
      password,
    };
    const response = await fetch("http://localhost:3000/api/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const loggedInUser = await response.json();
    setMe(loggedInUser);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/me").then(async (response) => {
      if (response.status === 200) {
        const {
          data: { user },
        } = await response.json();
        setMe(user);
      }

      setIsInitialized(true);
    });
  }, []);

  const value: AuthContextValue = {
    isInitialized,
    isLoggedIn,
    me,
    logIn,
    logOut,
    signUp,
  };
  if (!isInitialized) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
