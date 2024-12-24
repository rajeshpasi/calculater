const display = document.getElementById("display"); // Display ko target karo
const buttons = document.querySelectorAll("#buttons,button"); // Buttons ko target karo

// Har button ke liye event listener lagao
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent; // Button ka text get karo

        if (value === "=") {
            // Calculate result
            try {
                display.value = eval(display.value); // Expression calculate karo
            } catch {
                display.value = "Error"; // Error handle karo
            }
        } else if (value === "AC") {
            // Clear display
            display.value = "";
        } else {
            // Add value to display
            display.value += value;
        }
    });
});
