import React from 'react';
import { PrimaryBtn } from '../PrimaryBtn/style';
import { SecondaryBtn } from '../SecondaryBtn/style';
import { StyledForm, FormWrapper, Input, TagColor, InputWraper, BtnWrapper } from './style';

const NewTaskForm = () => {
  return (
    <StyledForm>
      <FormWrapper>
        <Input id="task" type="text" placeholder='Tarefa'/>
        <Input id="time" type="time" placeholder='00:00:00' />

        <InputWraper>
          <Input id='tag' type="text" placeholder='tag'/>
          <TagColor title='Escolha uma cor para sua tag'></TagColor>
        </InputWraper>

        <Input id='priority' type="text" placeholder='Prioridade'/>
      </FormWrapper>

      <BtnWrapper>
        <PrimaryBtn addBtn>Adicionar</PrimaryBtn>
        <SecondaryBtn>voltar</SecondaryBtn>
      </BtnWrapper>
    </StyledForm>
  )
}

export default NewTaskForm