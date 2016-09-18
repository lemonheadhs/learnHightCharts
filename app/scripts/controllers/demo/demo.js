(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .component('demo', demoComponent());

    function demoComponent() {
        return {
            templateUrl: 'views/demo.html',
            controller: demoCtrl
        }
    }


    function demoCtrl() {

    }
})();