(function () {
    'use strict';

    angular.module('learnHighChartsApp')
        .component('areaMixStack', lemonUtils.simpleChartBuilder({
            // chart: {
            //     type: 'area'
            // },
            xAxis: {
                categories: ['2013', '2014', '2015',  '2020', '2025', '2030'],
                tickmarkPlacement: 'on',
                title: null
            },
            yAxis: {
                title: {
                    text: 'Percent'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                shared: true
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            title: 'test area mix stack',
            series: [{
                type: 'area',
                name: 'Professional Degree',
                data: [1.3, 1.3, 1.3, null, null, null],
                // stack: 'real',
                //stacking: 'normal'
            }, {
                type: 'area',
                name: 'PhD',
                data: [3, 3, 3, null, null, null],
                //stack: 'real',
                //stacking: 'normal'
            }, {
                type: 'area',
                name: 'Master\'s Degree',
                data: [9 ,9 ,9, null, null, null],
                //stack: 'real',
                //stacking: 'normal'
            }, {
                type: 'area',
                name: 'Bachelor\'s Degree',
                data: [20, 20, 20, null, null, null],
                // stack: 'real',
                // stacking: 'normal'
            }, {
                type: 'area',
                name: 'Associates Degree',
                data: [5, 5, 6, null, null, null],
                // stack: 'real',
                // stacking: 'normal'
            }, {
                type: 'area',
                name: 'Certificate',
                data: [5, 5, 5, null, null, null],
                // stack: 'real',
                // stacking: 'normal'
            }, {
                type: 'area',
                data: [null, null, null, 48, 54, 60]
            }]
        }));
})();