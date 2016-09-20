(function (utils) {
    'use strict';

    utils.simpleChartBuilder = function (options) {
        return {
            template: '<div high-chart-attach="chart.options" style="width:100%; height:400px;"></div>',
            controller: controllerAssembler(options),
            controllerAs: 'chart'
        };
    };

    function controllerAssembler(options) {
        return function chartCtrl() {
            var ctrl = this;
            ctrl.options = options;
        }
    }

})(window.lemonUtils || (window.lemonUtils = {}));