import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const pageQuery = graphql`
{
   shio {
    articles {
      _furl
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
            {articles.map(({ _furl, ...article }) => (
                <div>
                    <Link key={_furl} to={`/article/${_furl}`}>
                        {article.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default IndexPage;
