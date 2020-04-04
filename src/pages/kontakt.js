import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {Mach,Mach1,Heading1} from '../components/Format'
const Kontakt = (props) =>{
 const title= props.data.site.siteMetadata.title
 return(
    <Layout>
  <Mach>
<Mach1>
<Heading1>{title}</Heading1>
 <h2>Kontakt</h2>

<p>vorläufiger Kontakt:</p>
René Broich <br />
Langstr. 48<br />
55422 Bacharach<br />
Email: renbroi@icloud.com
</Mach1>
</Mach>
 </Layout>
)}
export default Kontakt


export const kontaktQuery = graphql`
  query  {
    site {
      siteMetadata {
        title
        author
      }
    }
  }`
