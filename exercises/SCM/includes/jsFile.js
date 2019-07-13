$(document).ready(function() {


    var q = "SELECT * FROM `tb_facilities_210`";

    $.post('query.php', { query: q }, function(res) {
        if (res == "NULL")
            console.log('error occured');
        else {
            var json = JSON.parse(res);
            sessionStorage.setItem('facilitys', JSON.stringify(json));


            $.each(json, function(i, obj) {
                if (obj.kind == 1) {
                    $(".aerobic").append(
                        '<a class="facilitieLink" href="facilityDetailsLayout.php?' + obj.ID + '">' + '<img src=' + obj.img + ' ' + 'alt="">' + obj.name + '</a>')
                } else {
                    $(".power").append(
                        '<a class="facilitieLink" href="facilityDetailsLayout.php?' + obj.ID + '">' + '<img src=' + obj.img + ' ' + 'alt="">' + obj.name + '</a>')
                }
            })

        }
    });
});