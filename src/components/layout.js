import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'


import Header from './header'
import Footer from './footer'
import './layout.css'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

const Layout = ({noHeader, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            image
            baseUrl
          }
        }
      }
    `}
    render={data => (
      <Location>
        {({location:{pathname}})=>(
          <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'author', content: data.site.siteMetadata.author },
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
              { name: 'image', content: data.site.siteMetadata.image },

              { property: 'og:title', content: data.site.siteMetadata.title },
              { property: 'og:description', content: data.site.siteMetadata.description },
              { property: 'og:image', content: data.site.siteMetadata.image },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: `${data.site.siteMetadata.baseUrl}${pathname}` },
            ]}
            link={[
              { rel: 'canonical', href: data.site.siteMetadata.baseUrl }
            ]}
          >
            <html lang="en" />
          </Helmet>

          <Header noHeader={noHeader} siteTitle={data.site.siteMetadata.title} />
          <div
          >
            {children}
          </div>
          <Footer />
          </>
        )}
      </Location>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
