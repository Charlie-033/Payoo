const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(typeof phoneNumber);
    // const convertToNum = parseInt(pinNumber);
    if(phoneNumber.length === 11){
        if(pinNumber === '0000'){
            window.location.href = './next1.html';    
        } else{
            alert('Wrong pin number');
            document.getElementById('pin-number').value = '';
            document.getElementById('phone-number').value = '';
        }
    } else{
        alert('Input valid phone number');
        document.getElementById('phone-number').value = '';
        document.getElementById('pin-number').value = '';
    }
  })