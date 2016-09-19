(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .component('demo', demoComponent());

    function demoComponent() {
        return {
            templateUrl: 'views/demo.html',
            controller: demoCtrl,
            controllerAs: 'demos'
        }
    }

    demoCtrl.$inject = ['demoService'];

    function demoCtrl(demoService) {
        var ctrl = this;

        ctrl.chartCates = demoService.getFullCategories();
        ctrl.themes = [
            'default',
            'dark unica',
            'sand signika',
            'grid light'
        ];
        ctrl.currentTheme = ctrl.themes[0];
    }
})();