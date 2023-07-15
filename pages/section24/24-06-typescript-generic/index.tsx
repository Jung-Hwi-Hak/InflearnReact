// 1. 문자/숫자/불린 primitive 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result1 = getPrimitive("철수", 123, true);

// 2. any 타입 => 그냥 자바스크립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};

const result2 = getAny("철수", true, true);

// 3. unknown 타입
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 + 1000);
  return [arg3, arg2, arg1];
};

const result3 = getUnknown("철수", true, true);

// 4. generic 타입 - useState()에서 사용됨. ex) const [a,b] = useState(0 , "asd", true)
function getGenenric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

// const result4 = getGenenric("철수", "영희", 213);
const result4 = getGenenric<string, string, number>("철수", "영희", 213);

// 5. generic2 타입
function getGenenric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

// const result4 = getGenenric("철수", "영희", 213);
const result5 = getGenenric2<string, string, number>("철수", "영희", 213);

// 6. generic3 타입
const getGenenric3 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};

// const result4 = getGenenric("철수", "영희", 213);
const result6 = getGenenric3<string, string, number>("철수", "영희", 213);

console.log(result1, result2, result3, result4, result5, result6);
