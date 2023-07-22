// import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
// import type { IMutation, IMutationUploadFileArgs } from "../../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage(): JSX.Element {
  const [imgUrl, setImgUrl] = useState("");
  // const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (event.target.files === null) return;

    const file = event.target.files[0];
    console.log(file);

    // const result = await uploadFile({
    //   variables: {
    //     file,
    //   },
    // });
    // console.log(result.data?.uploadFile.url);
    // setImgUrl(String(result.data?.uploadFile.url));

    // 1. 임시 URL 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file);
    // console.log(result);

    // 2. 임시 URL 생성 => ( 진짜URL - 다른 브라우저에서도 접근 가능 )
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      console.log(event.target?.result);
      if (typeof event.target?.result === "string") setImgUrl(event.target?.result);
    };
  };

  return (
    <>
      <input type="file" onChange={wrapAsyncFunc(onChangeFile)} />
      {/* <img src={`https://storage.googleapis.com/${imgUrl}`} /> */}
      <img src={imgUrl} alt="" />
    </>
  );
}
