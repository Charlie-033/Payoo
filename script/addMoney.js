const addMoney = document.getElementById('add-money');
addMoney.addEventListener('click', (e) => {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertAmount= parseFloat(amount);
    const pinNumber = document.getElementById('pin-number').value;
    const mainBalance = document.getElementById('main-balance').textContent;
    const convertMainBalance = parseFloat(mainBalance);
    const accountNumber = document.getElementById('bank-number').value;
    const convertAccountNumber = parseInt(accountNumber);

    

    if(typeof convertAccountNumber === 'number' && accountNumber.length === 11 && typeof convertAmount === 'number' && convertAmount > 0){
        if(pinNumber === '0000'){
            // window.location.href = './next1.html'; 
            const sumBalance = convertAmount + convertMainBalance;
            document.getElementById('main-balance').textContent = sumBalance;   
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