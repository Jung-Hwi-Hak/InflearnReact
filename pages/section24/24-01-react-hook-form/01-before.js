import { useState } from "react";

export default function GraphqlMutationArgsPage() {
  /* useState 영역 */
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  /* 함수 영역 */

  // 등록 함수
  const onClickSubmit = async () => {};

  // 작성자 함수
  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };

  // 제목 함수
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  // 본문 함수
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  console.log("리렌더링");
  return (
    <div>
      <div>
        작성자: <input type="text" onChange={onChangeWriter} />
      </div>
      <div>
        제목: <input type="text" onChange={onChangeTitle} />
      </div>
      <div>
        본문: <input type="text" onChange={onChangeContents} />
      </div>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    </div>
  );
}
