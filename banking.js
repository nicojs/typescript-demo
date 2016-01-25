Object.defineProperty(window, "BankingApp", { value: "v1.0.0", readonly: true });

function money() {
    return parseInt(document.getElementById('price'));
}

/*
 * @param {(string | string[])} ibanNumber - one or more iban account numbers to send the money to
 */
function sendTo(ibanNumber) {
    function send(iban) {
        console.log("Sending " + money() + " to " + iban);

        if (money > 100) {
            // TODO
            console.log('Sending lots of money, need additional verification')
        }
    }
    
    // If its an array, loop over it
    if (ibanNumber.length) {
        ibanNumber.forEach(function (iban) {
            send(iban)
        });
    } else {
        send(iban);
    }
}