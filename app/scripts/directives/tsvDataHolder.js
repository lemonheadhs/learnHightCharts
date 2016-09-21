(function () {
    'use strict';

    angular
        .module('learnHighChartsApp')
        .directive('tsvDataHolder', tsvDataHolder);

    tsvDataHolder.$inject = ['$parse'];
    function tsvDataHolder($parse) {
        var directive = {
            restrict: 'EA',
            link: link
        };

        function link(scope, elem, attrs) {
            var tsvText = elem.html();
            var rows = tsvText
                .replace(/\r\n/g, '\n')
                .replace(/\r/g, '\n')
                .split('\n');

            if (attrs['tsvPostParse']) {
                var postAction = $parse(attrs['tsvPostParse']);
                postAction(scope, { rows: rows });
            }
        }

        return directive;
    }
})();