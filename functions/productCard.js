var app = angular.module("productApp", [])
app.controller("productController", ($scope, $http) => {
    $http({
        method: "GET",
        url: "/data/products.json"
    }).then(function success(res) {
        $scope.products = res.data;

    }, function error(res) {
        $scope.error = res.statusText;
    });
    }
)

