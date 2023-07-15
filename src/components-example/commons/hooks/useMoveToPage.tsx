import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/stores";

interface IUseMoveToPageReturn {
  onClickMoveToPage: (path: string) => () => void;
  visitedPage: string;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);

  const onClickMoveToPage = (path: string) => (): void => {
    if (path !== "/login") {
      // 로그인 페이지는 막기
      //   localStorage.setItem("visitedPage", path); // localStorage 사용
      setVisitedPage(path); // recoil 사용
    }
    void router.push(path);
  };

  return {
    onClickMoveToPage,
    visitedPage,
  };
};
