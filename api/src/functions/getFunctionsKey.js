const { app } = require('@azure/functions');

app.http('getFunctionsKey', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const functionKey = process.env.FUNCTIONS_APP_KEY;
        context.res = {
            body: functionKey,
        };
    }
});