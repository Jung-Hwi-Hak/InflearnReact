import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import { useState } from "react";

export default function BoardDetail(){

    const [contents, setContents] = useState("");

    const router = useRouter();
    const {data} = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.boardId}
    });

    const {data: writer} = useQuery(FETCH_BOARD_COMMENTS, {
        variables: {boardId: router.query.boardId}
    });


    const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

    const onClickMoveToBoardEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`)
    };

    const onClickMoveToBoardList = () => {
        router.push("/boards")
    }

    const onChangeWriterContents = async (e) => {
        setContents(e.target.value);
    }

    const onClickContentsButton = async (e) => {
        try{
            const result = await createBoardComment({
                variables: {
                    boardId : router.query.boardId,
                    createBoardCommentInput : {
                        contents,
                        rating: 3
                    }
                }
            })
        }catch(error){
            alert("error");
        }
    }
    return(
        <BoardDetailUI
            data={data}
            onClickMoveToBoardEdit={onClickMoveToBoardEdit}
            onClickMoveToBoardList={onClickMoveToBoardList}
            onChangeWriterContents={onChangeWriterContents}
            onClickContentsButton={onClickContentsButton}
            writer={writer}
        />
    )
}