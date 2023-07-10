// 1. 함수를 리턴하는 함수
// function aaa() {
//   const apple = 10;

//   return function bbb() {
//     const banana = 20;
//     console.log(banana);
//     console.log(apple);
//   };
// }
// aaa()();

// function aaa(apple) {
//   return function bbb(banana) {
//     console.log(banana);
//     console.log(apple);
//   };
// }
// aaa(100)(500);

// 2. 함수를 리턴 여러개

const ccc = (apple) => (banana) => (tomato) => (orange) => {
  console.log(apple);
  console.log(banana);
  console.log(tomato);
  console.log(orange);
};

ccc(1)(2)(3)(4);
