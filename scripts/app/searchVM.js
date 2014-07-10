function searchVM() {

    var self = this;

    self.companies = ko.observableArray([]);
    self.searchPattern = ko.observable('');

    self.search = function () {
        $.ajax({
            url: 'http://catalog.api.2gis.ru/search?what=' + self.searchPattern() + '&where=новосибирск&version=1.3&pagesize=10&key=rubmnl3474',
            type: 'GET',
            success: function (items) {
                if (items.total == 0)
                    alert('По данному запросу ничего не найдено');
                else {
                    items.result.forEach(function (item) {
                        var company = {
                            name: item.name,
                            address: item.address
                        };
                        self.companies.push(company);

                        DG.marker([item.lon, item.lat]).addTo(map);
                    })
                }
            }
        });
    };
};

$(document).ready(function () {
    ko.applyBindings(new searchVM());
});