/*
*Create and export configuration varables
*
*/


//container for all the environments
var environments = {};

//staging (default) environment
environments.stagin = {
    'httpPort': 3000,
    'httpsPort': 3001,
    'envName': 'staging'
};

environments.production = {
    'httpPort': 5000,
    'httpsPort': 5001,
    'envName': 'production'
};

//Determine which environment was passed as a command-line argument
var currentEnvironment = typeof (process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

//check that the current environment is on of the environments above, if not default to staging

var environmentToExport = typeof (environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.stagin;

module.exports = environmentToExport;