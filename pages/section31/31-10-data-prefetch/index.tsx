import { gql, useApolloClient, useQuery } from "@apollo/client";
import type { IQuery, IQueryFetchBoardsArgs } from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import _ from "lodash";

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

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function mapBoardsPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const router = useRouter();
  const client = useApolloClient();

  //   const prefetchBoard = (boardId: string) => async (): Promise<void> => {
  //     await client.query({
  //       query: FETCH_BOARD,
  //       variables: {
  //         boardId,
  //       },
  //     });
  //   };

  const prefetchBoardDebounce = _.debounce(async (event): Promise<void> => {
    const boardId = event.target.id;
    await client.query({
      query: FETCH_BOARD,
      variables: {
        boardId,
      },
    });
  }, 500);

  const onClickMove = (boardId: string) => (): void => {
    void router.push(`/section31/31-10-data-prefetch-moved/${boardId}`);
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          {/* <span style={{ margin: "10px" }} onMouseOver={prefetchBoard(el._id)} onClick={onClickMove(el._id)}> */}
          <span
            id={el._id}
            style={{ margin: "10px" }}
            onMouseOver={prefetchBoardDebounce}
            onClick={onClickMove(el._id)}
          >
            {el.title}
          </span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
