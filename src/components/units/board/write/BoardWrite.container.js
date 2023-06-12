import BoardWriteUI from "./BoardWrite.presenter"
import { useState } from 'react'
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(props){
    const router = useRouter();

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentError, setContentError] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)
    
    const onChangeWriter = (e) => {
        const writer = e.target.value;
        setWriter(writer);
        if(writer){
            setWriterError("");
        } else{
            setWriterError("이름을 적어주세요.");
        }
    }

    const onChangePassword = (e)=> {
        const password = e.target.value;
        setPassword(password);

        if(password){
            setPasswordError("");
        } else{
            setPasswordError("패스워드를 적어주세요.");
        }
    }

    const onChangeTitle = (e)=> {
        const title = e.target.value;
        setTitle(title);

        if(title){
            setTitleError("");
        } else{
            setTitleError("제목을 적어주세요.");
        }
    }

    const onChangeContent = (e) => {
        const content = e.target.value;
        setContents(content);

        if(content){
            setContentError("");
        } else{
            setContentError("내용을 적어주세요.");
        }
    }

    const onClickSubmit = async ()=> {
        if (!writer) {
            setWriterError("작성자를 입력해주세요.");
        }
        if (!password) {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (!title) {
            setTitleError("제목을 입력해주세요.");
        }
        if (!contents) {
            setContentError("내용을 입력해주세요.");
        }
        if (writer && password && title && contents) {
            try{
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer,
                            password,
                            title,
                            contents
                        }
                    }
                });
                console.log(result);
                router.push(`/boards/${result.data.createBoard._id}`);
            }catch(error){
                alert(error.message);
            }
        }
    }

    const onClickUpdate = async() => {
        
        if(!title && !contents){
            alert("수정된 내용이 없습니다.");
            return;
        }

        if(!password){
            alert("비밀번호를 입력해주세요.");
            return;
        }

        const updateBoardInput = {};        
        if(title) updateBoardInput.title = title;
        if(contents) updateBoardInput.contents = contents;

        try{
            const result = await updateBoard({
                variables : {
                    boardId: router.query.boardId,
                    password,
                    updateBoardInput
                }
            });

            router.push(`/boards/${result.data.updateBoard._id}`)
            
        }catch(error){
            alert(error.message)
        }
    }

    const cancel = () => {
        router.push(`/boards/${router.query.boardId}`);
    }

    return (
        <BoardWriteUI
            onChangeWriter={onChangeWriter}
            writerError={writerError}
            onChangePassword={onChangePassword}
            passwordError={passwordError}
            onChangeTitle={onChangeTitle}
            titleError={titleError}
            onChangeContent={onChangeContent}
            contentError={contentError}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
            data={props.data}
            cancel={cancel}
        />
    )
}