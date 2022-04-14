import React from 'react';

import { Input, PrimaryBtn, SecondaryBtn } from '../../styles/ui';
import PrioritySelector from './PrioritySelector';
import TagSelector from './Tag';

import { 
  StyledForm, 
  FormWrapper, 
  BtnWrapper } from './style';

const NewTaskForm = () => {

  return (
    <StyledForm>
      <FormWrapper>
        <Input id="task" type="text" placeholder='Tarefa'/>
        <Input 
          id="time" 
          type="time" 
          min='00:00:00'
          max='02:00:00'
          step="1"
          placeholder='00:00:00' />

        <TagSelector />
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