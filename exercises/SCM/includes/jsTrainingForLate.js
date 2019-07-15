$(document).ready(function() {

    function trainingFromJson() {
        var json_data = []
        $.getJSON("data/trainingDATA.json", function(data) {
            console.log(data)
            json_data = data
            for (var row of data) {

                console.log($('#timeForLate').val());
                console.log($('#dateForLate').val());
                console.log($('#levelForLate').val());

                if (row.time == $('#timeForLate').val() && row.date == $('#dateForLate').val() && row.level == $('#levelForLate').val())
                    var table_row = $(
                        '<tr>' +
                        '<td></td>' +
                        '<td></td>' +
                        '<th scope="row"></th>' +
                        '<td>' + row.num_training + '</td>' +
                        '<td>' + row.traning_name + '</td>' +
                        '<td>' + row.date + '</td>' +
                        '<td>' + row.time + '</td>' +
                        '<td>' + row.minutes + '</td>' +
                        '<td>' + row.level + '</td>' +
                        '</tr>'
                    )
                $(table_row).css("background-color", "yellow");
                $('tbody').append(table_row)
            }
        });
    }
    document.getElementById('confirmButton').onclick = trainingFromJson();
});