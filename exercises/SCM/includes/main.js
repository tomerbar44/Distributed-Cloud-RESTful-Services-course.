(function() {
    var powerGroup, aerobicGroup;

    function categoryFiltering() {
        powerGroup = document.getElementsByClassName('power');
        aerobicGroup = document.getElementsByClassName('aerobic');
        if (this.innerHTML === 'Aerobic') {
            if (powerGroup[0].style.display === 'block') // for two clicks
                powerGroup[0].style.display = 'none';
            else {
                powerGroup[0].style.display = 'block';
            }
            aerobicGroup[0].style.display = 'block';
        } else {
            if (aerobicGroup[0].style.display === 'block') // for two clicks
                aerobicGroup[0].style.display = 'none';
            else {
                aerobicGroup[0].style.display = 'block';
            }
            powerGroup[0].style.display = 'block';

        }
    }

    document.getElementById('filterPower').onclick = categoryFiltering;
    document.getElementById('filterAerobic').onclick = categoryFiltering;

})();