document.getElementById('button-admany').addEventListener('click', function (event){
    event.preventDefault();

    // get mani pin number
    const addmony = document.getElementById('input-ad-many').value;
    const addmaninumber = parseFloat(addmony)
    const addpinnamber = document.getElementById('input-pin-namber').value
    //console.log(addmony, addpinnamber)

    if(addpinnamber === '735446'){
        // console.log('carect pin namber')
        const balance = document.getElementById('accound-balance').innerText
        const balencnumber = parseFloat(balance)

        const nuwbalenc = balencnumber + addmaninumber;

        document.getElementById('accound-balance').innerText = nuwbalenc;
        
    }
    else{
        alert('not mach pin number')
    }


})