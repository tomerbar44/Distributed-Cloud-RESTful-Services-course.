//Global variables

(function() {
    var filter;

    function categoryFiltering() {
        if (this.innerHTML === 'Power') {
            filter = document.getElementsByClassName('power');
            if (filter[0].style.display === 'none') {
                filter[0].style.display = 'block';
            } else {
                filter[0].style.display = 'none';
            }
        } else {
            filter = document.getElementsByClassName('aerobic');
            if (filter[0].style.display === 'none') {
                filter[0].style.display = 'block';
            } else {
                filter[0].style.display = 'none';
            }
        }

    }

    document.getElementById('filterPower').onclick = categoryFiltering;
    document.getElementById('filterAerobic').onclick = categoryFiltering;

})();