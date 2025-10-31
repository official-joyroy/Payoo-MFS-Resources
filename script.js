document.getElementById('button-login').addEventListener('click', function (event){
    event.preventDefault();
    
    const phonenamber = document.getElementById('input-id').value;
    const phonepinn =document.getElementById('pin-namb').value;
    // console.log(phonenamber, phonepinn);
    
    if(phonenamber === '01792469206' && phonepinn === '735446'){
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone namber or pin')
    }


})