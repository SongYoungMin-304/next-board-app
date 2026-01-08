// max-w-3x : 최대 가로 넓이 제한
// mx-auto : 가운데 정렬
// p-6 : 여백
// flex justify-between : 자식 요소 정렬

import {mockBoards} from "@/components/mockBoard";
import Link from "next/link";

export default function Board(){
    return (
        <main className="max-w-3xl mx-auto p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">보드</h1>
                <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">
                    글쓰기
                </button>
            </div>

            <ul className="border-t">
                {mockBoards.map((board) => (
                    <li key={board.id} className="flex justify-between items-center py-4 border-b">
                        <Link
                          href={`/board/${board.id}`}
                          className="block py-4 hover:bg-gray-50"
                        >
                            <p className="font-medium">{board.title}</p>
                            <p className="text-sm text-gray-500">{board.author}</p>
                        </Link>
                        <span className="text-sm text-gray-400">
                            {board.createdAt}
                        </span>
                    </li>
                ))}

            </ul>

        </main>
    )
}