// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-sleep").on("click", function (event) {
    let id = $(this).data("id");
    let newBurger = $(this).data("newBurger");

    let newDevoured = {
      devoured: newBurger,
    };

    // Send the PUT request.
    $.ajax("/api/burgers" + id, {
      type: "PUT",
      data: newDevoured,
    }).then(function () {
      console.log("changed devoured to", newDevoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-burger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
