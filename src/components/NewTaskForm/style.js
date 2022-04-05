import styled from "styled-components";
import { flexColCenter } from '../../styles/mixins';

export const StyledForm = styled.form`
  width: 100%;
  padding: 24px;

  ${flexColCenter};
  gap: 4.8rem;
`

export const FormWrapper = styled.div`
  width: 312px;
  max-width: 500px;
  background-color: azure;
  padding: 24px;


  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`

export const BtnWrapper = styled.div`
  ${flexColCenter};
  gap: 2.4rem;
`