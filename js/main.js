function strawberrypic() {
  document.getElementsByClassName('product col-7')[0].style.backgroundImage = "url('images/dogharnessstrawberry.png')";
}

function blackberrypic() {
  document.getElementsByClassName('product col-7')[0].style.backgroundImage = "url('images/dogharnessblackberry.png')";
}

function crazyberrypic() {
  document.getElementsByClassName('product col-7')[0].style.backgroundImage = "url('images/dogharnesscrazyberry.png')";
}

function fireorangepic() {
  document.getElementsByClassName('product col-7')[0].style.backgroundImage = "url('images/dogharnessfireorange.png')";
}

function findSize() {
  var neck = document.getElementById('neck').value;
  var neckunits = document.getElementById('neckunits').value;
  var girth = document.getElementById('girth').value;
  var girthunits = document.getElementById('girthunits').value;
  var rec = "You should consider custom-made products for your strangely sized pet."
  var error = true

  if (neckunits == "in") {
    neck = neck*2.54;
  }

  if (girthunits == "in") {
    girth = girth*2.54;
  }

  if (neck>23 && neck<33 && girth>30 && girth<44) {
    rec = "Tiny";
    error = false;
  } else if (neck>30 && neck<50 && girth>41 && girth<56) {
    rec = "Small";
    error = false;
  } else if (neck>40 && neck<63 && girth>46 && girth<71) {
    rec = "Medium";
    error = false;
  } else if (neck>40 && neck<89 && girth>61 && girth<112) {
    rec = "Large";
    error = false;
  } else if (neck=="" || girth=="") {
    rec = "Fill in both values above to receive a size recommendation!";
  }

  if (error===false) {
    document.getElementById("recomm").innerHTML = "Recommended size:";
  }
  document.getElementById("sizeresults").innerHTML = rec;

}





function Product(name, price, size, color) {
  this.name = name;
  this.price = price;
  this.size = size;
  this.color = color;
}


function addToCart(product) {
    // Retrieve the cart object from local storage
    if (localStorage && localStorage.getItem('cart')) {
        var cart = JSON.parse(localStorage.getItem('cart'));

        cart.products.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));
    }
    $("#navcart span").text(cart.products.length);
}

function clearCart() {
  localStorage.clear();

  var cart = {};
  cart.products = [];

  localStorage.setItem('cart', JSON.stringify(cart));
}


$(document).ready(function() {

  if (localStorage.cart==undefined) {
    var cart = {};
    cart.products = [];

    localStorage.setItem('cart', JSON.stringify(cart));
  }
  else {
      var cart = JSON.parse(localStorage.getItem('cart'));
      $("#cartnum").text(cart.products.length);
      $("#cartnum").css("visibility", "visible");
  }

  if (cart.products.length==0) {
    $(".arrowbtn").css("visibility", "hidden");
    $("#cartitems h1").css("display", "none");
    $("#totalp").css("display", "none");
    $("#emptycart").append("<img src='images/sadcart.png' width='100px'><br><br>");
    $("#emptycart").append("Your cart is empty!");
  }

  $('button').on('click', function(e) {
      var errors = false;

      var name = $(".productname").text();

      var price = $(".productprice").text().replace("$", "");

      if ($('input[name=size]:checked').val() == undefined) {
        $('#sizeerror').text('(Please pick a size)')
        errors = true;
      }
      else {
        var size = $('input[name=size]:checked').val()
        $('#sizeerror').text('')
        errors = false;
      }

      if ($('input[name=color]:checked').val() == undefined) {
        $('#colorerror').text('(Please choose a color)')
        errors = true;
      }
      else {
        var color = $('input[name=color]:checked').val()
        $('#sizeerror').text('')
        errors = false;
      }

      var product = new Product(name, price, size, color);

      if (errors === false) {
        addToCart(product);
      }
  });

});
