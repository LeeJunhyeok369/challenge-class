import React, { useId, useState } from "react";

export default function Input({
  value,
  type = "text",
  label,
  isRequired = false,
  name,
}) {
  const [inputValue, setInputValue] = useState(value);
  const inputId = useId();
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-y-1.5 items-start w-full">
      {label && (
        <label type="text" className="text-sm font-medium" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className="border px-4 py-3 rounded-md w-full"
        value={inputValue}
        onChange={handleChange}
        required={isRequired}
        name={name}
      />
    </div>
  );
}
