(function(){
    'use strict';

    angular
        .module('letscope')
        .factory('tagService',tagService);

    tagService.$inject = ['tagDataService'];

    function tagService (tagDataService){
        var service = {};

        service.GetTags = GetTags;
		service.GetTagByName = GetTagByName;
        

        return service;

       


		
		
		
		function GetTagByName(name,callback){
            var response;

            tagDataService.get({
                name : name 
            },function(tag){
                if(tag.error == null)
                {	
					console.log("getting a specific tag !");
					console.log(name);
                    console.log(tag);
					console.log(tag.name);
					console.log(tag.description);
                    response = {success : true,
								tag:tag
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false, message: tag.error};
                }
                callback(response);
            });
        }
		
		
		function GetPostsByTag(name,callback){
            var response;

            tagDataService.get({
                name : name 
            },function(tag){
                if(tag.error == null)
                {	
					console.log("getting a specific tag !");
					console.log(name);
                    console.log(tag);
					console.log(tag.name);
					console.log(tag.description);
                    response = {success : true,
								tag:tag
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false, message: tag.error};
                }
                callback(response);
            });
        }
		
		
		
		
		    function GetTags(callback){
            var response;
            
            tagDataService.query({
                
               
            },function(tags){
                if(tags.error == null)
                {
                    console.log("tags loaded");
                    response = {success : true,
								tags : tags
					};
                }
                else{
                    console.log("!Done");
                    response = {success : false};
                }
                callback(response);
            });
        }

    }

})();