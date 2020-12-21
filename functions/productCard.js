 var app = angular.module('productApp', []);
      app.controller("productController", function ($scope, $http) {
            $http({
                method: "GET",
                url: "../../data/productsCard.json"
            }).then(function mySucces(respone) {
                $scope.products = respone.data.results;
                console.log(products)
            }, function myError(respone) {
                $scope.dataError = respone.statusText;
            }
            )
        });

