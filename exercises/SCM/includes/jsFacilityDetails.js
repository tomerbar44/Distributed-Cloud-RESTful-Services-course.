function getID() {
    var aKeyValue = window.location.search.substring(1).split('&'),
        ID = aKeyValue[0].split("=")[0];
    return ID;
}

function deleteFacility() {
    var IdFacility = getID();
    var q = "DELETE FROM `tb_facilities_210` WHERE ID=";
    q = q + IdFacility;
    $.post('query.php', { query: q }, function(res) {
        if (res == "NULL") {
            console.log('error occured');
            $("main").append('<h3 class="confirmMessage"><img src="https://img.icons8.com/color/48/000000/high-importance.png" alt=" "> Not successfully deleted</h3>');
        } else {
            $("main").append('<h3 class="confirmMessage"><img src="https://img.icons8.com/color/48/000000/checked.png" alt=" "> Successfully deleted</h3>');
        }
    })
}

function insertIDtoForm() {
    var IdFacility = getID();
    $("#staticCode").val(IdFacility);
}

$(document).ready(function() {
    var q = "SELECT * FROM `tb_facilities_210`";
    $.post('query.php', { query: q }, function(res) {
        if (res == "NULL")
            console.log('error occured');
        else {

            var IdFacility = getID();
            var json = JSON.parse(res);
            console.log(json);
            $.each(json, function(i, obj) {
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
                        '</div>');
                }


            });


        }
    });
});
// triger for delete facility
document.getElementById('deleteButton').onclick = deleteFacility;
document.getElementById('updateButton').onclick = insertIDtoForm;