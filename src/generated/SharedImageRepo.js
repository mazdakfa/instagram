  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../db/repo/SharedImageRepo.js') 
   module.exports.getUserSharedImages = function ( userId , skip , limit ) { 
var original = originalModule.getUserSharedImages; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getUserTimeLineImages = function ( skip , limit ) { 
var original = originalModule.getUserTimeLineImages; 
 return original. apply( null, arguments); 
  }; 
   module.exports.makeNew = function ( description , imageUri , userId ) { 
var original = originalModule.makeNew; 
 return original. apply( null, arguments); 
  }; 
  
 