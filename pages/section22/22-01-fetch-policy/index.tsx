import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState } from "react";
import FetchPolicyComponent from "../../../src/components/units/22-fetch-policy";
import { useRouter } from "next/router";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function FetchPolicyPage(): JSX.Element {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  // 1. 새로운 컴포넌트 등장시에도 글로벌 스테이트 값이 유지되는지?
  const onClickIsOpen = (): void => {
    setIsOpen((prev) => !isOpen);
  };

  // 1. 새로운 페이지 이동시에도 글로벌 스테이트 값이 유지되는지?
  const onClickMove = (): void => {
    void router.push("/section22/22-01-fetch-policy-moved");
  };
  return (
    <div>
      <button onClick={onClickMove}>버튼 클릭시 페이지 이동</button>
      ============================================
      <button onClick={onClickIsOpen}>
        버튼 클릭하면 새로운 컴포넌트가 나타납니다.
      </button>
      {isOpen && <FetchPolicyComponent />}
    </div>
  );
}
