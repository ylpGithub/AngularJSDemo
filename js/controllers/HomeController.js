app.controller('HomeCtrl', ['$scope','$state',
    function($scope,$state) {
        $scope.menus = [{"menuName":"简介","uiSref":"page1"},
                        {"menuName":"特性","uiSref":"page2"},
                        {"menuName":"组成","uiSref":"page3"},
                        {"menuName":"应用","uiSref":"page4"}
                        ];

}]);