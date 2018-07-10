function load() {

  var cuarto = $("li:nth-child(4)"),
      sexto = $("li:nth-child(6)");

  // 01
  // Seleccionar el 4to li y usando append() agregar '<ul><li><a href="#">link 4.a</a></li></ul>'
  $(cuarto).append('<ul><li><a href="#">link 4.a</a></li></ul>');

  // 02
  // Seleccionar el 4to li y usando before() agregar '<li><a href="#">link 3.5</a></li>'
  $(cuarto).before('<li><a href="#">link 3.5</a></li>');

  // 03
  // Seleccionar el 6to li y usando prepend() agregar '😎'
  $(sexto).prepend('😎');

  // 04
  // Seleccionar el 6to li y usando prepend() agregar '🙂'
  $(sexto).after('🙂');

  // before/after agregan elementos antes/después del tag de inicio/fin
  // prepend/append agregan elementos justo después/antes del tag de inicio/fin
};

window.onload = load;
