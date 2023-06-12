export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}
// 1. Partial 타입

// export interface IProfile {
//     name?: string,
//     age?: number,
//     school?: string,
//     hobby?: string,
// }
type aaa = Partial<IProfile>;
const asd: aaa = {
  name: "test",
};
console.log(asd);
// 2. Required 타입
// export interface IProfile {
//     name: string,
//     age: number,
//     school: string,
//     hobby: string,
// }
type bbb = Required<IProfile>;

// 3.Pick 타입
// export interface IProfile {
//     name: string,
//     age: number,
//     hobby?: string,
// }
type ccc = Pick<IProfile, "name" | "age" | "hobby">;

// 4. Omit 타입
// export interface IProfile {
//     name: string,
//     age: number,
//     hobby?: string,
// }
type ddd = Omit<IProfile, "school">;

// 5. Record 타입
type eee = "철수" | "영희" | "훈이"; // Union 타입
let child1: eee = "훈이"; // eee Union 타입에 설정된 값만 사용 가능
let child2: string = "짱구";

type fff = Record<eee, IProfile>; // Record 타입

// 6. 객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; // keyof "name" | "age" | "school" | "hobby"
let myProfile: ggg = "hobby";

// 7. type vs interface 차이 ( interface 는 선언병합 가능 )
export interface IProfile {
  candy: number; // 선언병합으로 추가됨.
}

// 8. Example
let profile: Partial<IProfile> = {
  candy: 10,
};

let profile2: Required<IProfile> = {
  age: 8,
  candy: 10,
  hobby: "Test",
  name: "Test",
  school: "Test",
};
