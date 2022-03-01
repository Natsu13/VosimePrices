window.totalAmount = 0;
window.pizzaName = "";
function loadPrices(){
    $(".ingredients-item").each(function(){
        if($(this).data("jsed") === true) return;
        var n = $(this).find(".ingredients-item--text").text().trim();
        if(prices[n] != undefined) {
            $(this).data("jsed", true);
            $(this).find(".ingredients-item--subtext").html($(this).find(".ingredients-item--subtext").text()+" <small>("+prices[n]+" Kč)</small>");
        }        
    });
}
function reloadPrice(){
    if(window.totalAmount == 0) $(".modal-pizza--main-headline").text(window.pizzaName);
    else $(".modal-pizza--main-headline").text(window.pizzaName + " ("+window.totalAmount+" Kč)");
}
$("body").on("click", ".modal-pizza--main--header--item", function(){ 
    loadPrices();
});
$("body").on("click", ".ingredients-item--amount--icon", function(){ 
    var name = $(this).parents(".ingredients-item").find(".ingredients-item--text").text().trim();
    if($(this).next().length == 0) { //+
        window.totalAmount += prices[name];
    }else{ //+
        window.totalAmount -= prices[name];
    }
    console.log(window.totalAmount);
    reloadPrice();
});
var prices = {'Ananas': 20, 'Cibule': 15, 'Česnek': 15, 'Feferony': 15, 'Jalapeño': 15, 'Kukuřice': 15, 'Olivy': 20, 'Oregano': 0, 'Paprika': 15, 'Pórek': 15, 'Rajče': 20, 'Špenát': 15, 'Žampiony': 15,"Balkánský sýr": 15,"Camembert": 15,"Gran Moravia": 20,"Cheddar": 25,"Mozzarella": 25,"Niva": 15,"Tvarůžky": 30,"Uzený eidam": 15,"Anglická slanina": 25,"Klobása": 25,"Kuřecí maso": 30,"Paprikový salám": 20,"Šunka": 25,"Vysočina": 15,"BBQ omáčka (zig-zag)": 15,"Čedarová omáčka (zig-zag)": 30,"Hranolky": 20,"Kari": 0,"Sriracha omáčka (zig-zag)": 15,"Vejce": 15};
$("body").on("click", ".is-button", function(){
    window.totalAmount = 0;
    window.pizzaName = "";
    setTimeout(function() {
        window.pizzaName = $(".modal-pizza--main-headline").text();
        loadPrices();
    }, 200);
});
$("body").on("click", ".pizza-edge--item", function() {
    /*
    //Bohužel se okraje nedají odečíst od zrušených surovin!
    if($(this).text().trim() == "Plněný sýrem +30 Kč"){
        window.totalAmount += 30;
    }else{
        window.totalAmount -= 30;
    }
    reloadPrice();
    */
});
