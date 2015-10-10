app.service('searchService', ['ApiRestangular', function (ApiRestangular) {
    
    this.getMembers = function (){
       // console.log('It works');
    AllMembers = ApiRestangular.all('members');
    
     // This will query /accounts and return a promise.
            AllMembers.customGET('').then(function(members) {
              
                console.log(members.data);
               

            });
    
    }
       
  }]);



 