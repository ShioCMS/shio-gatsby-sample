exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {
        data: {
            shio: { articles },
        },
    } = await graphql(`
    {
        shio {
            articles {
                id
                _furl
            }
        }
    }
    `);

    articles.forEach(({ id, _furl }) =>
        createPage({
            path: `/article/${_furl}`,
            component: require.resolve(`./src/templates/ArticlePage.js`),
            context: { id: id },
        })
    );
};