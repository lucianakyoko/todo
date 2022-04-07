import styled from "styled-components";
import {MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { themeBase, priorityColor } from "../../../styles/variables";
import { flexColCenter, flexSpaceBtwnRow } from '../../../styles/mixins';

export const SelectorBtn = styled.div`
  width: 100%;
  padding: .8rem 2.4rem;
  border: none;
  border-radius: ${themeBase.borderRadius};

  ${flexSpaceBtwnRow};

  color: #222;
  font-size: 1.8rem;
  letter-spacing: .12em;
  background-color: beige;
  
  position: relative;
  transition: ${themeBase.transition};

  &:hover {
    cursor: pointer;
  }
`

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`

export const IconArrowIconUp = styled(MdKeyboardArrowUp)`
  color: ${themeBase.mainColor};
  font-size: 2.8rem;
`

export const IconArrowIconDown = styled(MdKeyboardArrowDown)`
  color: ${themeBase.mainColor};
  font-size: 2.8rem;
`

export const OptionsWrapper = styled.div`
  display: none;
  transition: ${themeBase.transition};
  
  &.active{
    width: 100%;
    padding: 1.8rem;
  
    ${flexColCenter};
    gap: .8rem;
  
    position:  absolute;
    left: 0;
    top: 48px;
  
    background-color: aliceblue;

  }
`;

export const OptionWrapper  =styled.div`
  padding: .8rem 2.4rem;
  width: 100%;
  border-radius: ${themeBase.borderRadius};


  ${flexSpaceBtwnRow};

  background-color: #EEEBEB;
  transition: ${themeBase.transition};
  
  &:hover {
    background-color: #C7D9EB;
    cursor: pointer;
  }
`

export const Option = styled.span`
  color: #000;
`

export const OptionColor = styled.span`
  width: 18px;
  height: 18px;

  border-radius: 50%;
  
  &.low {
    background-color: ${priorityColor.color1};
  };
  &.medium {
    background-color: ${priorityColor.color2};
  };
  &.hight {
    background-color: ${priorityColor.color3};
  };
`;