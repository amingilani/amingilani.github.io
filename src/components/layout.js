import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'

import Header from './header'
import Footer from './footer'
import Seo from './seo'
import './layout.css'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

const Layout = ({ noHeader, seoData, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <Location>
        {({ location: { pathname } }) => (
          <>
            <Seo
            title={seoData.title}
            description={seoData.description}
            image={seoData.image}
            article={seoData.article}
             />
            <Header
              noHeader={noHeader}
              siteTitle={data.site.siteMetadata.title}
            />
            <div>{children}</div>
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
