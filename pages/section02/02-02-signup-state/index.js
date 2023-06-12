import { useState } from "react"

export default function SignupStatePage(){

    // 이메일 State
    const [email,setEmail] = useState("");
    // 패스워드 State
    const [password,setPassword] = useState("");
    // 에러 State
    const [emailError, setEmailError] = useState("");

    const [passwordError, setPasswordError] = useState("");

    // 회원가입 함수
    function onClickSignup(){

        // 1. 유효성 검증.
        if(email.includes("@") === false){
            setEmailError("이메일이 옳바르지 않습니다.");
        } else {
            // 유효성 State 초기화
            setEmailError("");
            setPasswordError("");
        // 2. API 통신 

        // 3. Success Call
        alert("회원가입을 축하합니다.");   
        }
    }

    // 이메일 입력 함수
    function onChangeEmail(e){
        setEmail(e.target.value);
    };
    // 패스워드 입력 함수
    function onChangePassword(e){
        setPassword(e.target.value);
    };

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail}/>
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword}/>
            <div>{passwordError}</div>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )

}