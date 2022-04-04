import styled from "styled-components";
import { themeBase } from "../../../styles/variables";
import { showUpAnimation, IconBtn } from '../../../styles/mixins';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar = styled.nav`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  background-color: ${themeBase.opacityBg};
  ${showUpAnimation};
`

export const Wraper = styled.div`
  width: 300px;
  height: 100vh;
  padding: 40px 24px 24px 24px;

  background-color: beige;

  animation: openSidebar .4s;

  @keyframes openSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
}
`

export const CloseMenu = styled(AiOutlineClose)`
  ${IconBtn};
  position: relative;
  left: 220px;

  ${showUpAnimation};
`

export const NavItemsList = styled.ul`
  margin-top: 4.8rem;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  font-family: ${themeBase.secondaryFont};
  font-size: 2rem;
  font-weight: 400;
  color: blue;

  ${showUpAnimation};
`

export const ChangeModeWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`