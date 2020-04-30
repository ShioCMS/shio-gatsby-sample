exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {
        data: {
            shio: { ptArticle },
        },
    } = await graphql(`
    {
        shio {
            ptArticle {
                id
                furl
            }
        }
    }
    `);

    ptArticle.forEach(({ id, furl }) =>
        createPage({
            path: `/article/${furl}`,
            component: require.resolve(`./src/templates/ArticlePage.js`),
            context: { id: id },
        })
    );
};