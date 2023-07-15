import { useMoveToPage } from "../../../src/components-example/commons/hooks/useMoveToPage";

export default function CustomHooksUseAuthPage(): JSX.Element {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <button onClick={onClickMoveToPage("/boards")}>게시판 이동</button>
      <button onClick={onClickMoveToPage("/markets")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypages")}>
        마이 페이지로 이동
      </button>
    </>
  );
}
