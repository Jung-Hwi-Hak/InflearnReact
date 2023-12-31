import {
    Wrapper,
    Title,
    Writer,
    WriterWrapper,
    Label,
    InputWrapper,
    Password,
    Subject,
    Contents,
    SearchButton,
    ZipCode,
    ZipCodeWrapper,
    Address,
    Youtube,
    ImageWrapper,
    UploadButton,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    ButtonWrapper,
    CancelButton,
    SubmitButton
} from '../../../styles/boardNew'

export default function EmotionPage(){

    return(
        <Wrapper>
            <Title>게시글 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type='text' placeholder='이름을 적어주세요.'/>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type='password' placeholder='비밀번호를 작성해주세여.'/>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject type='text' placeholder='제목을 작성해주세요.' />
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents placeholder='내용을 작성해주세요.'/>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipCodeWrapper>
                    <ZipCode placeholder='07250'/>
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipCodeWrapper>
                <Address/>
                <Address/>
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube type='text' placeholder='링크를 복사해주세요.'/>
            </InputWrapper>
            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type='radio' id='youtube' name='radio-button'/>
                <RadioLabel htmlFor='youtube'>유튜브</RadioLabel>
                <RadioButton type='radio' id='image' name='radio-button'/>
                <RadioLabel htmlFor='image'>이미지</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton>등록</SubmitButton>
                <CancelButton>취소</CancelButton>
            </ButtonWrapper>
        </Wrapper>
    )
}