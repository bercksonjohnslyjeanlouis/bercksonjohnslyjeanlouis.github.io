import * as React from "react"
import {graphql, Link} from "gatsby"
import options from "../data/fr/menu.json";

const Page = ({ data }) => {
    return (
        <div>
            <ul>
                {data.allSitePage.edges.map((option, index) => {
                    return <li>
                        <Link to={option.node.path}>
                            {option.node.path}
                        </Link>
                    </li>
                })}
            </ul>
    </div>
    )

}

export const query = graphql`
  query {
    allSitePage {
      edges {
        node {
          id
          matchPath
          path
        }
      }
    }
  }
`

export default Page