import React from "react"
import { Link } from "gatsby"
import Web from "../images/web.svg"
import Mobile from "../images/mobile.svg"
import Layout from "../components/layout"
import { Idea } from "../components/image"
import SEO from "../components/seo"
import { Section, Container, Row, Col } from "../styled/styledLayout"
import {
  ImgBox,
  TitleText,
  TextDescription,
  TextSection,
  TextTitleItem,
  TextDescriptionItem,
} from "../styled/styledComponents"

import "../assets/css/argon.css"
// import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <Container>
        <Row>
          <Col align="center" grow="1">
            <ImgBox minw="250px">
              <Idea />
            </ImgBox>
          </Col>
          <Col grow="2" padding="2rem 0">
            <TitleText>Achieving Your Idea With Us</TitleText>
          </Col>
        </Row>
      </Container>
    </Section>

    <Section h="500px" align="center">
      <Container>
        <Row>
          <Col align="center" padding="2rem 0">
            <TextDescription>
              LideDev merupakan sebuah perusahaan yang menyediakan jasa
              pengembangan sistem informasi. LideDev juga menyediakan jasa untuk
              pemesanan desain grafis. Tujuan dari LideDev adalah untuk membantu
              masyarakat ikut bersaing di era ekonomi digital.
            </TextDescription>
          </Col>
        </Row>
      </Container>
    </Section>

    <Section align="center" direction="column">
      <TextSection>Our Services</TextSection>
      <Container>
        <Row justify="space-evenly" margin="5rem 0">
          <Col direction="column" justify="center" grow="1">
            <ImgBox maxw="150px">
              <img src={Web} />
            </ImgBox>
            <TextTitleItem>Web Development</TextTitleItem>
            <TextDescriptionItem>
              lorem ipsum dolor sit amet hoao aslasjq asd lasd als aisd alsnd
              lasnfmadnfland lkadnf af lanf lanf af aln falsfl an
            </TextDescriptionItem>
          </Col>
          <Col direction="column" justify="center" grow="1">
            <ImgBox maxw="150px">
              <img src={Mobile} />
            </ImgBox>
            <TextTitleItem>Mobile Development</TextTitleItem>
            <TextDescriptionItem>
              lorem ipsum dolor sit amet hoao aslasjq asd lasd als aisd alsnd
              lasnfmadnfland lkadnf af lanf lanf af aln falsfl an
            </TextDescriptionItem>
          </Col>
          <Col direction="column" justify="center" grow="1">
            <ImgBox maxw="150px">
              <img src={Mobile} />
            </ImgBox>
            <TextTitleItem>Creative Design</TextTitleItem>
            <TextDescriptionItem>
              lorem ipsum dolor sit amet hoao aslasjq asd lasd als aisd alsnd
              lasnfmadnfland lkadnf af lanf lanf af aln falsfl an
            </TextDescriptionItem>
          </Col>
        </Row>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage

// export const Layout = styled.div`
//   margin: 0 auto;
//   max-width: 960;
//   padding: 0 1.0875rem 1.45rem;
// `
