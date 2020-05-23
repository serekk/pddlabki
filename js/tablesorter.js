//obsługa tablesorter
$(function () {
    $("#myTable").tablesorter({
        theme: 'blue',
        headers: {
            '.kodTowaru, .stawkaVAT, .kategoriaTowarowa, .opcjeTowaru, .zdjecie, .usun, .edytuj, .dodaj': {
                sorter: false
            }
        }
    }
    );
});


$(document).ready(function () {
    //obsługa sortowania po przyciskach
    $('#sort-rating-dsc').on("click", function () {
        $("#myTable").trigger("sorton", [ [[7,"d"]] ]);
    });

    $('#sort-rating-asc').on("click", function () {
        $("#myTable").trigger("sorton", [ [[7,"a"]] ]);
    });

    $('#sort-price-dsc').on("click", function () {
        $("#myTable").trigger("sorton", [ [[2,"d"]] ]);
    });

    $('#sort-price-asc').on("click", function () {
        $("#myTable").trigger("sorton", [ [[2,"a"]] ]);
    });

    $('#sort-name-a').on("click", function () {
        $("#myTable").trigger("sorton", [ [[0,"a"]] ]);
    });

    $('#sort-name-z').on("click", function () {
        $("#myTable").trigger("sorton", [ [[0,"d"]] ]);
    });

});

function productDelete(row) {
    $(row).parents("tr").remove();
    var usersTable = $(".tablesorter");
    usersTable.trigger("update")
    .trigger("sorton", [usersTable.get(0).config.sortList])
    .trigger("appendCache")
    .trigger("applyWidgets");
}
  
function productEdit(row) {
    document.getElementById("addOrEdit").onclick = function () { updateCells($(row).parents("tr")); };
    document.querySelector('#addOrEdit').innerText = 'zapisz zmiany';


    let firstRow = $row.find("td:nth-child(1)");
    let secondRow = $row.find("td:nth-child(2)");
    let thirdRow = $row.find("td:nth-child(3)");
    let fourthRow = $row.find("td:nth-child(4)");
    let fifthRow = $row.find("td:nth-child(5)");
    let sixthRow = $row.find("td:nth-child(6)");
    let seventhRow = $row.find("td:nth-child(7)");
    let eightRow = $row.find("td:nth-child(8)");
    let ninthRow = $row.find("td:nth-child(9)");


    document.getElementById("towar_name").value = firstRow.text();
    document.getElementById("input_code").value = secondRow.text();
    document.getElementById("netto_price").value = thirdRow.text();
    document.getElementById("inputVAT").value = fourthRow.text();
    document.getElementById("inputPriceBrutto").value = fifthRow.text();
    $('#inputCategory').val(sixthRow.text());

    document.getElementById("photo").value = ninthRow.text();
    
   let selOptions = seventhRow.text().trim().split(" ");
   let selRating = eightRow.text().trim().split(" ");

   console.log(selOptions);
   console.log(selRating);

    for (const option of selOptions) {
        $("#" + option).prop('checked', true);
    }

    for (const rating of selRating) {
        $("#" + rating).prop('checked', true);
    }

}

function updateCells(row){
    
    let gucci = [];
    gucci.push(sprawdzTowarName());
    gucci.push(sprawdzInputCode());
    gucci.push(sprawdzNettoPrice());
    gucci.push(sprawdzCheckbox());
    gucci.push(obliczBrutto());
    
    for (notGucci of gucci) {
        if(notGucci){
            alert("gosciu...");
            return;
        }
    }

    
    let firstRow = $row.find("td:nth-child(1)");
    let secondRow = $row.find("td:nth-child(2)");
    let thirdRow = $row.find("td:nth-child(3)");
    let fourthRow = $row.find("td:nth-child(4)");
    let fifthRow = $row.find("td:nth-child(5)");
    let sixthRow = $row.find("td:nth-child(6)");
    let seventhRow = $row.find("td:nth-child(7)");
    let eightRow = $row.find("td:nth-child(8)");
    let ninthRow = $row.find("td:nth-child(9)");

    let nazwaTowaru = document.getElementById("towar_name");
    let kodTowaru = document.getElementById("input_code");
    let cenaNetto = document.getElementById("netto_price");
    let stawkaVAT = document.getElementById("inputVAT");
    let cenaBrutto = document.getElementById("inputPriceBrutto");
    let kategoriaTowarowa = document.getElementById("inputCategory");
    let zdjecie = document.getElementById("photo");
    let opcjeTowaru = document.getElementsByClassName("checkboxOpcja");
    let ocenaTowaru = document.getElementsByClassName("radioOpcja");

    let zaznaczoneOpcje = "";
    let zaznaczonaOcena;

    for (opcjaCheckbox of opcjeTowaru) {
        if (opcjaCheckbox.checked) {
            console.log(opcjaCheckbox);
            zaznaczoneOpcje +=  opcjaCheckbox.value + " ";
        }
    }

    for (opcjaRadio of ocenaTowaru){
        if (opcjaRadio.checked){
            console.log(opcjaRadio);
            zaznaczonaOcena = opcjaRadio.value + " ";
        }
    }

    firstRow.html(nazwaTowaru.value);
    secondRow.html(kodTowaru.value);
    thirdRow.html(cenaNetto.value);
    fourthRow.html(stawkaVAT.value);
    fifthRow.html(cenaBrutto.value);
    sixthRow.html(kategoriaTowarowa.value);
    seventhRow.html(zaznaczoneOpcje);
    eightRow.html(zaznaczonaOcena);
    ninthRow.html(zdjecie.value);

    //post edit cleanup
    document.getElementById("addOrEdit").onclick = function () { gituwa(); };
    document.querySelector('#addOrEdit').innerText = 'dodaj do koszyka';
    var usersTable = $(".tablesorter");
    usersTable.trigger("update")
      .trigger("sorton", [usersTable.get(0).config.sortList])
      .trigger("appendCache")
      .trigger("applyWidgets");
    clearTable();

}
