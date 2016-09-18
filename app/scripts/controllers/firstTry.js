(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .component('firstTry', firstTryComponnet());

    firstTryComponnet.$inject = [];
    function firstTryComponnet() {
        return {
            templateUrl: 'views/firsttry.html',
            controller: firstTryCtrl
        };
    }

    function firstTryCtrl() {
        var ctrl = this;

        ctrl.highChartOptions = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        };
    }

})();

