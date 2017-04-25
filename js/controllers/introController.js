app.controller('introCtrl', ['$scope','$state',
    function($scope,$state) {
        $scope.name = "AngularJS";
        $scope.age = 8;
        $scope.parent = "Misko";
        $scope.place = "1241423423";
        $scope.birth = "2009-01-01";
        $scope.job = "一种前端框架";
        $scope.advantage = " 是一个比较完善的前端MVC框架；使用路由将单个页面代码模块化，便于代码管理；模板功能强大丰富。";
        $scope.short = "Angular很慢，因为框架一直在变动检测（dirty checking）和解析HTML；没有完美兼容低版本，升级之后可能会导致一个兼容性的BUG。";

        $scope.showFileSelectBox = function () {
            $("#imgSelectInput").click();
        };

        $scope.imageSelected = function(file) {
            if (file) {
                var reslut1 = document.getElementById("img-play");
                reslut1.style.display = "block";
                var reader = new FileReader();
                if(reslut1.hasChildNodes()) //判断reslut1下是否存在子节点
                {
                    reslut1.removeChild(reslut1.firstChild);
                }
                reader.onload = function ( event ) {
                    var txt = event.target.result;
                    var image = document.createElement("img");
                    image.src = txt;
                    image.className = "loadImg";
                    reslut1.appendChild(image);
                };
                reader.readAsDataURL(file);
            }
        };

        $scope.Ok=function(){
            $("#myMeg").modal("hide");
        }

        $scope.cancel=function(){
            $("#myMeg").modal("hide");
        }

    }]);