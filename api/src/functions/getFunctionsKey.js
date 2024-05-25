const { app } = require('@azure/functions');

app.http('getFunctionsKey', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // Fetch the API key from the environment variables
        const functionskey = process.env.FUNCTION_APP_KEY;

        // Return the API key in the response body
        return {
            body: { functionskey }
        };
    }
});
