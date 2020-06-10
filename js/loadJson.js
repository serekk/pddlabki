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
    }

    $('#myTable')
        .trigger('addRows', [$row, resort]);
}

function loadFile() {
    var input, file, fr

    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
        return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
        alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
        alert("Please select a file before clicking 'Load'");
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
