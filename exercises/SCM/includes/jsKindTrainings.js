$(document).ready(function() {


    var q = "SELECT * FROM `tb_kind_of_trainings_210`";

    $.post('query.php', { query: q }, function(res) {
        if (res == "NULL")
            console.log('error occured');
        else {
            var json = JSON.parse(res);
            $.each(json, function(i, obj) {
                // For Gym option only(our flow)
                if (obj.ID == 3) {
                    $("main").append(
                        '<a class="facilitieLink" href="facilitysGymLayout.php?' + obj.ID + '">' + '<img src=' + obj.img + ' ' + 'alt="">' + obj.name + '</a>')
                } else {
                    $("main").append(
                        '<a class="facilitieLink" href="#">' + '<img src=' + obj.img + ' ' + 'alt="">' + obj.name + '</a>')
                }
            })

        }
    });
});