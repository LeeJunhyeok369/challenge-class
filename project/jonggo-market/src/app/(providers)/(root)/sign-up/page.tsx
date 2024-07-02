"use client";
import Button from "@/components/Button";
import Input from "@/components/Input/Input";
import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { ComponentProps } from "react";

function SignUpPage() {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();
    console.log(supabase);
    const { data, error } = await supabase.auth.signUp({
      email: "",
      password: "",
    });
  };

  return (
    <Page title="회원가입" width="sm">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto flex flex-col gap-y-8"
      >
        <div>
          <Input required label={"아이디"} />
          <Input required label={"비밀번호"} />
          <Input required label={"비밀번호 확인"} />
        </div>
        <Button>회원가입</Button>
      </form>
    </Page>
  );
}

export default SignUpPage;
