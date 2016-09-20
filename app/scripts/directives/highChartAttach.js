(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .directive('highChartAttach', highChartAttach);

    highChartAttach.$inject = ['$parse'];
    function highChartAttach($parse) {
        var directive = {
            restrict:'A', 
            link: link
        };
        return directive;

        function link(scope, elem, attrs) {
            var propVal = 
                $parse(attrs['highChartAttach'])(scope);
            var chart;
            
            console.log(angular.isFunction(propVal.then))
            if (angular.isFunction(propVal.then)) {
                propVal.then(function (data) {
                    generateChart(data);
                });
            } else {
                generateChart(propVal);
            }

            function generateChart(options) {
                console.log('generating chart..')
                var chartOpt;
                chartOpt = options.chart || (options.chart = {});
                chartOpt.renderTo = elem[0];
                chart = new Highcharts.Chart(options);
                elem.data('chart', chart);
            }

            scope.$on('$destroy', function () {
                elem.data('chart', undefined);
                chart.destroy();
                var idx = Highcharts.charts.indexOf(undefined);
                if (idx >= 0) {
                    Highcharts.charts.splice(idx, 1);
                }
                chart = undefined;
            });
        }
    }


})();