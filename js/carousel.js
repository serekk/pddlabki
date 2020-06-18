function handleChange(selectSrc, idCarousel, idTable) {
    if (selectSrc.value == 'gallery') {
        makeCarousel();
        document.getElementById(idCarousel).style.display = "inline-block";
        document.getElementById(idTable).style.display = "none";
        document.getElementById("addOrEdit").style.display = "none";
        document.getElementById("jsonLoadField").style.display = "none";
    } else {
        document.getElementById(idCarousel).style.display = "none";
        document.getElementById(idTable).style.display = "table";
        document.getElementById("addOrEdit").style.display = "inline-block";
        document.getElementById("jsonLoadField").style.display = "inline-block";
    }
}


function makeCarousel() {
    console.log("robimy karuzelke");
    let produtcs = [];
    var i = 0; //ooga booga!! id[0] to header tabeli
    var t = document.getElementById('myTable');
    $("#myTable tr").each(function () {
        let product = {
            nazwaProduktu: $(t.rows[i].cells[0]).text(),
            cenaNetto: $(t.rows[i].cells[2]).text(),
            cenaBrutto: $(t.rows[i].cells[4]).text(),
            zdjecie: ($(t.rows[i].cells[8]).text() == "") ? "https://i2.wp.com/zbiczno.pl/wp-content/uploads/2020/01/placeholder.png" : $(t.rows[i].cells[8]).text()
        }
        produtcs.push(product);
        i++;  
    });

    //paskudny offset ale products[0] to naglowki tabeli
    var innerCarousel = '<div class="carousel-item active">' +
        '<img class="d-block w-100" src="' + produtcs[1].zdjecie + '" alt="First slide">' +
        '<div class="carousel-caption d-none d-md-block" style="mix-blend-mode: difference;">' +
        '<h5>' + produtcs[1].nazwaProduktu + ": " + produtcs[1].cenaNetto + " PLN (cena netto)" +'</h5>' +
        '<p>' + produtcs[1].cenaBrutto + " PLN (cena brutto)" + '</>' +
        '  </div> ' +
    '</div>';
    //pierwszy item sie rozni, potrzebuje miec klase active

    console.log(innerCarousel);

    for (let index = 2; index < produtcs.length; index++) {
        console.log(produtcs[index]);        
        innerCarousel += '<div class="carousel-item">' +
        '<img class="d-block w-100" src="' + produtcs[index].zdjecie + '" alt="First slide">' +
        '<div class="carousel-caption d-none d-md-block" style="mix-blend-mode: difference;">' +
        '<h5>' + produtcs[index].nazwaProduktu + ": " + produtcs[index].cenaNetto + " PLN (cena netto)" +'</h5>' +
        '<p>' + produtcs[index].cenaBrutto + " PLN (cena brutto)" + '</>' +
        '  </div> ' +
    '</div>';
    }

    document.getElementById("carousel-inner").innerHTML = innerCarousel;
    console.log(produtcs);
}
