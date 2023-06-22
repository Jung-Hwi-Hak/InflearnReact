import { useMutation, gql } from "@apollo/client";
import { type ChangeEvent, useState } from "react";

const myGraphqlSetting = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationArgsPage(): JSX.Element {
  const [myFunction] = useMutation(myGraphqlSetting);

  /* useState 영역 */
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });

  /* 함수 영역 */

  // ? 등록 함수
  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction({
      variables: { ...inputs },
    });
    console.log(result);
  };

  // 수정 함수
  const onChangeInputs = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div>
      <div>
        작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      </div>
      <div>
        제목: <input type="text" id="title" onChange={onChangeInputs} />
      </div>
      <div>
        본문: <input type="text" id="contents" onChange={onChangeInputs} />
      </div>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청</button>
    </div>
  );
}
