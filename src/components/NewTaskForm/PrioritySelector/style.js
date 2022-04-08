import styled from "styled-components";
import { themeBase, priorityColor } from "../../../styles/variables";
import { flexSpaceBtwnRow } from "../../../styles/mixins";

export const SelectWrapper = styled.div`
  width: 100%;
  
  ${flexSpaceBtwnRow};
  gap: .8rem;
  `

export const Select = styled.select`
  width: 100%;
  padding: .8rem 2.4rem;
  border: none;
  border-bottom: 6px solid transparent;
  border-radius: ${themeBase.borderRadius};
  background-color: #fff;

  font-size: 1.8rem;
  color: #888;

  &:focus {
    outline: none;
  }

  &.low {
    color: ${priorityColor.color1};
    border-bottom: 6px solid ${priorityColor.color1};
  }

  &.medium {
    color: ${priorityColor.color2};
    border-bottom: 6px solid ${priorityColor.color2};
  }

  &.hight {
    color: ${priorityColor.color3};
    border-bottom: 6px solid ${priorityColor.color3};
  }
`

export const OptionItem = styled.option`
  border: none;
  outline: none;
  background-color: aliceblue;
  
  &.low {
    color: ${priorityColor.color1};
  }

  &.medium {
    color: ${priorityColor.color2};
  }

  &.hight {
    color: ${priorityColor.color3};
  }
`

export const Color = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;

  &.low {
    background-color: ${priorityColor.color1};
  }
  &.medium {
    background-color: ${priorityColor.color2};
  }
  &.hight {
    background-color: ${priorityColor.color3};
  }
`
