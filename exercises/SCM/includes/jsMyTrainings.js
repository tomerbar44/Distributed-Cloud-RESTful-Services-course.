$(document).ready(function() {

    var q = "SELECT * FROM `tb_training_210`";


    $.post('query.php', { query: q }, function(res) {
        if (res == "NULL")
            console.log('error occured');
        else {
            var json = JSON.parse(res);
            sessionStorage.setItem('trainings', JSON.stringify(json));
            let j = 1;
            $.each(json, function(i, obj) {
                //for gil ID
                if (obj.ID == 33333) {
                    $("tbody").append(
                        '<tr>' +
                        '<th scope="row">' + j + '</th>' +
                        '<td>' + obj.traning_name + '</td>' +
                        '<td>' + obj.date + '</td>' +
                        '<td>' + obj.time + '</td>' +
                        '<td>' + obj.minutes + '</td>' +
                        '<td>' + obj.level + '</td>' +
                        '</tr>')
                    j++;
                }

            })


        }
    });
});