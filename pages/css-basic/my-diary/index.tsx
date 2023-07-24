import * as S from "./index.styles";

export default function MyDiary(): JSX.Element {
  return (
    <>
      <S.Header>
        <S.HeaderInner>
          <S.HeaderIconWrapper>
            <S.HeaderIcon src="../images/ink.png" />
          </S.HeaderIconWrapper>
          <S.HeaderNavUl>
            <S.HeaderNavLi>어제의 일기</S.HeaderNavLi>
            <S.HeaderNavLi>오늘의 일기</S.HeaderNavLi>
            <S.HeaderNavLi>내일의 일기</S.HeaderNavLi>
          </S.HeaderNavUl>
        </S.HeaderInner>
      </S.Header>
      <S.Container className="container">
        <S.Section className="wrapper">
          <S.Article className="wrapper__head">
            <S.Title className="wrapper__head__title">나만의 일기장</S.Title>
            <S.SubTitle className="wrapper__head__sub-title">
              나만의 일기장입니다. <br />
              원하는 색과 사이즈로 일기장을 커스텀해보세요.
              <br />
              <S.PointTitle className="wrapper__head__point-title">Have a Good day.</S.PointTitle>
            </S.SubTitle>
          </S.Article>
          <S.Line />
          <S.Article className="wrapper__body">
            <S.ContentWrapper className="wrapper__body__content">
              <S.ContentTitle>쭈꾸미의 일기</S.ContentTitle>
              <S.Content>
                오늘은 <S.ContentPointSpan>김치찜</S.ContentPointSpan>을 먹었다. 치즈 계란말이도 같이 나오는 세트였다.
                <br />
                맛있어서 정신없이 먹다 보니 배가 너무 불러서 힘들었다.
                <br /> 내일은 과식하지 말아야겠다!!
              </S.Content>
              <S.ContentDateWrapper>
                <S.ContentDateTop>2022년 6월 2일</S.ContentDateTop>
                <S.ContentDateBottom>날씨 맑음</S.ContentDateBottom>
              </S.ContentDateWrapper>
            </S.ContentWrapper>
          </S.Article>
        </S.Section>
      </S.Container>
    </>
  );
}
