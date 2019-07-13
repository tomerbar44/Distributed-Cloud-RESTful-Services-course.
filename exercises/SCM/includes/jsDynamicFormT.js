$(document).ready(function() {
    var q = "SELECT * FROM `tb_facilities_210`";
    $.post('query.php', { query: q }, function(res) {
        if (res == "NULL")
            console.log('error occured');
        else {
            var json = JSON.parse(res);
            $.each(json, function(i, obj) {
                $("#training").append(
                    ' <option>' + obj.name + '</option>')

            })

        }
    });

});