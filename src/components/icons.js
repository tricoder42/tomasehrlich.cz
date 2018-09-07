import * as React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome'

library.add(faTwitter, faGithub)

export const Twitter = props => <Fa icon={['fab', 'twitter']} {...props} />
export const GitHub = props => <Fa icon={['fab', 'github']} {...props} />
