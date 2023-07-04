import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const myGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgsPage() {
  const [myFunction] = useMutation(myGraphqlSetting);

  /* useState 영역 */
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  /* 함수 영역 */

  // 등록 함수
  const onClickSubmit = async () => {
    const result = await myFunction({
      // $ === variables
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
  };

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
