app.controller('makeUpCtrl', ['$scope','$state',
    function($scope,$state) {
        $scope.pageParam = {page:1,pageSize:3};
        $scope.more = false;
        $scope.pages = [];
        $scope.models = [{"title":"AngularJS官方推荐的模块切分","types":"1","content":"img/angForm.png"},
                         {"title":"Controller（控制器）","types":"2","content":" Controller应该纯粹地用来把service、依赖关系、以及其它对象串联到一起，然后通过scope把它们关联到view上。如果在你的 视图里面需要处理复杂的业务逻辑，那么把它们放到controller里面也是一个非常不错的选择"},
                         {"title":"Directive(指令)","types":"2","content":"Angular对directive的定义是一段代码片段，你 可以用它来操作DOM，但是我觉得directive也是进行用户交互的很好选择。我们来扩展前面的例子，为用户提供一个按钮，通过这个按钮可以向 service里面添加一本书籍。"},
                         {"title":"Service（服务）","types":"2","content":" Service就是【单例对象】在AngluarJS 中的一个别名。这些小东西（指单例对象）会被经常传来传去，保证你每次访问到的都是同一个实例，这一点和工厂模式不同。基于这种思想，单例对象让我们可以 实现一些相当酷的功能，它可以让很多controller和directive访问内部的数值。"},
                         {"title":"Filter（过滤器）","types":"2","content":"过滤器（filter）正如其名，作用就是接收一个输入，通过某个规则进行处理，然后返回处理后的结果。主要用在数据的格式化上，例如获取一个数组中的子集，对数组中的元素进行排序等。"},
                         {"title":"Route(路由)","types":"2","content":"后台路由，通过不同的URL会路由到不同的控制器上(controller)，再渲染(render)到页面(HTML)。AngularJS的前端路由，需求提前对指定的(ng-app)，定义路由规则(routeProvider)，然后通过不同的URL，告诉(ng-app)加载哪个页面(HTML)，再渲染到(ng-app)视图(ng-view)中。"},
                         {"title":"Route(路由)","types":"2","content":"后台路由，通过不同的URL会路由到不同的控制器上(controller)，再渲染(render)到页面(HTML)。AngularJS的前端路由，需求提前对指定的(ng-app)，定义路由规则(routeProvider)，然后通过不同的URL，告诉(ng-app)加载哪个页面(HTML)，再渲染到(ng-app)视图(ng-view)中。"},
                         {"title":"Route(路由)","types":"2","content":"后台路由，通过不同的URL会路由到不同的控制器上(controller)，再渲染(render)到页面(HTML)。AngularJS的前端路由，需求提前对指定的(ng-app)，定义路由规则(routeProvider)，然后通过不同的URL，告诉(ng-app)加载哪个页面(HTML)，再渲染到(ng-app)视图(ng-view)中。"},
                         {"title":"Route(路由)","types":"2","content":"后台路由，通过不同的URL会路由到不同的控制器上(controller)，再渲染(render)到页面(HTML)。AngularJS的前端路由，需求提前对指定的(ng-app)，定义路由规则(routeProvider)，然后通过不同的URL，告诉(ng-app)加载哪个页面(HTML)，再渲染到(ng-app)视图(ng-view)中。"}
                        ];

        pageSort();
        //获取分页信息和当前页数据
        function pageSort(){
            var len=$scope.models.length;
            var pageSize = $scope.pageParam.pageSize;
            if(pageSize<len){
                $scope.more = true;
                var num = Math.ceil(len/pageSize);//有余数上舍入
                $scope.indexs = 1;
                for(var j=0;j<num;j++){
                    var count = j+1;
                    var param={"pageNum":count};
                    $scope.pages.push(param);
                }
                loadList(1);
            }
        }

        //获取当前页数据
        function loadList(nums){
            var len1=(nums-1)*$scope.pageParam.pageSize;
            var len2=nums*$scope.pageParam.pageSize;
            $scope.lists = [];
            for(var i=len1;i<len2;i++){
                var arr =  $scope.models[i];
                $scope.lists.push(arr);
            }

        }

        //数字分页点击事件
        $scope.changePage= function(nums){
            loadList(nums);
            $scope.indexs = nums;
        }

        //前一页
        $scope.prePage= function(){
            if($scope.indexs>1){
                loadList($scope.indexs-1);
                $scope.indexs = $scope.indexs-1;
            }else{
                alert("已经是第一页！");
            }
        }

        //后一页
        $scope.nextPage= function(){
            if($scope.indexs<$scope.pages.length){
                loadList($scope.indexs+1);
                $scope.indexs = $scope.indexs+1;
            }else{
                alert("已经是最后一页！");
            }
        }
    }]);

