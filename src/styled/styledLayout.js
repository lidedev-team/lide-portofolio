import styled, { css } from "styled-components"

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

// ====================================

export const Section = styled.div`
  margin: 0 auto;
  padding: 3rem;
  height: ${props => props.h || `unset`};
  display: flex;
  justify-content: ${props => props.justify || `unset`};
  align-items: ${props => props.align || `unset`};
  flex-direction: ${props => props.direction || `row`};
  flex-direction: ${props =>
    props.light &&
    css`
      background: #f1f1f1;
    `};
`

// ====================================

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  padding: 0 1.0875rem 1.45rem;
`

// ====================================

export const Row = styled.div`
  display: flex;
  justify-content: ${props => props.justify || "space-between"};
  align-items: center;
  margin: ${props => props.margin || `0`};

  @media ${device.tablet} {
    flex-direction: column;
  }
`

// ====================================

export const Col = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: ${props => props.justify || `start`};
  flex-direction: ${props => props.direction || `row`};
  justify-content: ${props => props.align || `start`};
  flex-grow: ${props => props.grow || `unset`};
  padding: ${props => props.padding || `0`};
  @media ${device.tablet} {
    justify-content: center;
  }
`

// ====================================
