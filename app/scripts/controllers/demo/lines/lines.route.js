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
                .state('root.demo.1-splineinverted', {
                    url: '/1/splineinverted',
                    views: {
                        '@root.demo': {
                            template: '<spline-inverted></spline-inverted>'
                        }
                    }
                })
                .state('root.demo.1-splinesymbols', {
                    url: '/1/splinesymbols',
                    views: {
                        '@root.demo': {
                            template: '<spline-symbols></spline-symbols>'
                        }
                    }
                })
                .state('root.demo.1-splineband', {
                    url: '/1/splineband',
                    views: {
                        '@root.demo': {
                            template: '<spline-band></spline-band>'
                        }
                    }
                })
                .state('root.demo.1-irregular-time-intervals', {
                    url: '/1/irregular-time-intervals',
                    views: {
                        '@root.demo': {
                            template: '<irregular-time-intervals></irregular-time-intervals>'
                        }
                    }
                })
                .state('root.demo.1-logarithmicaxis', {
                    url: '/1/logarithmicaxis',
                    views: {
                        '@root.demo': {
                            template: '<logarithmic-axis></logarithmic-axis>'
                        }
                    }
                })
        });
})();