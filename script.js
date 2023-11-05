function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = fromUnit === "celsius" ? "fahrenheit" : "celsius";

    if (fromUnit === toUnit) {
        document.getElementById("resultTemp").innerText = inputTemp;
        document.getElementById("toUnit").innerText = toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
    } else if (fromUnit === "celsius") {
        const resultTemp = (inputTemp * 9/5) + 32;
        document.getElementById("resultTemp").innerText = resultTemp.toFixed(2);
        document.getElementById("toUnit").innerText = "Fahrenheit";
    } else {
        const resultTemp = (inputTemp - 32) * 5/9;
        document.getElementById("resultTemp").innerText = resultTemp.toFixed(2);
        document.getElementById("toUnit").innerText = "Celsius";
    }
}
