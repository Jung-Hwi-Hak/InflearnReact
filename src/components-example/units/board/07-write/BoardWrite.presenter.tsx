import { RedInput, BlueButton } from "./BoardWrite.styles";

interface IProps {
  onChangeWriter: () => void;
  onChangeTitle: () => void;
  onChangeContents: () => void;
  onClickSubmit: () => void;
  isActive: boolean;
}

export default function BoardWriteUI(props: IProps) {
  return (
    <div>
      <div>
        작성자: <RedInput type="text" onChange={props.onChangeWriter} />
      </div>
      <div>
        제목: <input type="text" onChange={props.onChangeTitle} />
      </div>
      <div>
        본문: <input type="text" onChange={props.onChangeContents} />
      </div>
      <BlueButton onClick={props.onClickSubmit} isActive={props.isActive}>
        GRAPHQL-API 요청
      </BlueButton>
    </div>
  );
}
