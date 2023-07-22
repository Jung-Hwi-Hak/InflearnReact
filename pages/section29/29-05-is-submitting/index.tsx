import axios from "axios";
import { wrapAsyncFunc } from "../../../src/commons/libraries/asyncFunc";
import { useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [isSumbmitting, setIsSumbmitting] = useState(false);

  // 게시글 등록하기 버튼이라고 가정
  const onClickSync = async (): Promise<void> => {
    setIsSumbmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    setIsSumbmitting(false);
  };

  return (
    <button onClick={wrapAsyncFunc(onClickSync)} disabled={isSumbmitting}>
      REST-API(동기)
    </button>
  );
}
