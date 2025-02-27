document.getElementById('add-money').addEventListener('click', (e) => {
    e.preventDefault();
    const amount = getInputValueById('amount');
    const pinNumber = getInputValueById('pin-number');
    const mainBalance = getInnerTextById('main-balance');
    const accountNumber = getInputValueById('bank-number');
    const accountNumberLength = document.getElementById('bank-number').value.length;
    console.log(accountNumberLength);

    if(typeof accountNumber === 'number' && accountNumberLength === 11 && typeof amount === 'number' && amount > 0){
        if(pinNumber === 0000){
            const sumBalance = amount + mainBalance;
            setInnerTextById('main-balance', sumBalance);
            alert('Transaction successful!');   
        } else{
            alert('Wrong pin number');
            document.getElementById('pin-number').value = '';
            document.getElementById('bank-number').value = '';
            document.getElementById('amount').value = '';
        }
    } else{
        alert('Input valid account number or Input numeric digit only!');
        document.getElementById('bank-number').value = '';
        document.getElementById('pin-number').value = '';
        document.getElementById('amount').value = '';
    }
})