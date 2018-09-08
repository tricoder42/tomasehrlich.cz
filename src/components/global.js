import { injectGlobal } from 'styled-components'

import { library, config, dom } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(faTwitter, faGithub)

injectGlobal`
  ${dom.css()};

  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  html {
    box-sizing: border-box;
    overflow-y: scroll;
    font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  @media (max-width: 960px),
    (max-device-width: 960px) {
    html {
      font-size: 112.5%/1.45em;
      h1 {
        font-size: 3.157rem;
      }
      h2 {
        font-size: 2.369rem;
      }
      h3 {
        font-size: 1.777rem;
      }
      h4 {
        font-size: 1.333rem;
      }
      h5 {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 500px),
    (max-device-width: 500px) {
    html {
      font-size: 14px;
      h1 {
        font-size: 2.441rem;
      }
      h2 {
        font-size: 1.953rem;
      }
      h3 {
        font-size: 1.563rem;
      }
      h4 {
        font-size: 1.25rem;
      }
      h5 {
        font-size: 1rem;
      }
    }
  }

`
