import React, {useState} from 'react';
import priority from './priority.json';
import { SelectWrapper, Select, OptionItem, Color } from './style';


const PrioritySelector = () => {
  const [select, setSelect] = useState('');

  function handleClick(event) {
    const value = event.target.value;
    setSelect(value);
  }

  return (
    <SelectWrapper>
      <Select className={select} name='priority'>
        <option selected disabled>Prioridade:</option>
        {priority.map(option => (
          <OptionItem key={option.value} onClick={handleClick} className={option.value} value={option.value}>
            {option.level}   
          </OptionItem>
        ))}
      </Select>
      <Color className={select}></Color>
    </SelectWrapper>
  )
}

export default PrioritySelector;