// Setting the Launch Date.
var comingdate = new Date('April 22, 2024 08:00:00');

// Accepting the elements.
var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');
var dd = document.getElementById('dd');
var hh = document.getElementById('hh');
var mm = document.getElementById('mm');
var ss = document.getElementById('ss');

// Making Countdown work.
var x = setInterval(function () {
    var now = new Date();
    var des = comingdate.getTime() - now.getTime();
    var days = Math.floor(des / (1000 * 60 * 60 * 24));
    var hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((des % (1000 * 60)) / 1000);

    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hours);
    m.innerHTML = getTrueNumber(mins);
    s.innerHTML = getTrueNumber(secs);
    dd.innerHTML = getTrueNumber(days);
    hh.innerHTML = getTrueNumber(hours);
    mm.innerHTML = getTrueNumber(mins);
    ss.innerHTML = getTrueNumber(secs);

    if (des <= 0) {
        clearInterval(x);
        d.innerHTML = '00';
        h.innerHTML = '00';
        m.innerHTML = '00';
        s.innerHTML = '00';
        dd.innerHTML = '00';
        hh.innerHTML = '00';
        mm.innerHTML = '00';
        ss.innerHTML = '00';
    }
}, 1000);

function getTrueNumber(x) {
    if (x < 10) return '0' + x;
    else return x;
}
