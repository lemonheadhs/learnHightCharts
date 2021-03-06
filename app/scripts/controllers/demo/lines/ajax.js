(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .component('ajaxDataLineExample', ajaxDataLineExample());

    function ajaxDataLineExample() {
        return {
            template: '<div high-chart-attach="chart.promiseChartOpts" style="width:100%; height:400px;"></div>',
            controller: ajaxExampleCtrl,
            controllerAs: 'chart'
        };
    }

    ajaxExampleCtrl.$inject = ['$http', '$q'];
    function ajaxExampleCtrl($http, $q) {
        var ctrl = this;
        var deferedChartData = $q.defer();
        ctrl.promiseChartOpts = deferedChartData.promise;

        activate();

        function activate() {
            console.log('sending request..')
            $http.jsonp('http://www.hcharts.cn/datas/jsonp.php?filename=analytics.csv&callback=JSON_CALLBACK')
            .then(function (res) {
                var data = res.data;
                var option = assembleOptions(data);
                deferedChartData.resolve(option);
            })
            .catch(function (res) {
                deferedChartData.reject();
                console.log(res);
                throw res;
            });
        }

        function assembleOptions(csv) {
            return {
                data: {
                    csv: csv
                },
                title: {
                    text: 'Daily visits at www.highcharts.com'
                },
                subtitle: {
                    text: 'Source: Google Analytics'
                },
                xAxis: {
                    tickInterval: 7 * 24 * 3600 * 1000, // one week
                    tickWidth: 0,
                    gridLineWidth: 1,
                    labels: {
                        align: 'left',
                        x: 3,
                        y: -3
                    }
                },
                yAxis: [{ // left y axis
                    title: {
                        text: null
                    },
                    labels: {
                        align: 'left',
                        x: 3,
                        y: 16,
                        format: '{value:.,0f}'
                    },
                    showFirstLabel: false
                }, { // right y axis
                    linkedTo: 0,
                    gridLineWidth: 0,
                    opposite: true,
                    title: {
                        text: null
                    },
                    labels: {
                        align: 'right',
                        x: -3,
                        y: 16,
                        format: '{value:.,0f}'
                    },
                    showFirstLabel: false
                }],
                legend: {
                    align: 'left',
                    verticalAlign: 'top',
                    y: 20,
                    floating: true,
                    borderWidth: 0
                },
                tooltip: {
                    shared: true,
                    crosshairs: true
                },
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function (e) {
                                    /*hs.htmlExpand(null, {
                                        pageOrigin: {
                                            x: e.pageX || e.clientX,
                                            y: e.pageY || e.clientY
                                        },
                                        headingText: this.series.name,
                                        maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                        this.y + ' visits',
                                        width: 200
                                    });
                                    */
                                    $('.message').html( Highcharts.dateFormat('%Y-%m-%d', this.x) + ':<br/> ' +
                                                    this.y + ' visits');
                                }
                            }
                        },
                        marker: {
                            lineWidth: 1
                        }
                    }
                },
                series: [{
                    name: 'All visits',
                    lineWidth: 4,
                    marker: {
                        radius: 4
                    }
                }, {
                    name: 'New visitors'
                }]
            }
        }
    }
})();