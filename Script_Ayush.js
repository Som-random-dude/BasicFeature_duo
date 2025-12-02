let search = document.getElementById('searchInput');

search.addEventListener('input', function(event) {
    let cointainer = document.getElementsByClassName('product-card');
    const searchTerm = event.target.value.toLowerCase();
     if (searchTerm === "") {
    for (let i = 0; i < cointainer.length; i++) {
        cointainer[i].style.display = "block";
    }
    return;
}

    for (let i = 0; i<cointainer.length ; i++){
        let title = cointainer[i].querySelector('h3').innerText;
        title = title.toLowerCase();

        
        if ( title.includes(searchTerm)  ){
            cointainer[i].style.display = "block";
        }
        
        else{
             cointainer[i].style.display = "none";
        }
        
    }
});