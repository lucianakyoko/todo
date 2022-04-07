import { themeBase } from "./variables";

export const flexColCenter = () => {
  return `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `
}

export const flexSpaceBtwnRow = () => {
  return `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
}

export const blurColorBg = (blur) => {
  return `
    background-color: ${themeBase.mainColor};
    filter: blur(${blur}px);
  `
}

export const showUpAnimation = () => {
  return `
  @keyframes showUpAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: showUpAnimation 1.4s;
  `
}

