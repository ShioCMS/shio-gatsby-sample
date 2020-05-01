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
                furl
            }
        }
    }
    `);

    articles.forEach(({ id, furl }) =>
        createPage({
            path: `/article/${furl}`,
            component: require.resolve(`./src/templates/ArticlePage.js`),
            context: { id: id },
        })
    );
};