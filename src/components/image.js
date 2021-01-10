import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export const Idea = () => {
  // console.log(props.e)
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.image?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }
  return <Img fluid={data.image.childImageSharp.fluid} />
}
