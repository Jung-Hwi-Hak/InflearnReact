import { useMutation, gql } from "@apollo/client";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";

const myGraphqlSetting = gql`
  mutation {
    createBoard(writer: "123", title: "안녕하세요", contents: "반갑습니다.") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [myFunction] = useMutation(myGraphqlSetting);

  const onClickSubmit = async (): Promise<void> => {
    const result = await myFunction();
    console.log(result);
  };

  return (
    <div>
      <button onClick={wrapAsyncFunc(onClickSubmit)}>GRAPHQL-API 요청</button>
    </div>
  );
}
