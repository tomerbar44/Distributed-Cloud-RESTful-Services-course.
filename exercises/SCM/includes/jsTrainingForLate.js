$(document).ready(function() {
    var json_data = []
    $.getJSON("data/trainingDATA.json", function(data) {
        console.log(data)
        json_data = data
        for (var row of data) {
            if (parseInt($('#getDate').html()) == parseInt(row.date) && parseInt($('#getTime').html()) == parseInt(row.time) && parseInt($('#getLevel').html()) == parseInt(row.level)) {
                var trainingLink = $(
                    '<a href="#" class="list-group-item list-group-item-action">' + row.traning_name + ' : ' + row.minutes + 'min</a>')
                $('main').append(trainingLink)
            }
        }
    });

});