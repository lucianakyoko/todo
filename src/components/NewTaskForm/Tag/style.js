import styled from "styled-components";
import { themeBase, tagColor } from "../../../styles/variables";
import { flexSpaceBtwnRow } from "../../../styles/mixins";

export const TagWrapper = styled.div`
  width: 100%;
  ${flexSpaceBtwnRow};
  gap: 0.8rem;
  border-radius: ${themeBase.borderRadius};
  
  &.color1 { border-left: 6px solid ${tagColor.color1}; }
  &.color2 {  border-left: 6px solid ${tagColor.color2}; }
  &.color3 { border-left: 6px solid ${tagColor.color3}; }
  &.color4 { border-left: 6px solid ${tagColor.color4}; }
  &.color5 { border-left: 6px solid ${tagColor.color5}; }
  &.color6 { border-left: 6px solid ${tagColor.color6}; }
`

export const Selector = styled.select`
  padding: .1em;
  color: ${themeBase.secondaryColor};
  border: none;
  border-radius: ${themeBase.borderRadius};

  &.color1 { background-color: ${tagColor.color1}; }
  &.color2 { background-color: ${tagColor.color2}; }
  &.color3 { background-color: ${tagColor.color3}; }
  &.color4 { background-color: ${tagColor.color4}; }
  &.color5 { background-color: ${tagColor.color5}; }
  &.color6 { background-color: ${tagColor.color6}; }
`

export const Option = styled.option`
  &.color1 { background-color: ${tagColor.color1}; }
  &.color2 { background-color: ${tagColor.color2}; }
  &.color3 { background-color: ${tagColor.color3}; }
  &.color4 { background-color: ${tagColor.color4}; }
  &.color5 { background-color: ${tagColor.color5}; }
  &.color6 { background-color: ${tagColor.color6}; }
`