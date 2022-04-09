import React, { useState } from 'react';
import { Input } from '../../../styles/ui';
import { TagWrapper, Selector, Option } from './style';
import tagColor from './tagColor.json';

export const TagSelector = () => {
  const [color, setColor] = useState('color1');

  function handleClick(event) {
    const selectedColor = event.target.value
    setColor(selectedColor);
  }

  return (
    <TagWrapper className={color}>
      <Input id="tagName" name='tagName' placeholder='Tag'/>
        <Selector 
          defaultValue={color}
          className={color} 
          id='tagcolor' 
          name='tagColor'
        >
          {tagColor.map(colorItem => (
            <Option 
              key={colorItem.id}
              onClick={handleClick} 
              className={colorItem.color} 
              value={colorItem.color}
            ></Option>
          ))}
        </Selector>
    </TagWrapper>
  )
}


export default TagSelector;