(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        component('sparklineCharts', sparklineCharts());

    function sparklineCharts() {
        return {
            controller: sparklineCtrl
        };
    }

    function sparklineCtrl() {
        var ctrl = this;
    }
})();
