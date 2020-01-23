var myVar = setInterval(tijd, 1000);

function tijd() {
    var tijd = new Date()
    document.getElementById("klok").innerHTML = tijd;
}


function berekening() {
    const pi = 3.14;
    var diameterString = document.getElementById("diameter").value;
    var diameter = parseFloat(diameterString);
    {
        let output = diameter * pi;
        let declaratie = "Omtrek is: ";
        document.getElementById("omtrek").innerHTML = declaratie + output;
    }
    {
        let output = diameter * diameter * pi * 0.25;
        var declaratie = "Oppervlakte is: ";
        document.getElementById("oppervlakte").innerHTML = declaratie + output;
    }
}