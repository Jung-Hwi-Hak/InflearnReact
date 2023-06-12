export default function TypescriptPage(){

    // 타입 추론
    let aaa = "안녕하세요";
    // aaa = 1 => error not string

    // 타입명시
    let bbb: string = "반갑습니다.";

    // 타입명시가 필요한 상황
    let ccc: number | string = 1000
    ccc = "1000원";


    // 숫자타입
    let ddd: number = 10
    // ddd = "10" => error not number

    // boolean타입
    let eee: boolean = true;
    
    // 배열타입
    let fff: number[] = [1,2,3];
    let ggg: string[] = ["1","2","3"];
    let hhh: (number | string)[] = ["1","2",3];

    // 객체타입
    interface IProfile {
        name: string
        age: string | number
        school: string
        
        hobby?: string
    }

    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: "학교",
    }

    profile.name = "훈이"
    profile.age = "8살"
    profile.hobby = "수영"

    // 함수타입
    function add(num1: number, num2: number, unit:string): string{
        return num1 + num2 + unit;
    }

    const result = add(1000, 2000, "원");
    
    const add2 = (num1: number, num2: number, unit:string): string =>{
        return num1 + num2 + unit;
    }
    const result2 = add2(1000, 2000, "원");

    //any 타입
    let qqq: any = "철수"
    qqq = 1;
    qqq = true;
    qqq = "hi";



    return <></>
}