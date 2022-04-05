import React from 'react';
import { PrimaryBtn } from '../PrimaryBtn/style';
import { SecondaryBtn } from '../SecondaryBtn/style';
import { StyledForm, FormWrapper, BtnWrapper } from './style';

const NewTaskForm = () => {
  return (
    <StyledForm>
      <FormWrapper>
        <input type="text" placeholder='Tarefa'/>
        <input type="time" placeholder='00:00:00' />
        <div>
          <input type="text" placeholder='tag'/>
          <span></span>
        </div>
        <input type="text" placeholder='Prioridade'/>
      </FormWrapper>

      <BtnWrapper>
        <PrimaryBtn addBtn>Adicionar</PrimaryBtn>
        <SecondaryBtn>voltar</SecondaryBtn>
      </BtnWrapper>
    </StyledForm>
  )
}

export default NewTaskForm