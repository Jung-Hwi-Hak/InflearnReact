import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";

import BoardListUI from "./BoardList.presenter";

export default function BoardList(){
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARDS);

    // 게시글 생성페이지 이동
    const onClickMoveToBoardNew = () => {
        router.push("/boards/new");
    };

    // 게시글 상세페이지 이동
    const onClickMoveToBoardDetail = (e) => {
        router.push(`/boards/${e.target.id}`);
    };

    return (
        <BoardListUI
            data={data}
            onClickMoveToBoardNew={onClickMoveToBoardNew}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        />
    )
}