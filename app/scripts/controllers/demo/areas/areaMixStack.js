(function () {
    'use strict';

    angular.module('learnHighChartsApp')
        .component('areaMixStack', lemonUtils.simpleChartBuilder({
            colors: ['#C87086', '#9999FF', '#00B189', '#F6B11A', '#005F84', '#8BD1E5', '#D9D9D9'],
            xAxis: {
                categories: ['2013', '2014', '2015',  '2020', '2025', '2030'],
                tickmarkPlacement: 'on',
                title: null
            },
            yAxis: {
                title: {
                    text: 'Percent'
                },
                labels: {
                    format: '{value}%'
                }
            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
                itemStyle: {
                    width: '80px',
                    'word-break': 'break-all',
                    'word-wrap': 'break-word' 
                },
                itemMarginTop: 8,
                x: 0,
                y: 100
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.1f}%</b><br/>',
                shared: true
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        enabled: false
                    }
                }
            },
            title: 'test area mix stack',
            series: [{
                type: 'area',
                name: 'Professional Degree',
                data: [1.3, 1.3, 1.3, null, null, null],
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        var data = this;
                        return '<span>' + data.total +'%</span>';
                    }
                }
                // stack: 'real',
                //stacking: 'normal'
            }, {
                type: 'area',
                name: 'PhD',
                data: [2.7, 3, 3, null, null, null],
                //stack: 'real',
                //stacking: 'normal'
            }, {
                type: 'area',
                name: 'Master\'s Degree',
                data: [8.3 ,8.7 ,9, null, null, null],
                //stack: 'real',
                //stacking: 'normal'
            }, {
                type: 'area',
                name: 'Bachelor\'s Degree',
                data: [18, 19, 20, null, null, null],
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
                name: 'Targets',
                type: 'area',
                data: [null, null, null, 48, 54, 60],
                dataLabels: {
                    enabled: true,
                    format: '<span>{point.y}%</span>'
                }
            }]
        }));
})();