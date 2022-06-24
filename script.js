var clicks = 10000;
var clickToAdd = 1;

document.getElementById("clicks").innerHTML = 'Points: ' + clicks;

document.getElementById("btn-click").addEventListener("click", function() {
    clicks += clickToAdd;
    document.getElementById("clicks").innerHTML = 'Points: ' + clicks;
});

document.getElementById("btn-upgrade").addEventListener("click", function() {
    if (clicks >= 10000) {
        clickToAdd += 4;
        clicks -= 10000;
    }
    document.getElementById("clicks").innerHTML = 'Points: ' + clicks;
});