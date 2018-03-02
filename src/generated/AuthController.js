  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../controllers/AuthController.js') 
   module.exports.registerUser = function ( requestBody , context ) { 
var original = originalModule.registerUser; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"Backtory\",\"UserInfoRepo\",\"ErrorCodes\",\"MergeObject\",\"requestData\"],\"autoWiredModules\":{\"Backtory\":{\"moduleAddress\":\"../generated/LibsProvider.js\",\"functionName\":\"backtory\"},\"UserInfoRepo\":{\"moduleName\":\"UserInfoRepo\",\"moduleAddress\":\"../generated/UserInfoRepo.js\"},\"ErrorCodes\":{\"moduleName\":\"ErrorCodes\",\"moduleAddress\":\"../util/ErrorCodes.js\"},\"MergeObject\":{\"moduleName\":\"MergeObject\",\"moduleAddress\":\"../util/MergeObject.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1],\"requestType\":\"../reqAndRes/requests/RegisterUserRequest.js\",\"responseType\":\"../reqAndRes/responses/RegisterUserResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.login = function ( requestBody , context ) { 
var original = originalModule.login; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"ErrorCodes\",\"requestData\"],\"autoWiredModules\":{\"ErrorCodes\":{\"moduleName\":\"ErrorCodes\",\"moduleAddress\":\"../util/ErrorCodes.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1],\"requestType\":\"../reqAndRes/requests/LoginUserRequest.js\",\"responseType\":\"../reqAndRes/responses/LoginUserResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.refreshLogin = function ( requestBody , context ) { 
var original = originalModule.refreshLogin; 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1],\"requestType\":\"../reqAndRes/requests/RefreshLoginRequest.js\",\"responseType\":\"../reqAndRes/responses/LoginUserResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.forgotPassword = function ( requestBody , context ) { 
var original = originalModule.forgotPassword; 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1],\"requestType\":\"../reqAndRes/requests/ForgotPasswordRequest.js\",\"responseType\":\"../reqAndRes/responses/FailedSuccessResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
  
 