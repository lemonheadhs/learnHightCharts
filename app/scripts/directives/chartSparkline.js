(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .directive('chartSparkline', chartSparkline);

    function chartSparkline() {
        var directive = {
            restrict: 'A',
            link: link
        };
        return directive;

        function link(scope, elem, attrs) {
            var raw = attrs['chartSparkline'];
            var arr = raw.split('; ');
            var data = R.map(parseFloat, arr[0].split(', '));
            var chartType = arr[1] || 'line'; 

            var options = {
                series: [{
                    data: data,
                    pointStart: 1
                }],
                tooltip: {
                    headerFormat: '<span>' + elem.parent().find('th').html() + ', Q{point.x}:</span><br/>',
                    pointFormat: '<b>{point.y}.000</b> USD'
                },
                chart: {
                    type: chartType,
                    renderTo: elem[0]
                }
            };

            var chart = Highcharts.SparkLine(options);
            elem.data('chart', chart);

            scope.$on('$destroy', function () {
                chart.destroy();
                var idx = Highcharts.charts.indexOf(undefined);
                if (idx >= 0) {
                    Highcharts.charts.splice(idx, 1);
                }
                chart = undefined;
                elem.data('chart', undefined);
            });
        }
    }
})();