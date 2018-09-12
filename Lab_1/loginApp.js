
angular.module('myApp',[])
    .controller('nutritionctrl', function($scope, $http) {
        console.log("hi");
        $scope.ngShowhide = false;
        $scope.kgraphRecords = [];
        $scope.kgsearch = function(ingrName) {

            alert('Enter Valid name' + ingrName);

            myurl = 'https://kgsearch.googleapis.com/v1/entities:search?query= ' + ingrName + ' &key=AIzaSyDGSTmdGK_Bj2a-BWUPPdxHYygtc6b6f4g&limit=2&indent=True'
            $http.get(myurl).success(function (data) {
                console.log(data);
                $scope.kgraphRecords = data.itemListElement;


                let text = ingrName + " is found.";
                let nutritionURL = "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=a81fb1d3-99e1-4ccb-8b70-e7d507df4f28&password=HMMSX5seHVdC&text=" + text;
                let audio = new Audio(nutritionURL);
                audio.play();

            })
        }

    });


