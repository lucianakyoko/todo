import styled from "styled-components";
import { flexColCenter, blurColorBg } from "../../styles/mixins";
import { GiCheckMark } from 'react-icons/gi';

export const Container = styled.section`
  ${flexColCenter};
  gap: 100px;
  width: 100%;
  height: 100vh;

  background-color: aliceblue;

  &::after {
    content: '';
    width: 100px;
    height: 100px;
    border-radius: 50%;
  
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${blurColorBg(100)};
  }
`

export const InfoBox = styled.div`
  ${flexColCenter};
  gap: 24px;
`

export const CheckIcon = styled(GiCheckMark)`
  font-size: 32px;
  color: #55B859;
`

export const IfoMessage = styled.p`
  color: #214567;
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
  padding: 0 7.2rem;
`

export const CtaBox = styled.div`
  ${flexColCenter};
  gap: 1.6rem;
`

export const CtaMessage = styled.p`
  color: #214567;
  font-size: 1.8rem;
  font-weight: 500;
`