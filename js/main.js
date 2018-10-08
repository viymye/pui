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
