
// global array to display products

var catalog = [];

function fetchData(){
    // get data from the server
    // catalog = [
    //     {code:'001',
    //     name:'Short Sword',
    //     description:'A short and versatile sword.',
    //     price:800.00,
    //     category:'Weapons',
    //     image:'https://vignette.wikia.nocookie.net/darksouls/images/4/4e/Shortsword_%28DSIII%29.png/revision/latest/top-crop/width/360/height/450?cb=20160612043504'
    //     },
    //     {code:'002',
    //     name:'Knight Helmet',
    //     description:'A typical helmet worn by Knights.',
    //     price:1200.00,
    //     category:'Armor',
    //     image:'https://vignette.wikia.nocookie.net/darksouls/images/1/1f/Knight_Helm_%28DSIII%29.png/revision/latest?cb=20160614203638'
    //     },
    //     {code:'003',
    //     name:'Fire Bomb',
    //     description:'An explosive device.',
    //     price:60.00,
    //     category:'Tools',
    //     image:'https://vignette.wikia.nocookie.net/darksouls/images/d/d9/Firebomb_%28DSIII%29.png/revision/latest?cb=20160613233759'
    //     },
    // ]


    $.ajax({
        url:'https://restclass.azurewebsites.net/api/points',
        type:'GET',
        success: function(allitems){
            console.log(allitems);
            // travel the array
            // check my user
            // push my items into the array
            for(var i=0;i<allitems.length;i++){
                var item=allitems[i];
                catalog.push(item);
            }
            displayCatalog();
        },
        error:function(details){
            console.log("Error getting data", details);
        }
    });

}


function displayCatalog(){
    //travel array with a For loop
    //get each item
    //display each item on html

    for(i=0;i<catalog.length;i++){
        var item=catalog[i];

        var syntax=`
            <div class="item" id="${item.code}">
                <img src="${item.image}">
                <h4>${item.name}</h4>
                <h6 class="itemPrice">$${item.price}.00</h6>
                <p>${item.category}</p>
                <p>${item.description}</p>
                <button class="btn btn-primary">Add to Cart</button>
            </div>
        `;
        $(".catalog").append(syntax);
    }
}


function init(){
    console.log("Catalog Page!")
    fetchData();
    displayCatalog();
}

window.onload=init;