(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .component('sparklineCharts', sparklineCharts());

    function sparklineCharts() {
        return {
            templateUrl: 'views/sparkline.html',
            controller: sparklineCtrl
        };
    }

    function sparklineCtrl() {
        var ctrl = this;
    }
})();
