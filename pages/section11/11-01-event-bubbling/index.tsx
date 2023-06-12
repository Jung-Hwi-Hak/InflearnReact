import type { MouseEvent } from "react";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function mapBoardsPage(): JSX.Element {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBoard = (event: MouseEvent<HTMLDivElement>) => {
    // currentTarget 중요. 버블링으로 자식 클릭으로 인해 부모 event 함수 동작시 실질적으로 event 태그의 target을 잡아줌
    alert(event.currentTarget.id + "님 게시글 클릭 완료!!");
  };

  return (
    <div>
      {data?.fetchBoards?.map((el: any) => (
        <div id={el.writer} onClick={onClickBoard} key={el.number}>
          <input type="checkbox" />
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </div>
  );
}
