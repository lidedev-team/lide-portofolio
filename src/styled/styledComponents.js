import styled, { css } from "styled-components"

const color = {
  primary: `#3C40C6`,
  secondary: `#05C46B`,
  accent:`#5EE8A7`,
}

// Media Break Point
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
}

// ===========================================================================================

export const ImgBox = styled.div`
  max-width: ${props => props.maxw || `auto`};
  min-width: ${props => props.minw || `50px`};
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  ${props =>
    props.animated &&
    css`
      animation: fadein 2s;
    `};

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

// ==================================

export const TitleText = styled.h1`
  font-size: 58px;
  font-weight: 700;
  text-align: end;
  color: ${color.primary};

  @media ${device.laptop} {
    font-size: 50px;
  }

  @media ${device.tablet} {
    font-size: 50px;
    text-align: center;
  }
`

// ==================================

export const TextDescription = styled.h3`
  font-size: 20px;
  font-weight: lighter;
  text-align: center;
  line-height: 1.5;
`

// ==================================

export const TextSection = styled.h3`
  font-weight: 700;
  font-size: 28px;
  color: ${color.primary};
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 90%;
    height: 20px;
    background-color: ${color.accent};
    bottom: 0;
    right: -10px;
    z-index: -1;
  }
`

// ==================================


export const TextTitleItem = styled.h4`
  font-size:20px;
  font-weight:700;
  margin-bottom:1.125rem;
`


// ===================================


export const TextDescriptionItem = styled.p`
  font-size:14px;
  font-weight:700;
  margin-bottom:1.125rem;
  text-align:center;
`