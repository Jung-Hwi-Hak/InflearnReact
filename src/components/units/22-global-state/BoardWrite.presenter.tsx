import { useRecoilState } from "recoil";
import { isEditState } from "../../../commons/stores";

export default function BoardWirteUI(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return (
    <div onClick={props.onClickChangeState}>
      {isEdit ? "수정하기" : "등록하기"}
    </div>
  );
}
