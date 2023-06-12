import * as S from "./BoardDetail.styles"
export default function BoardDetailUI(props){
    return(
        <S.Wrapper>
            <S.CardWrapper>
                <S.Header>
                    <S.AvatarWrapper>
                        <S.Avatar src="/images/avatar.png"/>
                        <S.Info>
                            <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                            <S.CreateAt>{props.data?.fetchBoard?.createdAt}</S.CreateAt>
                        </S.Info>
                    </S.AvatarWrapper>
                </S.Header>
                <S.Body>
                    <S.Title>{props.data?.fetchBoard?.title}</S.Title>
                    <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
                </S.Body>
            </S.CardWrapper>
            <S.BottomWrapper>
                <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
                <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
                <S.Button>삭제하기</S.Button>
            </S.BottomWrapper>

            <S.WriteWrapper>
                <S.WriteHeader>
                    <S.WriteHeaderImage src={"/images/board/detail/write.svg"}/>
                    <S.WriteHeaderTitle>댓글</S.WriteHeaderTitle>
                </S.WriteHeader>
                <S.WriteContentWrapper>
                    <S.WriteContentStarWrapper>
                        <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                        <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                        <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                        <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                        <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                    </S.WriteContentStarWrapper>
                    <S.WriteContentTextarea
                        onChange={props.onChangeWriterContents}
                        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    />
                    <S.WriteContentTextareaInfoWrapper>
                        <S.WriteContentTextareaInfoCnt>0</S.WriteContentTextareaInfoCnt>
                        <span>/100</span>
                        <S.WriteContentButton onClick={props.onClickContentsButton}>등록하기</S.WriteContentButton>
                    </S.WriteContentTextareaInfoWrapper>
                </S.WriteContentWrapper>
                <S.WriteListWrapper>
                    <S.WriteListIcon src={"/images/board/detail/user.svg"}/>
                    <S.WriteListInfoWrapper>

                        <S.WriteListInfoWriterWrapper>
                            <S.WriteListInfoWriter>{props.writer?.fetchBoardComments[4]?.rating}</S.WriteListInfoWriter>
                            <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                            <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                            <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                            <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                            <S.WriteContentStar src="/images/board/detail/inactive_star.svg"/>
                        </S.WriteListInfoWriterWrapper>
                        <S.WriteListInfoContent readOnly>{props.writer?.fetchBoardComments[0]?.contents}</S.WriteListInfoContent>
                        <S.WriteListInfoDate>2023.06.28</S.WriteListInfoDate>

                    </S.WriteListInfoWrapper>

                    <S.WriteListOptionWrapper>
                        <S.WriteListOptionEditImg src="/images/board/detail/edit.svg"/>
                        <S.WriteListOptionDeleteImg src="/images/board/detail/delete.svg"/>
                    </S.WriteListOptionWrapper>
                </S.WriteListWrapper>
            </S.WriteWrapper>
        </S.Wrapper>
    );
}