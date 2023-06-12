// 등록 컴포넌트
import BoardWrite from "../../../../src/components-example/units/board/10-write/BoardWrite.container"

export default function GraphqlMutationArgsPage(){
   
    return(
        <div>
            <BoardWrite
                isEdit={false}
            />
        </div>
    );
}