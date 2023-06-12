import { 
    RedInput,
    BlueButton
} from "./BoardWrite.styles";

export default function BoardWriteUI(props){

    return(
        <div>
            <div>
                작성자: <RedInput type="text" onChange={props.onChangeWriter}/>
            </div>
            <div>
                제목: <input type="text" onChange={props.onChangeTitle}/>
            </div>
            <div>
                본문: <input type="text" onChange={props.onChangeContents}/>
            </div>
            <BlueButton onClick={props.onClickSubmit}>GRAPHQL-API 요청</BlueButton>
        </div>
    );
}