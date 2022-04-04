import { themeBase } from "./variables";

export const flexColCenter = () => {
  return `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `
}

export const blurColorBg = (blur) => {
  return `
    background-color: ${themeBase.mainColor};
    filter: blur(${blur}px);
  `
}

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