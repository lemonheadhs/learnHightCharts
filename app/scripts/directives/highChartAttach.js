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
            var options = 
                angular.extend({}, 
                    $parse(attrs['highChartAttach'])(scope)
                );
            var chartOpt = options.chart || (options.chart = {});
            chartOpt.renderTo = elem[0];
            var chart = new Highcharts.Chart(options);
            elem.data('chart', chart);

            scope.$on('$destroy', function () {
                elem.data('chart', undefined);
                chart = undefined;
            });
        }
    }


})();