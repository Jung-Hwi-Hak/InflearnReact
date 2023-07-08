export default function MapElPage(): JSX.Element {
  //   // 1. 기본방법
  //   ["철수", "짱구", "훈이"].forEach((el, index) => {
  //     console.log("el: ", el);
  //     console.log("index: ", index);
  //   });

  //   // 2. 매개변수 변경
  //   ["철수", "짱구", "훈이"].forEach((value, number) => {
  //     console.log("el: ", value);
  //     console.log("index: ", number);
  //   });

  //   // 3. 함수선언식
  //   ["철수", "짱구", "훈이"].forEach(function (value, number) {
  //     console.log("el: ", value);
  //     console.log("index: ", number);
  //   });

  // 4. el, index 변경
  ["철수", "짱구", "훈이"].forEach((index, el) => {
    console.log("el: ", index);
    console.log("index: ", el);
  });
  return <>ad</>;
}
