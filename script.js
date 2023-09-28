document.addEventListener("DOMContentLoaded", function () {
    const vehicleSelect = document.getElementById("vehicle");
    const distanceRange = document.getElementById("distance");
    const distanceValue = document.getElementById("distance-value");
    const calculateButton = document.getElementById("calculate-button");
    const resultDiv = document.getElementById("result");
    const emissionSpan = document.getElementById("emission");

    distanceValue.textContent = distanceRange.value + " km";

    distanceRange.addEventListener("input", function () {
        distanceValue.textContent = distanceRange.value + " km";
    });

    calculateButton.addEventListener("click", function () {
        const vehicleType = vehicleSelect.value;
        const distance = parseFloat(distanceRange.value);
        let emission = 0;

        switch (vehicleType) {
            case "bike":
                emission = distance * 0.02;
                break;
            case "car":
                emission = distance * 0.1;
                break;
            case "bus":
                emission = distance * 0.05;
                break;
            case "truck":
                emission = distance * 0.2;
                break;
        }

        emissionSpan.textContent = emission.toFixed(2);
    });
});
