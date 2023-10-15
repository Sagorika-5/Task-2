function convertTemperature() {
    // Get the Celsius input value
    var celsius = document.getElementById("celsius").value;

    // Convert Celsius to Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Convert Celsius to Kelvin
    var kelvin = parseFloat(celsius) + 273.15;

    // Display the result
    document.getElementById("result").innerText = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit and " + kelvin.toFixed(2) + " Kelvin";
}