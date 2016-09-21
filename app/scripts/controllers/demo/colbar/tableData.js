(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .component('tableData', tableData());

    function tableData() {
        return {
            templateUrl: 'views/tableData.html',
            controller: tableDataCtrl,
            controllerAs: 'chart'
        };
    }

    function tableDataCtrl() {
        var ctrl = this;

        ctrl.options = {
            data: {
                table: 'datatable'
            },
            chart: {
                type: 'column'
            },
            title: {
                text: 'Data extracted from a HTML table in the page'
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Units'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.point.y + ' ' + this.point.name.toLowerCase();
                }
            }
        };
    }
})();