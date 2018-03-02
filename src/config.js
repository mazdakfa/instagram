//application specific config file
let config = {};

config.authInstanceId = "5a9907ede4b04e579f1fce5e";
config.objectSorageInstanceId = "5a9907eee4b092a32ba10caa";
config.integratedMasterKey = "2fae92fedd754f9d8aefe435";
config.clientKey = "5a9907ede4b05bb64131ee3d";
config.cloudCode = "5a9907eee4b04e579f1fce69";
config.cdnInstanceId = "5a990842e4b04e579f1fd24c";

config.baseUrl = "http://storage.backtory.com/sharedimages";


config.lambdaHeaders =
    {
        'x-backtory-authentication-id': config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };
module.exports = config;