function convertTemp() {
    // Obtiene el valor de la temperatura ingresada y la convierte a un número de punto flotante
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    // Obtiene la unidad de temperatura seleccionada
    const inputUnit = document.getElementById('inputUnit').value;

    // Variables para almacenar las temperaturas convertidas
    let celsius, fahrenheit, kelvin;

    // Convierte la temperatura según la unidad seleccionada
    if (inputUnit === 'C') {
        celsius = inputTemp;
        fahrenheit = (inputTemp * 9/5) + 32;
        kelvin = inputTemp + 273.15;
    } else if (inputUnit === 'F') {
        celsius = (inputTemp - 32) * 5/9;
        fahrenheit = inputTemp;
        kelvin = (inputTemp - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'K') {
        celsius = inputTemp - 273.15;
        fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
        kelvin = inputTemp;
    }

    // Actualiza los elementos del DOM con las temperaturas convertidas
    document.getElementById('celsiusValue').innerText = `${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheitValue').innerText = `${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvinValue').innerText = `${kelvin.toFixed(2)} K`;

    // Actualiza la altura del mercurio en los termómetros
    updateThermometer('celsiusMercury', celsius, -30, 50);
    updateThermometer('fahrenheitMercury', fahrenheit, -22, 122);
    updateThermometer('kelvinMercury', kelvin, 243.15, 323.15);
}

function updateThermometer(id, value, min, max) {
    // Obtiene el elemento del termómetro por su ID
    const thermometer = document.getElementById(id);
    // Calcula el porcentaje de altura del mercurio basado en el valor de la temperatura
    const percentage = ((value - min) / (max - min)) * 100;
    thermometer.style.height = `${percentage}%`;
}