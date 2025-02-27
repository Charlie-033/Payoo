// document.getElementById('cashOut-section').style.display = 'none'; [Default]

document.getElementById('add-money-box').addEventListener('click', (e) => {
    e.preventDefault();
    handleToggle('add-money-section', 'block');
    handleToggle('cashOut-section', 'none');
    handleToggle('transaction-history', 'none');

    // document.getElementById('cashOut-section').style.display = 'none';
    // document.getElementById('add-money-section').style.display = 'block';
});

document.getElementById('cash-out-box').addEventListener('click', (e) => {
    e.preventDefault();
    handleToggle('cashOut-section', 'block');
    handleToggle('add-money-section', 'none');
    handleToggle('transaction-history', 'none');
    // document.getElementById('cashOut-section').style.display = 'block';
    // document.getElementById('add-money-section').style.display = 'none';
});

document.getElementById('transaction-box').addEventListener('click', (e) => {
    e.preventDefault();
    handleToggle('transaction-history', 'block');
    handleToggle('cashOut-section', 'none');
    handleToggle('add-money-section', 'none');
});
    

