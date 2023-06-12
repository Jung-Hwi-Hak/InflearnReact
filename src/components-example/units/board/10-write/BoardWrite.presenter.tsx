import { 
    RedInput,
    BlueButton
} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";


export default function BoardWriteUI(props:IBoardWriteUIProps){

    return(
        <div>
            <div>
                작성자: <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/>
            </div>
            <div>
                제목: <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/>
            </div>
            <div>
                본문: <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/>
            </div>
            <BlueButton onClick={props.isEdit? props.onClickUpdate : props.onClickSubmit}>
                {props.isEdit? "수정" : "등록"}하기
            </BlueButton>
        </div>
    );
}