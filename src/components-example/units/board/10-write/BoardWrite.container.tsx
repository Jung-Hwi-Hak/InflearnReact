import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";

import { myGraphqlSetting, updateBoard } from "./BoardWrite.queries";
import { useRouter } from "next/router";
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types";


export default function BoardWrite(props:IBoardWriteProps){
    const router = useRouter();

    const [myFunction] = useMutation(myGraphqlSetting);
    const [updateBoard1] = useMutation(updateBoard);

    /* useState 영역 */
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    /* 함수 영역 */

    // 등록 함수
    const onClickSubmit = async ()=>{
        const result = await myFunction({
            // $ === variables
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        });

        router.push(`/section10/10-02-Typescript-boards/${result.data.createBoard.number}`);
    }

    // 수정 함수
    const onClickUpdate = async() => {

        const myVariables: IMyVariables = {
            number : Number(router.query.number)
        };

        if(writer) myVariables.writer = writer
        if(title) myVariables.title = title
        if(contents) myVariables.contents = contents

        const result = await updateBoard1({
            variables: myVariables
        });
        router.push(`/section10/10-02-Typescript-boards/${result.data.updateBoard.number}`);
    }

    // 작성자 함수
    const onChangeWriter = (e:ChangeEvent<HTMLInputElement>)=> {
        setWriter(e.target.value);
    }

    // 제목 함수
    const onChangeTitle = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value);
    }

    // 본문 함수
    const onChangeContents = (e:ChangeEvent<HTMLInputElement>)=>{
        setContents(e.target.value);
    }
    return(
        <BoardWriteUI 
            onClickSubmit = {onClickSubmit}
            onClickUpdate = {onClickUpdate}
            onChangeWriter = {onChangeWriter}
            onChangeTitle = {onChangeTitle}
            onChangeContents = {onChangeContents}
            title={title}
            isEdit = {props.isEdit}
            data={props.data}
        />
    )
}