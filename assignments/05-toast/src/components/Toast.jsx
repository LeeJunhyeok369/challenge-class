import { clsx } from "clsx";
import React, { useEffect, useState } from "react";

export default function Toast({ title, content, time = 2000 }) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(true);
    const hideTimeout = setTimeout(() => {
      setIsShow(false);
    }, time);
    return () => clearTimeout(hideTimeout);
  }, [time]);

  return (
    <li>
      <div
        className={clsx(
          "shadow-lg bg-white p-6 border rounded-lg w-[320px] transition-translate duration-500 text-sm ",
          {
            "translate-x-[0%]": isShow,
            "translate-x-[calc(100%+24px)]": !isShow,
          }
        )}
      >
        <div className="grow flex flex-col">
          <h6 className="font-semibold">{title}</h6>
          <p>{content}</p>
        </div>
      </div>
    </li>
  );
}
