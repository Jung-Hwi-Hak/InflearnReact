import { useForm } from "react-hook-form";
import { wrapFormAsyncFunc } from "../../../src/commons/libraries/asyncFunc";

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  boardAddress: {
    addressDetail: string;
  };
}

export default function GraphqlMutationArgsPage(): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>();

  // 등록 함수
  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  // input value 가 달라져도 리렌더링 안됨.
  console.log("리렌더링");

  return (
    <form onSubmit={wrapFormAsyncFunc(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      제목: <input type="text" {...register("title")} />
      본문: <input type="text" {...register("contents")} />
      주소: <input type="text" {...register("boardAddress.addressDetail")} />
      <button type="submit">GRAPHQL-API 요청</button>
    </form>
  );
}
