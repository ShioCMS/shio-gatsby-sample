import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const pageQuery = graphql`
{
   shio {
    articles {
      furl
      title
      text
    }
  }
}
`

const IndexPage = () => {
    const {
        shio: { articles },
    } = useStaticQuery(pageQuery);

    return (
        <div>
            {articles.map(({ furl, ...article }) => (
                <div>
                    <Link key={furl} to={`/article/${furl}`}>
                        {article.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default IndexPage;
