(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('root.demo', {
                    url: 'demo',
                    views: {
                        '@': {
                            template: '<demo></demo>'
                        }
                    }
                })
        })

})();