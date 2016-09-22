(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .component('columnDrilldown', columnDrilldown());

    function columnDrilldown() {
        return {
            templateUrl: 'views/drilldown.html',
            controller: drilldownCtrl,
            controllerAs: 'chart'
        };
    }

    drilldownCtrl.$inject = ['$q'];
    function drilldownCtrl($q) {
        var ctrl = this;
        var deferedOptions = $q.defer();

        ctrl.promiseOptions = deferedOptions.promise;

        ctrl.applyData = applyData;

        // --------------------------

        function applyData(rows) {
            if (!rows) return;

            var brandDatas =
                R.map(parseToBrandData, R.tail(rows));
            var groupsInPair =
                R.pipe(
                    R.groupBy(R.prop('brand')),
                    R.toPairs
                )(brandDatas);
            var drilldownSeries = buildDrilldownSeries(groupsInPair);
            var brandSeries = R.map(addUp, groupsInPair);

            console.log(drilldownSeries)
            console.log(brandSeries)

            deferedOptions.resolve({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Browser market shares. November, 2013'
                },
                subtitle: {
                    text: 'Click the columns to view versions. Source: netmarketshare.com.'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total percent market share'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },
                series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    data: brandSeries
                }],
                drilldown: {
                    series: drilldownSeries
                }
            });
        }

        var hasVersion = 
            R.pipe(
                R.last,
                R.any(
                    R.compose(R.complement(R.isNil), R.prop('version'))
            ));

        function buildDrilldownSeries(groupsInPair) {
            function buildSingle(pair) {
                function flatten(item) {
                    return ['v'+ item.version, item.quotient];
                }
                return {
                    name: pair[0],
                    id: pair[0],
                    data: R.map(flatten, pair[1])
                };
            }
            
            return R.pipe(
                R.filter(hasVersion),
                R.map(buildSingle)
            )(groupsInPair);
        }

        function addUp(pair) {
            return {
                name: pair[0],
                y: R.compose(R.sum, R.map(R.prop('quotient')))(pair[1]),
                drilldown: hasVersion(pair) ? pair[0] : null                 
            };
        }

        function parseToBrandData(rawStr) {
            var pair = rawStr.split('\t');
            var brandAndVersion = pair[0],
                quotient = parseFloat(pair[1]);
            var versionRgx = /([0-9]+[\.0-9x]*)/;
            var brandObj =
                R.pipe(
                    R.split(' -'),
                    R.head, // Remove special edition notes
                    R.juxt([R.replace(versionRgx, ''),
                        R.compose(R.head, R.match(versionRgx))]),
                    R.zipObj(['brand', 'version'])
                )(brandAndVersion);
            brandObj.quotient = quotient;
            return brandObj;
        }
    }
})();