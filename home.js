// stap 1 
document.getElementById('button-admany').addEventListener('click', function (event){
    event.preventDefault();
    // stap2
    const addmonayinput = document.getElementById('input-ad-many').value;
    // console.log(addmonayinput);

    // gat the pin namber
    const pinnamberinput = document.getElementById('input-pin-namber').value;
    // console.log(pinnamberinput)

    // stap 3
    if(pinnamberinput === '735446'){
        // console.log('this is tha right pin')
        // stap4
        const mullbalenc = document.getElementById('balance').innerText;
        // console.log(mullbalenc);

        // stap 5
        const addmony = parseFloat(addmonayinput);
        const addmonynumber = parseFloat(mullbalenc);
        const totalmany = addmony + addmonynumber;
        console.log(totalmany)

        // stap 6

        document.getElementById('balance').innerText = totalmany;
    }
    else{
        alert('rong pin number')
    }

})