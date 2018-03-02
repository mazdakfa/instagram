  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../controllers/SharedImageController.js') 
   module.exports.getUserPics = function ( requestBody , context ) { 
var original = originalModule.getUserPics; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"requestData\",\"userSkip\",\"userLimit\",\"SharedImageRepo\",\"SharedImageResponse\",\"UserInfoRepo\"],\"autoWiredModules\":{\"SharedImageRepo\":{\"moduleName\":\"SharedImageRepo\",\"moduleAddress\":\"../generated/SharedImageRepo.js\"},\"SharedImageResponse\":{\"moduleName\":\"SharedImageResponse\",\"moduleAddress\":\"../reqAndRes/responses/SharedImageResponse.js\"},\"UserInfoRepo\":{\"moduleName\":\"UserInfoRepo\",\"moduleAddress\":\"../generated/UserInfoRepo.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":3},\"ignoreIndexes\":[3]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/PaginationAnnotation_AspectItem_14046.js", "aspect", "{\"skipIndex\":1,\"limitIndex\":1,\"pData\":{\"indexes\":{\"requestBody\":2},\"ignoreIndexes\":[2]}}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1,1,0],\"requestType\":\"../reqAndRes/requests/IdRequest.js\",\"responseType\":\"../reqAndRes/responses/SharedImageListResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.getAllPictures = function ( requestBody , context ) { 
var original = originalModule.getAllPictures; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"requestData\",\"userSkip\",\"userLimit\",\"SharedImageRepo\",\"SharedImageResponse\",\"UserInfoRepo\"],\"autoWiredModules\":{\"SharedImageRepo\":{\"moduleName\":\"SharedImageRepo\",\"moduleAddress\":\"../generated/SharedImageRepo.js\"},\"SharedImageResponse\":{\"moduleName\":\"SharedImageResponse\",\"moduleAddress\":\"../reqAndRes/responses/SharedImageResponse.js\"},\"UserInfoRepo\":{\"moduleName\":\"UserInfoRepo\",\"moduleAddress\":\"../generated/UserInfoRepo.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":3},\"ignoreIndexes\":[3]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/PaginationAnnotation_AspectItem_14046.js", "aspect", "{\"skipIndex\":1,\"limitIndex\":1,\"pData\":{\"indexes\":{\"requestBody\":2},\"ignoreIndexes\":[2]}}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1,1,0],\"requestType\":\"../reqAndRes/requests/PaginationRequest.js\",\"responseType\":\"../reqAndRes/responses/SharedImageListResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.addPicture = function ( requestBody , context ) { 
var original = originalModule.addPicture; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"activeUser\",\"requestData\",\"SharedImageRepo\",\"FileManager\"],\"autoWiredModules\":{\"SharedImageRepo\":{\"moduleName\":\"SharedImageRepo\",\"moduleAddress\":\"../generated/SharedImageRepo.js\"},\"FileManager\":{\"moduleName\":\"FileManager\",\"moduleAddress\":\"../generated/FileManager.js\"}}}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "loginRequired", "{\"indexes\":{\"context\":2},\"ignoreIndexes\":[2]}"); 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/LoginAnnotations_AspectItem_120713.js", "activeUser", "{\"parameterData\":{\"indexes\":{\"context\":1},\"ignoreIndexes\":[]},\"activeIndex\":0}"); 
 original =  runAround( original, originalModule, __dirname, "../requestHandler/runtime/Controller_AspectItem_42312.js", "aspect", "{\"passIndexes\":[-1,1],\"requestType\":\"../reqAndRes/requests/ShareImageRequest.js\",\"responseType\":\"../reqAndRes/responses/FailedSuccessResponse.js\",\"requestConverter\":{\"address\":\"../../converters/RequestConverter.js\",\"functionName\":\"convert\"},\"responseConverter\":{\"address\":\"../../converters/ResponseConverter.js\",\"functionName\":\"convert\"},\"errorConverter\":{\"address\":\"../../converters/ErrorConverter.js\",\"functionName\":\"convert\"}}"); 
 return original. apply( null, arguments); 
  }; 
  
 