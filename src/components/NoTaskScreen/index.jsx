import React from 'react';

import CirclePlusBtn from '../CirclePlusBtn';
import { 
  CheckIcon, 
  Container, 
  InfoBox, 
  IfoMessage, 
  CtaBox, 
  CtaMessage 
} from './style';

const NoTaskScreen = () => {
  return (
    <Container>
      <InfoBox className='infobox'>
        <CheckIcon />
        <IfoMessage>Você não possui nenhuma tarefa.</IfoMessage>
      </InfoBox>

      <CtaBox>
        <CirclePlusBtn />
        <CtaMessage>adicionar tarefa</CtaMessage>
      </CtaBox>

    </Container>
  )
}

export default NoTaskScreen