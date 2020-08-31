
// AJAX
//     https://restclass.azurewebsites.net/api/points
//
//          http verbs
//     POST: create/send data
//     GET: get info
//     PUT: update existing elements
//     PATCH: update part of existing element
//     DELETE: remove an existing element


// Object Constructor for Item
class Item{
    constructor(code, name, description, price, category, image){
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.image = image;
        this.user = "Gabe"
    }
}


function register(){
    var itemCode = $("#code").val();
    var itemName = $("#name").val();
    var itemDescription = $("#description").val();
    var itemPrice = $("#price").val();
    var itemCategory = $("#category").val();
    var itemImage = $("#image").val();

    var item = new Item(itemCode, itemName, itemDescription, itemPrice, itemCategory, itemImage)

    // create the AJAX request

    $.ajax({
        url: 'https://restclass.azurewebsites.net/api/points',
        type: 'POST',
        data: JSON.stringify(item),
        contentType: 'application/json',
        success: function(response){
            console.log("Success!", response);
        },
        error: function(errorDetails){
            console.log("Something's fucky...", errorDetails);
        }
    });

}

function init(){
    console.log("Admin Page!") 
    $('#btn-register').on('click', register); 
}

window.onload=init;
