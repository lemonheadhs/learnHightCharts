(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('root.demo.3-basicbar', {
                    url: '/3/basicbar',
                    views: {
                        '@root.demo': {
                            template: '<basic-bar></basic-bar>'
                        }
                    }
                })
                .state('root.demo.3-tabledata', {
                    url: '/3/tabledata',
                    views: {
                        '@root.demo': {
                            template: '<table-data></table-data>'
                        }
                    }
                })
                .state('root.demo.3-fixedplacement', {
                    url: '/3/fixedplacement',
                    views: {
                        '@root.demo': {
                            template: '<fixed-placement></fixed-placement>'
                        }
                    }
                })
                .state('root.demo.3-drilldown', {
                    url: '/3/drilldown',
                    views: {
                        '@root.demo': {
                            template: '<column-drilldown></column-drilldown>'
                        }
                    }
                })
        })
})();