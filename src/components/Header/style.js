import styled from "styled-components";
import { themeBase } from "../../styles/variables";
import { AiOutlineMenu } from 'react-icons/ai';

export const Wapper = styled.header`
  width: 100%;
  height: 16vh;
  padding: 40px 24px 0 24px;
  background-color: aliceblue;
  `

export const BurgerMenu = styled(AiOutlineMenu)`
  font-size: 4.8rem;
  color: ${themeBase.buttonColor};
  transition: ${themeBase.transition};
 
  &:hover {
    color: ${themeBase.buttonColorHover};
    cursor: pointer;
  }
`