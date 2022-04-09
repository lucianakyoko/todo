import styled from "styled-components";
import { themeBase } from "./variables";

export const IconBtn =  () => {
  return `
    color: ${themeBase.buttonColor};
    font-size: 4rem;
    transition: ${themeBase.transition};

    &:hover {
      color: ${themeBase.buttonColorHover};
      cursor: pointer;
  }
  `
};

export const Input = styled.input`
  width: 100%;
  padding: .8rem 2.4rem;
  border: none;
  border-radius: ${themeBase.borderRadius};

  &[type=text] {
    min-width: 312px;
    max-width: 500px;
    color: #222;
    font-size: 1.8rem;
    letter-spacing: .12em;
  }
  
  &:focus {
    color: #A43CD4;
    outline: none;
    border: 2px solid #c4c4c4;
  }
`


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

export const SecondaryBtn = styled.button`
  padding:  1.4rem 6rem;
  color: blue;
  font-size: 2.4rem;
  font-weight: 500;
  text-transform: lowercase;

  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`