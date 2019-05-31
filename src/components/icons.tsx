import * as React from "react"

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(faTwitter, faGithub)

export const Twitter = props => <Fa icon={["fab", "twitter"]} {...props} />
export const GitHub = props => <Fa icon={["fab", "github"]} {...props} />
