//��ȡ������߶�
app.directive('autoHeight',function ($window) {
    return {
        restrict : 'A',
        scope : {},
        link : function($scope, element) {
            var winowHeight = $window.innerHeight; //��ȡ���ڸ߶�
            element.css('height',winowHeight  + 'px');
        }
    };
})
//ͼƬ��ʾָ��
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
