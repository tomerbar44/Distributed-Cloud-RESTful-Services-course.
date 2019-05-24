$("document").ready(function() {
    var arrInput = [];
    arrInput = $('input');
    $("form").submit(function(event) {
        if (arrInput.val() === "ccc") {
            alert("dsdsdds");
        }
        if (arrInput.values() === "") {

            alert("ddddddddd");

        }

        alert("no fill");
        event.preventDefault();
    });

});