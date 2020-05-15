//obsługa tablesorter
$(function () {
    $("#myTable").tablesorter({
        theme: 'blue',
        headers: {
            '.kodTowaru, .stawkaVAT, .kategoriaTowarowa, .opcjeTowaru, .zdjecie, .usun, .edytuj': {
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


function productDelete(col) {
    $(col).parents("tr").remove();
    var usersTable = $(".tablesorter");
    usersTable.trigger("update")
    .trigger("sorton", [usersTable.get(0).config.sortList])
    .trigger("appendCache")
    .trigger("applyWidgets");
}
  
function productDelete(col) {
    $(col).parents("tr").remove();
    var usersTable = $(".tablesorter");
    usersTable.trigger("update")
    .trigger("sorton", [usersTable.get(0).config.sortList])
    .trigger("appendCache")
    .trigger("applyWidgets");
}