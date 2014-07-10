function searchVM() {

    var self = this;

    self.companies = ko.observableArray([]);
    self.searchPattern = ko.observable('');

    self.search = function () {
        $.ajax({
            url: 'http://catalog.api.2gis.ru/search?what=' + self.searchPattern() + '&where=новосибирск&version=1.3&pagesize=10&key=rubmnl3474',
            type: 'GET',
            success: function (items) {

            },
            error: function (request, status, error) {
                alert('По запросу ничего не найдено');
            }
        });
    };
};

$(document).ready(function () {
    ko.applyBindings(new searchVM());
});