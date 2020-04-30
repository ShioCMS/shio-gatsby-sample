import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
    const article = data.shio.ptArticle[0]
    return (
        <React.Fragment>
            <div>
                <h1>Article</h1>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
            </div>
        </React.Fragment>
    )
}

export const pageQuery = graphql`
    query($id: ID!) {     
        shio {
            ptArticle(where : { id: $id }) {
                title
                description
            }
        }
    }
`;