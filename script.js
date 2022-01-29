const celcius = document.getElementById("celname");
const farenheit = document.getElementById("farname");
const kelvin = document.getElementById("kelname");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.addEventListener("input", function(e) {
        let value = parseFloat(e.target.value);
        switch (e.target.name) {
            case "celname":
                farenheit.value = (value * 1.8) + 32;
                kelvin.value = value + 273.15;
                break;

            case "farname":
                celcius.value = (value - 32) / 1.8;
                kelvin.value = value + 273.15;
                break;

            case "kelname":
                farenheit.value = (value * 1.8) + 32;
                celcius.value = (value - 32) / 1.8;
                break;

            default:
                break;
        }
    });
}