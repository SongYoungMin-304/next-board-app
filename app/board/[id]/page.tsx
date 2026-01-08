import {mockBoards} from "@/components/mockBoard";

type Props = {
    params: {
        id: string;
    };
};

export default async function BoardDetail({ params }: Props) {
    const { id } = await params;

    const boardId = Number(id)

    const board = mockBoards.find((b) => b.id === boardId);

    if (!board) {
        return (
            <main className="max-w-3xl mx-auto p-6">
                <p>게시글을 찾을 수 없습니다.</p>
            </main>
        );
    }

    return (
        <main className="max-w-3xl mx-auto p-6">
            <article>
                <h1 className="text-2xl font-bold mb-2">{board.title}</h1>
                <div className="text-sm text-gray-500 mb-6">
                    {board.author} {board.createdAt}
                </div>

                <div className="prose max-w-none">
                    {board.content}
                </div>
            </article>
        </main>
    );
}