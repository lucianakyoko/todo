import styled from "styled-components";
import { themeBase } from "../../styles/variables";

export const PrimaryBtn = styled.button`
  padding:  1.4rem 6rem;

  color: ${themeBase.secondaryColor};
  font-size: 2.4rem;
  font-weight: 500;
  text-transform: uppercase;

  background-color: ${props => props.addBtn ? themeBase.buttonColor : themeBase.buttonStopColor};
  border: none;
  border-radius: ${themeBase.borderRadius};
  box-shadow: ${themeBase.dropShadow};
  transition: ${themeBase.transition};
  
  &:hover {
    background-color: ${props => props.addBtn ? themeBase.buttonColorHover : themeBase.buttonStopColorHover};
    cursor: pointer;
  }
`