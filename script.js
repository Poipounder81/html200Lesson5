let balance = 0;

function startApplication() {
    let input = prompt('What would you like to do?');

    if (input == 'q') { 
        return;
    } else if (input == 'w') {
        withdraw();
    } else if (input == 'd') {
        deposit();
    } else if (input == 'b') { 
        showBalance();
    } else {
        alert('Unsupported action: Use prompt options (w)ithdraw, (d)eposit, or (b)alance. Press q or enter to quit at anytime');
    }
    start(); 
}

    function deposit() {
    let amount = prompt('Enter an amount to deposit');
    amount = isNaN(amount) ? 0 : parseFloat(amount);
    balance += amount;
    return balance;
    }
    
    function showBalance() {
    alert('Current balance: '+balance);
    }

function withdraw() {
    let amount = prompt('Enter an amount to withdraw');
    amount = isNaN(amount) ? 0 : parseFloat(amount);
    balance = balance - amount;
    return balance;
    }
     