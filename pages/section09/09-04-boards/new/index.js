// 등록 컴포넌트

import BoardWrite from "../../../../src/components-example/units/board/09-write2/BoardWrite.container"

export default function GraphqlMutationArgsPage(){
   
    return(
        <div>
            <BoardWrite
                isEdit={false}
            />
        </div>
    );
}