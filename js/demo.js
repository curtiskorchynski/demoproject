var DEMO = (function(module){
	module.DoIt = function(resultobj){
		
		
		okay = function(){
			// Do something
		}
		uploadPhoto = function(data)
		{
			cameraPic.src = "data:image/jpeg;base64," + data;
			// Successful upload to the server
			navigator.notification.alert(
				'Your Photo has been uploaded',  // message
				okay,                           // callback
			    'Photo Uploaded',              // title
			    'OK'                          // buttonName
			);
		
			
			
			
			

		}	
		navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});

	}
	
	return module;
}(DEMO || {}));
