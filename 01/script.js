function load() {

  $(".images__image").on('click', function() {
    var alt = $(this).attr('alt');
    alert(alt);
  });

};

window.onload = load;
