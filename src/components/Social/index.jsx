import React from 'react';
import {getSocial} from './social';

import { Wrapper, IconLink } from './style';

const index = () => {
  const social = getSocial();

  return (
    <Wrapper>
      { social.map(item => (
        <IconLink 
          key={social.id}
          className='social-icons__link'
          title={social.title}
          href={social.link}  
          rel="noopener noreferrer" 
          target="_blank"
        >
          {item.icon}
        </IconLink>
      )) }
    </Wrapper>
  )
}

export default index