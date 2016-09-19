(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('root.demo.1-basicline', {
                    url: '/1/basicline',
                    views: {
                        '@root.demo': {
                            template: '<basic-line></basic-line>'
                        }
                    }
                })
                .state('root.demo.1-ajax', {
                    url: '/1/ajax',
                    views: {
                        '@root.demo': {
                            template: '<ajax-data-line-example></ajax-data-line-example>'
                        }
                    }
                })
                .state('root.demo.1-datalabel', {
                    url: '/1/datalabel',
                    views: {
                        '@root.demo': {
                            template: '<with-label-example></with-label-example>'
                        }
                    }
                })
                .state('root.demo.1-zoomable', {
                    url: '/1/zoomable',
                    views: {
                        '@root.demo': {
                            template: '<zoomable-example></zoomable-example>'
                        }
                    }
                })
        });
})();