import React, { useState } from 'react';

import { Input, PrimaryBtn, SecondaryBtn } from '../../styles/ui';
import PrioritySelector from './PrioritySelector';
import { StyledForm, FormWrapper, TagColor, InputWraper, BtnWrapper } from './style';

const NewTaskForm = () => {
  const [optionName, setOptionName] = useState('');
  const [priorityColor, setPriorityColor] = useState('');
  return (
    <StyledForm>
      <FormWrapper>
        <Input id="task" type="text" placeholder='Tarefa'/>
        <Input id="time" type="time" placeholder='00:00:00' />

        <InputWraper>
          <Input id='tag' type="text" placeholder='tag'/>
          <TagColor title='Escolha uma cor para sua tag'></TagColor>
        </InputWraper>

        <PrioritySelector 
          optionName={optionName} 
          setOptionName={setOptionName}
          priorityColor={priorityColor}
          setPriorityColor={setPriorityColor}
        />
      </FormWrapper>

      <BtnWrapper>
        <PrimaryBtn addBtn>Adicionar</PrimaryBtn>
        <SecondaryBtn>voltar</SecondaryBtn>
      </BtnWrapper>
    </StyledForm>
  )
}

export default NewTaskForm;