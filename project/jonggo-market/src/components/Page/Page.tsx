import { PropsWithChildren } from "react";
interface PageProps {
  title: string;
  isTitleHidden?: boolean;
}

export default function Page({
  title,
  isTitleHidden = false,
  children,
}: PropsWithChildren<PageProps>) {
  return (
    <main className="container mx-auto max-w-[1024px] px-5p py-20">
      {title && (
        <h1
          className={
            "text-3xl font-bold mb-12" + (isTitleHidden ? " hidden" : "")
          }
        ></h1>
      )}
      {children}
    </main>
  );
}
