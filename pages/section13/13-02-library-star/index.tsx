import React, { useState } from "react";
import { Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);
  console.log(value);

  // 1단계 방식
  const onChangeStar = (value: number): void => {
    setValue(value);
  };

  return <Rate onChange={onChangeStar} value={value} />; // 1단계 방식

  // 2단계 방식
  // const onChangeStar = (value: number): any => setValue(value);

  // return <Rate onChange={(value) => setValue(value)} value={value} />; // 2단계 방식

  // 3단계 방식
  // return <Rate onChange={setValue} value={value} />; // 3단계 방식
}
