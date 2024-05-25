const { app } = require('@azure/functions');

app.http('getFunctionsKey', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        module.exports = async function (context, req) {
            context.res.json({
                text: "Hello from the API"
            });
        };
    }
});