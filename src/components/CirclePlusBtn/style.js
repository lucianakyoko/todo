import styled from "styled-components";
import { themeBase } from "../../styles/variables";
import { flexColCenter } from "../../styles/mixins";
import { AiOutlinePlus } from 'react-icons/ai';

export const Wrapper = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: ${themeBase.mainColor};
  box-shadow: ${themeBase.dropShadow};

  ${flexColCenter};
  transition: ${themeBase.transition};

  &:hover {
    background-color: ${themeBase.buttonColorHover};
    cursor: pointer;
  }
`

export const Plus = styled(AiOutlinePlus)`
  color: ${themeBase.secondaryColor};
  font-size: 4rem;

`