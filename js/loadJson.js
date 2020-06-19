function addToTable(list) {
    for (const object of list) {
        let selectedOptions = "";
        
        for (selected of object.opcjeTowaru) {
            selectedOptions += selected + " ";
        }

        var row = `
    <tr>
        <td>` + object.nazwaTowaru + `</td>
        <td>` + object.kodTowaru + `</td>
        <td>` + object.cena.netto + `</td>
        <td>` + object.cena.vat + `</td>
        <td>` + object.cena.brutto + `</td>
        <td>` + object.kategoriaTowarowa + `</td>
        <td>` + selectedOptions + `</td>
        <td>` + object.ocenaTowaru + `</td>
        <td>` + object.zdjecie + `</td>
        <td>` + '<button type="button" class="btn btn-info" onclick="productDelete(this)">❌</button>' + `</td>
        <td>` + '<button type="button" class="btn btn-info" onclick="productEdit(this)">📝</button>' + `</td>
        <td>` + '<button type="button" class="btn btn-info" onclick="productAdd(this)">➕</button>' + `</td>
    </tr>`;
        $row = $(row),
            resort = true;
        $('#myTable')
            .find('tbody').append($row)
            .trigger('addRows', [$row, resort]);
    }

    $('#myTable')
        .trigger('addRows', [$row, resort]);
}

function loadFile() {
    var input, file, fr

    input = document.getElementById('fileinput');
    if (!input.files) {
        alert("twoja przeglądarka nie obsługuje wybierania plików.");
    }
    else if (!input.files[0]) {
        alert("wybierz jakiś plik przed wczytaniem go");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }

    function receivedText(e) {
        let lines = e.target.result;
        list = JSON.parse(lines);
        addToTable(list);
    }

}
