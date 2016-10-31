(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .component('colMixStack2', lemonUtils.simpleChartBuilder({
            chart: {
                type: 'column'
            },
            xAxis: {
                categories: [
                    'African American',
                    'Hispanic',
                    'Economically Disadvantaged',
                    'Males'
                ],
                //crosshair: true
            },
            yAxis: {
                min: 0
            },
            plotOptions: {
                column: {
                    grouping: false,
                    pointPadding: 0,
                    borderWidth: 0,
                    groupPadding: 0.1,
                    pointRange: 0.2
                }
            },
            series: [{
                name: '2014',
                data: [40000, 80000, 110000, 125000],
                pointPlacement: -0.3
            }, {
                name: '2015',
                data: [40500, 90400, 120000, 135000],
                pointPlacement: -0.1
            }, {
                name: '2016',                
                data: [41000, 100300, 130000, 140000],
                pointPlacement: 0.1,
            }, {
                name: '2020',
                color: Highcharts.Color('#777777').get(),
                data: [49000, 120000, 150000, 190000],
                pointPlacement: 0.3,
                zIndex: 5
            }, {
                name: '2025',
                color: Highcharts.Color('#777777').brighten(0.2).get(),
                data: [57000, 121000, 152000, 240000],
                pointPlacement: 0.3,
                zIndex: 4
            }, {
                name: '2030',
                color: Highcharts.Color('#777777').brighten(0.4).get(),
                data: [67000, 122000, 154000, 280000],
                pointPlacement: 0.3,
                zIndex: 3
            }]
        }))
})();