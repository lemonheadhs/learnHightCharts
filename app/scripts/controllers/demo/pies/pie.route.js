(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('root.demo.4-basicpie', {
                    url: '/4/basicpie',
                    views: {
                        '@root.demo': {
                            template: '<basic-pie></basic-pie>'
                        }
                    }
                })
                .state('root.demo.4-legend', {
                    url: '/4/legend',
                    views: {
                        '@root.demo': {
                            template: '<pie-legend></pie-legend>'
                        }
                    }
                })
                .state('root.demo.4-donut', {
                    url: '/4/donut',
                    views: {
                        '@root.demo': {
                            template: '<donut-chart></donut-chart>'
                        }
                    }
                })
        })
})();