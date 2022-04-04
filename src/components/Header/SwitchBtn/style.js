import styled from "styled-components";

export const Wrapper = styled.label`
  width: 60px;
  height: 34px;

  display: inline-block;
  position: relative;
`

export const CheckBox = styled.input`
  width: 0;
  height: 0;

  opacity: 0;
`

export const SliderDot = styled.span`
  background-color: #2196f3;
  border-radius: 34px;
  cursor: pointer;
  
  transition: .4s;
  position: absolute;
  inset: 0;

  &::before {
    content: '';

    width: 26px;
    height: 26px;

    background-color: white;
    border-radius: 50%;

    position: absolute;
    left: 4px;
    bottom: 4px;
    transition: 0.4s;
  }

  ${CheckBox}:checked + &{
    background-color: #ccc;
  }

  ${CheckBox}:checked + &::before {
    transform: translateX(26px);
  }
`

