document.getElementById('cashout-btn').addEventListener('click',(e) => {
    e.preventDefault();

    const amount = document.getElementById('cashout-amount').value;
    const convertAmount= parseFloat(amount);
    const pinNumber = document.getElementById('cashout-pin').value;
    const mainBalance = document.getElementById('main-balance').textContent;
    const convertMainBalance = parseFloat(mainBalance);
    const agentNumber = document.getElementById('agent-number').value;
    const convertAgentNumber = parseInt(agentNumber);
    console.log(agentNumber.length);

    if(typeof convertAgentNumber === 'number' && agentNumber.length === 11 && typeof convertAmount === 'number' && convertAmount > 0){
        if(pinNumber === '0000'){
            const sumBalance = convertMainBalance - convertAmount;
            document.getElementById('main-balance').textContent = sumBalance;   
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