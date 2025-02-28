document.getElementById('cashout-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const amount = getInputValueById('cashout-amount');
    const pinNumber = getInputValueById('cashout-pin');
    const mainBalance = getInnerTextById('main-balance');
    const agentNumber = getInputValueById('agent-number');
    const agentNumberLength = document.getElementById('agent-number').value.length;
    // console.log(agentNumberLength);

    if(typeof agentNumber === 'number' && agentNumberLength === 11 && typeof amount === 'number' && amount > 0 && amount <= mainBalance){
        if(pinNumber === 0000){
            const sumBalance = mainBalance - amount;
            setInnerTextById('main-balance', sumBalance);
            alert('Transaction successful!');  
            
            const transaction = document.getElementById('transaction-container');
            const p = document.createElement('p');
            p.innerHTML = `You have cashout ${amount} to 0${agentNumber}`;
            
            p.classList.add('history');
            transaction.appendChild(p);
        } else{
            alert('Wrong pin number');
            document.getElementById('cashout-pin').value = '';
            document.getElementById('agent-number').value = '';
            document.getElementById('cashout-amount').value = '';
        }
    } else{
        alert('Input valid account number or Input numeric digit only!');
        document.getElementById('agent-number').value = '';
        document.getElementById('cashout-pin').value = '';
        document.getElementById('cashout-amount').value = '';
    }
})