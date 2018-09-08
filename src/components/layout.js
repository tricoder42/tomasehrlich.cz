import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import { Twitter, GitHub } from './icons'
import GlobalStyle from './global'

const Root = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Navigation = styled.nav`
  line-height: 4em;
  text-align: right;
`

const brandColors = {
  twitter: '#1da1f2',
  github: '#333',
}

const SocialLink = styled.a`
  padding: 0 5px;

  color: #999;
  :hover {
    color: ${props => brandColors[props.theme] || 'black'};
  }
`

const defaultTheme = {
  breakpoint: {
    s: '500px',
    m: '960px',
  },
}

const Layout = ({ children }) => (
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
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
        </ThemeProvider>

        <ThemeProvider theme={defaultTheme}>
          <Root>
            <Navigation>
              <SocialLink
                theme="twitter"
                href="https://twitter.com/tomas_ehrlich"
              >
                <Twitter size="lg" />
              </SocialLink>
              <SocialLink theme="github" href="https://github.com/tricoder42/">
                <GitHub size="lg" />
              </SocialLink>
            </Navigation>
            {children}
          </Root>
        </ThemeProvider>
      </>
    )}
  />
)

export default Layout
