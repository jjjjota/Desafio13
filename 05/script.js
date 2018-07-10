function load() {

  var like = $(".social__like"),
      comment = $(".social__link");

  like.click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).toggleClass('social__like--clicked');
  });

  comment.click(function(event) {
    event.stopPropagation();
    event.preventDefault();

    var alt = $(this).parentsUntil('.meals__meal').children('img').attr('alt');
    alert(alt);
  });
};

window.onload = load;
