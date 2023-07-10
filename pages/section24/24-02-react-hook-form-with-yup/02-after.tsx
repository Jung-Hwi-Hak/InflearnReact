import { useForm } from "react-hook-form";
import { wrapFormAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "./02-after.validation";
import type { IFormData } from "./02-after.types";

export default function GraphqlMutationArgsPage(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(yupSchema),
    mode: "onChange",
  });

  // 등록 함수
  const onClickSubmit = (data: IFormData): void => {
    console.log(data);
  };

  // input value 가 달라져도 리렌더링 안됨.
  console.log("리렌더링");

  return (
    <form onSubmit={wrapFormAsyncFunc(handleSubmit(onClickSubmit))}>
      작성자: <input type="text" {...register("writer")} />
      <div style={{ color: "tomato" }}>{formState.errors.writer?.message}</div>
      제목: <input type="text" {...register("title")} />
      <div style={{ color: "tomato" }}>{formState.errors.title?.message}</div>
      본문: <input type="text" {...register("contents")} />
      <div style={{ color: "tomato" }}>
        {formState.errors.contents?.message}
      </div>
      이메일: <input type="text" {...register("email")} />
      <div style={{ color: "tomato" }}>{formState.errors.email?.message}</div>
      패스워드: <input type="text" {...register("password")} />
      <div style={{ color: "tomato" }}>
        {formState.errors.password?.message}
      </div>
      번호: <input type="text" {...register("phone")} />
      <div style={{ color: "tomato" }}>{formState.errors.phone?.message}</div>
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button
        type="submit"
        style={{ backgroundColor: formState.isValid ? "yellow" : "tomato" }}
      >
        GRAPHQL-API 요청
      </button>
    </form>
  );
}
