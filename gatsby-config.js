module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-graphql`,
            options: {
                typeName: `ShioCMS`,
                fieldName: `shio`,
                url: `https://shio.viglet.net/graphql`,
                headers: {
                    Authorization: `Basic YWRtaW46YWRtaW4=`
                  }
            },
        },
    ],
};