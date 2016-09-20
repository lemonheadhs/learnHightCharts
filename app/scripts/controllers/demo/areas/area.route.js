(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .config(function ($stateProvider) {
            $stateProvider
                .state('root.demo.2-basicarea', {
                    url: '/2/basicarea',
                    views: {
                        '@root.demo': {
                            template: '<basic-area></basic-area>'
                        }
                    }
                })
                .state('root.demo.2-rangeline', {
                    url: '/2/rangeline',
                    views: {
                        '@root.demo': {
                            template: '<range-line></range-line>'
                        }
                    }
                })
                .state('root.demo.2-range', {
                    url: '/2/range',
                    views: {
                        '@root.demo': {
                            template: '<area-range></area-range>'
                        }
                    }
                })
                .state('root.demo.2-spline', {
                    url: '/2/spline',
                    views: {
                        '@root.demo': {
                            template: '<area-spline></area-spline>'
                        }
                    }
                })
                .state('root.demo.2-invertedaxes', {
                    url: '/2/invertedaxes',
                    views: {
                        '@root.demo': {
                            template: '<area-inverted-axes></area-inverted-axes>'
                        }
                    }
                })
                .state('root.demo.2-missingpoints', {
                    url: '/2/missingpoints',
                    views: {
                        '@root.demo': {
                            template: '<area-missing-points></area-missing-points>'
                        }
                    }
                })
                .state('root.demo.2-stacked', {
                    url: '/2/stacked',
                    views: {
                        '@root.demo': {
                            template: '<area-stacked></area-stacked>'
                        }
                    }
                })
                .state('root.demo.2-negative', {
                    url: '/2/negative',
                    views: {
                        '@root.demo': {
                            template: '<area-negative></area-negative>'
                        }
                    }
                })
                .state('root.demo.2-sparkline', {
                    url: '/2/sparkline',
                    views: {
                        '@root.demo': {
                            template: '<area-sparkline></area-sparkline>'
                        }
                    }
                })
        })
})();