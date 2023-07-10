import { gql, useQuery } from "@apollo/client";
import type {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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

export default function BasketLocalStorage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (basket: IBoard) => (): void => {
    // 1. 기존 장바구니 가져오기
    const baskets: IBoard[] = JSON.parse(
      localStorage.getItem("baskets") ?? "[]"
    );

    // 2. 기존 장바구니에 해당 상품이 이미 담겨 있는지 확인
    const temp = baskets.filter((el) => el._id === basket._id);
    if (temp.length > 0) {
      alert("이미 담겨있는 상품입니다.");
      return;
    }

    // 3. 클릭한 상품 장바구니에 추가하기
    baskets.push(basket);

    // 4. 추가된 장바구니 localStorage에 저장
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  // 만약 장바구니 페이지에서 가져오기도 만들고 싶다면
  // useEffect() 사용

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
