let CounterElement = document.getElementById("countervalue");

function OnIncrement() {
    let previouscountervalue = CounterElement.textContent;
    let updatedcountervalue = (parseInt(previouscountervalue) || 0) + 1;

    if (updatedcountervalue > 0) {
        CounterElement.style.color = "green";
    } else if (updatedcountervalue < 0) {
        CounterElement.style.color = "red";
    } else {
        CounterElement.style.color = "black";
    }
    CounterElement.textContent = updatedcountervalue;
}

function OnDecrement() {
    let previouscountervalue = CounterElement.textContent;
    let updatedcountervalue = (parseInt(previouscountervalue) || 0) - 1;

    if (updatedcountervalue > 0) {
        CounterElement.style.color = "green";
    } else if (updatedcountervalue < 0) {
        CounterElement.style.color = "red";
    } else {
        CounterElement.style.color = "black";
    }
    CounterElement.textContent = updatedcountervalue;
}

function OnReset() {
    CounterElement.textContent = "0";
    CounterElement.style.color = "black";
}