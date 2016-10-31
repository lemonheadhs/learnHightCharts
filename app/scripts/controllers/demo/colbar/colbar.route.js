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
                .state('root.demo.3-rotatedlabel', {
                    url: '/3/rotatedlabel',
                    views: {
                        '@root.demo': {
                            template: '<rotated-label></rotated-label>'
                        }
                    }
                })
                .state('root.demo.3-stacked-percentage', {
                    url: '/3/stacked-percentage',
                    views: {
                        '@root.demo': {
                            template: '<column-stacked-percentage></column-stacked-percentage>'
                        }
                    }
                })
                .state('root.demo.3-stackedgrouped', {
                    url: '/3/stackedgrouped',
                    views: {
                        '@root.demo': {
                            template: '<stacked-grouped></stacked-grouped>'
                        }
                    }
                })
                .state('root.demo.3-stackedcolumn', {
                    url: '/3/stackedcolumn',
                    views: {
                        '@root.demo': {
                            template: '<column-stacked></column-stacked>'
                        }
                    }
                })
                .state('root.demo.3-negative', {
                    url: '/3/negative',
                    views: {
                        '@root.demo': {
                            template: '<column-negative></column-negative>'
                        }
                    }
                })
                .state('root.demo.3-basiccolumn', {
                    url: '/3/basiccolumn',
                    views: {
                        '@root.demo': {
                            template: '<basic-column></basic-column>'
                        }
                    }
                })
                .state('root.demo.3-bar-negative-stack', {
                    url: '/3/bar-negative-stack',
                    views: {
                        '@root.demo': {
                            template: '<bar-negative-stack></bar-negative-stack>'
                        }
                    }
                })
                .state('root.demo.3-stackedbar', {
                    url: '/3/stackedbar',
                    views: {
                        '@root.demo': {
                            template: '<bar-stacked></bar-stacked>'
                        }
                    }
                })
                .state('root.demo.3-range', {
                    url: '/3/range',
                    views: {
                        '@root.demo': {
                            template: '<column-range></column-range>'
                        }
                    }
                })                
                .state('root.demo.3-mixstack', {
                    url: '/3/mixstack',
                    views: {
                        '@root.demo': {
                            template: '<col-mix-stack></col-mix-stack>'
                        }
                    }
                })                
                .state('root.demo.3-mixstack2', {
                    url: '/3/mixstack2',
                    views: {
                        '@root.demo': {
                            template: '<col-mix-stack2></col-mix-stack2>'
                        }
                    }
                })                
                .state('root.demo.3-zoomabley', {
                    url: '/3/zoomabley',
                    views: {
                        '@root.demo': {
                            template: '<zoomable-y></zoomable-y>'
                        }
                    }
                })
        })
})();