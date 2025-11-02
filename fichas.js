document.getElementById('button-sho-chash out').addEventListener('click', function (){
    document.getElementById('chase-out-form').classList.remove('hidden');


    // haid tha ad mani form
    document.getElementById('add-mani-form').classList.add('hidden')
})
document.getElementById('button-sho-add-mani').addEventListener('click', function(){
     document.getElementById('add-mani-form').classList.remove('hidden')

     document.getElementById('chase-out-form').classList.add('hidden');
})