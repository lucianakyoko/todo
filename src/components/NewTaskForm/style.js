import styled from "styled-components";
import { flexColCenter } from '../../styles/mixins';
import { themeBase } from "../../styles/variables";

export const StyledForm = styled.form`
  padding: 24px;

  ${flexColCenter};
  gap: 4.8rem;
  background-color: aliceblue;
`

export const FormWrapper = styled.div`
  padding: 24px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;
`

export const TagColor = styled.button`
  width: 28px;
  height: 28px;

  display: inline-block;
  outline: none;
  box-shadow: ${themeBase.dropShadow};
  border: none;
  border-radius: ${themeBase.borderRadius};
  background-color: aquamarine;

  &:hover {
    cursor: pointer;
  }

`

export const InputWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .8rem;

  border-radius: ${themeBase.borderRadius};
  border-left: 6px solid aquamarine;
`

export const BtnWrapper = styled.div`
  ${flexColCenter};
  gap: 2.4rem;
`