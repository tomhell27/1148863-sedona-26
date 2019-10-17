    var section = document.querySelector(".find-hotel-sedona")
    var find = document.querySelector(".find-title");
    var popup = section.querySelector("form");
    var hotel = document.querySelector(".find-hotel-form");
    var input = section.querySelectorAll("input[type=text]");
    var button = section.querySelector(".find")

    document.addEventListener("DOMContentLoaded", function () {
      if (typeof (popup) != "underfined" && popup != null) {
        popup.classList.remove("js-not");
      }
    });

    if (typeof (find) != "underfined" && find != null) {
      find.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.toggle("show-must-go-on");
      });
    }

 button.addEventListener("click", function (evt) {
    if (!input.value) { 
      hotel.classList.add("error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("input", input.value);
      }
    }
  });