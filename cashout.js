document.getElementById('button-cashout').addEventListener('click', function (event){
    event.preventDefault();

    const cashout = document.getElementById('input-cahsout').value;
    const cahsoutnumber = parseFloat(cashout)
    const pinnumber = document.getElementById('cas-out-pin').value;
    
    
    if(pinnumber === '735446'){
        const balance = document.getElementById('accound-balance').innerText;
        const balencnumber = parseFloat(balance)

        const newbalenc = cahsoutnumber - balencnumber;

        document.getElementById('accound-balance').innerText = newbalenc;

    }
    else{
        alert('feled to cash out pin')
    }
})