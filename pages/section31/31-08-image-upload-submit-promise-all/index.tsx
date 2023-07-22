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
  const [imgUrls, setImgUrls] = useState<string[]>(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);
  const [myFunction] = useMutation(myGraphqlSetting);
  const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

  // 등록 함수
  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile

    // ? 1-1 안좋은 예제제
    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });

    // const url0 = String(resultFile0.data?.uploadFile.url);
    // const url1 = String(resultFile1.data?.uploadFile.url);
    // const url2 = String(resultFile2.data?.uploadFile.url);

    // ? 1-2 좋은 예제 - Promise all 사용
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results);
    // const resultUrls = results.map((el) => el.data?.uploadFile.url);

    // ? 1-3 좋은 예제 - promise all 사용 리펙토링
    const results = await Promise.all(files.map(async (el) => await uploadFile({ variables: { file: el } })));
    console.log(results);
    const resultUrls = results.map((el) => el.data?.uploadFile.url);

    // 2. createBoard
    const result = await myFunction({
      // $ === variables
      variables: {
        createBoardInput: {
          writer: "철수",
          password: "1234",
          title: "제목",
          contents: "내용",
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
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
          const tempUrls = [...imgUrls];
          tempUrls[index] = event.target?.result;
          setImgUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        }
      };
    };

  return (
    <>
      <input type="file" onChange={wrapAsyncFunc(onChangeFile(0))} />
      <input type="file" onChange={wrapAsyncFunc(onChangeFile(1))} />
      <input type="file" onChange={wrapAsyncFunc(onChangeFile(2))} />
      <img src={imgUrls[0]} alt="" />
      <img src={imgUrls[1]} alt="" />
      <img src={imgUrls[2]} alt="" />
      <button onClick={wrapAsyncFunc(onClickSubmit)}>게시물 등록</button>
    </>
  );
}
