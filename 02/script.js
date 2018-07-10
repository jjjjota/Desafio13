function load() {

  // 01
  // Seleccionar el 5to hijo de body (4to article) y el 4to li dentro de éste.
  $("article:nth-child(5) li:nth-child(4) a").text('Pinterest').attr('href', 'http://pinterest.com');

  // 02
  // Al hacer click sobre un a, si href='#' entonces bloquear su evento por defecto.
  $("a").click(function(event) {
    if ($(this).attr('href') == '#') {
      event.preventDefault();
    };
  });

  // 03
  // Seleccionar todos los h2 hijos directos de la clase header__main y duplicarles el tamaño.
  $(".header__main > h2").css('font-size', '2em');

};

window.onload = load;
