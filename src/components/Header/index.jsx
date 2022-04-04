import React from 'react';
import SideBar from './SideBar';
import { Wapper, BurgerMenu } from './style';

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  function handleClick() {
    setMenu(!menu);
  }

  return (
    <Wapper title='Abrir menu'>
      <BurgerMenu onClick={handleClick}/>
      {menu && <SideBar onClick={handleClick}/>}
    </Wapper>
  )
}

export default Header;