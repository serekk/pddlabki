$(window).on('show.bs.modal', function () {
    updateModelTable();
});

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

const inputHandler = function () {
    let newQuantity = $(this).val();
    let itemName = $(this).parent().parent().find("td:nth-child(1)").text();

    let currentCart = localStorage.getItem('koszyk');
    currentCart = JSON.parse(currentCart)
    let totalPrice = 0;
    
    currentCart.forEach(function (item, i) {
        if(item.name == itemName){
            item.quantity = newQuantity;
        }
        totalPrice += item.quantity * item.price;
    })

    var collectedData = JSON.stringify(currentCart);
    localStorage.setItem('koszyk', collectedData);
    $(this).parent().parent().find("td:nth-child(4)").html((currentCart.find(item => item.name === itemName).price * currentCart.find(item => item.name === itemName).quantity).toFixed(2)  + " PLN");
    document.getElementById("totalPrice").innerHTML = "koszt całkowity: " + totalPrice.toFixed(2) + " PLN";
}

function productAdd(row) {
    let nazwaTowaru = $row.find("td:nth-child(1)").text();
    let cenaBrutto = $row.find("td:nth-child(5)").text();
    let currentCart = localStorage.getItem('koszyk');

    currentCart = JSON.parse(currentCart)
    currentCart = currentCart || [];

    let wasInCart = false;
    let cartEntry = {
        name: nazwaTowaru,
        price: cenaBrutto,
        quantity: 1,
    };

    for (var product of currentCart) {
        if (product.name == cartEntry.name) {
            product.quantity += 1;
            wasInCart = true;
            break;
        }
    }

    if (!wasInCart) {
        currentCart.push(cartEntry);
    }

    var collectedData = JSON.stringify(currentCart);
    localStorage.setItem('koszyk', collectedData);

    if (!wasInCart) {
        alert("dodano " + nazwaTowaru + " do koszyka");
    } else {
        alert("produkt " + nazwaTowaru + " już znajdował się w koszyku, dodano jedną sztukę produktu");
    }
}

function modalBuy() {
    localStorage.removeItem('koszyk');
    $('#cartModal').modal('hide');
    alert("usunięto koszyk");
}

function updateModelTable() {
    let currentCart = localStorage.getItem('koszyk');
    currentCart = JSON.parse(currentCart)
    currentCart = currentCart || [];
    let totalPrice = 0;
    let table = "";
    currentCart.forEach(function (item, i) {
        table += "<tr>" + "<td>" + item.name + "</td>" +
            "<td>" + item.price + " PLN" + "</td>" +
            "<td>" + "<input type=\"number\" min=\"1\" style=\"width: 50px\" id=\"itemQuantity\" value=\"" + item.quantity + "\">" + "</td>" +
            "<td>" + item.quantity * item.price + " PLN" + "</td>" + "</tr>";
        totalPrice += item.quantity * item.price;
    })

    let selectedShippingOption = document.getElementById('modalShippingOptions');
    totalPrice += parseFloat(selectedShippingOption.value);
    document.getElementById("modalTbody").innerHTML = table;
    document.getElementById("totalPrice").innerHTML = "koszt całkowity: " + totalPrice.toFixed(2) + " PLN";

    document.querySelectorAll('#itemQuantity').forEach(item => {
        item.addEventListener('input', inputHandler)
    })

}

function updateSelectedShippingOption() {
    let currentCart = localStorage.getItem('koszyk');
    currentCart = JSON.parse(currentCart)
    currentCart = currentCart || [];
    let totalPrice = 0;

    currentCart.forEach(function (item, i) {
        totalPrice += item.quantity * item.price;
    })

    let selectedShippingOption = document.getElementById('modalShippingOptions');
    totalPrice += parseFloat(selectedShippingOption.value);
    document.getElementById("totalPrice").innerHTML = "koszt całkowity: " + totalPrice.toFixed(2) + " PLN";

    document.querySelectorAll('#itemQuantity').forEach(item => {
        item.addEventListener('input', inputHandler)
    })

}