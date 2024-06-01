import React, { createContext, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Toast from "../components/Toast";

export const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((title, content, time) => {
    const id = uuidv4();
    setToasts((prevToasts) => [...prevToasts, { id, title, content, time }]);
    // 쌓여있는 li 제거
    // setTimeout(() => {
    //   setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    // }, time + 500);
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <ul className="fixed bottom-6 right-6 flex flex-col gap-y-3">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            content={toast.content}
            time={toast.time}
          />
        ))}
      </ul>
    </ToastContext.Provider>
  );
}
