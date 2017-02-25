
$(document).ready(function () {

    function loadList() {
        return $.ajax({
            type: 'GET',
            url: 'liste.json'
        });
    }

    function writeData() {
        var listLoader = loadList();
        listLoader.done(function (data) {
            var ausgabe = $('#autoArray');
            data.forEach(function (e,i,a) {
                var listItem = $('<p></p>');
                listItem.text(e.marke + ', ' + e.km + ', ' + e.jahrgang);
                listItem.appendTo(ausgabe);
            });
        });
    }

    $('#loadButton').on('click', writeData);

});