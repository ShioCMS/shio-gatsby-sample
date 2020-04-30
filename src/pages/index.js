import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const pageQuery = graphql`
{
   shio {
    ptArticle {
      furl
      title
      text
    }
  }
}
`

const IndexPage = () => {
    const {
        shio: { ptArticle },
    } = useStaticQuery(pageQuery);

    return (
        <div>
            {ptArticle.map(({ furl, ...article }) => (
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
