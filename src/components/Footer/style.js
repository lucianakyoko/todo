import styled from "styled-components";
import {flexColCenter } from '../../styles/mixins';
import { themeBase } from "../../styles/variables";

export const Wraper = styled.footer`
  width: 300px;

  background-color: beige;
  ${flexColCenter};
  gap: 1.8rem;

  padding: 2.4rem;
`

export const Text = styled.p`
  color: blue;
  font-size: 1.2rem;
  text-align: center;
`

export const Darker = styled.a`
  color: blue;
  font-size: 1.6rem;
  font-weight: 700;
  transition: ${themeBase.transition};

  &:hover {
    text-decoration: underline;
  }
`