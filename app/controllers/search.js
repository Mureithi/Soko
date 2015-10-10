// I control the main demo.
app.controller(
    "searchController", ['$scope', '$filter','$timeout', 'ApiRestangular','$state', function(scope, filter,timeout, ApiRestangular,state) {
        getMemberCount();
        


        scope.getMember = function getMember(newMember) {
            console.log(newMember);
            scope.member = newMember;
            state.go('searchresults');
        }

        scope.getMembers = function getMembers() {
            var AllMembers = ApiRestangular.all('members');
            
            // This will query /accounts and return a promise.
            AllMembers.customGET('').then(function(members) {
                scope.rowCollection = members.data;
                console.log(members.data);
                scope.displayedCollection = [].concat(scope.rowCollection);

            });
        }

        function getMemberCount() {
            var AllMembers = ApiRestangular.all('members');
            // This will query /accounts and return a promise.
            AllMembers.customGET('').then(function(members) {
                scope.records = members.data.length;
                scope.recordsPerPage = 5;
                scope.pages = Math.ceil(scope.records/scope.recordsPerPage);

            });
        }
       
    }]
);