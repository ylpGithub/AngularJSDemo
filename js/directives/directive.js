//获取浏览器高度
app.directive('autoHeight',function ($window) {
    return {
        restrict : 'A',
        scope : {},
        link : function($scope, element) {
            var winowHeight = $window.innerHeight; //获取窗口高度
            element.css('height',winowHeight  + 'px');
        }
    };
})
//图片显示指令
.directive("fileread", ['$rootScope',function ($rootScope) {
    return {
        restrict: 'AE',
        replace: true,
        transclude : true,
        scope: {
            selectedFile: "=?",
            changed: '&'
        },
        link: function(scope, element, attributes) {
            element.bind("change", function(changeEvent) {
                scope.$apply(function() {
                    scope.selectedFile = changeEvent.target.files[0];
                    if (scope.changed()) {
                        scope.changed()(scope.selectedFile);
                    }
                });
            });
        }
    };
}]);
