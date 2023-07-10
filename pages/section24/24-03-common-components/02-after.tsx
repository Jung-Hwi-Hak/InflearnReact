import { useForm } from "react-hook-form";
import { wrapFormAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "./02-after.validation";
import type { IFormData } from "./02-after.types";
import Input01 from "../../../src/components-example/commons/inputs/01/input";
import Button01 from "../../../src/components-example/commons/buttons/01";
import Error01 from "../../../src/components-example/commons/errors/01";

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
      작성자: <Input01 register={register("writer")} type="text" />
      <Error01 errorMsg={formState.errors.writer?.message} />
      제목: <Input01 register={register("title")} type="text" />
      <Error01 errorMsg={formState.errors.title?.message} />
      본문: <Input01 register={register("contents")} type="text" />
      <Error01 errorMsg={formState.errors.contents?.message} />
      이메일: <Input01 register={register("email")} type="text" />
      <Error01 errorMsg={formState.errors.email?.message} />
      패스워드: <Input01 register={register("password")} type="password" />
      <Error01 errorMsg={formState.errors.password?.message} />
      번호: <Input01 register={register("phone")} type="text" />
      <Error01 errorMsg={formState.errors.phone?.message} />
      {/* 주소: <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <Button01 title="등록하기" type="submit" isActive={formState.isValid} />
    </form>
  );
}
