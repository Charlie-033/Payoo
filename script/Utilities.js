function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertValue = parseFloat(value);
    return convertValue;
}

function getInnerTextById(id){
    const value = document.getElementById(id).textContent;
    const convertValue = parseFloat(value);
    return convertValue;
}

function setInnerTextById(id, value){
    document.getElementById(id).textContent = value;
}

function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}