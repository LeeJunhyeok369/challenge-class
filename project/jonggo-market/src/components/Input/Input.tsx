import { ComponentProps, useId } from "react";

type InputProps = {
  label?: string;
  required?: boolean;
} & ComponentProps<"input">;

function Input({ label, id, required, ...props }: InputProps) {
  const inputUid = useId();
  const inputId = id || inputUid;
  return (
    <div className="flex flex-col gap-y-1.5 [&+&]:mt-4">
      {label && (
        <label className="text-sm font-semibold" htmlFor={inputUid}>
          <span>{label}</span>
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={inputId}
        {...props}
        className="border border-gray-400 rounded px-4 py-2.5 focus::outline-none focus:border-gray-900 transition "
      />
    </div>
  );
}

export default Input;
