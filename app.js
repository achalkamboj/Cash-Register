const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];


checkButton.addEventListener("click", function validateBillAndCashAmount() {
hideMessage();
if(billAmount.value >= 0){
    if(cashGiven.value >= billAmount.value){
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange(amountToBeReturned);
    }
    else{
        showMessage("Do You Wanna Wash Plates?");
    }
}
else{
    showMessage("Invalid Bill Amount");
}
});


function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(msg){
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}

function calculateChange(amountToBeReturned){
    for(var i=0; i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned%availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
