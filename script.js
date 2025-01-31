document.getElementById("calculateBtn").addEventListener("click", calculateTip);

function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const serviceRating = parseFloat(document.getElementById("serviceRating").value);
    const splitCount = parseInt(document.getElementById("splitCount").value);

    const tipAmountOutput = document.getElementById("tipAmount");
    const totalAmountOutput = document.getElementById("totalAmount");
    const amountPerPersonOutput = document.getElementById("amountPerPerson");

    if (isNaN(billAmount) || billAmount <= 0 || isNaN(splitCount) || splitCount <= 0) {
        tipAmountOutput.textContent = "⚠️ Please enter valid numbers.";
        totalAmountOutput.textContent = "";
        amountPerPersonOutput.textContent = "";
        return;
    }

    let tip = (serviceRating / 100) * billAmount;
    let totalAmount = billAmount + tip;
    let amountPerPerson = totalAmount / splitCount;

    tipAmountOutput.textContent = `Tip: ₹${tip.toFixed(2)}`;
    totalAmountOutput.textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;
    amountPerPersonOutput.textContent = `Amount Per Person: ₹${amountPerPerson.toFixed(2)}`;
}
