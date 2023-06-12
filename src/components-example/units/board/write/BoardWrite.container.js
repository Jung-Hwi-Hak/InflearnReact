import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from "@apollo/client";
import { useState } from "react";

import { myGraphqlSetting } from "./BoardWrite.queries";

export default function BoardWrite(){
    const [myFunction] = useMutation(myGraphqlSetting);

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
        console.log(result);
    }

    // 작성자 함수
    const onChangeWriter = (e)=> {
        setWriter(e.target.value);
    }

    // 제목 함수
    const onChangeTitle = (e)=>{
        setTitle(e.target.value);
    }

    // 본문 함수
    const onChangeContents = (e)=>{
        setContents(e.target.value);
    }
    return(
        <BoardWriteUI 
            onClickSubmit = {onClickSubmit}
            onChangeWriter = {onChangeWriter}
            onChangeTitle = {onChangeTitle}
            onChangeContents = {onChangeContents}
        />
    )
}