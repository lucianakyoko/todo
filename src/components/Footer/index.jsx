import React from 'react';
import Social from '../Social';
import {FaRegHeart} from 'react-icons/fa';

import { Wraper, Text, Darker } from './style';

const Footer = () => {
  return (
    <Wraper>
      <Text>Designed and developed with <FaRegHeart /> by <Darker href='https://lucianakyoko.com' target='_blank' rel="noopener noreferrer" title='Ir para site pessoal'>Luciana Kyoko</Darker>.</Text>
      <Social />
    </Wraper>
  )
}

export default Footer;