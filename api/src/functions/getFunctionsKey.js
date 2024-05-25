// api/getEnvironmentVariable/index.js
module.exports = async function (context, req) {
    const functionKey = process.env.FUNCTIONS_APP_KEY; // replace MY_VARIABLE_NAME with your actual variable name
    context.res = {
        body: functionKey,
    };
};
