// start category

var Info = "<table class=table table-bordered table-responsive table-hover><thead><th>Items</th><th>Price</th></thead><tbody><tr><td>{{item}}</td><td>{{price}}</td></tr><tr><td>{{item}}</td><td>{{price}}</td></tr><tr><td>{{item}}</td><td>{{price}}</td></tr></tbody></table>";

var template = Handlebars.compile(Info);

var menu = template({
    item: "qwe",
    price: "234"
});

var menu1 = template({
    item: "abc",
    price: "234"
});

var menu2 = template({
    item: "str",
    price: "234"
});

var menu3 = template({
    item: "tyu",
    price: "234"
});

document.getElementById("menu-template").innerHTML += menu;
document.getElementById("menu-template1").innerHTML += menu1;
document.getElementById("menu-template2").innerHTML += menu2;
document.getElementById("menu-template3").innerHTML += menu3;

//end category 

//start toggle

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

