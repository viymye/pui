function getImage(productname) {
  if (productname=="Dog Harness") {
    return "images/dogharness.png"
  }
  else if (productname=="Cat Harness") {
    return "images/catharness.png"
  }
  else if (productname=="Cat Backpack") {
    return "images/catbackpack.png"
  }
  else if (productname=="Food storage attachment to harness") {
    return "images/foodbowl.png"
  }
  else if (productname=="Water storage attachment to harness") {
    return "images/waterbowl.png"
  }
  else if (productname=="Dog/Cat GPS tracker collar") {
    return "images/gpscollar.png"
  }
}

$(document).ready(function() {

  if (localStorage.cart==undefined) {
    var cart = {};
    cart.products = [];

    localStorage.setItem('cart', JSON.stringify(cart));

  }
  else {
      var cart = JSON.parse(localStorage.getItem('cart'));
      var totalprice = 0;
      for (var i=0; i < cart.products.length; i++) {
        product = cart.products[i];
        image = getImage(product.name);
        totalprice += Number(product.price);
        $("#cartitems").append("<div class='card' id='item"+i+"'><div class='removeitem'>✕</div><img style='width:65px;vertical-align:middle;' src='"+image+"'><div class='alignleft'><div id='cpname'>"+product.name+"</div><div id='cpcolor'>Color: "+product.color+"</div><div id='cpsize'>Size: "+product.size+"</div></div><div class='rightalign'><div id='cpprice'>$"+product.price+"</div></div></div>");
        $("#totalp").html("<p class='productcategory'>Total</p><h2 id='totalprice'>$"+totalprice+"</h2>");
      }
  }

  $( ".removeitem" ).click(function() {
    var item = $(this).parent();
    // var itemid = item.attr('id').replace('item','');
    var itemid = item.index()-1;
    console.log(item);
    console.log(itemid);
    item.remove();
    cart.products.splice(itemid, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    $("#navcart span").text(cart.products.length);
    if (cart.products.length==0) {
      $(".arrowbtn").css("visibility", "hidden");
      $("h1").css("visibility", "hidden");
      $("#totalp").css("display", "none");
      $("#emptycart").append("<img src='images/sadcart.png' width='100px'><br><br>");
      $("#emptycart").append("Your cart is empty!");
    }
    else {
      totalprice = 0;
      for (var i=0; i < cart.products.length; i++) {
        product = cart.products[i];
        totalprice += Number(product.price);
        $("#totalp").html("<p class='productcategory'>Total</p><h2 id='totalprice'>$"+totalprice+"</h2>");
      }
    }
  });


});
