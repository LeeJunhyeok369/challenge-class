import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function SignUpPage() {
  const naviate = useNavigate();

  const { mutateAsync: signUp } = useMutation({
    mutationFn: (data) => api.auth.signUp(data),
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleClickSignUp = async () => {
    try {
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
      const data = { email, password };
      await signUp(data);
      alert("회원가입 완료");
      naviate("/");
    } catch {
      alert("회원가입 실패");
    }
  };

  return (
    <div>
      <input ref={emailInputRef} placeholder="이메일" type="email" />
      <input ref={passwordInputRef} placeholder="비밀번호" type="password" />
      <button onClick={handleClickSignUp}>회원가입</button>
    </div>
  );
}
