import React from 'react';

import { Input, PrimaryBtn, SecondaryBtn } from '../../styles/ui';
import PrioritySelector from './PrioritySelector';

import { StyledForm, FormWrapper, TagColor, InputWraper, BtnWrapper } from './style';

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

        <PrioritySelector />
      </FormWrapper>

      <BtnWrapper>
        <PrimaryBtn addBtn>Adicionar</PrimaryBtn>
        <SecondaryBtn>voltar</SecondaryBtn>
      </BtnWrapper>
    </StyledForm>
  )
}

export default NewTaskForm;