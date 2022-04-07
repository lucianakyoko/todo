import React from 'react';
import { useState } from 'react';
import priorities from './priority.json';
import {
  SelectorBtn, 
  SelectorWrapper,
  IconArrowIconUp, 
  IconArrowIconDown,
  OptionsWrapper, 
  OptionWrapper, 
  Option, 
  OptionColor 
} from './style';

const PrioritySelector = ({ optionName, setOptionName, priorityColor, setPriorityColor}) => {
  const [open, setOpen] = useState(false);

  function prioritySelection() {
    setOpen(!open);
  }

  return (
    <SelectorBtn onClick={prioritySelection}>
      <SelectorWrapper>
        <span>{ optionName || 'Prioridade'}</span>
        <OptionColor className={priorityColor || ''} />
      </SelectorWrapper>

      {open ? <IconArrowIconUp /> : <IconArrowIconDown />}   
         
      <OptionsWrapper className={open ? 'active' : ''}>
        {priorities.map(option => (
          <OptionWrapper key={option.value} onClick={() => {
            setOptionName(option.level)
            setPriorityColor(option.value)
          }}>
            <Option>{option.level}</Option>
            <OptionColor className={option.value} />
          </OptionWrapper>
        ))}
      </OptionsWrapper>
    </SelectorBtn>

  )
}

export default PrioritySelector;