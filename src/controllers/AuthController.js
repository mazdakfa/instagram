"use strict";

var config = require("../config");
var unirest = require("unirest");
var authUrl = 'https://api.backtory.com/auth';
const Promisify = require("../util/Promisify");
const UserInfo = require("../db/data/UserInfo");

const DefaultUserProfilePic = "https://robohash.org/";

/**
 * @AutoWired()
 * @Controller()
 * @Post("registerUser")
 * @RequestType("RegisterUserRequest")
 * @ResponseType("RegisterUserResponse")
 */
exports.registerUser = function (Backtory, UserInfoRepo, ErrorCodes, MergeObject, requestData) {

    let user = {
        "firstName": requestData.fullName.value(),
        "email": requestData.email.value(),
        "password": requestData.password.value(),
        "username": requestData.email.value()
    };
    let savedUser = undefined;
    let promise = Promisify.wrap(Backtory.Users.signUp, user);
    return promise.then(function (user) {
        let userInfo = new UserInfo();
        userInfo.setUserId(user['userId']);
        userInfo.setFullName(requestData.fullName.value());
        userInfo.setEmail(requestData.email.value());
        userInfo.setProfilePic(DefaultUserProfilePic + user['userId']);
        return Promisify.wrapWithThis(userInfo.save, userInfo);
    }).then(function (saveResponse) {
        savedUser = saveResponse;
        return loginInternal(saveResponse.getEmail(), requestData.password.value());
    }).then(function (loginResult) {
        return MergeObject({
            userId: savedUser.getId(),
            email: savedUser.getEmail()
        }, loginResult)
    }).catch(function (error) {
        let toRaise = {};
        if (error.responseCode === 409) {
            toRaise.code = ErrorCodes.UserNameAlreadyExists;
            toRaise.message = "username conflict";
        } else {
            console.log("signUp error", error);
        }
        throw toRaise;
    });
};


/**
 * @AutoWired()
 * @Controller()
 * @Post("login")
 * @RequestType("LoginUserRequest")
 * @ResponseType("LoginUserResponse")
 */
exports.login = function (ErrorCodes, requestData) {
    var username = requestData.username.value();
    var password = requestData.password.value();
    return loginInternal(username, password);
};


function loginInternal(username, password) {
    var header = JSON.parse(JSON.stringify(config.lambdaHeaders));
    header["X-Backtory-Authentication-Key"] = config.clientKey;
    return new Promise(function (resolve, reject) {
        unirest.post(authUrl + '/login/').headers(header).field('username', username).field('password', password)
            .end(function (response) {
                if (response.status === 200) {
                    let result = {
                        accessToken: response.body["access_token"],
                        tokenType: response.body["token_type"],
                        refreshToken: response.body["refresh_token"],
                        expiresIn: response.body["expires_in"],
                        scope: response.body["scope"],
                        jti: response.body["jti"]
                    };
                    resolve(result);
                } else {
                    reject("cannot login.");
                }
            });
    });
}


/**
 * @AutoWired()
 * @Controller()
 * @Post("refreshLogin")
 * @RequestType("RefreshLoginRequest")
 * @ResponseType("LoginUserResponse")
 */
exports.refreshLogin = function (requestData) {
    var refreshToken = requestData.refreshToken.value();
    var header = JSON.parse(JSON.stringify(config.lambdaHeaders));
    header["X-Backtory-Authentication-Key"] = config.clientKey;
    header["X-Backtory-Authentication-Refresh"] = 1;
    return new Promise(function (resolve, reject) {
        unirest.post(authUrl + '/login/').headers(header).field('refresh_token', refreshToken)
            .end(function (response) {
                if (response.status === 200) {
                    let result = {
                        accessToken: response.body["access_token"],
                        tokenType: response.body["token_type"],
                        refreshToken: response.body["refresh_token"],
                        expiresIn: response.body["expires_in"],
                        scope: response.body["scope"],
                        jti: response.body["jti"]
                    };
                    resolve(result);
                } else {
                    reject("cannot refresh");
                }
            });
    });

};

/**
 * @AutoWired()
 * @Controller()
 * @Post("forgotPassword")
 * @RequestType("ForgotPasswordRequest")
 * @ResponseType("FailedSuccessResponse")
 */
exports.forgotPassword = function (requestData) {
    var username = requestData.username.value();
    var header = JSON.parse(JSON.stringify(config.lambdaHeaders));
    header["X-Backtory-Authentication-Key"] = config.clientKey;
    return new Promise(function (resolve, reject) {
        unirest.post(authUrl + '/forgot-password').headers(header).query({
                'instance-id': config.authInstanceId,
                'username': username
            })
            .end(function (response) {
                if (response.status === 200) {
                    resolve({success: true});
                }
                reject(response.status);
            });
    });
};

/**
 * @AutoWired()
 * @Controller()
 * @Post("login")
 * @RequestType("LoginUserRequest")
 * @ResponseType("LoginUserResponse")
 */
exports.login = function (ErrorCodes, requestData) {
    var username = requestData.username.value();
    var password = requestData.password.value();
    return loginInternal(username, password);
};