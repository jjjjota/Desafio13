function load() {

  // 01: Cuando se le haga click al botón con clase .add_name guardar el retorno del prompt
  $(".add_name").on('click', function() {
    var nombre = prompt('Escribe un nombre:', 'Mojo Jojo');

    // 02: Agregar un li con la variable nombre a la clase .names
    if (nombre) {
      $(".names").append(`<li><span><a class="remove_name" href="#">${ nombre }</a></span></li>`);
    };
  });

  $("ul").on('click', 'a', function(event) {
    // 03: Prevenir el evento por default
    event.preventDefault();

    // 04: Eliminar el elemento li
    $(this).parentsUntil("ul").remove();
  });

};

window.onload = load;
