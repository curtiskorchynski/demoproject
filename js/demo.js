var DEMO = (function(module){
	module.DoIt = function(resultobj){
		resultobj.prepend(Date() + '<br/>');
	}
	
	return module;
}(DEMO || {}));
