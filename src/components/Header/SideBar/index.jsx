import React from 'react';
import {
  Navbar, 
  Wraper, 
  CloseMenu, 
  NavItemsList, 
  ChangeModeWrapper
} from './style';

import SwitchBtn from '../SwitchBtn';
import Footer from '../../Footer';

const SideBar = ({onClick}) => {
  return (
    <Navbar>
      <Wraper>
        <CloseMenu onClick={onClick}/>
        <NavItemsList>
          <ChangeModeWrapper>
            dark mode
            <SwitchBtn />
          </ChangeModeWrapper>
          <li>deletar todas as tarefas concluídas</li>
          <li>sobre</li>
        </NavItemsList>
      </Wraper>
      <Footer />
    </Navbar>
  )
}

export default SideBar;