import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import type { IMutation, IMutationUploadFileArgs } from "../../../src/commons/types/generated/types";

const myGraphqlSetting = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState<File>();
  const [myFunction] = useMutation(myGraphqlSetting);
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

  // 등록 함수
  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile
    const resultFile = await uploadFile({
      variables: {
        file,
      },
    });
    const url = String(resultFile.data?.uploadFile.url);

    // 2. createBoard
    const result = await myFunction({
      // $ === variables
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목",
          contents: "내용",
          images: url,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (event.target.files === null) return;

    const file = event.target.files[0];
    console.log(file);

    // 1. 임시 URL 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file);
    // console.log(result);

    // 2. 임시 URL 생성 => ( 진짜URL - 다른 브라우저에서도 접근 가능 )
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setImgUrl(event.target?.result);
        setFile(file);
      }
    };
  };

  return (
    <>
      <input type="file" onChange={wrapAsyncFunc(onChangeFile)} />
      {/* <img src={`https://storage.googleapis.com/${imgUrl}`} /> */}
      <img src={imgUrl} alt="" />
      <button onClick={wrapAsyncFunc(onClickSubmit)}>게시물 등록</button>
    </>
  );
}
