//Opdracht 1 clicking game
// self executing function here
(function () {
  let count = 0;
  // your page initialization code here
  // the DOM will be available here
  var button = document.getElementById("juice");
  button.addEventListener("click", function (e) {
    count++;
    document.getElementById("count").innerHTML = count;
    if (count % 10 == 0) {
      var rectangle = document.getElementById("rectangle");
      var currentWidht = rectangle.offsetWidth;
      currentWidht -= 10;
      var currentHeight = rectangle.offsetHeight;
      currentHeight -= 10;
      rectangle.style.width = currentWidht + "px";
      rectangle.style.height = currentHeight + "px";

    }
  }, false);

  //var classname = document.getElementsByClassName("remove");

})();


// Opdracht 2 boodschappenlijstje waarin dingen plus waarde kunnen worden toegevoegd en verwijdert
(function () {
  let id = 1;

  var button = document.getElementById("add");
  button.addEventListener("click", function (e) {
    var title = document.getElementById('title').value;
    var amount = document.getElementById('amount').value;
    var ul = document.getElementById("grocery-list");
    var li = document.createElement("li");
    //Hierboven worden een aantal dingen opgehaald uit de dom zodat we ze kunnen gebruiken op getallen en woorden te plaatsen 
    var button = "<button class='remove' data-id='" + id + "'>verwijder</button>";
    li.innerHTML = title + " " + amount + " " + button;
    li.setAttribute("id", id);
    ul.appendChild(li);
    id++;
  }, false);

  //  var classname = document.getElementsByClassName("remove");

  var base = document.querySelector('#grocery-list');
  var selector = '.remove';

  base.addEventListener('click', function (event) {
    let closest = event.target.closest(selector);
    if (closest && base.contains(closest)) {
      var dataId = closest.getAttribute("data-id");
      var elem = document.getElementById(dataId);
      elem.parentNode.removeChild(elem);

    }
  });


})();