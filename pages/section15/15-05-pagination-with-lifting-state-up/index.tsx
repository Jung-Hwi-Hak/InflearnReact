import { gql, useQuery } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import BoardList from "../../../src/components-example/15-pagination-component/units/boardList";
import Pagination from "../../../src/components-example/15-pagination-component/commons/pagination";

// ? 게시글 조회 API
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

// ? 게시글 총 갯수 조회 API
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PaginationWitLifting(): JSX.Element {
  // ? 게시글 조회 result
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  // ? 게시글 총 갯수 result
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  // ? 게시글 마지막 페이지
  const lastPage =
    dataBoardsCount != null
      ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
      : 1;

  return (
    <>
      <BoardList data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </>
  );
}
