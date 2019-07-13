function getID() {
    var aKeyValue = window.location.search.substring(1).split('&'),
        ID = aKeyValue[0].split("=")[0];
    return ID;
}

function deleteFacility() {
    var q = "SELECT * FROM `tb_facilities_210`";

    $.post('query.php', { query: q }, function(res) {
        if (res == "NULL")
            console.log('error occured');
        else {
            var IdFacility = getID();
            var json = JSON.parse(res);

            $.each(json, function(i, obj) {
                if (obj.ID === IdFacility) {
                    var d = "DELETE FROM `tb_facilities_210` WHERE ID=";
                    d = d + IdFacility;
                    $.post('query.php', { query: d }, function(res) {
                            if (res == "NULL") {
                                console.log('error occured');
                                $("main").append('<h2>There is a problem deleting</h2>');
                            } else {
                                $("main").append('<h2>Successfully deleted</h2>');
                            }
                        }


                    )
                }
            })

        }
    });
}

$(document).ready(function() {
    var facilitys_details = JSON.parse(sessionStorage.getItem('facilitys'));
    if (facilitys_details == "NULL")
        console.log('error occured');
    else {
        $.each(facilitys_details, function(i, obj) {
            var IdFacility = getID();

            if (obj.ID === IdFacility) {
                $("main").append(
                    '<div class="card mb-3" style="max-width: 540px;">' +
                    '<div class="row no-gutters">' +
                    ' <div class="col-md-4">' +
                    '<img src=' + obj.img + ' ' + 'class="card-img"' + 'alt="">' +
                    '</div>' +
                    '<div class="col-md-8">' +
                    '<div class="card-body">' +
                    '<ul class="list-group list-group-flush">' +
                    '<li class="list-group-item">' + obj.name + '</li>' +
                    '<li class="list-group-item">' + obj.ID + '</li>' +
                    '<li class="list-group-item">' + obj.provider + '</li>' +
                    '<li class="list-group-item">' + obj.date + '</li>' +
                    '<li class="list-group-item">' + obj.comment + '</li>' +
                    ' </ul>' +
                    '</div>' +
                    '</div>' +
                    '</div>')

            }

        })


    };
});

document.getElementById('deleteButton').onclick = deleteFacility;