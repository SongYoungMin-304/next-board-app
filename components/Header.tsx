import Link from "next/link";

export default function Header(){
    return (
            <header className="h-14 border-b">
                <div className="h-full">
                    <Link href="/">홈</Link>
                    <Link href="/board">게시판</Link>
                </div>
            </header>
    );
}