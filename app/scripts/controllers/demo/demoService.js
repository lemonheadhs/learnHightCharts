(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .factory('demoService', demoService);

    function demoService() {
        return {
            getTopChartCates: getTopChartCates,
            getFullCategories: getFullCategories,
            getSubCates: getSubCates 
        };
    }

    function getTopChartCates() {
        return R.clone(topChartCates);
    }

    var assembleFullOnce = R.once(function () {
        return R.map(attachSub, topChartCates);
        function attachSub(top) {
            var sub = subCates[top.id];
            return sub = subCates[top.id]
                ? R.assoc('subItems', sub, top)
                : R.merge({}, top);            
        }
    });
    function getFullCategories() {
        return R.clone(assembleFullOnce());
    }

    function getSubCates(id) {
        var subs = subCates[id];
        return R.clone(subs);
    }

    //########################################

    var topChartCates = [
        { id: 1, name: 'Basic line' },
        { id: 2, name: 'Area chart' },
        { id: 3, name: 'Column and Bar charts' },
        { id: 4, name: 'Pie charts' },
        { id: 5, name: 'Scatter and Bubble charts' },
        { id: 6, name: 'Combinations' },
        { id: 7, name: 'Dynamic charts' },
        { id: 8, name: '3D charts' },
        { id: 9, name: 'Gauges' },
        { id: 10, name: 'Heat and Tree maps' },
        { id: 11, name: 'More' }
    ];

    var basicLines = [
        { title: 'basic line', state: 'root.demo.1-basicline' },
        { title: 'ajax loaded data, clickable points', state: 'root.demo.1-ajax' },
        { title: 'with data label', state: 'root.demo.1-datalabel' },
        { title: 'time series, zoomable', state: 'root.demo.1-zoomable' },
        { title: 'spline with inverted', state: 'root.demo.1-splineinverted' },
        { title: 'spline with symbols', state: 'root.demo.1-splinesymbols' },
        { title: 'spline with plot bands', state: 'root.demo.1-splineband' },
        { title: 'time data with irregular intervals', state: 'root.demo.1-irregular-time-intervals' },
        { title: 'logarithmic axis', state: 'root.demo.1-logarithmicaxis' },
    ];
    var areaCharts = [
        { title: 'basic area', state: 'root.demo.2-basicarea' },
        { title: 'area range and line', state: 'root.demo.2-rangeline' },
        { title: 'area range', state: 'root.demo.2-range' },
        { title: 'area spline', state: 'root.demo.2-spline' },
        { title: 'inverted axes', state: 'root.demo.2-invertedaxes' },
        { title: 'area with missing points', state: 'root.demo.2-missingpoints' },
        { title: 'percentage area', state: 'root.demo.2-percentage' },
        { title: 'stacked area', state: 'root.demo.2-stacked' },
        { title: 'area with negative values', state: 'root.demo.2-negative' },
        { title: 'sparkline charts', state: 'root.demo.2-sparkline' },
        { title: 'area mix stack', state: 'root.demo.2-areaMixStack' },
    ];
    var columnAndBar = [
        { title: 'basic bar', state: 'root.demo.3-basicbar' },
        //{ title: 'data from a html table', state: 'root.demo.3-tabledata' },
        { title: 'fixed placement column', state: 'root.demo.3-fixedplacement' },
        { title: 'column with drilldown', state: 'root.demo.3-drilldown' },
        { title: 'column with rotated label', state: 'root.demo.3-rotatedlabel' },
        { title: 'stacked percentage column', state: 'root.demo.3-stacked-percentage' },
        { title: 'stacked and grouped', state: 'root.demo.3-stackedgrouped' },
        { title: 'stacked column', state: 'root.demo.3-stackedcolumn' },
        { title: 'stacked with negative values', state: 'root.demo.3-negative' },
        { title: 'basic column', state: 'root.demo.3-basiccolumn' },
        { title: 'bar with negative stack', state: 'root.demo.3-bar-negative-stack' },
        { title: 'stacked bar', state: 'root.demo.3-stackedbar' },
        { title: 'column range', state: 'root.demo.3-range' },
        { title: 'column mix stack', state: 'root.demo.3-mixstack' },
        { title: 'column mix stack2', state: 'root.demo.3-mixstack2' },
        { title: 'zoomable Y', state: 'root.demo.3-zoomabley' },
    ];
    var pies = [
        { title: 'basic pie', state: 'root.demo.4-basicpie' },
        { title: 'pie with legend', state: 'root.demo.4-legend' },
        { title: 'donut chart', state: 'root.demo.4-donut' },
        { title: 'multi pies', state: 'root.demo.4-multipie' },
    ];

    var subCates = {
        1: basicLines,
        2: areaCharts,
        3: columnAndBar,
        4: pies
    };
    
})();