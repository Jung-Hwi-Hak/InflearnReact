import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from "@apollo/client";
import { useState } from "react";

import { myGraphqlSetting } from "./BoardWrite.queries";

export default function BoardWrite(props){
    const [myFunction] = useMutation(myGraphqlSetting);

    /* useState 영역 */
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [isActive, setIsActive] = useState(false);
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
        if(e.target.value && title && contents){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }

    // 제목 함수
    const onChangeTitle = (e)=>{
        setTitle(e.target.value);
        if(writer && e.target.value && contents){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }

    // 본문 함수
    const onChangeContents = (e)=>{
        setContents(e.target.value);
        if(writer && title && e.target.value){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }
    
    return(
        <BoardWriteUI 
            onClickSubmit = {onClickSubmit}
            onChangeWriter = {onChangeWriter}
            onChangeTitle = {onChangeTitle}
            onChangeContents = {onChangeContents}
            isActive = {isActive}
        />
    )
}