import React from 'react'
import {graphql,Link} from 'gatsby'
import Layout from '../components/Layout'
import {Mach,Mach1,Heading1} from '../components/Format'
const Kontakt = (props) =>{
 const title= props.data.site.siteMetadata.title
 return(
    <Layout>
  <Mach>
<Mach1>
<Heading1>{title}</Heading1>
 <h2>Impressum</h2>
 René Broich <br/>
Langstr. 48 <br/>
Email: renbroi@icloud.components <br/>
<Link to = "/datenschutz"> &rarr; Link zu den Datenschutzbestimmungen</Link><br/>
Diese Webseite wurde von René Broich programmiert.
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
