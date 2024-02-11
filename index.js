document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("rectangle-form");
    const baseInput = document.getElementById("base");
    const heightInput = document.getElementById("height");
    const resultDiv = document.getElementById("result");
    const clearBtn = document.getElementById("clear-btn");

    
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const base = parseFloat(baseInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(base) || isNaN(height)) {
            resultDiv.innerHTML = '<div class="alert alert-danger">Ingresa valores válidos.</div>';
        } else {
            const area = base * height;
            resultDiv.innerHTML = `<div class="alert alert-success">El área del rectángulo es: ${area.toFixed(2)}</div>`;
        }
    });

   
   
    clearBtn.addEventListener("click", function () {
        baseInput.value = "";
        heightInput.value = "";
        resultDiv.innerHTML = "";
    });
});
