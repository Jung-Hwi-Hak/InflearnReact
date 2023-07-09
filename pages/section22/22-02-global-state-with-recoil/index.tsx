import BoardWrite from "../../../src/components/units/22-global-state/BoardWrite.container";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/stores";
import { useEffect } from "react";

export default function GlobalStateWithRecoilPage(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  const onClickChangeState = (): void => {
    setIsEdit((prev) => !prev);
  };

  return <BoardWrite onClickChangeState={onClickChangeState} />;
}
