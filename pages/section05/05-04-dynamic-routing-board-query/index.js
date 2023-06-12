import {useRouter} from "next/router"

export default function StaticRoutingPage(){

    const router = useRouter();

    const onClickMove1 = (e)=>{
        router.push("/section05/05-04-dynamicrouting-board-query-moved/3601");
    }

    const onClickMove2 = (e)=>{
        router.push("/section05/05-04-dynamicrouting-board-query-moved/3600");
    }

    const onClickMove3 = (e)=>{
        router.push("/section05/05-04-dynamicrouting-board-query-moved/3599");
    }

    return (

        <div>
            <button onClick={onClickMove1}>페이지1 이동하기</button>
            <button onClick={onClickMove2}>페이지2 이동하기</button>
            <button onClick={onClickMove3}>페이지3 이동하기</button>
        </div>
    )

}