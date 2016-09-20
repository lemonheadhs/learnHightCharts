(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .component('areaRange', areaRange());

    function areaRange() {
        return {
            template: '<div high-chart-attach="chart.promiseOptions" style="width:100%; height:400px;"></div>',
            controller: areaRangeCtrl,
            controllerAs: 'chart'
        };
    }

    areaRangeCtrl.$inject = ['$http', '$q'];
    function areaRangeCtrl($http, $q) {
        var ctrl = this;
        var deferedOptions = $q.defer();

        ctrl.promiseOptions = deferedOptions.promise;

        activate();

        function activate() {
            $http.jsonp('http://www.hcharts.cn/datas/jsonp.php?filename=range.json&callback=JSON_CALLBACK')
            .then(function (res) {
                var data = res.data;
                deferedOptions.resolve({
                    chart: {
                        type: 'arearange',
                        zoomType: 'x'
                    },
                    title: {
                        text: 'Temperature variation by day'
                    },
                    xAxis: {
                        type: 'datetime'
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    tooltip: {
                        crosshairs: true,
                        shared: true,
                        valueSuffix: '°C'
                    },
                    legend: {
                        enabled: false
                    },
                    series: [{
                        name: 'Temperatures',
                        data: data
                    }]
                });
            })
            .catch(function (res) {
                deferedOptions.reject();
                console.log(res);
                throw res;
            });
        }
    }
})();