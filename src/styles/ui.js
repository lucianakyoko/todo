import { themeBase } from "./variables";

export const IconBtn =  () => {
  return `
    color: ${themeBase.buttonColor};
    font-size: 4rem;
    transition: ${themeBase.transition};

    &:hover {
      color: ${themeBase.buttonColorHover};
      cursor: pointer;
  }
  `
}