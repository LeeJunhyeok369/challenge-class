import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black">
      <div className="mx-auto container px-5 h-16 flex items-center max-w-[1024px]">
        <Link className="text-lg font-bold" href="/">
          중고마켓
        </Link>
        <nav className="ml-20">
          <ul className="flex gap-x-8">
            <li>
              <Link href="/buy">구입하기</Link>
            </li>
            <li>
              <Link href="/deals/create">판매하기</Link>
            </li>
            <li>
              <Link href="/my/deals">내 판매글</Link>
            </li>
          </ul>
        </nav>
        <div className="ml-auto">
          <ul>
            <li>
              <Link href="/log-in">로그인</Link>
            </li>
            <li>
              <Link href="/sign-up">회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
