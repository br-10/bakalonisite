import React from 'react'
    
import { graphql,navigate } from 'gatsby'
import Layout from '../components/Layout'
import {Mach,Start,Heading1} from '../components/Format'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    return (
      <Layout>
        <Mach>
        <Start>
        <Helmet
          htmlAttributes={{ lang: 'de' }}
          meta={[{ name: 'description', content: `${siteDescription}`}]}
          title= {`${siteTitle}`}
        />
          
        
             <Heading1 style={{textAlign:"center"}}>Nachrichten & mehr <br/> für Bakaloni </Heading1>
  <figure onClick={()=>navigate("/bacharach")}>
   <Img fluid={this.props.data.bach.childImageSharp.fluid} />
    <figcaption style={{textAlign:'center',fontSize:'1.25rem',letterSpacing:'0.9rem', paddingTop:15,color:"white",fontWeight:400}}>Bacharach</figcaption>
 </figure>
 <figure onClick={()=>navigate("/kaub")}>
 <Img fluid={this.props.data.kaub.childImageSharp.fluid} />
  
  <figcaption style={{textAlign:'center',fontSize:'1.25rem',letterSpacing:'0.9rem', paddingTop:15,color:"white",fontWeight:400}}>Kaub</figcaption>
</figure>
<figure  onClick={()=>navigate("/niederheimbach")}>
<Img fluid={this.props.data.heim.childImageSharp.fluid} />
  <figcaption style={{textAlign:'center',fontSize:'1.25rem',letterSpacing:'0.9rem', paddingTop:15,color:"white",fontWeight:400}}>Niederheimbach</figcaption>
</figure>
<figure onClick={()=>navigate("/lorch")}>
<Img fluid={this.props.data.lorch.childImageSharp.fluid} />
  
  <figcaption style={{textAlign:'center',fontSize:'1.25rem',letterSpacing:'0.9rem', paddingTop:15,color:"white",fontWeight:400}}>Lorch</figcaption>
</figure>
           
       
            
        </Start></Mach>
        
      </Layout>
   
      
    )
  }
}

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    kaub: file(relativePath: { eq: "kaub.jpg" }) {
      ...fluidImage
    }
    bach: file(relativePath: { eq: "bach.jpg" }) {
      ...fluidImage
    }
    heim: file(relativePath: { eq: "niederheimbach.jpg" }) {
      ...fluidImage
    }
    lorch: file(relativePath: { eq: "lorch.jpg" }) {
      ...fluidImage
    }
    }
`
