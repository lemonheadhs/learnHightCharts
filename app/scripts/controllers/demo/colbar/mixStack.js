(function () {
    'use strice';

    angular.module('learnHighChartsApp')
        .component('colMixStack', lemonUtils.simpleChartBuilder({
            chart: {
                type: 'column'
            },
            xAxis: {
                categories: ['2014', '2015', '2016', '2020', '2025', '2030']
            },
            yAxis: {
                min: 0,
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                        style: {
                            textShadow: '0 0 3px black'
                        }
                    }
                }
            },
            series: [{
                name: 'Master\'s Degree',
                data: [40000, 40000, 40000, null, null, null]
            }, {
                name: 'Bachelor\'s Degree',
                data: [107000, 107000, 107000, null, null, null]
            }, {
                name: 'Associates Holder',
                data: [75000, 75000, 75000, null, null, null]
            }, {
                name: 'Certificate Holder',
                data: [55000, 55000, 55000, null, null, null]
            }, {
                data: [
                    {x:3, y:376000, color: Highcharts.Color('#777777').brighten(0.1).get()}, 
                    {x:4, y:455000, color: Highcharts.Color('#777777').brighten(0.2).get()}, 
                    {x:5, y:550000, color: Highcharts.Color('#777777').brighten(0.3).get()}]
            }]
        }));
})();