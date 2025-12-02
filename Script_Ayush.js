let search = document.getElementById('searchInput');
let mainCointainer = document.getElementsByClassName('product-grid')[0];
const h3 = document.createElement('h3');
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
        if (document.getElementsByClassName('product-grid').length === 0){
            h3.innerHTML = "results not found";
            mainCointainer.appendChild(h3);
        }
    }
});