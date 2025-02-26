document.getElementById('add-money-box').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cashOut-section').style.display = 'none';
    document.getElementById('add-money-section').style.display = 'block';
});

document.getElementById('cash-out-box').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('cashOut-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
});