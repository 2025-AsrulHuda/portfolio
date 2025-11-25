let display = document.getElementById("display");

// Append numbers/operators
function append(value) {
  display.value += value;
}

// Clear entire display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
