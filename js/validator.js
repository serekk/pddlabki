var isDuplicateEntry = false;
function clearInputs(){
    document.getElementById("towar_name").value = "";
    document.getElementById("input_code").value = "";
    document.getElementById("netto_price").value = "";
    document.getElementById("inputVAT").value = "";
    document.getElementById("inputPriceBrutto").value = "";
    $('#inputCategory').val(1);
    document.getElementById("photo").value = "domyślne zdjęcie";

    $('#option1').prop('checked', false); // Unchecks it
    $('#option2').prop('checked', false); // Unchecks it
    $('#option3').prop('checked', false); // Unchecks it
    $('#option4').prop('checked', false); // Unchecks it
    $('#option5').prop('checked', false); // Unchecks it

    $('#rating1').prop('checked', false); // Unchecks it
    $('#rating2').prop('checked', false); // Unchecks it
    $('#rating3').prop('checked', false); // Unchecks it
    $('#rating4').prop('checked', false); // Unchecks it
    $('#rating5').prop('checked', false); // Unchecks it
    
    $(".form-group row").removeClass("invalid-feedback valid-feedback is-invalid is-valid");
    $(".form-control").removeClass("invalid-feedback valid-feedback is-invalid is-valid");

    $("#optionFeedback").removeClass("invalid-feedback valid-feedback");
    $("#optionFeedback").html("");

}

function sprawdzTowarName() {
    var formularz_obj = document.getElementById("towar_name");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("towar_name_blad");

    var objRegExp = /^[a-zA-Z]+$/;

    if (t_name === "") {
        blad.innerHTML = "Podaj nazwe towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else if (t_name.length > 10) {
        blad.innerHTML = "Za dluga nazwa (max 10 znakow)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    }
    return blad_danych;
}

function sprawdzInputCode() {
    var formularz_obj = document.getElementById("input_code");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("input_code_blad");

    var objRegExp = "^\\d{2}-\\d{2}$";

    if (t_name === "") {
        blad.innerHTML = "Podaj kod towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else if (!t_name.match(objRegExp)) {
        blad.innerHTML = "Wymagany pattern: XX-XX";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    }
    return blad_danych;
}

function sprawdzNettoPrice() {
    var formularz_obj = document.getElementById("netto_price");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("netto_price_blad");

    if (t_name === "") {
        blad.innerHTML = "Podaj cenę";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }
    else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
        var cena = parseFloat(t_name);
        cena = (Math.round(cena * 100 + Number.EPSILON) / 100).toFixed(2);
        document.getElementById("netto_price").value = cena;
        var vat = document.getElementById("inputVAT").value;
        vat = vat * 0.01;
        document.getElementById("inputPriceBrutto").value = parseFloat(cena) * vat + parseFloat(cena);

    }
    return blad_danych;
}

function sprawdzCheckbox() {
    var feedback = document.getElementById("optionFeedback");
    var listaCheckbox = document.getElementsByClassName("checkboxOpcja");
    var opcjaCheckbox;
    var ileZaznaczonych = 0;

    for (opcjaCheckbox of listaCheckbox) {
        if (opcjaCheckbox.checked) {
            ileZaznaczonych++;
        }
    }

    if (ileZaznaczonych < 2) {
        feedback.classList.add("invalid-feedback");
        feedback.classList.remove("valid-feedback");
        feedback.innerHTML = "minimum 2 opcje";
        blad_danych = true;

    } else {
        feedback.classList.remove("invalid-feedback");
        feedback.classList.add("valid-feedback");
        blad_danych = false;
    }
    return blad_danych;

}

function obliczBrutto() {
    var formularz_obj = document.getElementById("inputVAT");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("vat_blad");

    if (t_name === "") {
        blad.innerHTML = "Podaj vat";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad_danych = false;

        var cena = document.getElementById("netto_price").value;
        var vat = document.getElementById("inputVAT").value;
        vat = vat * 0.01;
        document.getElementById("inputPriceBrutto").value = parseFloat(cena) * vat + parseFloat(cena);
    }
    return blad_danych;
}

function gituwa(){

    var gucci = [];
    gucci.push(sprawdzTowarName());
    gucci.push(sprawdzInputCode());
    gucci.push(sprawdzNettoPrice());
    gucci.push(sprawdzCheckbox());
    gucci.push(obliczBrutto());
    
    for (notGucci of gucci) {
        if(notGucci){
            alert("pola nie spełniają wymogów");
            return;
        }
    }
    
    var nazwaTowaru = document.getElementById("towar_name");
    var kodTowaru = document.getElementById("input_code");
    var cenaNetto = document.getElementById("netto_price");
    var stawkaVAT = document.getElementById("inputVAT");
    var cenaBrutto = document.getElementById("inputPriceBrutto");
    var kategoriaTowarowa = document.getElementById("inputCategory");
    var zdjecie = document.getElementById("photo");
    var opcjeTowaru = document.getElementsByClassName("checkboxOpcja");
    var ocenaTowaru = document.getElementsByClassName("radioOpcja");

    var zaznaczoneOpcje = "";
    var zaznaczonaOcena;

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

    $("#myTable td:nth-child(1)").each(function (index) {
        console.log('Row no. ' + (index+1) + ', Column 1 : ' + $(this).html());
        if(nazwaTowaru.value == $(this).html()){
            alert('Towar ' + $(this).html() + " juz zostal dodany!");
            isDuplicateEntry = true;
            return false; //serio jquery?!?!
        }
    });
         
    if (!isDuplicateEntry) {
        var row = `
        <tr>
            <td>` + nazwaTowaru.value + `</td>
            <td>` + kodTowaru.value + `</td>
            <td>` + cenaNetto.value + `</td>
            <td>` + stawkaVAT.value + `</td>
            <td>` + cenaBrutto.value + `</td>
            <td>` + kategoriaTowarowa.value + `</td>
            <td>` + zaznaczoneOpcje + `</td>
            <td>` + zaznaczonaOcena + `</td>
            <td>` + zdjecie.value + `</td>
            <td>` + '<button type="button" class="btn btn-info" onclick="productDelete(this)">❌</button>' + `</td>
            <td>` + '<button type="button" class="btn btn-info" onclick="productEdit(this)">📝</button>' + `</td>
            <td>` + '<button type="button" class="btn btn-info" onclick="productAdd(this)">➕</button>' + `</td>
        </tr>`;

    $row = $(row),
    resort = true;
    $('#myTable')
      .find('tbody').append($row)
      .trigger('addRows', [$row, resort]);
    
    
    clearInputs();
    } else {
        isDuplicateEntry = false;
    }
}