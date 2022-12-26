import { useLocation } from 'react-router';
import { Outlet } from 'react-router-dom';
import styled, { css } from 'styled-components';

import appBackground from '@/assets/images/appBackground.png';
import { Header } from '@/pages/common/sections';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  background: no-repeat center/cover url(${appBackground});
`;

const Container = styled.div`
  margin-left: 53.3%;
  margin-right: 46.7%;
  max-width: 440px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.background};

  @media only screen and (max-width: 1024px) {
    margin: 0 auto;
  }

  @media only screen and (max-width: 440px) {
    margin: 0;
  }
`;

const DescContainer = styled.div`
  display: block;
  position: fixed;
  padding-top: 176px;
  left: calc(50vw - 512px);
  height: 100vh;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Title = css`
  font-weight: 700;
  font-size: 4rem;
  line-height: 4.841rem;
`;

const SubTitle = styled.h2`
  ${Title};
`;

const MainTitle = styled.h1`
  ${Title};
  color: ${({ theme: { colors } }) => colors.primary};
`;

const TitleDesc = styled.p`
  margin-top: 3.2rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.7rem;
`;

const ServiceDesc = styled.p`
  position: fixed;
  bottom: 176px;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
`;

const OutletContainer = styled.div`
  height: calc(100vh - 100px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 5%;
    border-radius: 10px;
    background-color: ${({ theme: { colors } }) => colors.gray300};
  }
`;

const headerText = [
  {
    pathname: '/login',
    text: '로그인',
  },
  {
    pathname: '/signup',
    text: '회원가입',
  },
];

export function App() {
  const location = useLocation();
  const headerObj = headerText.find((e) => e.pathname === location.pathname);
  return (
    <Wrapper>
      <DescContainer>
        <SubTitle>
          우리 일상 속<br />
          작은 정성, 세탁
        </SubTitle>
        <MainTitle>새물 파트너</MainTitle>
        <TitleDesc>우리동네 세탁 O2O 플랫폼</TitleDesc>
        <ServiceDesc>
          꼭 필요한 일상 서비스
          <br />
          나를 위한 작은 정성
          <br />
          우리를 위한 따뜻한 커뮤니티
        </ServiceDesc>
      </DescContainer>
      <Container>
        {headerObj && <Header>{headerObj.text}</Header>}
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Container>
    </Wrapper>
  );
}
