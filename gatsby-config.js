module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: `ShioCMS`,
                fieldName: `shio`,
                url: `http://localhost:2710/graphql`
            },
        },
    ],
};