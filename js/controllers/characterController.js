app.controller('characterCtrl', ['$scope','$state',
    function($scope,$state) {
        $scope.characters = [{"charName":"一、MVC","charId":"collapse1","charContent":"MVC顾名思义：Model-view-Controll设计模式，其实这个有点类似于Java的思想，模型、视图、控制器的分离。但是Angular又有点不同于传统的MVC，严格意义上说它是MVVM（model-view-viewModel）。Model是简单的javascript对象；ViewModel是$scope对象，Angular依靠$scope检测状态变化；Controller负责设置初始状态和参数化$scope方法用以控制行为；View是Angular解析渲染后生成的HTML。"},
            {"charName":"二、模块化和依赖注入","charId":"collapse2","charContent":"MVC顾名思义：Model-view-Controll设计模式，其实这个有点类似于Java的思想，模型、视图、控制器的分离。但是Angular又有点不同于传统的MVC，严格意义上说它是MVVM（model-view-viewModel）。Model是简单的javascript对象；ViewModel是$scope对象，Angular依靠$scope检测状态变化；Controller负责设置初始状态和参数化$scope方法用以控制行为；View是Angular解析渲染后生成的HTML。"},
            {"charName":"三、双向数据绑定","charId":"collapse3","charContent":"Angular服务的作用就是对外提供某个特定的功能。Angular拥有内建的依赖注入（DI）子系统，可以帮助开发人员更容易开发，理解和测试应用每一个Angular应用都有一个injector;injector负责自动处理依赖关系、实例化对象;对用户代码来说，injector是透明的;injector会自动分析函数签名，注入所需要的对象"},
            {"charName":"四、指令","charId":"collapse4","charContent":"这应该算Angular比较特有的属性，概括来说，Angular通过监听变量的变化来实现双向数据绑定。传统技术上，当model改变时，开发与人员需要手动处理DOM元素并将属性反映到变化中。而在Angular中，程序员可以轻轻松松解决这种问题，省掉了很多的代码"}
        ];

        $scope.textPlay = $scope.characters[0].charContent;
        $scope.changeText=function(text){
            $scope.textPlay = text;
        }

    }]);
