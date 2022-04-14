import styled from "styled-components";
import { themeBase } from "../../styles/variables";
import { flexRowCenter } from '../../styles/mixins';

export const Wrapper = styled.ul`
  ${flexRowCenter};
  gap: 1.8rem;
`
export const IconLink = styled.a`
  color: blue;
  font-size: 3.2rem;
  transition: ${themeBase.transition};

  &:hover {
    color: blueviolet;
    cursor: pointer;
  }
  
`