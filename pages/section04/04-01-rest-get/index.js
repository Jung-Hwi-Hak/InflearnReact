import axios from "axios";
import MyPage from "../../section01/01-01-example";


export default function RestGetPage(){

    // 비동기
    const onClickAsync = ()=> {
        const result = axios.get('https://koreanjson.com/posts/1');
        console.log(result);
    }

    // 동기
    const onClickSync = async () => {
        const result = await axios.get('https://koreanjson.com/posts/1');
        console.log(result);
    }

    return(
        <div>
            <MyPage/>
            <button onClick={onClickAsync}>REST-API(비동기)</button>
            <button onClick={onClickSync}>REST-API(동기)</button>
        </div>
    );

}