const mockBoards = [
    {
        id: 1,
        title: 'Next.js 게시판 첫 글입니다',
        author: 'youngmin',
        createdAt: '2026-01-08',
    },
    {
        id: 2,
        title: 'App Router 너무 헷갈리네요',
        author: 'song',
        createdAt: '2026-01-07',
    },
    {
        id: 3,
        title: '서버 컴포넌트 감 잡는 중',
        author: 'dev',
        createdAt: '2026-01-06',
    },
];
// max-w-3x : 최대 가로 넓이 제한
// mx-auto : 가운데 정렬
// p-6 : 여백
// flex justify-between : 자식 요소 정렬

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
                        <div>
                            <p className="font-medium">{board.title}</p>
                            <p className="text-sm text-gray-500">{board.author}</p>
                        </div>
                        <span className="text-sm text-gray-400">
                            {board.createdAt}
                        </span>
                    </li>
                ))}

            </ul>

        </main>
    )
}